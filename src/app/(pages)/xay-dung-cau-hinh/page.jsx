"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ConfigItem } from "@/components/_personal";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "react-hot-toast";
import { getDataCate } from "@/service/Api-service/apiCategorys";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTotalPrice,
  resetTotalPrice,
} from "@/app/_utils/store/product.slice";
import { SendData } from "@/service/Api-service/apiChatbox";

export default function BuildConfig() {
  const [configList, setConfigList] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [purpose, setPurpose] = useState("");
  const [showGamingInput, setShowGamingInput] = useState(false);
  const [showVideoEditorInput, setShowVideoEditorInput] = useState(false);
  const totalPrice = useSelector((state) => state.product.totalPrice);
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const handleProductSelected = (item, action) => {
    if (action === "add") {
      setSelectedItem((prevTotal) => [
        ...prevTotal,
        {
          ...item,
          quantityBuy: 1,
        },
      ]);
    } else if (action === "remove") {
      setSelectedItem((prevTotal) =>
        prevTotal.filter((i) => i.productId !== item.productId)
      );
    }
  };

  const handlePriceChange = (price, action, quantityItem = 1) => {
    if (isNaN(price) || isNaN(quantityItem)) {
      return;
    }
    if (action === "add") {
      dispatch(updateTotalPrice(price * quantityItem));
    } else if (action === "remove") {
      dispatch(updateTotalPrice(-price * quantityItem));
    }
  };

  const handleQuantityChange = (item, quantity) => {
    setSelectedItem(
      selectedItem.map((i) =>
        i.productId === item.productId
          ? {
              ...i,
              quantityBuy: quantity,
            }
          : i
      )
    );
  };

  const onRefresh = () => {
    dispatch(resetTotalPrice());
    setRefreshFlag((prev) => !prev);
    toast.success("Configuration refresh successful!");
  };

  const onOk = () => {
    const existingItemsStr = Cookies.get("selectedItem");

    let existingItems = [];

    if (existingItemsStr && existingItemsStr !== "undefined") {
      try {
        existingItems = JSON.parse(decodeURIComponent(existingItemsStr));
      } catch (e) {
        console.error("Error parsing JSON from cookie:", e);
      }
    }

    const updatedItems = selectedItem.map((item) => {
      const existingItem = existingItems.find(
        (i) => i.productId === item.productId
      );
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
        return existingItem;
      } else {
        return { ...item, quantity: item.quantity || 1 };
      }
    });

    existingItems = [
      ...existingItems.filter(
        (i) => !updatedItems.find((u) => u.productId === i.productId)
      ),
      ...updatedItems,
    ];

    try {
      const selectedItemStr = JSON.stringify(existingItems);
      Cookies.set("selectedItem", selectedItemStr, { expires: 7 });
      toast.success("All products have been added to the cart!");
    } catch (e) {
      console.error("Error setting cookie:", e);
      toast.error("Add to cart fail!");
    }
  };

  const callChatGPT = async () => {
    setShowVideoEditorInput(false);
    setShowGamingInput(false);
    const mappedItems = selectedItem.map((item) => ({
      name: item.productName,
      description: item.description,
      categoryName: item.categoryName,
    }));

    const data = {
      purpose: purpose,
      test: inputValue,
      products: mappedItems,
    };
    try {
      const res = await SendData(data);
      const content = res?.result;
      setData(typeof content === "string" ? content : JSON.stringify(content));
      if (res.statusCode === 200 || res.statusCode === 201) {
        toast.success(res.message);
      } else {
        toast.error(
          <ul>
            {res.errorMessages?.length
              ? res.errorMessages.map((i, idx) => <li key={idx}>{i}</li>)
              : res.errorMessages}
          </ul>
        );
      }
    } catch (error) {
      toast.error("Thất bại");
    }
  };

  const formatCurrency = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const fetchData = async () => {
    try {
      const res = await getDataCate();
      const sortedData = res.result.sort((a, b) => a.categoryId - b.categoryId);
      setConfigList(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(
      updateTotalPrice(
        selectedItem.reduce(
          (total, item) => total + item.price * item.quantityBuy,
          0
        )
      )
    );
  }, [selectedItem]);

  const handleGamingInputClick = () => {
    setShowGamingInput(true);
    setPurpose("Gaming");
    setInputValue("");
    setShowVideoEditorInput(false);
  };

  const handleVideoEditorInputClick = () => {
    setShowVideoEditorInput(true);
    setPurpose("VideoEditor");
    setInputValue("");
    setShowGamingInput(false);
  };

  const renderHTML = (rawHTML) =>
    rawHTML
      .replace(/\n/g, "<br/>")
      .replace(/\|/g, "&#124;")
      .replace(/\*\*/g, "<strong>")
      .replace(/(https:\/\/\S+)/g, '<a href="$1" target="_blank">$1</a>');

  return (
    <div className="container flex flex-col p-5 lg:py-10 gap-y-4">
      <h2 className="text-[#026db5] text-2xl font-bold w-full text-center py-4">
        Build Configuration PC
      </h2>
      <div className="w-full flex flex-col gap-y-4 xl:gap-y-8">
        <div className="flex w-full items-center justify-start">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-500 uppercase">
                Refresh configuration
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to refresh all configurations?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  All configurations you added will be refreshed. Please confirm
                  to complete the operation.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-blue-500" onClick={onRefresh}>
                  Agree
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          {configList.map((item, index) => (
            <ConfigItem
              item={item}
              key={index}
              onPriceChange={handlePriceChange}
              onQuantityChange={handleQuantityChange}
              onRefresh={refreshFlag}
              onSelected={handleProductSelected}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-between py-5">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-500 uppercase">
                Add all to cart
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure to add them all?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  All products will be added to the cart. Please confirm to
                  complete the operation.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-blue-500" onClick={onOk}>
                  Agree
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <h4 className="uppercase">
            Total Price: {formatCurrency(totalPrice)}
          </h4>
        </div>
        <div className="w-full grid gap-4">
          <div className="flex justify-between gap-x-2">
            <Button
              className="bg-red-600 hover:bg-red-500 uppercase"
              onClick={handleGamingInputClick}
            >
              Gaming
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-500 uppercase"
              onClick={handleVideoEditorInputClick}
            >
              Video Editing
            </Button>
          </div>
          {showGamingInput && (
            <div>
              <input
                type="text"
                className="border rounded-md px-3 py-2"
                placeholder="Enter your favorite game"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button className="bg-green-600 hover:bg-green-500 uppercase" onClick={callChatGPT}>PREVIEW</Button>
              </div>
          )}
          {showVideoEditorInput && (
            <div>
              <input
                type="text"
                className="border rounded-md px-3 py-2"
                placeholder="Enter the software you use for video editing"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button className="bg-green-600 hover:bg-green-500 uppercase" onClick={callChatGPT}>PREVIEW</Button>
            </div>
          )}
        </div>
        {data && data !== 'null' && (
          <div
            dangerouslySetInnerHTML={{
              __html: renderHTML(data),
            }}
          />
        )}
      </div>
    </div>
  );
}

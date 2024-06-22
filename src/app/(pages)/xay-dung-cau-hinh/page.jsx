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
import { toast } from "sonner";
import { getDataCate } from "@/service/Api-service/apiCategorys";

export default function BuildConfig() {
  const [configList, setConfigList] = useState([]);
  
  const [refreshFlag, setRefreshFlag] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceChange = (price, action) => {
    if (action === 'add') {
      setTotalPrice(prevTotal => prevTotal + price);
    } else if (action === 'remove') {
      setTotalPrice(prevTotal => prevTotal - price);
    }
  };
  const onRefresh = () => {
    setTotalPrice(0);
    setRefreshFlag((prev) => !prev);
    toast("Configuration refresh successful!");
  };
  const onOk = () => {
    toast("All products have been added to the cart!");
  };
  const formatCurrency = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };
  const fetchData = async () => {
    try {
      const res = await getDataCate();
      const sortedData = res.result.sort((a, b) => a.categoryId - b.categoryId);
      setConfigList(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
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
                onRefresh={refreshFlag} 
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
                All products will be added to the cart. Please confirm
                to complete the operation.
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

          <div className="flex items-center gap-x-2 ">
            <strong className="uppercase">Total payment : </strong>
            <span className="text-red-600 text-2xl font-semibold">{formatCurrency(totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

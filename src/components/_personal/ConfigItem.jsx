"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { ProductItem, ProductSelectedItem } from ".";
import Filter from "./Filter";

export default function ConfigItem({ item , onPriceChange ,onRefresh }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selected, setSelected] = useState(false);
  const handleProductSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
    const action = 'add';
    onPriceChange(selectedItem?.price , action);
  };
  const handleFilterSelected = (selectedItem) => {
    console.log(selectedItem);
    setSelectedFilter(selectedItem);
  };
  
  const handleRemove = () => {
    const action = 'remove';
    onPriceChange(selectedItem?.price , action);
    setSelectedItem(null);
  };
  const onRefreshRef = useRef();

  useEffect(() => {
    onRefreshRef.current = () => {
      setSelectedItem(null);
      setSelectedFilter(null);
    };
  }, []);

  useEffect(() => {
    if (onRefresh) {
      onRefreshRef.current();
    }
  }, [onRefresh]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getData(); 
  //       setDataHome(res.result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();

  //   },[]);
//  console.log(item);
  return (
    <Collapsible open={true}>
      <div className="w-full flex flex-col md:flex-row items-center justify-between float-left border p-4 rounded-sm">
        <CollapsibleTrigger asChild>
          <div className="w-full md:w-1/5 text-center md:text-left py-2 px-3 font-bold text-[#222] text-sm uppercase cursor-pointer">
            {item?.categoryName}
          </div>
        </CollapsibleTrigger>
        <div className="w-full md:w-4/5 flex items-center justify-center md:justify-end py-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-500 w-full md:w-auto">
                Select
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full sm:w-3/5 max-w-[1200px] h-auto min-h-[350px] lg:min-h-[450px] 2xl:min-h-[600px] flex flex-col">
              <DialogHeader>
                <DialogTitle>Search products</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center space-x-2">
                <div className="w-full bg-[#026db5] p-2 flex flex-col lg:flex-row items-center lg:justify-start gap-2">
                  <div className="relative items-center min-w-[280px]">
                    <Input placeholder="Enter the product name you are looking for..." />
                    <Search
                      color="#026db5"
                      className="absolute bottom-2 right-2 cursor-pointer"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select search" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sort</SelectLabel>
                        <SelectItem value="newest">Latest</SelectItem>
                        <SelectItem value="expensive">
                        Price high to low
                        </SelectItem>
                        <SelectItem value="cheap">Price low to high</SelectItem>
                        <SelectItem value="alphabet">From A -&gt; Z</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full flex gap-x-3 max-h-[450px] lg:max-h-[500px] 2xl:max-h-[550px] overflow-y-scroll">
                  <div className="w-1/4">
                    <Filter id={item?.categoryId}  onFilterSelected={handleFilterSelected} />
                  </div>
                  <div className="w-3/4">
                    <ProductItem
                      id={item?.categoryId}
                      onProductSelected={handleProductSelected}
                    />
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <CollapsibleContent asChild>
        <div>
          {selectedItem ? (
            <ProductSelectedItem item={selectedItem} onRemove={handleRemove} />
          ) : (
            <div>No product is selected</div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

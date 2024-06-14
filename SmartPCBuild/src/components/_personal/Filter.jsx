"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { getData } from "@/service/Api-service/apiProducts";

export default function Filter({ item }) {
  // const [Dataproduct, setDataproduct] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getData(id);
  //       setDataproduct(res.result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  // const onSelected = (productId) => {
  //   toast("Chọn sản phẩm thành công!");
  //   onProductSelected(productId);
  // };

  return (
    <div className="w-full md:w-1/4 p-4 bg-white dark:bg-zinc-800 border-r border-gray-300 px-1.5">
    <h2 className="font-bold mb-4">Lọc sản phẩm theo</h2>
    <div className="mb-4">
      <h3 className="font-semibold">Hãng sản xuất</h3>
      <div className="flex flex-col">
        <label><input type="checkbox" className="mr-2" /> ASUS (24)</label>
        <label><input type="checkbox" className="mr-2" /> GIGABYTE (3)</label>
        <label><input type="checkbox" className="mr-2" /> ASROCK (2)</label>
        <label><input type="checkbox" className="mr-2" /> MSI (3)</label>
      </div>
    </div>
    <hr/>
    <div className="mb-4">
      <h3 className="font-semibold">Khoảng giá</h3>
      <div className="flex flex-col">
        <label><input type="checkbox" className="mr-2" /> Dưới 2 triệu (5)</label>
        <label><input type="checkbox" className="mr-2" /> 2 triệu - 3 triệu (3)</label>
        <label><input type="checkbox" className="mr-2" /> 3 triệu - 4 triệu (5)</label>
        <label><input type="checkbox" className="mr-2" /> 4 triệu - 5 triệu (3)</label>
        <label><input type="checkbox" className="mr-2" /> 5 triệu - 7 triệu (1)</label>
        <label><input type="checkbox" className="mr-2" /> 7 triệu - 9 triệu (6)</label>
        <label><input type="checkbox" className="mr-2" /> 9 triệu - 12 triệu (6)</label>
        <label><input type="checkbox" className="mr-2" /> 12 triệu - 15 triệu (2)</label>
        <label><input type="checkbox" className="mr-2" /> Trên 15 triệu (4)</label>
      </div>
    </div>
    <hr/>

    <div className="mb-4">
      <h3 className="font-semibold">Socket</h3>
      <div className="flex flex-col">
        <label><input type="checkbox" className="mr-2" /> AMD AM4 (15)</label>
        <label><input type="checkbox" className="mr-2" /> AMD AM5 (17)</label>
      </div>
    </div>
    <hr/>

    <div className="mb-4">
      <h3 className="font-semibold">Form Factor</h3>
      <div className="flex flex-col">
        <label><input type="checkbox" className="mr-2" /> Mini ITX (1)</label>
        <label><input type="checkbox" className="mr-2" /> ATX (17)</label>
        <label><input type="checkbox" className="mr-2" /> M-ATX (11)</label>
        <label><input type="checkbox" className="mr-2" /> E-ATX (2)</label>
      </div>
    </div>
    <hr/>
    <div className="mb-4">
      <h3 className="font-semibold">Chipset</h3>
      <div className="flex flex-col">
        <label><input type="checkbox" className="mr-2" /> AMD A320 (AM4) (2)</label>
        <label><input type="checkbox" className="mr-2" /> AMD B550 (AM4) (6)</label>
        <label><input type="checkbox" className="mr-2" /> AMD B450 (AM4) (3)</label>
        <label><input type="checkbox" className="mr-2" /> AMD X570 (AM4) (3)</label>
        <label><input type="checkbox" className="mr-2" /> AMD X670 (AM5) (17)</label>
        <label><input type="checkbox" className="mr-2" /> AMD A520 (AM4) (1)</label>
      </div>
    </div>
  </div>
  
  );
}

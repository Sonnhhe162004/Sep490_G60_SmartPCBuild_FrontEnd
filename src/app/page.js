"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../src/css/style2020_zip.css"
import "../../src/css/media2020.css"
import { useEffect, useState } from "react";
import { getData } from "@/service/Api-service/apiProducts";
import { formatNumber } from "@/service/convert/convertNumber";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
export default function Home() {

  const pathname = usePathname();
  const [listCPU,setListCPU] = useState([]);
  const [listMainboard,setListMainboard] = useState([]);
  const [listRAM,setListRAM] = useState([]);
  const [listSSD,setListSSD] = useState([]);
  const [listHDD,setListHDD] = useState([]);
  const [listVGA,setListVGA] = useState([]);
  const [listPSU,setListPSU] = useState([]);
  const [listCase,setListCase] = useState([]);
  const [listColling,setListColling] = useState([]);
  const [listKeyboard,setListKeyboard] = useState([]);
  const [listMouse,setListMouse] = useState([]);
  const [listMonitor,setListMonitor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resCPU = await getData(1); 
        setListCPU(resCPU.result);
        const resMainboard = await getData(2); 
        setListMainboard(resMainboard.result);
     
        const resRAM = await getData(3); 
        setListRAM(resRAM.result);
        const resSSD = await getData(4); 
        setListSSD(resSSD.result);
        const resHDD = await getData(5); 
        setListHDD(resHDD.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    
    },[]);

  const showHeader =
    pathname === "/sign-in" || pathname === "/create-account" ? false : true;
    return (
      <>
  
    <div className="container-2019 ">
    
    
      <div id="cate-homepage-2023-com">
        <div
          className=" homepage-product-2019 d-inline-block w-100 js-category-home"
          id="boxcate-1106"
          style={{ minHeight: 400 }}
        >
          <div className="js-glee-block">
            <div className="title_box_center_2019 wow">
              <h2 className="h_title_2019">CPU</h2>
             
              <a href="/laptop-tablet-mobile" className="viewall">
                See all <i className="fal fa-long-arrow-right" />
              </a>
            </div>
          </div>
          <div className="js-glee-block">
            <div
              className="product-home custom-nav js-productslide-cate1106 owl-theme owl-loaded owl-drag"
             
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage flex"
                  
                >
  
                {listCPU.slice(0,5).map((val, index) => (
                  <div className="owl-item active" style={{ width: 236 }}>
                    <div
                      className="p-component loaded p-frame-bhmr-6m"
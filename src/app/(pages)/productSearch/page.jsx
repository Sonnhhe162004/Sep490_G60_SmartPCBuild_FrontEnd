"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../../../src/css/style2020_zip.css"
import "../../../../src/css/media2020.css"
import { useEffect, useState } from "react";
import { getData, searchProductbyDes } from "@/service/Api-service/apiProducts";
import { formatNumber } from "@/service/convert/convertNumber";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
export default function ProductSearch() {

    const pathname = usePathname();
    const [listCPU, setListCPU] = useState([]);
    const [listMainboard, setListMainboard] = useState([]);
    const [listRAM, setListRAM] = useState([]);
    const [listSSD, setListSSD] = useState([]);
    const [listHDD, setListHDD] = useState([]);
    const [listVGA, setListVGA] = useState([]);
    const [listPSU, setListPSU] = useState([]);
    const [listCase, setListCase] = useState([]);
    const [listColling, setListColling] = useState([]);
    const [listKeyboard, setListKeyboard] = useState([]);
    const [listMouse, setListMouse] = useState([]);
    const [listMonitor, setListMonitor] = useState([]);
    const [searchProduct, setSearchProduct] = useState("")
    const [cateID, setCateID] = useState("")

    const [listSearchProduct, setListSearchProduct] = useState([]);



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

    }, []);



    useEffect(() => {
        const interval = setInterval(async () => {
            const newValue = localStorage.getItem('searchProduct');
            if (newValue !== searchProduct) {
                setSearchProduct(newValue);
                const searchPro = await searchProductbyDes(newValue);
                setListSearchProduct(searchPro?.result);
            }
            // const newValuebyCate = localStorage.getItem('searchProduct');
            //   setCateID(newValuebyCate);
            //   const searchPro = await getData(cateID); 
            //   setListSearchProduct(searchPro.result);
        }, 1000); // Kiểm tra mỗi giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount

    }, [searchProduct]);

    useEffect(() => {
        const interval = setInterval(async () => {
            const newValue = localStorage.getItem('searchCate');
            if (newValue !== cateID) {
                setCateID(newValue);
                const searchPro = await getData(newValue);
                setListSearchProduct(searchPro?.result);
            }
            // const newValuebyCate = localStorage.getItem('searchProduct');
            //   setCateID(newValuebyCate);
            //   const searchPro = await getData(cateID); 
            //   setListSearchProduct(searchPro.result);
        }, 1000); // Kiểm tra mỗi giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount

    }, [cateID]);






    const showHeader =
        pathname === "/sign-in" || pathname === "/create-account" ? false : true;
    return (
        <>

            <>
                <div className="">

                    <div id="cate-homepage-2023-com">
                        <div
                            className=" homepage-product-2019 d-inline-block w-100 js-category-home"
                            id="boxcate-1106"
                            style={{ minHeight: 400 }}
                        >
                            <div className="js-glee-block">
                                <div className="title_box_center_2019 wow">
                                    <h2 className="h_title_2019">TÌM KIẾM : {searchProduct} ({(listSearchProduct?.length)} sản phẩm) </h2>

                                    <a href="/laptop-tablet-mobile" className="viewall">
                                        See all <i className="fal fa-long-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="js-glee-block">
                                <div
                                    className="product-home custom-nav js-productslide-cate1106 owl-theme owl-loaded owl-drag"

                                >
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="owl-stage-outer col-md-9" style={{ display: 'flex' }}>
                                                <div className="col-md-3" style={{ width: '20%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: '100%' }}>
                                                    
                                                    <h3 className="cpu-list-container" style={{borderBottom:'1px solid gray',paddingBottom:'6px'}}>
                                                        <span className="cpu-list-title" style={{fontSize:'16px'}}>CPU</span>
                                                    </h3>
                                                    <ul className="cpu-list" style={{listStyleType:'none',paddingLeft:0,marginTop:'30px'}}>
                                                        <li>
                                                            <input type="checkbox" />
                                                            Intel Core i5 (6)
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" />
                                                            Intel Core i7 (6)
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="owl-stage"
                                                    style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                                                >
                                                    <div style={{backgroundColor:'red',width:'100%'}}>
                                                    <div class="filter-form">
  <select style={{width:'40%'}}>
    <option value="">Tình trạng kho hàng</option>
    <option value="in-stock">In Stock</option>
    <option value="out-of-stock">Out of Stock</option>
  </select>
  <select style={{width:'40%'}}>
    <option value="">Tất cả kho</option>
    <option value="warehouse1">Warehouse 1</option>
    <option value="warehouse2">Warehouse 2</option>
  </select>
  <div style={{width:'20%'}}>Loc theo giá tiền:</div>
  <input type="text"  style={{width:'20%'}}  placeholder="15.999.000 đ" />
  <div>-</div>
  <input type="text"  style={{width:'20%'}} placeholder="117.999.000 đ" />
  <button>Lọc</button>
  
</div>

                                                    </div>
                                                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px',width:'100%'}}>

                                                    {listCPU?.map((val, index) => (
                                                        <div className="owl-item active" >
                                                            <div
                                                                className="p-component loaded p-frame-bhmr-6m"

                                                            >
                                                                <div className="p-iconLTAU811">
                                                                    <span className="bhmr-6m" />
                                                                </div>
                                                                <div className="p-img ajax-loading ajax-finished">
                                                                    <a className="hover_detail" href="product-detail" />
                                                                    <div className="a">
                                                                        <img
                                                                            src="https://hanoicomputercdn.com/media/product/250_73001_laptop_asus_vivobook_go_e1404fa_18.png"
                                                                            alt="Laptop Asus VivoBook E1404FA-NK177W (R5 7520U/16GB RAM/512GB SSD/14 FHD/Win11/Bạc)"
                                                                            width={250}
                                                                            height={250}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="align-items-center d-flex flex-wrap my-2">

                                                                    <p className="p-sku">Brand: {val.brand}</p>
                                                                </div>
                                                                <div className="p-info">
                                                                    <p className="p-name" style={{ height: '30px' }}>
                                                                        <a href="/laptop-asus-vivobook-e1404fa-nk177w-r5-7520u-16gb-ram-512gb-ssd-14-fhd-win11-bac">
                                                                            {" "}
                                                                            {val.productName}
                                                                        </a>
                                                                    </p>

                                                                    <span className="p-price">  {formatNumber(val.price)} VNĐ</span>
                                                                    <span className="p-haskmai">
                                                                        <i className="icons icon-gift" />{" "}
                                                                    </span>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>




        </>



    );




}

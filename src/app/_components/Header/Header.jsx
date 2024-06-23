"use client";
import { CategoryProductItem, SearchInput } from "@/components/_personal";
import {
  ChevronRight,
  CircleUserRound,
  LayoutGrid,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CategoryProductList, NavLinkList } from "@/app/_utils/data/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import "../Header/header.css"
export default function Header() {
  const pathname = usePathname();
 
  const showHeader =
    pathname === "/admin-login" || pathname === "/create-account" ? false : true;
  return (
    <>
    <header className={`${!showHeader && "hidden"} w-full bg-[#026db5]`}>
      <div className="flex container items-center justify-between py-2 xl:py-4 gap-x-4">
        {/* Logo */}
        <Link href={"/"}>
          {<Image
            src={"/SmartPCDoAn.png"}
            width={260}
            height={96}
            alt="logo"
            className="w-[200px] h-full max-h-20 xl:w-[260px] bg-cover bg-center"
          />}

        </Link>

        {/* Category Product */}
       
       <div className="listproduct relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>

            <h2 className="hidden lg:flex gap-2 items-center border rounded-sm p-2 px-4 bg-white cursor-pointer text-sm font-semibold">
              <LayoutGrid className="h-4 w-4 " /> List Product
            </h2>
          
    
          </DropdownMenuTrigger>

        </DropdownMenu>
        
        <div style={{display:'none'}} className="homepage-slider-2019 absolute">
      <div className="homepage-slider-left">
        <ul className="ul ul_menu_2019 boxshadowx2023" id="menu-2019">
          <li
            id="vt-1106"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/laptop-tablet-mobile" className="root">
              Laptop, Macbook, Surface
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-1087"
            className="js-hover-menu li-catcha-menu"
           
          >
            <a href="/laptop-gaming-do-hoa" className="root">
              Laptop Gaming, Đồ Họa
            </a>
          
            <span className="arrow-li-catcha-menu" />
          </li>
          <li
            id="vt-455"
            className="js-hover-menu li-catcha-menu"
          
          >
            <a href="/phu-kien" className="root">
              Phụ Kiện Laptop, PC, Mobile
            </a>
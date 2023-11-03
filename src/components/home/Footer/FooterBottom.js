import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div
      style={{ borderTopWidth: 2, borderTopColor: "#ccc" }}
      className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="fotter-media text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2023 | DETTA Shop | Đã Đăng Ký Bản Quyền |
          <span className="ml-1 mr-1 font-medium ">Thiết kế bởi </span>
          <a
            className="group-hover:text-primeColor"
            href="https://www.facebook.com/DangHoangDuong.19"
            target="_blank"
            rel="noreferrer">
            Đặng Hoàng Dương
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;

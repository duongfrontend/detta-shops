import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import {
//   bannerImgOne,
//   bannerImgTwo,
//   bannerImgThree,
// } from "../../assets/images";
import Image from "../designLayouts/Image";
import { bannerData, bannerData2 } from "./bannerData";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }>
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}>
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }>
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full bg-white media-banner-none">
        <Slider {...settings}>
          {bannerData.map((item, index) => (
            <div
              style={{ height: "500px" }}
              className="flex justify-center items-center media-banner-img">
              <img
                style={{ objectFit: "cover", width: "100%", height: "500px" }}
                src={item.imgBanner}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full bg-white media-banner-mobile-none">
        <Slider {...settings}>
          {bannerData2.map((item, index) => (
            <div
              style={{ height: "500px" }}
              className="flex justify-center items-center media-banner-img">
              <img
                style={{ objectFit: "cover", width: "100%", height: "500px" }}
                src={item.imgBanner}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Banner;

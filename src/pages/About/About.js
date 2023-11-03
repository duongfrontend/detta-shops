import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Giới Thiệu" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            DETTA Shop
          </span>{" "}
          là một trong những thương hiệu thương mại điện tử hàng đầu thế giới và
          được quốc tế công nhận vì tôn vinh bản chất của phong cách cổ điển
          trên toàn thế giới.
        </h1>
        <Link to="/san-pham">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Tiếp Tục Mua Sắm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

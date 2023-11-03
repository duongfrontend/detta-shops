import React, { useState, useRef } from "react";
import { atmData } from "./atmData";
import { Image, Modal } from "antd";
import { zalo } from "../../assets/images";
import { bidv, vp, tech, mb } from "../../assets/images";

const Atms = () => {
  // upload image

  const handleImaeChange = (e) => {
    const file = e.target.files[0];
    console.log(URL.createObjectURL(file));
  };
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [atms, setAtms] = useState("");
  return (
    <>
      <div className="media-atm row flex justify-between items-center">
        {atmData.map((item, index) => (
          <div
            onClick={() => setAtms(index)}
            className={`atmBank flex flex-col justify-center items-center cursor-pointer ${
              atms === index ? "atmBank-active" : ""
            }`}
            style={{ height: "80px" }}
            key={index}>
            <img
              width="100px"
              style={{ height: "50px", objectFit: "contain" }}
              src={item.imgAtm}
              alt="imgAtm"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      {/* bidv */}
      <div
        style={{ position: "relative" }}
        className={`row content-tabs ${atms === 0 ? "active-content" : ""}`}>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${bidv})`,
              backgroundColor: "#dadcbebc",
            }}
            className="bidvs"></div>
          <div className="content-atmBank p-4">
            <div>
              <h2 className="capitalize text-gray-700 italic mb-4">
                bạn vui lòng chuyển khoản qua
              </h2>
              <h2 className="text-gray-700">
                SỐ TÀI KHOẢN: 123456789 -{" "}
                <span style={{ color: "#4d9e9c", fontWeight: "bold" }}>
                  BIDV
                </span>
              </h2>
              <h2 className="text-gray-700 my-4">
                CHỦ TÀI KHOẢN:{" "}
                <span className="font-bold ">DANG HOANG DUONG</span>
              </h2>
              <h2 className="text-gray-700">
                CHI NHÁNH:{" "}
                <span className="font-bold">Thanh Xuân - Hà Nội</span>
              </h2>
            </div>
            <div>
              <h2 className="text-justify text-gray-700 my-4">
                Sau khi chuyển khoản xong bạn hãy chụp lại màn hình giao dịch
                gửi{" "}
                <span
                  onClick={showModal}
                  style={{
                    color: "#4d9e9c",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}>
                  TẠI ĐÂY
                </span>{" "}
                {/* <span className="mt-2 block">
                  hoặc tải ảnh giao dịch lên web để DETTA Shop ghi nhận giao
                  dịch bạn nhé
                </span> */}
              </h2>
            </div>
            {/* upload image */}
            {/* <div className="row">
              <div>
                <input type="file" onChange={handleImaeChange} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* vp */}
      <div
        style={{ position: "relative" }}
        className={`row content-tabs ${atms === 1 ? "active-content" : ""}`}>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${vp})`,
              backgroundColor: "#03964578",
            }}
            className="bidvs"></div>
          <div className="content-atmBank p-4">
            <div>
              <h2 className="capitalize text-gray-700 italic mb-4">
                bạn vui lòng chuyển khoản qua
              </h2>
              <h2 className="text-gray-700">
                SỐ TÀI KHOẢN: 123456789 -{" "}
                <span style={{ color: "#039645", fontWeight: "bold" }}>
                  VPBANK
                </span>
              </h2>
              <h2 className="text-gray-700 my-4">
                CHỦ TÀI KHOẢN:{" "}
                <span className="font-bold ">DANG HOANG DUONG</span>
              </h2>
              <h2 className="text-gray-700">
                CHI NHÁNH:{" "}
                <span className="font-bold">Thanh Xuân - Hà Nội</span>
              </h2>
            </div>
            <div>
              <h2 className="text-justify text-gray-700 my-4">
                Sau khi chuyển khoản xong bạn hãy chụp lại màn hình giao dịch
                gửi{" "}
                <span
                  onClick={showModal}
                  style={{
                    color: "#039645",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}>
                  TẠI ĐÂY
                </span>{" "}
                {/* <span className="mt-2 block">
                  hoặc tải ảnh giao dịch lên web để DETTA Shop ghi nhận giao
                  dịch bạn nhé
                </span> */}
              </h2>
            </div>
            {/* upload image */}
            {/* <div className="row">
              <div>
                <input type="file" onChange={handleImaeChange} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* tech */}
      <div
        style={{ position: "relative" }}
        className={`row content-tabs ${atms === 2 ? "active-content" : ""}`}>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${tech})`,
              backgroundColor: "#ec1f276b",
            }}
            className="bidvs"></div>
          <div className="content-atmBank p-4">
            <div>
              <h2 className="capitalize text-gray-700 italic mb-4">
                bạn vui lòng chuyển khoản qua
              </h2>
              <h2 className="text-gray-700">
                SỐ TÀI KHOẢN: 123456789 -{" "}
                <span style={{ color: "#ec1f27", fontWeight: "bold" }}>
                  TEACHCOMBANK
                </span>
              </h2>
              <h2 className="text-gray-700 my-4">
                CHỦ TÀI KHOẢN:{" "}
                <span className="font-bold ">DANG HOANG DUONG</span>
              </h2>
              <h2 className="text-gray-700">
                CHI NHÁNH:{" "}
                <span className="font-bold">Thanh Xuân - Hà Nội</span>
              </h2>
            </div>
            <div>
              <h2 className="text-justify text-gray-700 my-4">
                Sau khi chuyển khoản xong bạn hãy chụp lại màn hình giao dịch
                gửi{" "}
                <span
                  onClick={showModal}
                  style={{
                    color: "#ec1f27",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}>
                  TẠI ĐÂY
                </span>{" "}
                {/* <span className="mt-2 block">
                  hoặc tải ảnh giao dịch lên web để DETTA Shop ghi nhận giao
                  dịch bạn nhé
                </span> */}
              </h2>
            </div>
            {/* upload image */}
            {/* <div className="row">
              <div>
                <input type="file" onChange={handleImaeChange} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* mb */}
      <div
        style={{ position: "relative" }}
        className={`row content-tabs ${atms === 3 ? "active-content" : ""}`}>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${mb})`,
              backgroundColor: "#1d00d46e",
            }}
            className="bidvs"></div>
          <div className="content-atmBank p-4">
            <div>
              <h2 className="capitalize text-gray-700 italic mb-4">
                bạn vui lòng chuyển khoản qua
              </h2>
              <h2 className="text-gray-700">
                SỐ TÀI KHOẢN: 123456789 -{" "}
                <span style={{ color: "#1d00d4", fontWeight: "bold" }}>
                  MBBANK
                </span>
              </h2>
              <h2 className="text-gray-700 my-4">
                CHỦ TÀI KHOẢN:{" "}
                <span className="font-bold ">DANG HOANG DUONG</span>
              </h2>
              <h2 className="text-gray-700">
                CHI NHÁNH:{" "}
                <span className="font-bold">Thanh Xuân - Hà Nội</span>
              </h2>
            </div>
            <div>
              <h2 className="text-justify text-gray-700 my-4">
                Sau khi chuyển khoản xong bạn hãy chụp lại màn hình giao dịch
                gửi{" "}
                <span
                  onClick={showModal}
                  style={{
                    color: "#1d00d4",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}>
                  TẠI ĐÂY
                </span>{" "}
                {/* <span className="mt-2 block">
                  hoặc tải ảnh giao dịch lên web để DETTA Shop ghi nhận giao
                  dịch bạn nhé
                </span> */}
              </h2>
            </div>
            {/* upload image */}
            {/* <div className="row">
              <div>
                <input type="file" onChange={handleImaeChange} />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/*  Modal  */}
      <Modal
        className="flex justify-center items-center"
        title="Bạn Hãy Bấm Để Phóng To Ảnh Và Quét Mã Zalo Bên Dưới Nhé"
        open={isModalOpen}
        onOk={handleOk}
        okType="primary"
        okText="Đồng Ý"
        cancelText="Hủy"
        closeIcon={false}
        centered
        onCancel={handleCancel}>
        <Image className="rounded-lg" width={200} src={zalo} />
      </Modal>
    </>
  );
};

export default Atms;

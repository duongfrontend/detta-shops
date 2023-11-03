import React from "react";
import "./payment.css";
import { useState } from "react";
import { atmData } from "./atmData";
import Atms from "./Atms";

const Payment = () => {
  // gender
  const [gender, setGender] = useState("male");
  //
  const [atm, setAtm] = useState(1);
  // checked
  const [checked, setChecked] = useState(false);
  // state form
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errAdress, setErrAdress] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // check form
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleAdress = (e) => {
    setAdress(e.target.value);
    setErrAdress("");
  };
  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  // function checkout
  const handleCheckout = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Vui lòng nhập tên của bạn");
      }
      if (!email) {
        setErrEmail("Vui lòng nhập email của bạn");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Email không hợp lệ");
        }
      }
      if (!adress) {
        setErrAdress("Vui lòng nhập địa chỉ của bạn");
      }

      // ============== Getting the value ==============
      if (clientName && email && EmailValidation(email) && adress) {
        setSuccessMsg(
          `Xin chào ${clientName}, Chào mừng bạn đến với DETTA Shop. Tài khoản của bạn đã được tạo thành công. Chúng tôi gửi 1 email xác thực về địa chỉ ${email} của bạn. Bạn hãy kiểm tra email bấm xác thực để hoàn tất bạn nhé`
        );
        setClientName("");
        setEmail("");
        setAdress("");
      }
    }
  };

  return (
    <>
      <div className="w-full py-6">
        <div className="container">
          <form className="forms" action="">
            {/* Form Name */}
            <div className="row">
              <h4 className="uppercase">thanh toán</h4>
              {/* useName */}
              <div className="input-group input-group-icon">
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  onChange={handleName}
                  value={clientName}
                />
                {errClientName && (
                  <p className="text-sm w-96 my-2 text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errClientName}
                  </p>
                )}
                <div className="input-icon">
                  <i className="fa fa-user"></i>
                </div>
              </div>
              {/* Email */}
              <div className="input-group input-group-icon">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  onChange={handleEmail}
                  value={email}
                />
                {errEmail && (
                  <p className="text-sm w-96 my-2 text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errEmail}
                  </p>
                )}
                <div className="input-icon">
                  <i className="fa fa-envelope"></i>
                </div>
              </div>
              {/* adress */}
              <div className="input-group input-group-icon">
                <input
                  type="text"
                  placeholder="Địa chỉ của bạn"
                  onChange={handleAdress}
                  value={adress}
                />
                {errAdress && (
                  <p className="text-sm w-96 my-2 text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errAdress}
                  </p>
                )}
                <div className="input-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
              </div>
            </div>
            {/* Form Name End*/}
            {/* Birthday, Gender */}
            <div className="row">
              {/* Birthday */}
              <div className="col-half">
                <h4>Ngày sinh</h4>
                <div className="input-group">
                  <div className="col-third">
                    <input type="text" placeholder="DD" />
                  </div>
                  <div className="col-third">
                    <input type="text" placeholder="MM" />
                  </div>
                  <div className="col-third">
                    <input type="text" placeholder="YYYY" />
                  </div>
                </div>
              </div>
              {/* Gender */}
              <div className="col-half">
                <h4>Giới tính</h4>
                <div className="genders">
                  <div
                    onClick={() => setGender("male")}
                    className={`gender-male-famale ${
                      gender === "male" ? "actives" : ""
                    }`}>
                    <i class="fa-solid fa-mars mr-2"></i>
                    Nam
                  </div>
                  <div
                    onClick={() => setGender("famale")}
                    className={`gender-male-famale ${
                      gender === "famale" ? "actives" : ""
                    }`}>
                    <i class="fa-solid fa-venus mr-2"></i>
                    Nữ
                  </div>
                </div>
              </div>
            </div>
            {/* Birthday, Gender End */}
            {/* Payment */}
            <div className="row">
              <h4>Hình thức thanh toán</h4>
              <div className="tabs">
                <div
                  onClick={() => setAtm(1)}
                  className={`tabs-btn ${atm === 1 ? "actives" : ""}`}>
                  <i class="fa-solid fa-house-chimney-window mr-2"></i>
                  <span className="media-pay">Tại nhà</span>
                </div>
                <div
                  onClick={() => setAtm(2)}
                  className={`tabs-btn ${atm === 2 ? "actives" : ""}`}>
                  <i class="fa-brands fa-cc-visa mr-2"></i>
                  <span className="media-pay">ATM</span>
                </div>
                <div
                  onClick={() => setAtm(3)}
                  className={`tabs-btn ${atm === 3 ? "actives" : ""}`}>
                  <i class="fa-brands fa-cc-paypal mr-2"></i>
                  <span className="media-pay">PayPal</span>
                </div>
              </div>
            </div>
            {/* Content-Tabs-Home */}
            <div
              className={`row content-tabs ${
                atm === 1 ? "active-content" : ""
              }`}>
              <h1 className="capitalize text-gray-700 font-bold">
                Thanh toán khi nhận hàng
              </h1>
            </div>
            {/* contents-tabs-atm */}
            <div
              className={`row content-tabs ${
                atm === 2 ? "active-content" : ""
              }`}>
              <h1 className="capitalize text-gray-700 font-bold">
                Chọn ngân hàng
              </h1>
              <Atms />
            </div>
            {/* content-tabs-paypal */}
            <div
              className={`row content-tabs ${
                atm === 3 ? "active-content" : ""
              }`}>
              <h4>Thông tin chủ thẻ</h4>
              <div className="input-group input-group-icon">
                <input type="number" placeholder="Số Thẻ" />
                <div className="input-icon">
                  <i className="fa fa-credit-card"></i>
                </div>
              </div>
              <div className="col-half">
                <div className="input-group input-group-icon">
                  <input type="text" placeholder="Họ Và Tên" />
                  <div className="input-icon">
                    <i className="fa fa-user"></i>
                  </div>
                </div>
              </div>
              <div className="col-half">
                <div className="input-group flex justify-between items-center">
                  <input type="date" />
                  <span className="px-2">đến</span>
                  <input type="date" />
                </div>
              </div>
            </div>
            {/* Payment End */}
            {/* checked */}
            <div className="row">
              <div className="input-group">
                <input
                  type="checkbox"
                  id="terms"
                  onChange={() => setChecked(!checked)}
                />
                <label htmlFor="terms">
                  Tôi đồng ý với tất cả các điều khoản
                </label>
              </div>
            </div>
            <div className="row flex justify-center items-center">
              <button
                onClick={handleCheckout}
                className={`${
                  checked
                    ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                    : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-not-allowed"
                } w-full text-gray-200 text-base font-medium h-10 rounded-lg hover:text-white duration-300`}>
                Tiến Hành Thanh Toán
              </button>
            </div>

            {/* <div className="flex w-full justify-center items-center gap-2 p-3">
              <input onChange={() => setChecked(!checked)} type="checkbox" />
              <p className="text-sm w-96 my-2 text-primeColor">
                Đồng ý với tất cả các điều khoản
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Payment;

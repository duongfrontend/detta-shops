import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets/images";
import "./signin.css";

const SignIn = () => {
  const navigate = useNavigate();
  // form ui
  const [classBtn, setClassBtn] = useState("");

  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Nhập email của bạn");
    }

    if (!password) {
      setErrPassword("Tạo mật khẩu");
    }
    // ============== Getting the value ==============
    if (email && password) {
      setSuccessMsg(
        `Chúc mừng bạn đã đăng nhập thành công vào DETTA Shop. Hãy bấm nút bên dưới để khám phá gian hàng của DETTA Shop nhé.`
      );
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="media-form w-full  h-full flex justify-center items-center">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/">
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold
            tracking-wide hover:bg-black hover:text-white duration-300">
                Tới Trang Chủ
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="title-name">
              <div className="flex justify-center items-center mb-3">
                {/* <Image className="w-14 object-cover" imgSrc={logo} /> */}
                <h1 className="title-header  p-2">DETA</h1>
                <h1 className="title-header-shop  p-2">Shop</h1>
              </div>
              <p className="text-justify">
                Chào mừng bạn đến với DETTA SHOP. Hãy đăng nhập để nhận được
                nhiều ưu đãi
              </p>
            </div>
            <div class="form-wrapper">
              <h1 className="uppercase font-bold text-xl">Đăng nhập</h1>
              <form>
                <div class="form-item">
                  <label for="email"></label>
                  <input
                    onChange={handleEmail}
                    value={email}
                    type="email"
                    name="email"
                    placeholder="Email của bạn"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>
                <div class="form-item">
                  <label for="password"></label>
                  <input
                    onChange={handlePassword}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                <div class="button-panel">
                  <button onClick={handleSignUp} class="button">
                    Đăng Nhập
                  </button>
                </div>
              </form>
              <div class="form-footer">
                <p>
                  Bạn chưa có tài khoản?
                  <Link to="/signup">Đăng Ký Ngay</Link>
                </p>
                <p>
                  <Link to="#">Quên Mật Khẩu</Link>
                </p>
              </div>
              <div onClick={() => navigate("/")} className="backs">
                <i class="fa-solid fa-arrow-left"></i>
                <span className="ml-3">Quay Lại Trang Chủ</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;

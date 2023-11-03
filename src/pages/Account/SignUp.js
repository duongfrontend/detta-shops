import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const SignUps = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============
  const handleSignUp = (e) => {
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
      if (!password) {
        setErrPassword("Vui lòng nhập mật khẩu của bạn");
      } else {
        if (password.length < 6) {
          setErrPassword("Mật khẩu phải có ít nhất 6 ký tự");
        }
      }

      // ============== Getting the value ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6
      ) {
        setSuccessMsg(
          `Xin chào ${clientName}, Chào mừng bạn đến với DETTA Shop. Tài khoản của bạn đã được tạo thành công. Chúng tôi gửi 1 email xác thực về địa chỉ ${email} của bạn. Bạn hãy kiểm tra email bấm xác thực để hoàn tất bạn nhé`
        );
        setClientName("");
        setEmail("");
        setPassword("");
      }
    }
  };
  // ==========  Modal ============
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
  // ==========  Modal End ============
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="media-form w-full  h-full flex justify-center items-center">
          {successMsg ? (
            <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
              <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                {successMsg}
              </p>
              <Link to="/signin">
                <button
                  className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold
            tracking-wide hover:bg-black hover:text-white duration-300">
                  Đăng Nhập Ngay
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
                <p>
                  Chào mừng bạn đến với DETTA SHOP. Hãy đăng ký để khám phá
                  nhiều hơn nhé
                </p>
              </div>
              <div class="form-wrapper ">
                <h1 className="uppercase font-bold text-xl">Đăng ký</h1>
                <form>
                  <div class="form-item">
                    <label for="user"></label>
                    <input
                      onChange={handleName}
                      value={clientName}
                      type="text"
                      name="user"
                      placeholder="Họ và tên của bạn"
                    />
                    {errClientName && (
                      <p className="text-sm w-96 my-2 text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errClientName}
                      </p>
                    )}
                  </div>
                  <div class="form-item">
                    <label for="email"></label>
                    <input
                      onChange={handleEmail}
                      value={email}
                      type="email"
                      placeholder="Email của bạn"
                    />
                    {errEmail && (
                      <p className="text-sm w-96 my-2 text-red-500 font-titleFont font-semibold px-4">
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
                      placeholder="Mật khẩu"
                    />
                    {errPassword && (
                      <p className="text-sm w-96 my-2 text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errPassword}
                      </p>
                    )}
                  </div>
                  {/* Checkbox */}
                  <div className="flex w-full justify-center items-center gap-2 p-3">
                    <input
                      type="checkbox"
                      id="terms"
                      onChange={() => setChecked(!checked)}
                    />
                    <label htmlFor="terms">
                      Tôi đồng ý với tất cả các điều khoản
                    </label>
                  </div>
                  <div className="button-panel">
                    <button
                      onClick={handleSignUp}
                      className={`button-signup ${
                        checked
                          ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                          : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-not-allowed"
                      } `}>
                      Đăng Ký
                    </button>
                  </div>
                </form>
                <div class="form-footer">
                  <p>
                    Bạn đã có tài khoản?
                    <Link to="/signin">Đăng Nhập Ngay</Link>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
    </>
  );
};

export default SignUps;

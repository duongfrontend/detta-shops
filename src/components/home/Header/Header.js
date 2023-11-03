import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  // navigate
  const navigate = useNavigate();
  const products = useSelector((state) => state.orebiReducer.products);
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              {/* <Image className="w-14 object-cover" imgSrc={logo} /> */}
              <h1 className="title-header  p-2">DETA</h1>
              <h1 className="title-header-shop  p-2">Shop</h1>
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2">
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676]  underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      style={{
                        width: "150px",
                        padding: "10px",
                        textTransform: "capitalize",
                      }}
                      state={{ data: location.pathname.split("/")[1] }}>
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
          </div>

          <div className="flex justify-center items-center w-32">
            <div className="visibals">
              <Link to="/gio-hang">
                <div className="relative">
                  <FaShoppingCart className="text-xl" />
                  <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-red-600 text-white">
                    {products.length > 0 ? products.length : 0}
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <HiMenuAlt2
                onClick={() => setSidenav(!sidenav)}
                className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
              />
            </div>
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative">
                  <div className="w-full h-full bg-white p-6">
                    <div className="flex justify-center items-center mb-8">
                      {/* <img className="w-10 mb-6" src={logo} alt="logoLight" /> */}
                      <h1 className="title-header  p-2">DETA</h1>
                      <h1 className="title-header-shop  p-2">Shop</h1>
                    </div>
                    <ul className="text-slate-900 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          style={{
                            borderBottomWidth: "1px",
                            borderBottomColor: "#ccc",
                          }}
                          className="p-2 capitalize font-bold items-center text-lg text-slate-600 underline-offset-[4px] decoration-[1px] hover:text-black md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}>
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}>
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-around items-center mt-10 cursor-pointer">
                      <div
                        onClick={() => navigate("/signin")}
                        className="flex justify-center items-center bg-red-600 text-white py-3 w-32 rounded-md font-semibold hover:opacity-60">
                        Đăng Nhập
                      </div>
                      <div
                        onClick={() => navigate("/signup")}
                        className="flex justify-center items-center bg-black text-white py-3 w-32 rounded-md font-semibold hover:opacity-60">
                        Đăng Ký
                      </div>
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300">
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;

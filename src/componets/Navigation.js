import { useEffect, useState, React, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";
import countryImg from "../img/country.png";
import { Link } from "react-router-dom";
import MyModal from "./RegisterLoginModal";
import { LuMenuSquare } from "react-icons/lu";
import { RiCopperCoinLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { IoCardOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsTicketPerforated } from "react-icons/bs";
import { DataContext } from "../contexts/DataContext";

function Navigation() {
    const getUsernameFromSession = () => {
        const userObject = JSON.parse(sessionStorage.getItem("aliexpress_user"));
        return userObject && userObject.fullname ? userObject.fullname : null;
      };
  const { cart } = useContext(DataContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!getUsernameFromSession());
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDropdown = () => {
    const dropdown = document.getElementById("dropdownContent");
    dropdown.classList.toggle("show");
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
      sessionStorage.removeItem("aliexpress_user");
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!getUsernameFromSession());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img
              src="https://ae01.alicdn.com/kf/S4fccb8f4b6b2454699e1b4d8a93706f0m/416x128.png"
              alt=""
            />
          </Link>
        </div>
        <div className="search-container">
          <input type="text" placeholder="iphone 14 pro..." />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </div>
        <div className="register">
          <BsQrCode className="user-icon" />
          <div className="welcome">
            <p>Download the</p>
            <p>AliExpress app</p>
          </div>
        </div>
        <div className="country">
          <img src={countryImg} alt="" />
        </div>
        <div className="register" onClick={handleDropdown}>
          <FaRegUser className="user-icon" />
          <div className="welcome">
            <p>Welcome</p>
            <h4>
              {isLoggedIn ? getUsernameFromSession() : "Sign-In / Register"}
            </h4>
          </div>
          <div id="dropdownContent" className="dropdown-content2">
            <div className="list3">
              {isLoggedIn ? (
                <>
                  {getUsernameFromSession()}
                  <button onClick={handleLogout}>Log Out</button>
                </>
              ) : (
                <button onClick={handleOpenModal}>Sign In</button>
              )}
              <Link onClick={handleOpenModal}>Register</Link>
            </div>
            <div className="list">
              <ul>
                <li>
                  <LuMenuSquare /> My Orders
                </li>
                <li>
                  <RiCopperCoinLine /> My Coins
                </li>
                <li>
                  <AiOutlineMessage /> Message Centre
                </li>
                <li>
                  <IoCardOutline /> Payments
                </li>
                <li>
                  <FaRegHeart /> Wish List
                </li>
                <li>
                  <BsTicketPerforated /> My Cupon
                </li>
              </ul>
            </div>
            <div className="list2">
              <ul>
                <li>Seller Log In</li>
                <li>Buyer Protection</li>
                <li>Help Center</li>
                <li>Disputes & Reports</li>
                <li>Report IPR Intringement</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
        <Link className="cart_icons" to="/cart">
          <div className="register">
            <FiShoppingCart className="user-icon" />
            <div className="welcome">
              <span>{cart.length}</span>
              <h4>Cart </h4>
            </div>
          </div>
        </Link>
      </div>
      <MyModal open={isModalOpen} handleClose={handleCloseModal} />
      <div className="nav-2"></div>
    </nav>
  );
}

export default Navigation;

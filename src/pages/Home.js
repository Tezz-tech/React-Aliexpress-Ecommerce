import React, { useState } from "react";
import image1 from "../img/img1.png";
import google from "../img/google.png"
import welcome from "../img/welcome.png"
import Bestsellers from "../img/bestsellers.png"
import Choice from "../img/choice.png"
import weekly from "../img/weekly.png"
import ProductBox from "../componets/ProductBox";
import Product from "../componets/Product";
import { Link } from "react-router-dom";

function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="sub-nav">
        <div className="dropdown-container" onClick={toggleDropdown}>
          <div className="hamburger">
            <h2>All Cartegories</h2>
          </div>
          <div className={`dropdown-content ${isDropdownOpen ? "open" : ""}`}>
            <div className="dropdown-item">
              <span>Consumer Electronics</span>
            </div>
            <div className="dropdown-item">
              <span>Home Garden</span>
            </div>
            <div className="dropdown-item">
              <span>Toys & Hobbies</span>
            </div>
            <div className="dropdown-item">
              <span>Phones & Telecommunications</span>
            </div>
            <div className="dropdown-item">
              <span>Automobiles, Parts & Accessories</span>
            </div>
            <div className="dropdown-item">
              <span>Computer & Office</span>
            </div>
            <div className="dropdown-item">
              <span>Sport & Entertainment</span>
            </div>
          </div>
        </div>
        <ul>
          <li>NN</li>
          <Link className="link" to="/bestsellers"><li>Bestsellers</li></Link>
          <li>Top Brands</li>
          <li>Home & Garden</li>
          <li>Hair Extensions & Wigs</li>
          <li>Men's Clothing</li>
          <li>Accessories</li>
          <li>Consumer Electronics</li>
          <li>Home Improvement & Lighting</li>
          <li>More</li>
        </ul>
      </div>
      <div className="banner1">
        <div className="main">
          <img src={image1} alt="" />
          <p>Sale ends in:Dec 8, 11:59 PM PT</p>
        </div>
      </div>
      <div className="banner2">
        <div className="main">
          <div className="container1">
            <div className="text-container">
              <span className="price">NGN2,367.05</span> off every NGN15,780.36
              (max<span className="price">NGN7,101.16</span>)
            </div>
          </div>
          <div className="container2">
            <div className="box">
              <div className="left">
                <h3>Choice Day</h3>
                <h2>Shopping Guide</h2>
              </div>
              <div className="right">
                <img
                  src="https://ae04.alicdn.com/kf/Sfdb52d26c9e34df58cfaf92ebea553f7x.jpg_140x140Q90.jpg_.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="box">
              <div className="left">
                <h3>Choice Day</h3>
                <h2>Bestsellers</h2>
              </div>
              <div className="right">
                <img
                  src="https://ae04.alicdn.com/kf/S0261c3e21d894d49b606d780faa38feda.jpg_140x140Q90.jpg_.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="box">
              <div className="left">
                <h3>Choice Day</h3>
                <h2>Home Deals</h2>
              </div>
              <div className="right">
                <img
                  src="https://ae04.alicdn.com/kf/S1eb0fccb675b4799ab2350dfec46a107M.jpg_140x140Q90.jpg_.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="box">
              <div className="left">
                <h3>Choice Day</h3>
                <h2>New arrivals</h2>
              </div>
              <div className="right">
                <img
                  src="https://ae04.alicdn.com/kf/Scd582c937abf4f10a67c99f0a91184afk.jpg_140x140Q90.jpg_.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="container3">
            <div className="top">
              <img src="https://ae01.alicdn.com/kf/S0fdd691113b74eb6bab15b8eba6093252.png_.webp" alt="" />              
            </div>
          </div>
          <div className="container4">
            <div className="first">
                <div className="top">
                    <div className="btns">
                        <button className="reg">Register</button>
                        <button className="sign">Sign in</button>
                    </div>
                    <p>Or continue with</p>
                    <img src={google} alt="" />
                </div>
                <div className="bottom">
                    <h2>Welcome deal</h2>
                    <p>Your exclusive price</p>
                    <img src={welcome} alt="" />
                </div>
            </div>
            <div className="second">
                    <h2>Bestsellers</h2>
                    <p>Get discounts on popular items</p>
                    <div className="img">
                    <img src={Bestsellers} alt="" />
                    </div>
            </div>
            <div className="third">
                <div className="btm">
                    <img src={Choice} alt="" />
                </div>
                <div className="to">
                    <img src={weekly} alt="" />
                </div>
            </div>
          </div>
          <div className="container5">
            <img src="https://ae01.alicdn.com/kf/S17d371c620c64717b9d54822dcb0ddbdj/210x50.png" alt="Description" />
            <p><i>Better services and selected items on Choice</i></p>
          </div>
          <div className="container6">
            <ProductBox />
          </div>
          <div className="">
            <h3 className="love"> More to Love</h3>
            {/* <Product/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

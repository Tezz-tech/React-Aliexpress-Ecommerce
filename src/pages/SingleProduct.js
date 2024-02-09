import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { IoLocationOutline } from "react-icons/io5";
import { PiShareFatLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import choiceDay from "../img/choiceDay.png";
import Random2 from "../componets/Random2";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setCart, cart } = useContext(DataContext);

  const isUserLoggedIn = sessionStorage.getItem("aliexpress_user");

  const handleAddToCart = (product) => {
    if (!isUserLoggedIn) {
      alert("Please log in before adding items to your cart.");
      return;
    }

    const initialCart = [...cart];
    const findProductItem = initialCart.find((item) => item.id === product.id);

    if (findProductItem === undefined) {
      const addAdditionalInfo = {
        ...product,
        quantity: 1,
        totalPrice: product.price,
      };
      initialCart.push(addAdditionalInfo);
      setCart(initialCart);
      localStorage.setItem("pandorasCart", JSON.stringify(initialCart));
      alert("Item Added to Cart");
    } else {
      alert("Item already in cart");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="load">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="single">
      <div className="left">
        <div className="one1">
          <div className="left1">
            <img className="singleimg" src={product.image} alt="" />
          </div>
          <div className="right1">
            <img src={choiceDay} alt="" />
            <h1>NGN{product.price}</h1>
            <h3>{product.title}</h3>
            <p>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar /> <span className="sold">100+ sold</span>
            </p>
          </div>
        </div>
        <div className="two1">
          <h3>Customer Reviews (0)</h3>
        </div>
        <div className="two1">
          <h3>Buyer Questions & Answers (0)</h3>
        </div>
        <div className="three1">
          <h3>You may also like</h3>
          <Random2 />
        </div>
      </div>
      <div className="right">
        <div className="main">
          <div className="one flex">
            <h5>Ship to</h5>
            <p>
              <IoLocationOutline /> Nigeria
            </p>
          </div>
          <div className="two">
            <h5>
              <img
                src="https://ae01.alicdn.com/kf/Sc944611b328f4e8bbc748456dcf64531R/254x64.png_.webp"
                alt=""
              />
              Delivery
            </h5>
            <h4>Shipping: NGN1,593.11 , or free over</h4>
            <h4 className="price">NGN {product.price} </h4>
            <p>
              delivery by <span>Jan 08</span>
            </p>
          </div>
          <div className="three">
            <h5>
              <img
                src="https://ae01.alicdn.com/kf/Sc944611b328f4e8bbc748456dcf64531R/254x64.png_.webp"
                alt=""
              />
              Service
            </h5>
            <p>Buyer protection</p>
          </div>
          <div className="four">
            <h5>Quantity</h5>
            <div className="btns1 flex">
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <p>1 pieces at most per customer</p>
            <button className="buy">Buy Now</button> <br />
            <button onClick={() => handleAddToCart(product)} className="cart">
              Add To Cart
            </button>
            <div className="btns2 flex">
              <button>
                <PiShareFatLight /> Share
              </button>
              <button>
                <FaRegHeart /> 350
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

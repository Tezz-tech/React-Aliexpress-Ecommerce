import React, { useState, useEffect } from "react";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = "tezzergreats"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://159.65.21.42:9000/products");
        const data = await response.json();
        const filteredProducts = category
          ? data.filter((product) => product.category === category)
          : data;

        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);
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

  return (
    <div className="container6">
      {products.map((product, index) => (
        <div className="box" key={index}>
          <div className="image">
            <img className="img1" src={product.image} alt={product.title} />
          </div>
          <h3>{product.title}</h3>
          <p>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />{" "}
            <span className="sold">{product.rating.count}+ sold</span>
          </p>
          <h4>
            NGN <span className="price">{product.price}</span>
          </h4>
          <img
            className="img2"
            src="https://img.alicdn.com/imgextra/i3/O1CN01kZ2atB24HgIpeJmNW_!!6000000007366-2-tps-298-64.png"
            alt=""
          />
          <br />
          <div className="btn">
            <Link to={`/bestsellers/${product.id}`} className="preview-btn">
              See Preview
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

import Random from "../componets/Random";

function Shop() {
  return (
    <div>
      <div className="container7">
        <button className="best">Bestseller</button>
        <button>Consumer Electronics</button>
        <button>Home Garden</button>
        <button>Toys & Hobbies</button>
        <button>Phones & Telecommunications</button>
        <button>Automobiles, Parts & Accessories</button>
        <button>Computer & Office</button>
        <button>Sport & Entertainment</button>
      </div>
      <div className="container8"></div>
      <div className="container9">
        <Random/>
      </div>
    </div>
  );
}

export default Shop;

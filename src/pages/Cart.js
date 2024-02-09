import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import visa from "../img/visa.png";
import { FaRegTrashCan } from "react-icons/fa6";
import ProductBox from "../componets/ProductBox";

function Cart() {
  const { cart, setCart } = useContext(DataContext);

  const isUserLoggedIn = sessionStorage.getItem("aliexpress_user");

  const increaseItem = (food) => {
    const initialCart = [...cart];
    const addItem = initialCart.map((cart_item) => {
      if (cart_item.id === food.id) {
        cart_item.quantity += 1;
        cart_item.totalPrice = Math.round(cart_item.quantity * cart_item.price);
      }
      return cart_item;
    });
    setCart(addItem);
    localStorage.setItem("pandorasCart", JSON.stringify(addItem));
  };

  const decreaseItem = (food) => {
    if (food.quantity > 1) {
      const initialCart = [...cart];
      const addItem = initialCart.map((cart_item) => {
        if (cart_item.id === food.id) {
          cart_item.quantity -= 1;
          cart_item.totalPrice = Math.round(
            cart_item.quantity * cart_item.price
          );
        }
        return cart_item;
      });
      setCart(addItem);
      localStorage.setItem("pandorasCart", JSON.stringify(addItem));
    }
  };

  const handleDeleteItem = (food) => {
    let confirmDelete = window.confirm("Do you wish to delete this Item");
    if (confirmDelete) {
      const initialCart = [...cart];
      const filterItem = initialCart.filter((item) => item.id !== food.id);
      setCart(filterItem);
      localStorage.setItem("pandorasCart", JSON.stringify(filterItem));
    }
  };

  const totalPrice = [...cart]
    .map((item) => item.totalPrice)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <div className="cartPage">
        <div className="cartMain">
          {cart.length !== 0 ? (
            <div className="checkout">
              <div className="cart_itemContainer">
                <div className="top">
                  <h2>
                    Shopping Cart (<span>{cart.length}</span>)
                  </h2>
                  <button className="forgot">Delete All Cart Items</button>
                </div>
                <div className="bottom">
                  <div className="global">
                    <h3>Shipped by global sellers</h3>
                  </div>
                  {cart.map((cartItem) => (
                    <div className="cart_item" key={cartItem.id}>
                      <img src={cartItem.image} alt="Cart Item" />
                      <div className="cart_content">
                        <h2>{cartItem.title}</h2>
                        <div className="cart_price">
                          <h3>NGN{cartItem.price}</h3>
                          <div className="cart_btns">
                            <button onClick={() => decreaseItem(cartItem)}>
                              -
                            </button>
                            <span>{cartItem.quantity}</span>
                            <button onClick={() => increaseItem(cartItem)}>
                              +
                            </button>
                            <button
                              title="Delete"
                              onClick={() => handleDeleteItem(cartItem)}
                            >
                              <FaRegTrashCan />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cart_container">
                <div className="top">
                  <h3>Sumarry</h3>
                  <div className="subtota">
                    <p>Subtotal</p>
                    <p>NGN{totalPrice}</p>
                  </div>
                  <div className="subtota">
                    <h1>Subtotal</h1>
                    <h1>NGN{totalPrice}</h1>
                  </div>
                  <button id="checkout">Checkout</button>
                </div>
                <div className="bottom">
                  <h2>Pay with</h2>
                  <img src={visa} alt="" />
                  <h2>Buyer protection</h2>
                  <p>
                    Get a full refund if the item is not as described or if it
                    is not delivered
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="noItemInCart">
              {isUserLoggedIn ? (
                <h3>No Item In Cart</h3>
              ) : (
                <h3>
                  Please Login or Register to add items to your cart.
                </h3>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="product_cart">
        <h1>More To Love</h1>
        <ProductBox />
      </div>
    </>
  );
}

export default Cart;

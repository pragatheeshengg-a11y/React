import { useContext } from "react";
import { cartcreate } from "./cartcontext";

function Cart() {
  const { cart } = useContext(cartcreate);

  return (
    <>
      <h2>Cart Items</h2>

      {(cart.length===0)?<p>CART IS EMPTY</p>:
      (cart.map((item, index) => (
        <div key={index}>
          {item.product} - ₹{item.price}
        </div>)
      ))}
    </>
  );
}

export default Cart;
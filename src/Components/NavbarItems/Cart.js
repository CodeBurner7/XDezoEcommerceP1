
import React from "react";
import { useCart } from "../Context/CartContext";
import styled from "styled-components";
import CartItem from "../CartItem.js";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  margin: 5rem 1rem;

  .container {
    border: 2px solid black;
    margin: 0 auto;
    padding: 1rem;
    max-width: 800px;
  }

  .wrap5-col {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.5rem;
  }

  .class-heading {
    padding: 0.5rem 0;
    font-weight: bold;
    text-align: center;
  }

  .cart-item {
    margin-top: 1rem;
  }

  .buttons-incart {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .buttons-incart > * {
    flex: 1;
    margin-bottom: 0.5rem;
  }

  .totals {
    margin-top: 1rem;
    text-align: center;
  }
`;
const Button = styled.button`
  text-decoration: none;
  padding: 5px 30px;
  color: aliceblue;
  font-size: 18px;
  background-color: #333;
  border-radius: 50px;
  text-transform: capitalize;
  font-weight: bold;

  &:hover {
    color: black;
  }
`;

const Cart = () => {
  const { cartItems, clearCart, calculateTotalAmount, calculateShippingFee } = useCart();
  const totalAmount = calculateTotalAmount();
  const shippingFee = calculateShippingFee();
  return (
    <Wrapper>
      <div className="container">
        <div className="class-heading wrap5-col">
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cartItems.map(({ product, quantity }) => (
            <CartItem key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
      </div>

      <div className="buttons-incart">
        <NavLink to="/products">
          <Button>Continue Shopping</Button>
        </NavLink>
        <Button onClick={clearCart}>Clear Cart</Button>
      </div>

      <div className="totals">
        <div>
          <p>Subtotal: {totalAmount}</p>
        </div>
        <div>
          <p>Shipping Fee: {shippingFee}</p>
        </div>
        <div>
          <p>Total Amount: {totalAmount + shippingFee}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;

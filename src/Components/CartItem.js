import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useCart } from "./Context/CartContext";



const CartItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
`;

const CartItem = ({ product, quantity }) => {
    const { removeFromCart } = useCart();
    const handleRemove = () => {
      removeFromCart(product.id);
    };

    const price=parseInt(product.price);
    console.log(price);
    // console.log(`${product.price*quantity}`);
  return (
    <CartItemWrapper>
      <div>
        <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
        <p>{product.name}</p>
      </div>
      {/* <div>
      </div> */}
      <div>
        <p>{product.price}</p>

      </div>
      <div>
        <p>{quantity}</p>
      </div>
      <div>
      <p>{parseFloat(product.price) * quantity}</p>

      </div>
      <MdDelete onClick={handleRemove}/>
      
    </CartItemWrapper>
  );
};

export default CartItem;

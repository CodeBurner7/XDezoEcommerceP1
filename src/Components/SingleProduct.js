
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductApi } from "./Api/ProductApi";
import styled from "styled-components";
import { useCart } from "./Context/CartContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .leftside {
    flex: 0.4;
  }

  .rightside {
    flex: 0.6;
    padding-left: 20px;

    .quantity_section{
      margin:1rem;
    }

    .product_info {
      margin-bottom: 20px;

      h1 {
        font-size: 24px;
      }

      p {
        font-size: 18px;
      }
    }

    .description {
      margin-bottom: 20px;

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 16px;
      }
    }

    .quantity {
      display: flex;
      align-items: center;

      div:first-child {
        margin-right: 10px;
      }

      div:last-child {
        display: flex;
        align-items: center;

        p {
          margin: 0 10px;
          font-size: 18px;
        }
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: black;
  color: #fff;
  cursor: pointer;
  font-size:20px;
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

const SingleProduct = () => {
  const { id } = useParams();
  const product = ProductApi.find((curElem) => curElem.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
console.log(product);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <div className="leftside">
        <Image src={product.image} alt={product.name} />
      </div>
      <div className="rightside">
        <div className="product_info">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
        <div className="description">
          <h3>Description:</h3>
          <p>{product.description}</p>
        </div>
        <div className="quantity">
          <div>
            <h3>Quantity:</h3>
          </div>
          <div className="quantity_section">
            <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
            <p>{quantity}</p>
            <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
          </div>
        </div>
        <NavLink to="/cart">
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </NavLink>
      </div>
    </Container>
  );
};

export default SingleProduct;
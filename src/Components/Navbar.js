import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import styled from 'styled-components'
import logoo from "../imagess/logoo.png";
import { CgProfile } from "react-icons/cg";
import logo from "../imagess/mainlogo.png";
import { useCart } from './Context/CartContext';




const Navbar = () => {
  const { cartItems,isLoggedIn,setIsLoggedIn } = useCart();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();

  const logout=()=>{
    setIsLoggedIn(false);
    // navigate('/signup');

  }

  const Wrapper = styled.section`
  .nav {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    align-items: center;
    background-color:#E7DDFF;
    padding: 10px;
    box-shadow: 0px -5px 15px 2px rgba(0, 0, 255, 0.3);

  }

  .logo {
    justify-self: start; 
    // background-color: green;
  }

  .list {
    justify-self: center;
    // background-color: yellow;

  }

  .profile {
    justify-self: end; 
    display: flex;
    align-items: center; 
    // background-color: orange;

  }

  .list_items {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    font-size:1.5rem;
  }

  .list_items li {
    margin-right: 2rem;
    justify-content: center;
  }
  .list_items li a {
    text-decoration: none;
    color: inherit; 
  }

  .list_items li:nth-last-child(2) { /* Target the second last list item, which is the "Sign Up" link */
  width: auto; /* Adjust the width to auto so it can take up only the necessary space */
}

  /* Apply styles when NavLink is active */
  .list_items li a.active {
    // font-weight: bold;
    // color:blue;
    // text-decoration:underline;
    border-bottom:3px solid blue;
    text-decoration-color:#0F31F5;
    
  }

  .profile span {
    margin-left: 20px;
    font-size: 1.5rem;
  }
  .profile span a{
    text-decoration: none;
  }
`;

  return (
    <Wrapper className='nav_wrapper'>
    <div className='nav'>
        <div className="logo">
          <img src={logo} alt=""  style={{height:'60px',width:"60px"}}/>
        </div>
        <div className="list">
          <ul className='list_items'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>

          {! isLoggedIn ? 
        <>
          <li style={{width:"100px"}}><NavLink to="/signup" >Sign Up</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </>  
        : 
        <li><NavLink to="/signup" onClick={logout}>Logout</NavLink></li>

        }

          </ul>
        </div>
        <div className="profile">
        {/* <NavLink to="/profile"><span className='profile'><CgProfile /></span></NavLink> */}
        <span className='cart'><NavLink to="/cart"><MdOutlineShoppingCart /> {totalQuantity}</NavLink></span>
        </div>
    </div>
    </Wrapper>
  )
}

export default Navbar

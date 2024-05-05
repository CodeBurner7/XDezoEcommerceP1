import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../Context/CartContext';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  form {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    width: 300px;
    /* Make the signup container slightly longer */
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #333;
  }

  p {
    text-align: center;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: #007bff;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const SignUp = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useCart();
  const handleSignUp=()=>{
    // setIsLoggedIn(true);
    // Redirect to login pagee
    navigate('/login');
  }
  return (
    <Wrapper>
      <form action="" onSubmit={handleSignUp} className='signup_form'>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" required/>
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required minLength={5}/>
        <button type="submit" name="signup_btn">Signup</button>
        <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
      </form>
    </Wrapper>
  );
}

export default SignUp;

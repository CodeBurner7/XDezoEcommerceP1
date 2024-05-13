import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import homeimage from "../imagess/homepic.png";
import aboutimage from "../imagess/aboutus.png";

const Mainhomesection = ({TitleData}) => {
  const Wrapper=styled.section`
  height:80vh;

  .main-wrap{
  }
  .wrap{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      padding:5rem 10rem 0rem 10rem;
  }
  .info-section{
      grid-column:1/2;
      height:450px;
      // background-color:red;
  }
  .img-section{
      grid-column:2/3;
      height:450px;
      // height:auto;
// background-color:green;
text-align:center;
  }
  .img-section img{
      width:auto;
      height:450px;
      // background-color:yellow;
  }
  .name{
    font-size:3rem;
  }
  .shop_btn{
    width: 30%;
    margin: 10px auto;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .shop_btn:hover {
    background-color: #555;
  }
  @media (max-width: 1400px) {
      .wrap{
          padding:4rem 8rem 0rem 8rem;
      }
  }
  @media (max-width: 1100px) {
      .wrap{
          padding:3rem 6rem 0rem 6rem;
      }
  }
  @media (max-width: 800px) {
      .wrap{
          padding:3rem 5rem 0rem 5rem;
      }
      .img-section img{
          margin-top:-3rem;
      }
  }
  @media (max-width: 600px) {
      .wrap{
          padding:3rem 3rem 0rem 3rem;
      }
      .img-section img{
          margin-top:-1rem;
      }
  }
  @media (max-width: 590px) {
      .wrap{
          padding:3rem 0rem 1rem 0rem;
          display:block;
      }
      .img-section img{
          margin-top:3rem;
      }
     

  }

  `;
    const {name,about}=TitleData;
  return (
    <Wrapper className='mainhome_section'>
    <div className='main-wrap'>
        <div className='wrap'>
            {/* for information section */}
            <div className='info-section'>
            <h1>{about? "About":"Welcome To"}</h1>
            <h1 className='name'>{name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos itaque non quisquam voluptatum dignissimos, alias explicabo molestias, assumenda ea earum dolores consequatur vero aut possimus omnis animi nesciunt temporibus quam sint.
            </p>
            <NavLink to={about? "":"/products"}>
              <button className='shop_btn'>{about? "More Details":"Shop Now"}</button>
            </NavLink>
            </div>
            {/* for image section */}
            <div className='img-section'>
                {/* <img src="images/ssd.jpg" alt="img" /> */}
                <img src={about ? aboutimage : homeimage} alt="img" />


            </div>
        </div>
    </div>
    </Wrapper>
  )
}

export default Mainhomesection
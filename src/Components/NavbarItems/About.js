import React, { useContext, useState } from 'react'
import Mainhomesection from '../Mainhomesection';
import styled from 'styled-components'
import { ProductApi } from '../Api/ProductApi';
import aa from "../../imagess/logo.png"

const About = () => {
  // const [api,setApi]=useState(ProductApi);
  // const {name}=ProductApi;
  const Wrapper=styled.section`
  // .productmap_div{
  //   margin-bottom:20px;    
  // }`;
  const data={
    name:"XDezo Ecommerce Site",
    about:"About"
  }
  return (
    <Wrapper className='about'><Mainhomesection TitleData={data} />
    {/* <h1>{name}</h1> */}
         {/* <img src={aa} alt="image" /> */}

    {/* {api.map((curElem,index)=>{
     return (
     <div key={curElem.id} className='productmap_div'>
     <h1>{curElem.name}</h1>
<img src={curElem.image} alt="imagess" />
   </div>
     )
    })} */}
    </Wrapper>
  )
}

export default About;
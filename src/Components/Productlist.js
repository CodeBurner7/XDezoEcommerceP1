import React,{ useContext, useState } from 'react'
import styled from 'styled-components'

const Productlist = () => {
  const [api,setApi]=useState(Productlist);
  const Wrapper=styled.section`
  // figure{
  //   width:auto;
  //   display:flex;
  //   background-color:red;
  //   position:relative;
  //   overflow:hidden;
  // }
  .productmap_div +img{
    width:200px;
    height:150px;
  }
  `;
  return (
    <>
    <Wrapper>
    {api.map((curElem,index)=>{
      return (
      <div key={curElem.id} className='productmap_div'>
        <figure>
      <img src={curElem.image} alt="imagess" />
      <figcaption className="caption">{curElem.category}</figcaption>
      </figure>
      <h1>{curElem.name}</h1>

    </div>
      )
     })}
     ProductList
     </Wrapper>
     </>
  )

}

export default Productlist
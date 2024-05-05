// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

// const Footer = () => {
//   const Wrapper=styled.footer`
//   .main_footer{
//     background-color:#B8ACA8;
//     height: 4rem;
//     display: flex;
//     justify-content: center; 
//     align-items: center;
//     bottom: 0; 
//     width: 100%; 
//     box-shadow: 0px -5px 15px rgba(0, 0, 255, 0.3); 

//   }

//   .copyright{
//     text-align: center;
//     font-size: 1.2rem;
//   }
// `;

//   return (
//     <>
//     <Wrapper>
//     <div className='main_footer'>
//       <div className="copyright"> &copy;{new Date().getFullYear()}  XDezo Ecommerce All Rights Reserved</div>
//     </div>
//     </Wrapper>
//     </>
//   )
// }

// export default Footer



import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #B8ACA8;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -5px 15px 2px rgba(0, 0, 255, 0.3);
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Copyright>
        &copy;{new Date().getFullYear()}  XDezo Ecommerce All Rights Reserved
      </Copyright>
    </Wrapper>
  );
}

export default Footer;


import React from 'react';
import Mainhomesection from '../Mainhomesection';
import styled from 'styled-components';
import FeatureProduct from '../FeatureProduct';

const Wrapper = styled.section`
  // .home {
  //   background-color: red;
  //   width: 70%;
  //   margin: auto; /* Auto margin to horizontally center the content */
  //   border: 2px solid green;
  //   display: flex; /* Use flexbox to center vertically */
  //   flex-direction: column; /* Stack child elements vertically */
  //   align-items: center; /* Center child elements horizontally */
  // }
`;

const Home = () => {
  const data = {
    name: "XDezo Store",
  };

  return (
    <Wrapper className='home'>
      <Mainhomesection TitleData={data} />
    </Wrapper>
  );
};

export default Home;

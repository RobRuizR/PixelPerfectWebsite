import React from 'react'
import styled from 'styled-components';

import Slideshow from './Home/Slideshow';
import DefaultSlide, { SlideOne, SlideTwo } from './Home/DefaultSlide';

const Layout = styled.div`
  display: flex;
  background: black;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

function Home () {
  return (
    <Layout>
      <Slideshow
        items={[
          {
            key: 0,
            background:'darkred',
          },
          {
            key: 1,
            background:'darkblue',
            render: ((data) => <SlideOne {...data} />)
          },
          {
            key: 2,
            background:'green',
            render: ((data) => <SlideTwo {...data} />)
          },
        ]}
        defaultElementRender={(data) => <DefaultSlide {...data}/>}
        timeBetweenSlides={5000000}
      />
    </Layout>
  )
};

export default Home;
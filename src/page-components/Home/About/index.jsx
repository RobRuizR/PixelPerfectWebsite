import React from 'react';
import styled from 'styled-components';

import TeamSlider from './TeamSlider';
import bg from './assets/about-bg.jpg';
import { device } from '../../../utils/device';

const Background = styled.div`
  position: relative;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4em;
  align-items: center;
  justify-content: center;

  ${device.tablet} {
    position: relative;
    top: 40%;
    height: 60%;
    padding: 2em 1em;
    align-items: baseline;
  }
`;

const TextLayout = styled.div`
  align-items: center;
  justify-content: center;
  width: 50%;
  box-sizing: border-box;
  padding: 0 2em;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

  ${device.tablet} {
    flex: 1 1 100%;
    padding: 0 0.5em;
    font-size: 0.7em;
  }
`;

const Header = styled.div`
  font-size: 4em;
  width: 100%;
`;

const Subtext = styled.div`
  margin-top: 1em;
  line-height: 1.3em;
  font-size: 1.4em;

  ${device.tablet} {
    margin: 0.7em 0;
    font-size: 1.7em;
  }

  ${device.mobile} {
    font-size: 1.4em;
  }
`;

const SliderLayout = styled.div`
  width: 50%;
  min-width: 0;
  box-sizing: border-box;
  padding: 0 2em;

  ${device.tablet} {
    position: relative;
    bottom: 5%;
    padding: 0 2em;
    flex: 1 1 100%;
  }
`;

function About() {
  return (
    <Background>
      <Layout>
        <TextLayout>
          <Header>Who are we?</Header>
          <Subtext>
            Pixel Perfect VFX is a visual effects studio and training center
            based in Monterrey, Mexico. This company was born by the idea of
            perfecting the industry in Monterrey, our mission is to deliver the
            highest quality product in the north of Mexico and eventually the
            whole country.
          </Subtext>
        </TextLayout>
        <SliderLayout>
          <TeamSlider />
        </SliderLayout>
      </Layout>
    </Background>
  );
}

export default About;
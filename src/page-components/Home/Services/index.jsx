import React from 'react';
import styled from 'styled-components/macro';
import Slider from 'react-slick';

import Text from '../../../components/Text';
import ServiceSlide from './ServiceSlide';
import IntroSlide from './IntroSlide';
import SlideLayout from './SlideLayout';
import arrowImage from '../../assets/arrow.svg';
import { device } from '../../../utils/device';
import { navbarIds } from '../../../components/Navbar';
import { StaticQuery, graphql } from 'gatsby';

const Layout = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  --margin: 5rem;

  ${device.laptop} {
    --margin: 4rem;
  }
  ${device.tablet} {
    --margin: 2.5rem;
  }
  ${device.tablet} {
    --margin: 2rem;
  }
`;

const slidesData = [
  {
    name: 'Screen Replacements',
    description: `
We assist in the post-production process with services like compositing, rotoscoping, cleanup, 3D tracking and CGI services like **3D modelling** and animation, lighting, etc.


[See more...](/course-template)
  `,
  },
];

const Overlay = styled(SlideLayout)`
  position: absolute;
  justify-content: flex-start;
`;

const _PrevArrow = styled('img')`
  --arrow-width: 1.8rem;
  --arrow-height: calc(2 * var(--arrow-width));
  position: absolute;
  top: var(--margin);
  right: calc(1 * var(--arrow-width) + var(--margin));
  width: var(--arrow-width);
  height: var(--arrow-height);
  z-index: 1;
  cursor: pointer;

  ${device.tablet} {
    --arrow-width: 1.6rem;
  }

  ${device.mobile} {
    --arrow-width: 1.5rem;
  }
`;

const _NextArrow = styled(_PrevArrow)`
  right: var(--margin);
  transform: rotate(180deg);
`;

function PrevArrow(props) {
  const { onClick } = props;
  return <_PrevArrow onClick={onClick} src={arrowImage} />;
}

function NextArrow(props) {
  const { onClick } = props;
  return <_NextArrow onClick={onClick} src={arrowImage} />;
}

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const Services = props => {
  const { title } = props.data.markdownRemark.frontmatter;
  const { serviceList } = props.data.markdownRemark.frontmatter.services;

  return (
    <Layout id={navbarIds.services}>
      <Slider {...settings}>
        <IntroSlide />
        {serviceList.map(slide => (
          <ServiceSlide name={slide.name} description={slide.content} background={slide.image} />
        ))}
      </Slider>
      <Overlay>
        <Text size={10} as="h1">
          {title}
        </Text>
      </Overlay>
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query StartPageQuery {
        markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
          frontmatter {
            title
            services {
              title
              serviceList {
                content
                image
                name
              }
            }
          }
        }
      }
    `}
    render={data => <Services data={data} {...props} />}
  />
);

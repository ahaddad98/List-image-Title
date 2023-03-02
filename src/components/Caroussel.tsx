import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const CarouselComponent = ({ data }: any) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <CarouselWrapper>
            <Slider {...settings}>
                {data.map((data: any) => (
                    <ItemWrapper key={data.thumbnailUrl}>
                        <ItemImage src={data.thumbnailUrl} alt={data.title} />
                        <ItemTitle>{data.title}</ItemTitle>
                    </ItemWrapper>
                ))}
            </Slider>
        </CarouselWrapper>
    );
};
export default CarouselComponent

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .slick-slide img {
    display: block;
    width: 100%;
    height: auto;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
    font-size: 30px;
  }

  .slick-dots li button:before {
    color: #000;
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const ItemTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;
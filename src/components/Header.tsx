import React from "react";
import styled from "styled-components";
import { useAppContext } from "../provider/appContext";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  /* margin-bottom: 2rem; */
  position: sticky;
  top: 0;
  height: 60;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

interface OptionButtonProps {
  active: boolean;
}

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const OptionButton = styled.button<OptionButtonProps>`
  background-color: ${(props) => (props.active ? "#333" : "#ddd")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#333" : "#bbb")};
  }
`;

const Header = () => {
  let { carousel, infiniteScroll, setInfiniteScroll, setCarrousel }: any = useAppContext()
  return (
    <HeaderContainer>
      <Title>List Images</Title>
      <OptionContainer>
        <OptionButton active={carousel} onClick={() => {
          setCarrousel(true)
          setInfiniteScroll(false)
        }}>
          Carousel
        </OptionButton>
        <OptionButton
          active={infiniteScroll}
          onClick={() => {
            setInfiniteScroll(true)
            setCarrousel(false)

          }}
        >
          Infinite Scroll
        </OptionButton>
      </OptionContainer>
    </HeaderContainer>
  );
};

export default Header;
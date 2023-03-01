import React from "react";
import styled from "styled-components";

interface HeaderProps {
  title: string;
  carousel?: boolean;
  infiniteScroll?: boolean;
  pagination?: boolean;
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
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

const Header: React.FC<HeaderProps> = ({
  title,
  carousel,
  infiniteScroll,
  pagination,
}) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <OptionContainer>
        {carousel && (
          <OptionButton active={true} onClick={() => console.log("Carousel")}>
            Carousel
          </OptionButton>
        )}
        {infiniteScroll && (
          <OptionButton
            active={false}
            onClick={() => console.log("Infinite Scroll")}
          >
            Infinite Scroll
          </OptionButton>
        )}
        {pagination && (
          <OptionButton
            active={false}
            onClick={() => console.log("Pagination")}
          >
            Pagination
          </OptionButton>
        )}
      </OptionContainer>
    </HeaderContainer>
  );
};

export default Header;
import React from "react";
import styled from "styled-components";
import { IData } from "./ListItems";


interface Props {
    data: IData;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 16px; */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  height: 400px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 200;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 8px;
  color: #333;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  text-overflow: ellipsis;
  max-width: 200px;
  max-height: 50;
`;

const Item = ({ data }: Props) => {
    return <CardContainer>
        <CardImage src={data.thumbnailUrl} alt={data.title} />
        <CardTitle>{data.title}</CardTitle>
    </CardContainer>
}

export default Item
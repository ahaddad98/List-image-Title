import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useAppContext } from "../provider/appContext";
import CarouselComponent from "./Caroussel";
import Item from "./Item";

export type IData = {
  id: number;
  title: string;
  thumbnailUrl: string;
};

const ListItems = () => {
  let { data, loading, error, showPhotos, fetchItems }: any =
    useAppContext();
  const mapdata = data.map((el: IData, key: number) => {
    return (
      <React.Fragment key={key}>
        <Item data={el} />
      </React.Fragment>
    );
  });
  return loading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : error ? (
    <LoaderWrapper> <img src="/error.svg" alt="" /> </LoaderWrapper>
  ) : (
    <>
      {showPhotos ? (
        <div>
          <Container>{mapdata}</Container>
          <LoadMoreWrapper>
            <LoadMoreBotton onClick={fetchItems}>Load More</LoadMoreBotton>
          </LoadMoreWrapper>
        </div>
      ) : (
        <CarouselComponent data={data} />
      )}
    </>
  );
};

export default ListItems;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  padding: 2rem;
  /* height: 500px; */
`;

const LoadMoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
const LoadMoreBotton = styled.button`
  width: 200px;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`;

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fcb632;
    border-color: #fcb632 transparent #fcb632 transparent;
    animation: ${loadingAnimation} 1.2s linear infinite;
  }
`;

const LoaderText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #fcb632;
  margin-top: 20px;
`;

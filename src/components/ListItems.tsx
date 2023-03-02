import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppContext } from "../provider/appContext";
import CarouselComponent from "./Caroussel";
import Item from "./Item";


export type IData = {
    id: number;
    title: string;
    thumbnailUrl: string;
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    padding: 2rem;
    height: 500px;
`

const ListItems = () => {
    let { data, loading, error, infiniteScroll, fetchItems }: any = useAppContext()
    const componentRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        const el = componentRef.current;
        if (
            el &&
            el.offsetHeight + el.scrollTop + 1 >= el.scrollHeight &&
            !loading
        ) {
            fetchItems();
        }
    };
    useEffect(() => {
        console.log('heheheS');
        
        const el = componentRef.current;
        if (el) {
            el.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (el) {
                el.removeEventListener("scroll", handleScroll);
            }
        };
    }, [componentRef.current]);
    if (loading) return <div>Loading ...</div>
    if (error) return <div>error ...</div>
    const mapdata = data.map((el: IData) => {
        return <React.Fragment key={el.id} >
            <Item data={el} />
        </React.Fragment>
    })
    return infiniteScroll ?
        <div ref={componentRef} style={{ height: "500px", overflow: "auto" }}>
            <Container>
                {mapdata}
            </Container>
        </div>
        :
        <CarouselComponent data={data} />
}

export default ListItems
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchData } from "../NetworkApi/fetchApi";
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
`

const ListItems = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState<IData[]>([])
    const fetchItems = async () => {
        setLoading(true)
        const res = await fetchData()
        if (!res)
            setError(true)
        else
            setData(res)
        setLoading(false)
    }
    useEffect(() => {
        fetchItems()
    }, [])
    if (loading) return <div>Loading ...</div>
    if (error) return <div>error ...</div>
    const mapdata = data.map((el: IData) => {
        return <React.Fragment key={el.id}>
            <Item data={el} />
        </React.Fragment>
    })
    return <Container>
        {mapdata}
    </Container>
}

export default ListItems
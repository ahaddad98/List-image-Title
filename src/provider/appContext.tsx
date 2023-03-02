import React, { useContext, useEffect, useRef, useState } from "react";
import { fetchData } from "../NetworkApi/fetchApi";

export type IData = {
    id: number;
    title: string;
    thumbnailUrl: string;
}


const MyContext = React.createContext({}) as any;

export function useAppContext() {
    return useContext(MyContext);
}

export function AppProvider({ children }: any) {
    const [showPhotos, setShowPhotos] = useState(true)
    const [carousel, setCarrousel] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1);
    const [data, setData] = useState<IData[]>([])
    const fetchItems = async () => {
        setLoading(true)
        const res = await fetchData(page)
        if (!res)
            setError(true)
        else
        {
            setData([...data,...res])
            setPage(page + 1);
        }
        setLoading(false)
    }
    
    useEffect(() => {
        fetchItems()
    }, [])
    return (
        <>
            {
                <MyContext.Provider value={{ loading, error, data, showPhotos, setShowPhotos, carousel, setCarrousel, fetchItems }}>
                    {children}
                </MyContext.Provider>
            }
        </>
    );
}

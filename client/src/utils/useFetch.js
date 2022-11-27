import { useEffect, useState } from "react";
import easyparkAPI from '../config/api'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect( () => {
        const token = JSON.parse(sessionStorage.getItem('userLogin'))?.data?.token;
        const fetchData = async ()=> {
            setLoading(true);
            try{
                const res = await easyparkAPI.get(
                    url,{
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,  
                        },
                    });
                setData(res.data);
            } catch (err) {
                setError(err);
            } 
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const reFetch = async ()=> {
        setLoading(true);
        try{
            const res = await easyparkAPI.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
        } 
        setLoading(false);
    };

    return { data, loading, error, reFetch}
};

export default useFetch;
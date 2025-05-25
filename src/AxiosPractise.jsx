import axios from "axios";
import { useEffect, useState } from "react";

console.log(import.meta.env.VITE_API_PATH);

const { VITE_API_PATH } = import.meta.env;

function AxiosPractise() {
    //useState設定資料為{}
    const [data, setData] = useState({});

    useEffect(() => {
        (async() => {
            const res = await axios.get(VITE_API_PATH);
            console.log(res.data.results[0]);
            setData(res.data.results[0]);
        })();
    }, [])
    
    return (
    <>
    123
    {JSON.stringify(data)}
    </>)
}

export default AxiosPractise
import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router"

const { VITE_API_URL, VITE_API_PATH } = import.meta.env

function Product() {
    const [product, setProduct] = useState({});
    const params = useParams();
    console.log(params);
    const { id } = params;

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${VITE_API_URL}/v2/api/${VITE_API_PATH}/product/${id}`);
            console.log(res.data.product);
            setProduct(res.data.product);
        })()
    }, [id])

    return (<>
        <h2>產品頁面</h2>
        {product.title}
        <img src={product.imageUrl} width='200' alt=''></img>
    </>)
}

export default Product
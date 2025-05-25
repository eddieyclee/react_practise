import { Outlet, Link } from "react-router"
import axios from "axios"
import { useEffect, useState } from "react"

const { VITE_API_URL, VITE_API_PATH } = import.meta.env

// console.log(VITE_API_URL, VITE_API_PATH)

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${VITE_API_URL}/v2/api/${VITE_API_PATH}/products`);
            console.log(res.data.products);
            setProducts(res.data.products);
        })()
    }, [])

    return (<>
        <h1>產品列表</h1>
        <table>
            <tbody>
            {products.map((product) => {
                return (<tr key={product.id}>
                    <td>{product.title}</td>
                    <td>
                        <img src={product.imageUrl} width='60' alt=''></img>
                    </td>
                    <td>
                        <Link to={`/product/${product.id}`}>切換頁面</Link>
                    </td>
                </tr>)
            })}
            </tbody>
        </table>
        
        <hr />
        <Outlet />
    </>)
}

export default Products
import { useEffect } from "react";
import { useNavigate } from "react-router"

function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000)
    }, [])

    return (<>
        <h1>頁面不存在</h1>
    </>)
}

export default NotFound
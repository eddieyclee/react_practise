import { useParams } from "react-router"

function Person() {
    const params = useParams();
    console.log(params);

    return (<>
        <h2>個人資料</h2>
    </>)
}

export default Person
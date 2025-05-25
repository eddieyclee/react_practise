import { useState } from "react"

function AboutHookForm () {
    const [text, setText] = useState({
        email: ''
    });

    return (
        <>
        <h1>表單</h1>
        <form action="/XXX" method="get">
            <label htmlFor="email">Email {text.email}</label>
            <input type="text" name="email" id="email" onChange={(e) => {
                console.log(e.target.value, e.target.name)
                setText({
                    ...text,
                    [e.target.name]: e.target.value
                })
            }}/>
            <button type="submit">送出</button>
        </form>
        </>
    )
}

export default AboutHookForm
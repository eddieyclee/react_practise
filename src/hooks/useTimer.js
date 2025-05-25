import { useEffect, useState } from "react"

export default function useTimer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // setInterval(() => {
    //     setTime(new Date().toLocaleTimeString());
    // }, 1000)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)

        return () => clearInterval(timer);
    }, [])

    return time;
}

import { useEffect, useState } from "react";

function TimePage() {
    const [time, setTime] = useState(null);

    const getData = async () => {
        const response = await fetch("http://worldtimeapi.org/api/ip", {
            method: "get",
            headers: {
                Accept: "application/json",
            }
        })
        const data = await response.json();
        setTime(data)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>{time ? `${time.utc_datetime} // ${time.week_number}` : 'Now loading...'}</div>
    )
}

export default TimePage;
import { React, useState, useEffect } from "react";
import { useParams } from 'react-router';

const SelectedPinPage = () => {
    console.log('Hola')

    const params = useParams();
    const pinId = params.id
    console.log(pinId)

    const [pin, setPin] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/api/pins/' + pinId)
            .then((response) => response.json())
            .then((json) => setPin(json))
    }, [])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <img src={pin.source} />
            <span>{pin.title}</span>
        </div>
    )
}

export default SelectedPinPage;
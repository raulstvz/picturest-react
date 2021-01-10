import { React, useState, useEffect } from "react";
import { useParams } from 'react-router';
import PinSelected from "../components/pinSelected/PinSelected";

const SelectedPinPage = () => {

    const params = useParams();
    const pinId = params.id
    console.log(pinId)

    const [pin, setPin] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/api/pins/' + pinId)
            .then((response) => response.json())
            .then((json) => setPin(json))
    }, [pinId])

    return (
            <PinSelected pin={pin} />
    )
}

export default SelectedPinPage;
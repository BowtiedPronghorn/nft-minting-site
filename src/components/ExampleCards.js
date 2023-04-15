
import "../styles/ExampleCards.css";

import React, { useState, useEffect } from 'react';


function ExampleCards() {

    const [image, setImage] = useState([]);
    const [isFirst, setFirst] = useState([true]);

    let n = Math.round(Math.random() * (50 - 1) + 1).toString();
    const url = `https://ipfs.io/ipfs/QmQrq7KHmm8rs3oqCUFo1aegfKLAyfSZXX8vGWTBqMdarg/${n}.json`;

    useEffect(() => {

    const fetchImage = async () => {
        if (isFirst) {
            const response = await fetch(url);
            const json = await response.json();
            //const {results} = json;
            // Only put the results in state, ie, the actual users array
            setImage(json);
            //console.log(json);
            setFirst(false);
        }

    }

        fetchImage();
    }, [url, isFirst]);

    if (!image) return (<div>Loading...</div>);

    return (
        <div className={"center-bottom"}>
            <img width={240} height={240} src={image.image} alt={"Example NFT"} className={"examplecard"}/>
        </div>
    );
}

export default ExampleCards;

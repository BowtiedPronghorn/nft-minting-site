import "../styles/ExampleCards.css";

import React, { useState, useEffect } from 'react';


function CardFromIndex({n}) {

    const [image, setImage] = useState([]);

    let index = n.toString();
    const url = `https://ipfs.io/ipfs/QmQrq7KHmm8rs3oqCUFo1aegfKLAyfSZXX8vGWTBqMdarg/${index}.json`

    useEffect(() => {

        const fetchImage = async () => {
            const response = await fetch(url);
            const json = await response.json();
            //const {results} = json;
            // Only put the results in state, ie, the actual users array
            setImage(json);
            //console.log(json);
        }

        fetchImage();
    }, [url]);

    if (!image) return (<div>Loading...</div>);

    return (
            <img width={240} height={240} src={image.image} alt={"Example NFT"} className={"examplecard"}/>
    );
}

export default CardFromIndex;

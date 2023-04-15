//import React, {useState, Component} from 'react'
import '../styles/Home.css';

import Mint from '../components/Mint';
import ExampleCards from "../components/ExampleCards";
import ConnectWallet from "../components/ConnectWallet";

function Home() {

    return (
        <div className={"background"}>
            <ConnectWallet/>
            <Mint/>
            <ExampleCards/>
        </div>
    );
}

export default Home;

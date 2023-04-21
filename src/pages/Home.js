//import React, {useState, Component} from 'react'
import '../styles/Home.css';

import Mint from '../components/Mint';
import ExampleCards from "../components/ExampleCards";
import ConnectWallet from "../components/ConnectWallet";
import UseNetworkPopUp from "../components/UseNetworkPopUp";

function Home() {

    return (
        <div className={"background"}>
            <ConnectWallet/>
            <UseNetworkPopUp/>
            <Mint/>
            <ExampleCards/>
        </div>
    );
}

export default Home;

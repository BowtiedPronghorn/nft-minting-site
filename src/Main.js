import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Home from './pages/Home';
import Collection from './pages/Collection';
import MyCards from "./pages/MyCards";
import Navigation from "./components/Navbar";

import {configureChains, createClient, goerli, WagmiConfig} from 'wagmi'
import {publicProvider} from "wagmi/providers/public";

const { provider, webSocketProvider } = configureChains(
    [goerli],
    [publicProvider()],
)

const client = createClient({
    provider,
    webSocketProvider,
})


const Main = () => {
    return (
        <WagmiConfig client={client}>
        <div>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/collection' element={<Collection/>}></Route>
            <Route path='/mycards' element={<MyCards/>}></Route>
        </Routes>
        </div>
        </WagmiConfig>
    );
}

export default Main;

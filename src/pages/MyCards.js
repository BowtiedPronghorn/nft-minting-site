import React, {useState, Component} from 'react'
import '../styles/Home.css';
import ConnectWallet from "../components/ConnectWallet";
import CardFromIndex from "../components/CardFromIndex";
import { styled} from "@mui/material";
import Paper from "@mui/material/Paper"
import {Grid} from "@mui/material";
import { useContractRead } from 'wagmi';
import JungleCards from "../abi/JungleCards.json";
import { useAccount } from 'wagmi';
import Popup from "reactjs-popup";



function UserHasCard(address, index) {
    const { data, isError, isLoading } = useContractRead({
        address: '0x90d197fc1417bC58A2193E0B124771Eec5CC18ca',
        abi: JungleCards.abi,
        functionName: 'balanceOf',
        args: [address, index]
    })

    if (data?._hex.toString() == "0x00") {
        return false
    }
    else {return true}
 }

function MyCards() {

    const { address, connector, isConnected } = useAccount()

    const indexes = []
    for (var i = 1; i <= 50; i++) {
        if (UserHasCard('0xf32a24c9108FEA73215aC7cB08160cAa015eB60e', i)) {
            indexes.push(i);
        }
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    

    if (isConnected) {
      return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                {indexes.map(value => (
                    <Grid>
                        <Item>
                            <CardFromIndex n={value}/>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </div>
      );
    }
    else {
      return (
        <Popup open={true} modal>
          <h1>Please connect your wallet</h1>
          <ConnectWallet/>
        </Popup>
      )   
     }
}

export default MyCards;

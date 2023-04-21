//import React, {useState, Component} from 'react'
import '../styles/Home.css';
import { styled} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Grid} from "@mui/material";
import images from "../images/nfts";

function Collection() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
              {images.map((img, index) => (
                <Grid>
                    <Item>
                      <img width={240} height={240} key={index} src={img} alt={img} />  
                    </Item>
                </Grid>
            ))}
            </Grid>
        </div>
    );
}

export default Collection;

//import React, {useState, Component} from 'react'
import '../styles/Home.css';
import CardFromIndex from "../components/CardFromIndex";
import { styled} from "@mui/material";
import Paper from "@mui/material/Paper"
import {Grid} from "@mui/material";

function Collection() {
    const indexes = []
    for (var i = 1; i <= 50; i++) {
        indexes.push(i);
    }

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

export default Collection;

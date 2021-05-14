import React, {FC, ReactElement} from "react";
import {Grid, createStyles, makeStyles, Theme} from "@material-ui/core";
import NutriCard from "../card/NutriCard";



const List = () : ReactElement => {
    return (
        <Grid container spacing={3}>
            <NutriCard />
        </Grid>
    )
}

export default List;
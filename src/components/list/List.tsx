import React, {FC, ReactElement} from "react";
import {Grid, createStyles, makeStyles, Theme} from "@material-ui/core";
import NutriCard from "../card/NutriCard";


interface Products{
    products: Product[]
}

interface Product{
    id:number,
    title:string,
    image:string,
    imageType:string
}

const List: FC<Products> = ({products}) : ReactElement => {

    const data = products.map(({id, title, image})=>{
        return <NutriCard key={id} id={id} title={title} image={image} />
    })
    return (
        <Grid container spacing={3}>
            {data}
        </Grid>
    )
}

export default List;
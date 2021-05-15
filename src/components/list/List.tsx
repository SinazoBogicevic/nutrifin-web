import React, {FC, ReactElement} from "react";
import {Grid, createStyles, makeStyles, Theme} from "@material-ui/core";
import NutriCard from "../card/NutriCard";
import background from "../../images/background.jpg";
import { useQuery } from "../../QueryContext";

const arr = [
    {
        "id": 447036,
            "title": "Boekenhoutskloof The Chocolate Block Red Blend",
            "image": background,
    },
    {
    "id": 500857,
            "title": "SlimFast Keto Fat Bomb Caramel Nuts & Chocolate Snack Cup (14ct Box)",
            "image": background
},
{
    "id": 500859,
            "title": "SlimFast Keto Fat Bomb Caramel Nuts & Chocolate Snack Cup (Individual)",
            "image": background,
}
]

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
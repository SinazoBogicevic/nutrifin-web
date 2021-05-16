import React, { useEffect, useState } from "react";
import Searchbar from "../components/searchbar/Searchbar";
import {NO_RESULTS, PLACEHOLDER, RESULTS_FOR, SEARCH_GREETING, SEARCH_MESSAGE} from "../utils/constants";
import {Box, Container,makeStyles, Theme, createStyles, CssBaseline, Typography} from "@material-ui/core";
import {blueGrey} from "@material-ui/core/colors"
import List from "../components/list/List";
import Modal from "../components/modal/Modal";
import { useQuery } from "../QueryContext";

const grey = blueGrey[700];

const useStyles = makeStyles((theme:Theme) => 
createStyles({
    root:{
        display: 'flex',
        flexDirection: 'column',
    },
    abRoot:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '50px'
    },
    text:{
        display: 'flex',
        alignItems: 'baseline',
        color: grey
    },
    bold:{
        fontWeight: 900,
        fontSize: '24px'
    },
    small:{
        marginLeft: '12px'
    }
})
);


interface Product{
    id:number,
    title:string,
    image:string,
    imageType:string
}


const Results = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const searchProducts = async(query:string) => {

        const api = `https://api.spoonacular.com/food/products/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&number=50`;
    
        const req = await fetch(api);
    try{
        if(req.status === 200){
            const res = await req.json();
            console.log(res);
            const {totalProducts, products} = res;
            setNumResults(totalProducts);
            setProducts(products);
            return res.results;
        }
    }catch(e){
        console.log(e);
        //throw new Error('error');
    }
    
        
    }
    
    const {query} = useQuery();
    const [numResults, setNumResults] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            searchProducts(query);
        }, 1000);

        return () => clearTimeout(timer)
    }, [query])

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className={classes.root}>
            <div className={classes.abRoot}>
                <div>
                    <Typography><Box fontSize={32} fontWeight={600}>{SEARCH_GREETING}</Box></Typography>
                    <Typography><Box fontSize={26} fontWeight={600}>{SEARCH_MESSAGE}</Box></Typography>
                </div>
               <Searchbar placeholder={PLACEHOLDER}/>
            </div>
            <div>
                <div className={classes.text}>
                    <Typography >{RESULTS_FOR}<span className={classes.bold}>{query}</span></Typography>
                    <Typography className={classes.small}><Box fontSize={12}>{numResults} {NO_RESULTS}</Box></Typography>
                </div>
            </div>
            <List products={products}/>
            </Container>
            <Modal />
        </React.Fragment>
    )
}

export default Results;
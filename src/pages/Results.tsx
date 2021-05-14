import React from "react";
import Searchbar from "../components/searchbar/Searchbar";
import {NO_RESULTS, PLACEHOLDER, RESULTS_FOR, SEARCH_GREETING, SEARCH_MESSAGE} from "../utils/constants";
import {Box, Container,makeStyles, Theme, createStyles, CssBaseline, Typography} from "@material-ui/core";
import {blueGrey} from "@material-ui/core/colors"
import List from "../components/list/List";

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
        alignItems: 'flex-end',
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
)

const Results = () => {
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
                    <Typography >{RESULTS_FOR}<span className={classes.bold}>"easy"</span></Typography>
                    <Typography className={classes.small}><Box fontSize={12}>1978 {NO_RESULTS}</Box></Typography>
                </div>
            </div>
            <List />
            </Container>
        </React.Fragment>
    )
}

export default Results;
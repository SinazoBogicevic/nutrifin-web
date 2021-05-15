import React, {FC, ReactElement} from "react";
import background from "../../images/background.jpg";
import {makeStyles, createStyles, Theme, fade} from "@material-ui/core/styles";
import { Box, Fab, Typography, Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import green from "@material-ui/core/colors/green";
import { useHistory } from "react-router";

interface Props {
    title: String
}

const primary = green[500];

const useStyles = makeStyles((theme:Theme) =>
createStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${background})`,
        backgroundSize:'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minWidth: '100vw',
        minHeight: '100vh',

    }, 
    main_container:{
        width: '80%',
        transform: 'translateY(-12%)',
    },
    abRoot:{
      display: 'flex',
        background: primary,
    
    },
    text:{
        color: 'white',
        marginBottom: '52px',
        textAlign: 'center',
        
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
        flexGrow: 1,
      },
    button:{
      width: '50%',
      background: primary 
    }
})
)

const Hero: FC<Props> = ({title}): ReactElement=> {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.container}>
            <div className={classes.main_container}>
                <Typography className={classes.text} variant="h4" >
                    <Box fontSize={50} fontWeight={700}>{title}</Box>
                </Typography>
                <div className={classes.root}>
                <Button 
                 className={classes.button}color="primary"  
                 variant="contained" 
                 size="large"
                 onClick={() => history.push("/search")}>Let's get started</Button>
                </div>
            </div>
        </div>

    )
}

export default Hero;
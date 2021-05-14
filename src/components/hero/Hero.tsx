import React, {FC, ReactElement} from "react";
import background from "../../images/background.jpg";
import {makeStyles, createStyles, Theme, fade} from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import green from "@material-ui/core/colors/green";

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
        background: primary,
    
    },
    text:{
        color: 'white',
        marginBottom: '52px',
        textAlign: 'center',
        
    },
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search_hero: {
        position: 'relative',
        width: '100%',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        
      },
      searchIcon_hero: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot_hero: {
        color: 'inherit',
        width:  '100%'
      },
      inputInput_hero: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        
      },
})
)

const Hero: FC<Props> = ({title}): ReactElement=> {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.main_container}>
                <Typography className={classes.text} variant="h4" >
                    <Box fontSize={50} fontWeight={700}>{title}</Box>
                </Typography>
                <div className={classes.root}>
      <AppBar className={classes.abRoot} position="static">
        <Toolbar>
          <div className={classes.search_hero}>
            <div className={classes.searchIcon_hero}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot_hero,
                input: classes.inputInput_hero,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
            </div>
        </div>

    )
}

export default Hero;
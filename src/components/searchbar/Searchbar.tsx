import React, {FC, ReactElement} from "react";
import {createStyles, makeStyles, Theme, fade} from "@material-ui/core/styles"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {green} from "@material-ui/core/colors";

interface Props {
    placeholder: String
}

const primary = green[400];

const useStyles = makeStyles((theme:Theme) =>
createStyles({
    container:{
        display: 'flex',
        maxWidth: '50%',
        margin: '32px 0 36px'

    }, 
    abRoot:{
        background: primary,
    
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

const Searchbar: FC<Props> = () : ReactElement => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
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
    )
}


export default Searchbar;
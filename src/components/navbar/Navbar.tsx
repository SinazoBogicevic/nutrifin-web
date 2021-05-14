import React, {ReactElement, FC} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

import green from "@material-ui/core/colors/green"
import { AppBar, InputBase, Hidden } from "@material-ui/core";
import {makeStyles, createStyles, Theme, fade} from "@material-ui/core/styles"


interface Props{
    title: String
}

const primary = green[700];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    abRoot:{
      backgroundColor: primary
    },
    title: {
      flexGrow: 1,
      display: 'block',
      
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);


const Navbar : FC<Props> = ({title}) : ReactElement => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.abRoot}>
          <Toolbar>
            
            <Typography className={classes.title} variant="h3" noWrap>
              {title}
            </Typography>
            <Hidden xsDown>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar;
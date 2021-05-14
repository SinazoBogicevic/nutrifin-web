import React, {FC, ReactNode} from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {APP_TITLE} from "../utils/constants";
import Navbar from "./navbar/Navbar";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root:{
        flex:1,
        display: "flex",
        flexDirection: "column"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        background: theme.palette.background.paper,
        marginLeft: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(9) + 1,
        },
      },
})
);

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {<CssBaseline />}
            <Navbar title={APP_TITLE}/>
            <main >
                {children}
            </main>
        </div>
    )
}

export default Layout;
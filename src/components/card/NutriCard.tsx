import { Grid, CardActions, Card, makeStyles, Typography ,createStyles, Theme, CardHeader, IconButton, CardMedia, CardContent } from "@material-ui/core";
import Save from "@material-ui/icons/Save";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CaloriesIcon from "@material-ui/icons/DirectionsRun";
import React, {FC, ReactElement} from "react";
import background from "../../images/background.jpg";

interface Props{
    data: String
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345
    },
    media:{
      height: 0,
      paddingTop: '56.25%'
    },
    center:{
      display: 'flex',
      alignItems: 'center'
    }
  }),
);

const NutriCard  = () : ReactElement => {
    const classes = useStyles();
    return(
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}> 
            <CardHeader action={
              <IconButton aria-label='like'>
                <Save/>
              </IconButton>
            }/>
            <CardMedia
            className={classes.media}
            image={background}
            title="food"/>
            <CardContent className={classes.center}>
              <Typography color="textSecondary" component='p'>
                data
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="calories">
                <CaloriesIcon />
              </IconButton>
            </CardActions>
            </Card>
        </Grid>
    )
}

export default NutriCard;
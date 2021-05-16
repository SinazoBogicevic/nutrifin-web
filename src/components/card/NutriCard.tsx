import { Grid, CardActions, Card, makeStyles, Typography ,createStyles, Theme, CardHeader, IconButton, CardMedia, CardContent } from "@material-ui/core";
import Save from "@material-ui/icons/Save";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CaloriesIcon from "@material-ui/icons/DirectionsRun";
import React, {FC, ReactElement} from "react";
import background from "../../images/background.jpg";
import { useModal } from "../../ModalContext";
import {API_KEY} from "../../utils/constants"

interface Props{
  id:number
    title: String,
    image: any
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

const NutriCard: FC<Props>  = ({id, title, image}) : ReactElement => {
    const classes = useStyles();
    const {open,setId,setOpen, setNutrition} = useModal();

    const fetchModalInfo = async(id:number) => {

      const api = `https://api.spoonacular.com/food/products/${id}?apiKey=${API_KEY}`
      console.log(api);
      const req = await fetch(api);
      
      try{
      if(req.status === 200){
          const res = await req.json();
          const {title, importantBadges, nutritionInfo, description, ingredientList, images} = res;
          const data = {title, importantBadges, nutritionInfo, description, ingredientList, images}
          console.log(data)
          setNutrition(data);
          return res.results;
      }
  }catch(e){
      console.log(e);
      //throw new Error('error');
  }
    }

    const sendModalData = () => {
      setId(id);
      fetchModalInfo(id)
      setOpen(!open)
    }

    
    return(
        <Grid item xs={12} sm={6} md={4} onClick={sendModalData}>
            <Card className={classes.root}> 
            <CardHeader action={
              <IconButton aria-label='like'>
                <Save/>
              </IconButton>
            }/>
            <CardMedia
            className={classes.media}
            image={image}
            title="food"/>
            <CardContent className={classes.center}>
              <Typography color="textSecondary" component='p'>
                {title}
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
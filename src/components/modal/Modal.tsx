import React, {ReactElement, useEffect, useState}from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { useModal} from '../../ModalContext';
import { CardMedia } from '@material-ui/core';
import {DialogContentText, 
  DialogProps, Avatar, IconButton, Card, Collapse, 
  CardContent ,makeStyles, createStyles, Theme, CardHeader, 
  CardActions, } from "@material-ui/core"
import green from "@material-ui/core/colors/green"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import Tables from "../table/Tables"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: green[400],
    },
    MuiDialogContentTextRoot:{
      marginBottom: '1px'
    }
  }),
);


const Modal = () : ReactElement => {
  const classes = useStyles();
  const {open,mNutrition, setOpen} = useModal();
  const [scroll] = React.useState<DialogProps['scroll']>('paper');
  const {title, description, nutrition, ingredientList, images} = mNutrition;
  const imgUrl = images[0];

  const descriptionElementRef = React.useRef<HTMLElement>(null);

  const handleClose = () => {
    setOpen(!open);
    
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        
        <DialogContentText
            id="scroll-dialog-description"
            className={classes.MuiDialogContentTextRoot}
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="May 16, 2021"
      />
      <CardMedia
        className={classes.media}
        image={imgUrl}
        title={title}
      />
      <CardContent >
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
            {ingredientList}
          </Typography>
          <Tables data={nutrition}/>
        </CardContent>
      </Collapse>
    </Card>
    </DialogContentText>

      </Dialog>
    </div>
  );
}


export default Modal
import React, {ReactElement, useEffect, useState}from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useModal } from '../../ModalContext';

interface Nutrition{
    title:string,
    importantBadges: string[],
    nutrition: {},
    description: string,
    ingredientList:string,
    images: string[]
}

const Modal = () : ReactElement => {
  const {id, open, setOpen} = useModal();
  const [productInfo, setProductInfo] = useState<Nutrition[]>([]);
  
  const fetchModalInfo = async(id:number) => {

    const api = `https://api.spoonacular.com/food/products/${id}?apiKey=86cb0402dc1141f09758a8efee3ab96e`
    console.log(api);
    const req = await fetch(api);
    
    try{
    if(req.status === 200){
        const res = await req.json();
        console.log(res);
        setProductInfo(res);
        return res.results;
    }
}catch(e){
    console.log(e);
    //throw new Error('error');
}
  }

  const handleClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
      fetchModalInfo(id)
  })

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {id}
        </DialogTitle>
        <DialogContent dividers >
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions >
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Modal
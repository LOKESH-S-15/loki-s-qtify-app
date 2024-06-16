import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import style from "./Buttn.module.css"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Feedback = (children) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
  return (
   
    <React.Fragment>
    <button className={style.btn} onClick={handleClickOpen}>{children.children}
      
    </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Give Feedback</DialogTitle>
        <DialogContent>
        

          <TextField 
            autoFocus
            
            id="name"
            label="Full name"
            type="name"
            fullWidth
            variant="outlined"
            
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="name"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            heigth="200"
            margin="dense"
            id="name"
            label="description"
            type="description"
            fullWidth
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default Feedback

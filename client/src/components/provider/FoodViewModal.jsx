import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { IoClose } from 'react-icons/io5';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <IoClose />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function FoodViewModal(props) {
  const {
    open,
    setOpen,
    foodDetails
  } = props
  const handleClose = () => {
    setOpen(false);
  };
  if (!foodDetails) {
    return null;
  }
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Food Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className='grid grid-cols-2 gap-6'>
            <div >
              <h2 className='font-semibold'>Food Name</h2>
              <p className=''>{foodDetails.name}</p>
            </div>
            <div >
              <h2 className='font-semibold'>Food Price</h2>
              <p className=''>₹{foodDetails.price}</p>
            </div>
            <div>
              <h2 className='font-semibold'>Food Type</h2>
              <p className=''>{`${foodDetails.isVeg ? 'Veg' : 'Non-Veg'}`}</p>
            </div>
            <div className='col-span-2'>
              <h2 className='font-semibold'>Food Description</h2>
              <p className='text-sm'>{foodDetails.description}</p>
            </div>
            <div className='col-span-2'>
              <h2 className='font-semibold py-4'>Food Image</h2>
              <div className='h-36 w-36'>
                <img src={foodDetails.image} alt="Food" className='w-full h-full' />
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
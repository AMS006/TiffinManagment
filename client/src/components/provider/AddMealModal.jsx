import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { addFood } from '../../redux/food/food.action';

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
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddMealModal({open,setOpen}) {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [veg,setVeg] = useState("")
  const [quantity,setQuantity] = useState("")
  const [description,setDescription] = useState("")
  const handleClose = () => {
    setOpen(false);
  };
  const handleTypeChange = (type) => {
    if(type === "veg"){
      setVeg(true)
    }else{
      setVeg(false)
    }
  }
  let image;
  const handleImage = (e) =>{
    image = e.target.files[0];
  }
  const dispatch = useDispatch()
  const handleSubmit =  (e) =>{
    e.preventDefault();
    const form = new FormData();

    form.append("name",name)
    form.append("price",price)
    form.append("description",description)
    form.append("isVeg",veg)
    form.append("quantity",quantity)
    form.append("foodImage",image)
    
    dispatch(addFood(form));
    setOpen(false);
    setName("")
    setPrice("")
    setDescription("")
    image = ""
    setVeg(false)
  }
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add New Meal
        </BootstrapDialogTitle>
            <form action="" className='flex flex-col gap-2 w-96' onSubmit={handleSubmit}>
        <DialogContent dividers>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='name' className='font-semibold'>Name</label>
                  <input type="text" value={name} required name="name" id="name" placeholder="Enter Name of Meal" className="px-3 py-1 border rounded focus:outline-none" onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-1'> 
                  <label htmlFor="price" className='font-semibold'>Price</label>
                  <input type="Number" value={price} required name="price" id="price" placeholder = "Enter Price of Meal" className="px-3 py-1 border rounded focus:outline-none" onChange={(e)=> setPrice(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-1'> 
                  <label htmlFor="price" className='font-semibold'>Enter Per Day Quantity</label>
                  <input type="Number" value={quantity} required name="quantity" id="quantity" placeholder = "Enter Quantity" className="px-3 py-1 border rounded focus:outline-none" onChange={(e)=> setQuantity(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-1'> 
                  <label htmlFor="type" className='font-semibold'>Type</label>
                  <select name="type" required id="type" className='px-3 py-1 border rounded focus:outline-none' onChange={(e) => handleTypeChange(e.target.value)}>
                    <option value="">Select Type of Meal</option>
                    <option value="veg">Veg</option>
                    <option value="nonVeg">Non-Veg</option>
                  </select>
                </div>
                <div className='flex flex-col gap-1'> 
                  <label htmlFor="description" className='font-semibold'>Description</label>
                  <textarea type="Number" value={description} required rows={3}  name="desctiption" id="description" placeholder = "Enter Description of Meal" className="px-3 py-1 border rounded focus:outline-none" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-1'> 
                  <label htmlFor="image" className='font-semibold'>Image</label>
                  <input type="file" value={image} required name="price" id="image" placeholder = "Enter Price of Meal" onChange={handleImage}/>
                </div>  
        </DialogContent>
        <DialogActions>
          <input type="submit" value="Add Meal" autoFocus className="text-white cursor-pointer bg-slate-800 rounded px-2 py-1" />
        </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}

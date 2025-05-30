import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { updateOrder } from '../../redux/order/order.action';

const options = [
  'Delivered',
  'Cancelled'
];

const ITEM_HEIGHT = 48;

export default function OrderActionMenu({ order }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [status, setStatus] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    if (order)
      dispatch(updateOrder({ _id: order._id, status, user: order.user, provider: order.provider, food: order.food }))
  }, [dispatch,status])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleChange = (option) => {
    setStatus(option)
    handleClose();
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => handleChange(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

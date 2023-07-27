import * as React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavbarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate()
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ backgroundColor: 'black', color: 'white' }}
        className='font-semibold flex gap-1.5 items-center '
      >
        <span>Login</span>
        <span className='font-semibold'><AiOutlineDown /></span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => navigate('/signin')}>Login</MenuItem>
        <MenuItem onClick={() => navigate('/signup')}>Sign Up</MenuItem>
        <MenuItem onClick={() => navigate('/loginProvider')}>Provider Login</MenuItem>
        <MenuItem onClick={() => navigate('/registerProvider')}>Provider Registration</MenuItem>
      </Menu>
    </div>
  );
}
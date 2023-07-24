import React from 'react'
import { ImCross } from 'react-icons/im'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function ImageViewer({ img, open, setOpen }) {
  const handleClose = () => setOpen(false);
  return (
    <div className='relative'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='absolute top-2 right-2 cursor-pointer' onClick={handleClose}>
            <ImCross />
          </div>
          <div>
            <img src={img} alt="viewer" />
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ImageViewer
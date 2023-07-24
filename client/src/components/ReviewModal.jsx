import * as React from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import RatingStar from './Rating';
import { addReview } from '../redux/review/review.action';

export default function ReviewModal({ open, setOpen, order }) {

  const [value, setValue] = React.useState(2)
  const [text, setText] = React.useState("")

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      message: text,
      rating: value,
      provider: order.provider,
      user: order.user
    }
    dispatch(addReview(data))
    setText("")
    setValue(2)
    handleClose()
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Your Review</DialogTitle>
        <hr />
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <div className='flex flex-col gap-1 py-2'>
              <label htmlFor='rating' className='font-semibold'>Select Rating</label>
              <RatingStar id="rating" value={value} setValue={setValue} />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="review" className='font-semibold'>Your Review</label>
              <textarea
                className='border focus:outline-none px-2 py-1'
                rows={5}
                cols={50}
                placeholder="Enter Your Review"
                id="review"
                value={text}
                required
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className='flex gap-2 w-full justify-end pt-3'>
              <button onClick={handleClose} className="text-white bg-red-500 px-2 py-1 rounded cursor-pointer">Cancel</button>
              <input type="submit" value="Submit" className="text-white bg-blue-600 px-2 py-1 rounded cursor-pointer" />
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

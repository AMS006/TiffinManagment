import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlinePlus } from 'react-icons/ai'
import { getAllFood } from '../../redux/food/food.action';
import AddMealModal from './AddMealModal';
import MealTable from './MealTable'

function ProviderMeals() {
  const provider = useSelector((state) => state.provider.provider);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllFood(provider._id));
  }, [dispatch, provider._id]);
  const [addMealModal, setAddMealModal] = useState(false);

  return (
    <>
      <div className='flex justify-between p-2'>
        <div>
          <h1 className='font-semibold text-xl'>Manage Meals</h1>
        </div>
        <button className='border bg-green-700 flex items-center gap-1 text-white px-2 py-1 rounded' onClick={() => setAddMealModal(true)}>
          <AiOutlinePlus />
          <span>Add Meals</span>
        </button>
      </div>

      <div className='py-3 px-3'>
        <AddMealModal open={addMealModal} setOpen={setAddMealModal} />
        <MealTable addMealModal={addMealModal} setAddMealModal={setAddMealModal} />
      </div>
    </>
  )
}

export default ProviderMeals

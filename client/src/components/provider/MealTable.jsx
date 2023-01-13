import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import { useDispatch, useSelector } from 'react-redux';
import {MdDelete,MdEdit} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
import AddMealModal from './AddMealModal';
import { deleteFood } from '../../redux/food/food.action';
import FoodViewModal from './FoodViewModal';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1a2225',
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: 15
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function ProductPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - 10) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const foods = useSelector((state) => state.foods.foods);
  const [foodModal,setFoodModal] = useState(false);
  const [activeFood,setActiveFood] = useState("")
  const [viewMealModal,setViewMealModal] = useState(false);
  const dispatch = useDispatch()
  const foodDelete = (_id) =>{
    let confirm = window.confirm("Are You Sure You Want to Delete this Food")
    if(confirm)
      dispatch(deleteFood(_id))
    else
      return
  }
  const handleFoodModal = (food) =>{
    setActiveFood(food);
    setFoodModal(true);
  }
  if(foods && foods.length<=0){
    return (
      <div className='flex items-center justify-center w-full py-3'>
        <p className='text-gray-500 text-lg'>No Meals Found</p>
      </div>
    )
  }
  return (
    <>
    {foods && <div className=''>
      <FoodViewModal open={foodModal} setOpen={setFoodModal} foodDetails={activeFood}/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align='center'>Price</StyledTableCell>
                <StyledTableCell align='center'>Quantity Left</StyledTableCell>
                <StyledTableCell align='center'>Type</StyledTableCell>
                <StyledTableCell align='left'>Image</StyledTableCell>
                <StyledTableCell align='center'>Actions</StyledTableCell>
                </TableRow>
            </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? foods.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : foods
          ).map((food) => (
            <StyledTableRow key={food.name}>
                <StyledTableCell component="th" scope="row">
                  {food.name}
                </StyledTableCell>
                <StyledTableCell align='center'>₹{food.price}</StyledTableCell>
                <StyledTableCell align='center'>{food.quantity}</StyledTableCell>
                <StyledTableCell align='center'>{`${food.isVeg ? 'Veg':"Non-Veg"}`}</StyledTableCell>
                <StyledTableCell align='center'>
                    <img src={food.image} alt="" className='w-20 h-20'/>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <div className='flex gap-2 items-center justify-center'>
                    <button className='border px-1 pr-2 py-1 flex items-center rounded-md  text-white bg-blue-600' style={{gap:'1px'}} onClick={()=> handleFoodModal(food)}>
                      <AiFillEye className='text-white' style={{color:'white', fontSize:'14px'}}/>
                      <span className='' >View</span>
                    </button>
                    <button className='border px-2 py-1 flex items-center rounded-md  bg-red-600 text-white' style={{gap:'1px'}} onClick={()=>foodDelete(food._id)}>
                      <MdDelete className='text-white' style={{color:'white', fontSize:'14px'}}/>
                      <span>Delete</span>
                    </button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[8, 16, { label: 'All', value: -1 }]}
              colSpan={3}
              count={foods.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </div>}
    </>
  );
}
import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {BsThreeDots} from 'react-icons/bs'
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
import { useSelector } from 'react-redux';
import OrderActionMenu from './OrderAction';
// import { useDispatch, useSelector } from 'react-redux';
// import {MdDelete,MdEdit} from 'react-icons/md'
// import {AiFillEye} from 'react-icons/ai'


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

export default function OrderTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [activeOrder,setActiveOrder] = useState("");
  
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - 10) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  let orders = useSelector((state) => state.orders.orders)
  let items;
  useEffect(()=>{
    if(orders && orders.length > 0){
      items = [...orders]
      items.sort((a,b)=>{
        let date1 = new Date(a.date)
        let date2 = new Date(b.date)
        date1 = date1.getTime()
        date2 = date2.getTime()

        return date2-date1;
      })
      orders = items
      console.log(orders)
    }
  },[orders])
  if(orders && orders.length<=0){
    return (
      <div className='flex items-center justify-center w-full py-3'>
        <p className='text-gray-500 text-lg'>No Orders Found</p>
      </div>
    )
  }
  return (
    <>
    {orders && <div className=''>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
                <TableRow>
                <StyledTableCell align='center'>Order Id</StyledTableCell>
                <StyledTableCell align='center'>Date</StyledTableCell>
                <StyledTableCell align='center'>User Name</StyledTableCell>
                <StyledTableCell align='center'>Food Name</StyledTableCell>
                <StyledTableCell align='center'>Quantity</StyledTableCell>
                <StyledTableCell align='centeer'>TotalPrice</StyledTableCell>
                <StyledTableCell align='centeer'>Address</StyledTableCell>
                <StyledTableCell align='center'>PaymentStatus</StyledTableCell>
                <StyledTableCell align='center'>OrderStatus</StyledTableCell>
                </TableRow>
            </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : orders
          ).map((order,index) => (
            <StyledTableRow key={index}>
                <StyledTableCell align='center'>
                  {index+1}
                </StyledTableCell>
                <StyledTableCell align='center'>{order.date}</StyledTableCell>
                <StyledTableCell align='center'>{order.user.name}</StyledTableCell>
                <StyledTableCell align='center'>{order.food.name}</StyledTableCell>
                <StyledTableCell align='center'>{order.quantity}</StyledTableCell>
                <StyledTableCell align='center'>₹{order.totalAmount}</StyledTableCell>
                <StyledTableCell align='center'>{order.address}</StyledTableCell>
                <StyledTableCell align='center'>{order.paymentStatus}</StyledTableCell>
                <StyledTableCell align='center'>
                  <div className='flex items-center gap-2'>
                    <span>{order.orderStatus}</span>
                    {order.orderStatus==="Ordered" && <span onClick={()=>setActiveOrder(order)}><OrderActionMenu order={activeOrder}/></span>}
                  </div>
                </StyledTableCell>

                {/* // <StyledTableCell align='center'>
                //   <div className='flex gap-2 items-center justify-center'>
                //     <button className='border px-1 pr-2 py-1 flex items-center rounded-md  text-white bg-blue-600' style={{gap:'1px'}} onClick={()=> handleFoodModal(food)}>
                //       <AiFillEye className='text-white' style={{color:'white', fontSize:'14px'}}/>
                //       <span className='' >View</span>
                //     </button>
                //     <button className='border px-2 py-1 flex items-center rounded-md  bg-red-600 text-white' style={{gap:'1px'}} onClick={()=>foodDelete(food._id)}>
                //       <MdDelete className='text-white' style={{color:'white', fontSize:'14px'}}/>
                //       <span>Delete</span>
                //     </button>
                //   </div>
                // </StyledTableCell> */}
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
              count={3}//orders.length
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
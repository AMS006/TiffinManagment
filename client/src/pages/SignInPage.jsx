import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { BiArrowBack } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { GrSecure } from 'react-icons/gr'
import { login } from '../redux/user/user.action'
import { clearError } from '../redux/user/user.reducer'
import logo from '../components/TiffinWalaLogo.png'


function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  const [isSigning, setIsSigning] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSigning(true)
    dispatch(login({ email, password }));
    setEmail("")
    setPassword("")
  }
  useEffect(() => {
    if (user && user.user) {
      setIsSigning(false)
      toast.success("Logged In Successfully")
      navigate('/')
    } else if (user && user.error) {
      toast.error("Invalid Credentials")
      setIsSigning(false)
      dispatch(clearError())
    }
  }, [user, dispatch, navigate])

  return (
    <div>
      <div className='py-2 sm:px-8 px-2 shadow flex justify-between items-center'>
        <Link to="/" className='flex items-center'>
          <img src={logo} className='h-8 object-contain' alt="" />
          <h1 className='font-bold text-xl font-mono'>Tiffin Wala</h1>
        </Link>
        <Link to="/" className='flex items-center gap-2'>
          <BiArrowBack />
          <span>Back to home</span>
        </Link>
      </div>
      <div className='flex flex-col gap-10 sm:justify-center items-center sm:py-0 py-8' style={{ height: 'calc(100vh - 50px)' }}>
        <h1 className='text-center w-full text-slate-900 md:text-3xl text-xl font-semibold'>SignIn</h1>
        <div className='lg:w-1/3 md:w-2/5 sm:w-2/3 w-4/5'>
          <form action="" className='flex flex-col gap-8' onSubmit={handleSubmit}>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2 h-full'><MdEmail /></span>
              <input type="email" value={email} name="email" placeholder='Enter Your Email' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2 h-full'><GrSecure /></span>
              <input type="password" value={password} name="password" placeholder='Enter Your password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className={`bg-slate-800 text-white py-2 shadow rounded-full ${isSigning ? 'opacity-70 cursor-not-allowed' : ''}`}>
              <input type="submit" value={`${isSigning ? 'Signing...' : 'Sign In'}`} className={`h-full w-full cursor-pointer ${isSigning ? 'opacity-70 cursor-not-allowed' : ''}`} />
            </div>
            <div className='text-slate-900 font-semibold text-center'>
              <Link to="/signup">Don't Have Account? Sign Up with us</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInPage

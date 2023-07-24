import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { BiArrowBack } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { GrSecure } from 'react-icons/gr'
import { FaRegAddressCard } from 'react-icons/fa'
import { FiUser, FiPhone } from 'react-icons/fi'
import { providerRegister } from '../redux/provider/provider.action'
import { clearError } from '../redux/provider/provider.reducer'
import logo from '../components/TiffinWalaLogo.png'

function ProviderRegistration() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [providerLogo, setProviderLogo] = useState("")
  const [address, setAddress] = useState("");
  const [isSigning, setIsSigning] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false)
    } else {
      setIsSigning(true);
      const form = new FormData();
      form.append("name", name);
      form.append("email", email);
      form.append("password", password);
      form.append("phoneNumber", phoneNumber);
      form.append("address", address);
      if (providerLogo.length > 0)
        form.append("providerLogo", providerLogo[0])

      dispatch(providerRegister(form));
      setEmail("")
      setName("")
      setPassword("")
      setConfirmPassword("");
      setPhoneNumber("");
      setPasswordMatch(true);
      setAddress("")
      setProviderLogo("");
    }
  }
  const provider = useSelector((state) => state.provider)
  const navigate = useNavigate()
  useEffect(() => {
    if (provider.isProvider) {
      setIsSigning(false)
      toast.success("Registration Successfull")
      navigate('/provider/dashboard');
    } else if (provider && provider.error) {
      toast.error("Invalid Credentials or Provider already exists")
      setIsSigning(false)
      dispatch(clearError())
    }
  }, [provider, dispatch, navigate])
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
      <div className='flex flex-col gap-4 sm:justify-center items-center sm:py-0 py-8' style={{ height: 'calc(100vh - 50px)' }}>
        <p className='font-semibold'>Register with us to bring your tiffin service online</p>
        <div className='lg:w-1/3 md:w-2/5 sm:w-2/3 w-4/5'>
          <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2 h-full'><FiUser /></span>
              <input type="text" value={name} name="name" placeholder='Enter Your Name' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="name" required onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2 h-full'><MdEmail /></span>
              <input type="email" value={email} name="email" placeholder='Enter Your Email' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2 h-full'><FiPhone /></span>
              <input type="number" value={phoneNumber} name="number" placeholder='Enter Your Mobile Number' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="phone" required onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2 h-full'><FaRegAddressCard /></span>
              <input type="text" value={address} name="address" placeholder='Enter Your Address' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="address" required onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2 h-full'><GrSecure /></span>
              <input type="password" value={password} name="password" placeholder='Enter New Password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <div className='flex items-center border bg-white w-full'>
                <span className='px-2 h-full'><GrSecure /></span>
                <input type="password" value={confirmPassword} name="password" placeholder='Confirm Your Password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="confirm-password" required onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              {!passwordMatch && <small className='text-red-600'>* Password does not match</small>}
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="logo" className='font-semibold text-slate-800'>Add Logo</label>
              <input type="file" name="logo" id="logo" required onChange={(e) => setProviderLogo(e.target.files)} />
            </div>
            <div className={`bg-slate-800 text-white py-2 shadow rounded-full ${isSigning ? 'opacity-70 cursor-not-allowed' : ''}`}>
              <input type="submit" value={`${isSigning ? 'Signing...' : 'Register'}`} className={`h-full w-full cursor-pointer ${isSigning ? 'opacity-70 cursor-not-allowed' : ''}`} />
            </div>
            <div className='text-slate-900 font-semibold text-center'>
              <Link to="/loginProvider">Already Have Account? Sign In here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProviderRegistration

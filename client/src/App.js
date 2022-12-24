import React ,{useEffect} from 'react'
import './App.css';
import {Routes,Route,Navigate,useNavigate} from 'react-router-dom'
import HomePage from './pages/Home.page';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AllProvidersPage from './pages/AllProviders.page';
import ProviderPage from './pages/Provider.page';
import MealPage from './pages/Meal.page';
import { useDispatch,useSelector } from 'react-redux';
import { getAllProviders, getProviderDetails } from './redux/provider/provider.action';
import { getUserDetails } from './redux/user/user.action';
import ProviderRegistration from './pages/ProviderRegistration';
import ProviderLogin from './pages/ProviderLogin';
import ProviderDashboardPage from './components/provider/ProviderDashboardPage';
import ProviderOrders from './components/provider/ProviderOrders';
import ProviderMeals from './components/provider/ProviderMeals';

// PrivateRoute
const PrivateRoute = ({children }) => {
  const provider = useSelector((state) => state.provider);
  return (provider && provider.isProvider) ? children : <Navigate to="/" />;
}

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getProviderDetails());
    dispatch(getUserDetails());
    dispatch(getAllProviders());
  },[dispatch]);

  const navigate = useNavigate();
  const provider = useSelector((state) => state.provider)
  useEffect(() =>{
    if(provider.isProvider)
      navigate('/provider/dashboard');
  },[provider])
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/provider" element={<AllProvidersPage />} />
        <Route path='/food/:_id' element={<MealPage />} />
        <Route path='/provider/:_id' element={<ProviderPage />} />
        <Route path='/registerProvider' element={<ProviderRegistration />} />
        <Route path='/loginProvider' element={<ProviderLogin />} />
        <Route path="/provider/dashboard" element={<PrivateRoute>  
                                                  <ProviderDashboardPage />
                                                </PrivateRoute>
                                                }
        >
          <Route path='Orders' element={<ProviderOrders />} />
          <Route path='Meals' element={<ProviderMeals />} />
        </Route >
      </Routes>
  );
}

export default App;

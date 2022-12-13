import React ,{useEffect} from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/Home.page';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AllProvidersPage from './pages/AllProviders.page';
import ProviderPage from './pages/Provider.page';
import MealPage from './pages/Meal.page';
import { useDispatch } from 'react-redux';
import { getUserDetails } from './redux/user/user.action';
function App() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getUserDetails())
  },[dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/providers" element={<AllProvidersPage />} />
        <Route path='/provider/:_id' element={<ProviderPage />} />
        <Route path='/meal/:_id' element={<MealPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

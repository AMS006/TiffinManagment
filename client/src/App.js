import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/Home.page';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProviderPage from './pages/Provider.page';
import ContactUs from './components/ContactUs';
import Aboutus from '../src/pages/AboutUspage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/providers" element={<ProviderPage />} />
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

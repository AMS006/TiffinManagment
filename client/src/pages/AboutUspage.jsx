import react from 'react';
import HomeLayout from '../layouts/Home.layout';
import Ourteamslider from '../components/Ourteamslider';
import AboutusPara from "../components/AboutusPara";
const AboutUspage =()=>{
    return (
        <>
        <AboutusPara/>
        <Ourteamslider/>
        
        </>
    );
}
export default HomeLayout(AboutUspage);
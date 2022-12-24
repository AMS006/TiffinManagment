import react from "react";
import "../index.css";
import Aboutusimg from '../images/aboutus.jpg';
const AboutusPara=()=>{
    return(
        <>
        <img src={Aboutusimg} alt="About us img" className="h-full w-full heighta" style={{width:"100vw"}}  />
            <div className="py-4">
        
                <h1 className="text-center text-2xl py-4 sm:text-3xl md:text-4xl" style={{fontFaimily:"unset",fontWeight:"600"}}>Welcome to TiffinWala</h1>
                <p className="px-8 text-justify text-sm sm:text-md lg:text-lg" >
              Tiffinwala is an attempt to provide a service that connects people with best of their neighborhoods across various cities. We strive to enable local businesses to meet consumers’ needs of ease and convenience, and, in turn, generate new ways for people to earn, work, and live. By providing our services to local commerce, we’re trying to fulfill our mission to grow and empower local economies.
                </p>
                <p className="px-8 text-justify text-sm sm:text-md lg:text-lg">Search for daily requirements. How it works: you type in an address; we tell you the tiffin providers that are available in that locale as well as showing you droves of pickup restaurants near you. Want to be more specific? Search by cuisine, tiffin providers’ name or menu item. We'll filter your results accordingly.</p>
                
                
                <h6 className="py-2 px-8 text-xl font-medium pt-6 sm:text-2xl ">About:</h6>
                <p className="px-8 font-semibold text-sm sm:text-md lg:text-lg"> <span className="font-bolder  text-xl">*</span>Inception of idea and motive of our project :</p> 
                <p className="px-8 py-1 text-justify text-sm sm:text-md lg:text-lg">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During our time in college, we noticed a rather peculiar conundrum, i.e., lack of ease in dining, whether its breakfast, lunch, or dinner. 	A lot of times, our appetite and convenience were compromised with sparse number of messes we attend, or sometimes, sheer lack of awareness of different food peddlers. So, we thought of creating a website to showcase different messes, peddlers, and caterers in the locale along with a system to reserve a dine, and to apply for monthly subscription to a food provider.</p>
                
                <p className="px-8 py-1 text-justify text-sm sm:text-md lg:text-lg">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To provide convenience for students in searching through various food providers, messes, caterers, we came up with an idea to create a website to address these issues. This is our topic of the mini-project under the syllabus in fifth semester. Gratitude towards respective guide (if necessary).</p>
            </div>
        </>
    );
}
export default AboutusPara;
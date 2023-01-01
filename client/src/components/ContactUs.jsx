import react from "react";
import Navbar from "./Navbar";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Footer from "./Footer";
import img1 from "../images/contactus.jpg";
import "../index.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x264ld8",
        "template_4a4dz4e",
        form.current,
        "pLVyvEp1yiYDgE7rl"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent Successfully!!!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section class="text-gray-600 body-font relative ">
        <img src={img1} alt="Contactus img" className="h-full w-full heighta" />
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p> */}
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Name:
                    </label>
                    <input required
                      type="text"
                      id="name"
                      name="user_name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email:
                    </label>
                    {/* <span className='px-2 h-full'><BsFillEnvelopeFill/> </span> */}
                    <input required
                      type="email"
                      id="email"
                      name="user_email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea required
                      id="message"
                      name="message"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <input
                    type="submit"
                    value="Send"
                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  />
                  {/* <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default ContactUs;

"use client";

import React, { useId, useState } from 'react'
import Link from 'next/link'

export default function ContactForm(){
    const id = useId();
    // States for contact form fields
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    //   Form validation state
    const [errors, setErrors] = useState({});
  
    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");
  
    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
  
    // Validation check method
    const handleValidation = () => {
      let tempErrors = {};
      let isValid = true;
  
      if (fullname.length <= 0) {
        tempErrors["fullname"] = true;
        isValid = false;
      }
      if (email.length <= 0) {
        tempErrors["email"] = true;
        isValid = false;
      }
      if (subject.length <= 0) {
        tempErrors["subject"] = true;
        isValid = false;
      }
      if (message.length <= 0) {
        tempErrors["message"] = true;
        isValid = false;
      }
  
      setErrors({ ...tempErrors });
      console.log("errors", errors);
      return isValid;
    };
  
    //   Handling form submit
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let isValidForm = handleValidation();
  
      if (isValidForm) {
       setButtonText("sending");
        const res = await fetch("./api/sendgrid", {
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            subject: subject,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
  
        const { error } = await res.json();
        if (error) {
          console.log(error);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("Send");
          return;
        };
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Sent!");
      }
      console.log(fullname, email, subject, message);
    };
    return (
              <form
              className="flex flex-col px-8 py-8 text-white">
                <div className="mb-20 bg-rosspurple pb-2 pr-2 -mt-2 pt-2">
                <div className=" bg-rossblue pb-2 pr-2 -ml-2 -mt-4 pt-4 md:whitespace-nowrap relative">
                    <h2 className=" bg-rosspurple -ml-2 -mt-8 px-5 mr-auto md:text-4xl">
                    Send me a message
                    </h2>
                </div>
                </div>

            <div className="flex flex-col bg-rosspurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="fullname" 
                className="text-2xl bg-rosspurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative">
                Full name
                <span className="text-rossred">*</span>
                </label>
                <input id={id} type="text" value={fullname} onChange={e => setFullname(e.target.value)} name="fullname" className="bg-rossblue py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500" />
            </div>

            <div className="flex flex-col bg-rosspurple pr-2 mb-12 shadow-2xl">
                <label htmlFor="email" className="text-2xl bg-rosspurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative">E-mail<span className="text-rossred">*</span></label>
                <input id={id} type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" className="bg-rossblue py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500" />
            </div>

            <div className="flex flex-col bg-rosspurple pr-2 mb-12 shadow-2xl">   
        <label htmlFor="subject" className="text-2xl bg-rosspurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative">Subject<span className="text-rossred">*</span></label>
        <input id={id} type="text" value={subject} onChange={e => setSubject(e.target.value)} name="subject" className=" bg-rossblue py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500" />
        </div>


        <div className="flex flex-col bg-rosspurple pr-2 mb-12 shadow-2xl">
        <label htmlFor="message" className="text-2xl bg-rosspurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative">Message<span className="text-rossred">*</span></label>
        <textarea id={id} value={message} onChange={e => setMessage(e.target.value)} name="message" rows={6} className="bg-rossblue py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500"></textarea>
        </div>

        <div className="bg-rosspurple mx-auto pb-1 pr-1 mb-10">
          <button 
              className=" bg-rossblue drop-shadow-2xl hover:scale-105 justify-center leading-tight mx-auto pb-1 pr-1 -ml-1 -mt-1"
              onClick={handleSubmit}>
                <h3 className="bg-rosspurple  text-white truncate font-bold -ml-1 -mt-1 px-3">
              {buttonText}
              </h3>
          </button>
        </div>  
        { showFailureMessage === true && (<div className="bg-rosspurple pb-2 pr-2"><div className="bg-rossblue text-black">Error! Please try again. If you continue to encounter problems, please contact <Link href="mailto:ross@rossalanford.com">ross@rossalanford.com</Link></div></div>) }
     { showSuccessMessage === true && (<div className="bg-rosspurple pb-2 pr-2"><h4 className="text-center bg-rossblue -ml-2 -mt-2 text-gray-500">Please allow up to 48 hours for me to review your message. Thanks!</h4></div>) }
      </form>
    )
  }
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';


export default function PassSignup() {
  const chatBot = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
       await createUserWithEmailAndPassword(auth,email,password);
       await sendEmailVerification(auth.currentUser);
        chatBot('/chatbot');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section className="flex  justify-center items-center p-5 md:p-0 ">
    <img src="../img/log_chatgpt.svg" alt="chatGPT-logo" className="w-7 absolute top-9"  />
  <div className="h-screen w-screen flex flex-col justify-between items-center pt-52">
    <div className="flex flex-col gap-3 text-center w-96">
      <h2 className="text-2xl font-bold md:text-4xl">Enter your password</h2>
      <p className='pb-5 text-sm'>Note that phone verification may be required for <br /> signup. Your number will only be used to verify your <br /> identity for security purposes.</p>

      <div className=" relative px-5 md:p-0">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input border-2 rounded-lg pl-4 py-4 w-full max-w-6xl outline-none "/>
        <label className=" absolute top-5 right-8 cursor-pointer transition delay-75  text-alg_btn">Edit</label>
      </div>
      <div className=" relative p-5 md:p-0">
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="input border-2 rounded-lg pl-4 py-4 w-full max-w-6xl outline-none "/>
        <label className="placeholder absolute top-8 left-10 pointer-events-none transition delay-75  text-gray-500 md:top-4 md:left-4">Password</label>
      </div>
      <Link to={'/signup/passsignup/phone'} className="text-alg_btn ml-6 text-left md:ml-0">Sign your phone number?</Link>
      <button onClick={signUp} className="py-3 mx-5 rounded-lg text-white  bg-alg_btn md:py-4 md:mt-5 md:mx-0">Continue</button>
      <p>
        Already have an account? <Link to={'/login/passlogin'} className="text-alg_btn pl-1">Log in</Link>
      </p>
      
    </div>

    <footer className="pb-3 pt-10 text-alg_btn md:pb-10">
      <div className="flex gap-4 text-sm ">
        <span>Terms of use</span>|<span>Privacy Policy</span>
      </div>
    </footer>
  </div>
</section>
  )
}

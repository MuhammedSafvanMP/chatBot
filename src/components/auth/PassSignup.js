import React from 'react'
import { Link } from 'react-router-dom';


export default function PassSignup() {
  

  return (
    <section className="flex  justify-center items-center ">
    <img src="../img/log_chatgpt.svg" alt="chatGPT-logo" className="w-7 absolute top-9"  />
  <div className="h-screen w-screen flex flex-col justify-between items-center pt-52">
    <div className="flex flex-col gap-3 text-center w-96">
      <h2 className="text-4xl font-bold ">Enter your password</h2>
      <p className='pb-5 text-sm'>Note that phone verification may be required for <br /> signup. Your number will only be used to verify your <br /> identity for security purposes.</p>

      <div className=" relative ">
        <input type="text" className="input border-2 rounded-lg pl-4 py-4 w-full max-w-6xl outline-none "/>
        <label className=" absolute top-4 right-4 pointer-events-none transition delay-75  text-alg_btn">Edit</label>
      </div>
      <div className=" relative ">
        <input type="password"  className="input border-2 rounded-lg pl-4 py-4 w-full max-w-6xl outline-none "/>
        <label className="placeholder absolute top-4 left-4 pointer-events-none transition delay-75  text-gray-500">Password</label>
      </div>
      <Link to='/phone' className='text-alg_btn text-left'>Sign your phone number?</Link>
      <button  className="py-4 mt-5 rounded-lg text-white  bg-alg_btn">Continue</button>
      <p>
        Already have an account? <Link to={'/login/passlogin'} className="text-alg_btn pl-1">Log in</Link>
      </p>
      
    </div>

    <footer className="pb-10 text-alg_btn">
      <div className="flex gap-4 text-sm ">
        <span>Terms of use</span>|<span>Privacy Policy</span>
      </div>
    </footer>
  </div>
</section>
  )
}

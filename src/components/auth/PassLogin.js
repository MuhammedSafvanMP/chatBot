
import { Link } from 'react-router-dom';

export default function Password() {
  
  return (
    <section className="flex  justify-center items-center p-5  md:p-0">
        <img src="../img/log_chatgpt.svg" alt="chatGPT-logo" className="w-7 absolute top-9"  />
  <div className="h-screen w-screen flex flex-col justify-between items-center pt-52">
    <div className="flex flex-col gap-3 text-center w-96">
      <h2 className="text-2xl font-bold md:text-4xl">Enter your password</h2>
      <div className=" relative px-5 md:p-0 ">
        <input type="text"  className="input  border-2 rounded-lg pl-4 py-4  w-full max-w-6xl outline-none  "/>
        <label className=" absolute top-5 right-8  transition delay-75 cursor-pointer  text-alg_btn">Edit</label>
      </div>
      <div className=" relative p-5 md:p-0">
        <input type="password" className="input border-2 rounded-lg pl-4 py-4 w-full max-w-6xl outline-none "/>
        <label className="placeholder absolute top-8 left-10 pointer-events-none transition delay-75  text-gray-500 md:top-4 md:left-4">Password</label>
      </div>
      <Link to='/reset' className='text-alg_btn ml-6 text-left md:ml-0'>Forgot password?</Link>
      <button  className="py-3 mx-5 rounded-lg text-white  bg-alg_btn md:py-4 md:mt-5 md:mx-0">Continue</button>
      <p>
        Don't have an account? <Link to={'/signup/passsignup'} className="text-alg_btn pl-1">Sign up</Link>
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

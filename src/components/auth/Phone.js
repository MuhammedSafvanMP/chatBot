import { Link } from 'react-router-dom';



export default function Phone() {
    

  return (
    <section className="flex  justify-center items-center ">
    <img src="/img/log_chatgpt.svg" alt="chatGPT-logo" className="w-7 absolute top-9"  />
  <div className="h-screen w-screen flex flex-col justify-between items-center pt-52">
    <div className="flex flex-col gap-3 text-center w-96">
      <h2 className="text-2xl font-bold md:text-4xl">Reset your password</h2>
      <p className='pb-5 text-sm'>Enter your email address and we will send you instructions to reset your password.</p>

      <div className=" relative  px-5 md:p-0">
      <input type="text" className="input border-2 rounded-lg pl-4 py-4 w-full max-w-6xl outline-none "/>
        <label className="placeholder absolute top-5 left-10 pointer-events-none transition delay-75  text-gray-500 md:top-4 md:left-4">Enter Phone number</label>
      </div>
      <div className=" relative px-5 md:p-0 ">
        <input type="text"    className="input border-2 rounded-lg pl-4 py-4 w-full max-w-6xl outline-none "/>
        <label className="placeholder absolute top-5 left-10 pointer-events-none transition delay-75  text-gray-500 md:top-4 md:left-4">Enter OTP</label>
      </div>
      <div id="recaptchar">

      </div>
      <button   className="py-3 mx-5  rounded-lg text-white  bg-alg_btn md:py-4 md:mt-5 md:mx-0">Continue</button>
      <button  className="py-3 mx-5  rounded-lg text-white  bg-alg_btn md:py-4 md:mt-5 md:mx-0">OTP</button>
      <Link to={'/signup/passsignup'} className='text-alg_btn'>
        Back to Apps Client
      </Link>
      
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

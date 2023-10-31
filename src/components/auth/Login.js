import '../css/Style.css';
import { Link } from "react-router-dom";



export default function Log() {

  return (
    <section className="flex  justify-center items-center p-5 md:p-0">
        <img src="./img/log_chatgpt.svg" alt="chatGPT-logo" className="w-7 absolute top-9"  />
      <div className=" h-screen w-screen flex flex-col justify-between items-center pt-52 ">
        <div className="flex flex-col gap-3 text-center w-96">
          <h2 className="text-2xl font-bold pb-5 md:ext-4xl">Welcome back</h2>
          <div className=" relative p-5 md:p-0">
            <input type="text"  className="input border-2 rounded-lg pl-3 py-3 w-full max-w-6xl outline-none md:pl-4 md:py-4"/>
            <label className="placeholders absolute top-8 left-10 pointer-events-none transition delay-75 text-gray-500 md:top-4 md:left-4 placeholder">Email address</label>
          </div>
          <Link to='/pass'  className="py-3 mx-5 rounded-lg text-white  bg-alg_btn md:py-4 md:mt-5">Continue</Link>
          <p>
            Don't have an account? <Link to='/sign' className="text-alg_btn pl-1">Sign up</Link>
          </p>
          <div className="mt-4 flex items-center justify-center">
            <div className="w-2/3 border-t border-gray-400"></div>
            <span className="mx-4 text-xs">OR</span>
            <div className="w-2/3 border-t border-gray-400"></div>
          </div>
          <div className="flex gap-4 mx-5 pl-4 py-4 border-2 rounded-lg border-gray-300 md:mx-0">
            <img src="./img/google.png" alt=""  className="w-5"/>
            Continue with Google
          </div>
          <div className="flex gap-4 mx-5 pl-4 py-4 border-2 rounded-lg border-gray-300 md:mx-0">
            <img src="./img/micro.png" alt="" className="w-5" />
            Continue with Microsoft Account
          </div>
          <div className="flex gap-4 mx-5 pl-4 items-center py-4 border-2 rounded-lg border-gray-300 md:mx-0">
            <i class="fa-brands fa-apple text-xl"></i> Continue with Apple
          </div>
        </div>

        <footer className="pt-10 pb-3 text-alg_btn md:pb-10">
          <div className="flex gap-4 text-sm ">
            <span>Terms of use</span>|<span>Privacy Policy</span>
          </div>
        </footer>
      </div>
    </section>
  );

  
}

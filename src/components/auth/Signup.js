import { Link } from "react-router-dom";

const Signup = () => {

  return (
    <section className="flex justify-center items-center">
      <img src="./img/log_chatgpt.svg" alt="chatGPT-logo" className="w-7 absolute top-9" />
      <div className="h-screen w-screen flex flex-col justify-between items-center pt-52">
        <div className="flex flex-col gap-3 text-center w-96">
          <h2 className="text-4xl font-bold">Create your account</h2>
          <p className='pb-5 text-sm'>Note that phone verification may be required for <br /> signup. Your number will only be used to verify your <br /> identity for security purposes.</p>
          <div className="relative">
            <input type="email" className="input border-2 rounded-lg pl-4 py-4 w-full max-w-6xl outline-none" />
            <label className="placeholder absolute top-4 left-4 pointer-events-none transition delay-75  text-gray-500">Email address</label>
          </div>
          <Link to='/signpass' className="py-4 mt-5 rounded-lg text-white bg-alg_btn">
            Continue 
          </Link>
          <p>
            Already have an account? <Link to={'/login'} className="text-alg_btn pl-1">Log in</Link>
          </p>
          <div className="mt-4 flex items-center justify-center">
            <div className="w-2/3 border-t border-gray-400"></div>
            <span className="mx-4 text-xs">OR</span>
            <div className="w-2/3 border-t border-gray-400"></div>
          </div>
          <div className="flex gap-4 pl-4 py-4 border-2 rounded-lg border-gray-300">
            <img src="./img/google.png" alt="" className="w-5" />
            Continue with Google
          </div>
          <div className="flex gap-4 pl-4 py-4 border-2 rounded-lg border-gray-300">
            <img src="./img/micro.png" alt="" className="w-5" />
            Continue with Microsoft Account
          </div>
          <div className="flex gap-4 pl-4 items-center py-4 border-2 rounded-lg border-gray-300">
            <i className="fa-brands fa-apple text-xl"></i> Continue with Apple
          </div>
        </div>

        <footer className="pb-10 text-alg_btn">
          <div className="flex gap-4 text-sm">
            <span>Terms of use</span>|<span>Privacy Policy</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Signup;

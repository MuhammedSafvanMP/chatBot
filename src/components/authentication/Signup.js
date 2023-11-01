import { GithubAuthProvider, GoogleAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const Signup = () => {
  
  const chatBot = useNavigate(); 

  const handleGoogle = async (e) => {
    try {
        const provaider = await new GoogleAuthProvider();
        chatBot('/chatbot');
        return signInWithPopup(auth, provaider);
    } catch (error) {
      console.log(error);
    }
  }

  const handleMicrosft = async (e) => {
    try {
      const provider = await new OAuthProvider('microsoft.com');
      chatBot('/chatbot');
      return signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  const gitHub = async (e) => {
      try {
        const provider = await new GithubAuthProvider();
        chatBot('chatbot');
        return signInWithPopup(auth, provider);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <section className="flex justify-center items-center p-5 md:p-0">
      <img src="./img/log_chatgpt.svg" alt="chatGPT-logo" className="w-7 absolute top-9" />
      <div className="h-screen w-screen flex flex-col justify-between items-center pt-52">
        <div className="flex flex-col gap-3 text-center w-96">
          <h2 className="text-2xl font-bold md:text-4xl">Create your account</h2>
          <p className='pb-5 text-sm'>Note that phone verification may be required for <br /> signup. Your number will only be used to verify your <br /> identity for security purposes.</p>
          <div className="relative p-5 md:p-0">
            <input type="email" className="input border-2 rounded-lg pl-3 py-3 w-full max-w-6xl outline-none md:pl-4 md:py-4" />
            <label className="placeholder absolute top-8 left-10 pointer-events-none transition delay-75  text-gray-500 md:top-4 md:left-4">Email address</label>
          </div>
          <Link to={'/signup/passsignup'} className="py-3 mx-5 rounded-lg text-white bg-alg_btn md:py-4 md:mt-5 md:mx-0">
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
          <div onClick={handleGoogle} className="flex gap-4 mx-5 pl-4 py-4 border-2 rounded-lg border-gray-300 cursor-pointer md:mx-0">
            <img src="./img/google.png" alt="" className="w-5" />
            Continue with Google
          </div>
          <div onClick={handleMicrosft} className="flex gap-4 mx-5 pl-4 py-4 border-2 rounded-lg border-gray-300 cursor-pointer md:mx-0">
            <img src="./img/micro.png" alt="" className="w-5" />
            Continue with Microsoft Account
          </div>
          <div onClick={gitHub} className="flex gap-4 mx-5 pl-4 items-center py-4 border-2 rounded-lg border-gray-300 cursor-pointer md:mx-0">
            <i className="fa-brands fa-apple text-xl"></i> Continue with Apple
          </div>
        </div>

        <footer className="pb-3 pt-10 text-alg_btn md:pb-10">
          <div className="flex gap-4 text-sm">
            <span>Terms of use</span>|<span>Privacy Policy</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Signup;

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";


export default function Main() {
  
  return (

    
    // Main content section
    <section className=" flex justify-center items-center">
      <h2 className="absolute top-6 left-8 text-mlg_text text-3xl font-semibold">
        ChatBOT <i className="fa-solid fa-circle text-2xl"></i>
      </h2>
      <div className="flex flex-col justify-center  w-full h-screen pl-10 bg-mlg_primary text-mlg_text">
        <h3 className="text-6xl font-bold auto-typed">
          {/* Auto Typing code */}
          <Typewriter
            words={[
              "Recommend a dish",
              "Help me pick",
              "Draft an email",
              "Improve my post",
              "Write a text",
              "Help me debug",
            ]}
            loop={1000000000000}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={10000}
          />
        </h3>
        <p className="text-4xl font-semibold">
          <Typewriter
            words={[
              "toiimpress a date who's a picky eater",
              "an outfit that will look good on camera",
              "a gift for my dad who loves fishing",
              "to request a quote from local plumbers",
              "requesting a deadline extension for my project",
              "for selling a used vacuum in good condition",
              "for hiring a store associate",
              "that goes with a kitten gif for a friend having a rough day",
              "asking a friend to be my plus one at a wedding",
              "why the linked list appears empty after I've reversed it",
              "a Python script automating daily reports",
            ]}
            loop={1000000000000}
            cursor
            cursorStyle=<i className="fa-solid fa-circle text-3xl"></i>
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>

            {/* Log in & Sign up link section */}

      <div className="w-8/12 h-screen bg-black text-white flex flex-col justify-end items-center text-center">
            <div className="h-2/4 flex flex-col items-center">
              <h2 className="pb-5 text-3xl font-medium">Get started</h2>
              <div className="flex gap-4 text-xl font-medium">
              <Link  className="px-20 py-4 rounded-md bg-mlg_btn hover:bg-blue-800">Login</Link>
            <Link  className="px-20 py-4 rounded-md bg-mlg_btn hover:bg-blue-800">
              Sign up
            </Link>
              </div>
            </div>

            {/* Footer section */}

            <footer className="pb-10">
          <div className="pb-5 flex gap-1 pl-10">
            <img src="./img/chatgpt.svg" alt="chatGPT-logo" className="w-7" />
            <h4 className="text-2xl">OpenAI</h4>
          </div>
          <div className="flex gap-4 text-sm text-gray-400">
            <span>Terms of use</span>|<span>Privacy Policy</span>
          </div>
        </footer>
      </div>
      

        

      
    </section>
  );
}

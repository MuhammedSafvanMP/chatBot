import React from "react";
import FrontData from "../data/FrontData";
import "../css/Style.css";

export default function ChatBot() {
  return (
    <section className="flex w-[100%] h-screen ">
      <div className="w-[20%] h-screen bg-cf_bg px-3 py-2 text-white">
        <div className="px-2 py-6 flex gap-7 items-center justify-center">
          <button className="flex gap-2 border border-slate-600 rounded-md px-12 py-3 ">
            <img src="./img/add-30.png" className="w-5" alt="" />
            New Chat
          </button>
          <p className="border border-slate-600 rounded-md px-5 py-3">
            <img src="./img/home.svg" className="w-5" alt="" />
          </p>
        </div>
        <div className=" h-[75vh] pt-10 border-b-[1px] border-slate-500  overflow-scroll hide-scroll-bar">
          {[1,2,,3,4,5,5,8,2,4,2,2,5,2,5,2,6,23,5,6].map((item, index) => {
            return (
              <div className="flex gap-3 px-6 py-3 hover:bg-gray-700 rounded-md cursor-pointer">
                <img src="./img/message.svg" alt="" />
                <h4>new chats</h4>
              </div>
            );
          })}
        </div>
        <p className="flex gap-4 pt-4">
          <img src="./img/rocket.svg" className="w-5" alt="" />
          Upgarade plan
        </p>
        <button>hill</button>
      </div>

      <div className="bg-cc_bg w-[80%] h-screen text-center flex flex-col justify-around items-center">
        <div className='bg-cf_bg flex gap-4 px-2 py-3 rounded-md'>
          <button className='bg-cc_bg text-white px-16 py-4 rounded-md'>
          <i className="fa-solid fa-bolt text-green-600 pr-3"></i>
            GPT-3.5</button>
          <button className='px-16 py-4 rounded-md text-gray-500'>
          <i class="fa-regular fa-star pr-3 text-gray-500"></i>
            GPT-4
            <i class="fa-solid fa-lock pl-3 text-gray-500"></i>
            </button>
        </div>

        <div className="pt-10 ">
          <div className='flex justify-center items-center h-full w-full  gap-5 flex-wrap'>
        {FrontData.map((list, id) => (
          <div key={id} className='border-[1px] border-gray-400 w-[45%] h-[35%] px-4 py-5 rounded-2xl '>
            <h5 className='text-gray-100'>{list.title}</h5>
            <small className='text-slate-400'>{list.text}</small>
          </div>
        ))}
      </div>

          {/* <div className=" h-[70vh] flex flex-col gap-8 items-center text-white overflow-scroll hide-scroll-bar">
            <div className="bg-user_bg flex gap-4 max-w-screen-2xl w-full  px-[15rem] py-8 ">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="./img/user-icon.png"
                  class="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </div>
              <p className="break-words">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                totam rerum id laborum pariatur non ratione. Sit quisquam
                dolorum fugiat officia, dolores cum voluptatum sed ab ea
                distinctio delectus unde sunt est alias rerum repellendus
                laudantium illo necessitatibus adipisci placeat fugit provident
                cumque non quos! Architecto ipsam repudiandae eos natus? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsum, error
                nam! Sapiente libero eveniet animi atque ab! Corporis non
                asperiores at velit similique, nisi sapiente totam mollitia hic
                nesciunt libero laborum officia sit perspiciatis ipsa vel,
                officiis est laboriosam sed doloremque. Consequatur quidem alias
                ipsam tempora nesciunt? Sit, natus ratione.
              </p>
            </div>

            <div className="bg-gpt_bg flex gap-4 max-w-screen-2xl mx-auto   px-[15rem] py-8 ">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="./img/chatgptLogo.svg"
                  class="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </div>
              <p className="break-words ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                totam rerum id laborum pariatur non ratione. Sit quisquam
                dolorum fugiat officia, dolores cum voluptatum sed ab ea
                distinctio delectus unde sunt est alias rerum repellendus
                laudantium illo necessitatibus adipisci placeat fugit provident
                cumque non quos! Architecto ipsam repudiandae eos natus?
              </p>
            </div>

          </div> */}

          <div className="w-[60%] flex justify-center items-center m-auto relative pt-10">
            <input
              type="text"
              className="w-full rounded-lg p-4 pr-16 outline-none bg-cc_bg shadow-md shadow-white text-white"
              placeholder="Send message"
            />
            <span className="absolute right-4 top-15 cursor-pointer">
              <img src="./img/send.svg" alt="" />
            </span>
          </div>

          <p className="pt-2 text-xs text-gray-100">
            ChatGPT can make mistakes. Verify important information.
          </p>
        </div>
      </div>
    </section>
  );
}

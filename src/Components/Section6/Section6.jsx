import React from "react";
import gpImg from "./../../assets/imges/landing-page/andriod.png";
import iosImg from "./../../assets/imges/landing-page/andriod.png";
import iphoneImage from "./../../assets/imges/landing-page/sec-7/iPhone-14.png"

export default function Section6() {
  return (
    <section className="pt-[2%] w-full  flex flex-col lg:flex-row">
      <div className=" w-full lg:w-1/2 px-[7%] py-[2%]">
        <h1 className="text-[40px] font-medium">
          Download Rentcar App For <span className="text-[#0D6EFD]">FREE</span>
        </h1>
        <p>For faster, easier booking and exclusive deals.</p>
        <div className="flex ml-[5%] mt-3">
          <img src={gpImg} alt="gpImg" className="lg:w-[20%] h-[10%] mx-2" />
          <img src={iosImg} alt="iosImg" className="lg:w-[20%] h-[10%] mx-2" />
        </div>

        <input
          type="text"
          id="small-input"
          placeholder="Name"
          className="block mt-5 w-[70%] mx-auto lg:mx-0 lg:w-1/3 rounded-full p-2 text-gray-900 border border-gray-300  bg-[#CEDCFF] text-xs  focus:border-black "
        />
        
        <input
          type="text"
          id="small-input"
          placeholder="Phone Number"
          className="block mt-3 w-[70%] mx-auto lg:mx-0  lg:w-1/3 rounded-full p-2 text-gray-900 border border-gray-300  bg-[#CEDCFF] text-xs  focus:border-black "
        />
        
        <input
          type="text"
          id="small-input"
          placeholder="Email"
          className="block my-3 w-[70%] mx-auto lg:mx-0  lg:w-1/3 rounded-full p-2 text-gray-900 border border-gray-300  bg-[#CEDCFF] text-xs  focus:border-black "
        />
        <div className="flex justify-center lg:justify-start">
          <button className="text-white py-1 px-10 rounded-md bg-[#0D6EFD] hover:bg-blue-600">
            Send
          </button>
        </div>
        
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-end">
      <img src={iphoneImage} className="w-[35%]" alt="" />
      </div>
    </section>
  );
}

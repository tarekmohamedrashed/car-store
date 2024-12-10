import React from "react";
import callImg from "./../../assets/imges/footer/call.png";
import locationImg from "./../../assets/imges/footer/location.png";
import smsImg from "./../../assets/imges/footer/sms.png";
import logoImg from "./../../assets/imges/footer/logo-footer.png";
import facebookImg from "./../../assets/imges/footer/facebook.png";
import instagramImg from "./../../assets/imges/footer/instagram.png";
import youtubeImg from "./../../assets/imges/footer/youtube.png";

export default function Footer() {
  return (
    <section className="bg-[#051C34]    px-[5%] ">
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5  py-[2%]  border-b w-full">
        
          <div className="text-white mt-5">
            <img src={logoImg} className="mb-7" alt="" />
            <div className="flex my-2 text-xs">
              <img src={locationImg} className="self-center mr-2" alt="" />
              <h5>
                25566 Hc 1, Glenallen, <br /> Alaska, 99588, USA
              </h5>
            </div>
            <div className="flex my-2 text-xs">
              <img src={callImg} className="self-center mr-2" alt="" />
              <h5 className="mt-1">+603 4784 273 12</h5>
            </div>
            <div className="flex my-2 text-xs">
              <img src={smsImg} className="self-center mr-2" alt="" />
              <h5 className="mt-1">rentcars@gmail.com</h5>
            </div>
          </div>

          <div className="text-white text-xs mt-5">
            <h3 className="mb-7 text-[16px]">Our Products </h3>
            <h5 className="my-2">Career</h5>
            <h5 className="my-2">Car</h5>
            <h5 className="my-2">Packages</h5>
            <h5 className="my-2">Features</h5>
            <h5 className="my-2">Priceline</h5>
          </div>
        
        
          <div className="text-white text-xs mt-5">
            <h3 className="mb-7 text-[16px]">Resources </h3>
            <h5 className="my-2">Download</h5>
            <h5 className="my-2">Help Centre</h5>
            <h5 className="my-2">Guides</h5>
            <h5 className="my-2">Partner Network</h5>
            <h5 className="my-2">Cruises</h5>
            <h5 className="my-2">Developer</h5>
          </div>
          <div className="text-white text-xs mt-5">
            <h3 className="mb-7 text-[16px]">About Rentcars </h3>
            <h5 className="my-2">Why choose us</h5>

            <h5 className="my-2">Our Story</h5>
            <h5 className="my-2">Investor Relations</h5>
            <h5 className="my-2">Press Center</h5>
            <h5 className="my-2">Advertise</h5>
          </div>
          <div className="text-white text-xs mt-5">
            <h3 className="mb-7 text-[16px]">Follow Us</h3>
            <div className="flex ">
              <img className="mr-2" src={facebookImg} alt="" />
              <img className="mr-2" src={instagramImg} alt="" />
              <img src={youtubeImg} className="mr-2" alt="" />
            </div>
          </div>
        
      </div>
      <div className="text-white  py-7 overflow-auto"><small>Copyright 2023 ・ Rentcars, All Rights Reserved</small></div>
    </section>
  );
}

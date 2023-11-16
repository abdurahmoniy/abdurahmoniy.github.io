import React from "react";
import robo from "../assets/robo.png";
import portfolio  from "../assets/resume.pdf";

export default function About() {
  return (
    <div id="about" className="flex md:flex-row flex-col min-h-[600px] my-8">
      <div className="flex-1 flex-col py-0 flex justify-center items-start relative">
        <div className="text-myteal text-[30px] font-medium">About me</div>
        <div className="text-mylight text-[50px] py-4">Hello 👋,</div>
        <div className="">
          <div className="text-mylight text-[18px] text-grd">
            I'm Azizbek, I born on June 27th, 2006 in Tashkent.
          </div>
          <div className=" text-gray-400 text-[15px] md:py-4 py-7 md:mb-0 mb-4">
            I graduated secondary, vocational schools and{" "}
            <a
              href="https://astrum.uz"
              className="text-blue-500"
              target="_blanc"
            >
              Astrum IT Academy
            </a>
            . <br />I got{" "}
            <a
              href="https://upskill.us.qwasar.io/certificates/MTI1Mi1hYmR1cmF4X2F6LW1heS0yMDIxLTIwLTQ5NmI="
              className="text-blue-500"
              target="_blanc"
            >
              sertificate
            </a>{" "}
            of Qwasar Silicon Valley after graduated Astrum IT Academy.
          </div>
          
        </div>
        <div className="flex">
          <div className="socials">
            <div className="text-mylight text-[20px]">Find me in 👇</div>
            <div className="text-myteal fa-2x">
              <a
                href="https://www.instagram.com/abdurakhmoniy/"
                className="px-1"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://abdurahmoniy.t.me"
                className="px-2"
                target="_blank"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/azizbek-abdurahmoniy-2811a9248/"
                className="px-1"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="text-mylight font-mono flex">
              <a href="https://github.com" target="_blank">
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
              <div className="p-1">@abdurahmoniy</div>
            </div>
            <a
              href="#skills"
              className={` mt-5 max-w-[550px] text-myteal`}
            >
              Skills 👇
            </a>
          </div>
          <div className="cv mx-10 md:mx-20 block">
            <div className="text-mylight text-[20px]">Resume'</div>
            <a
              href={portfolio}
              type="button"
              download
              className={`py-2 px-4 my-2 font-myfont font-medium 
          text-[18px] bg-myteal text-mylight rounded-[10px] outline-none`}
            >
              Download
            </a>
          </div>
            
        </div>
      </div>
    </div>
  );
}

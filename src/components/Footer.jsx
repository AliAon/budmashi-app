import { useState,useEffect } from "react";
import Image from "next/image";
import { footerLinks, socialMedia } from "../constants";
import styles from "../../style";
import logo from "../../public/logo.png"; // Make sure this path is correct

const Footer = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setScrolled(true); // Change background color after scrolling 50px
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col lg:px-[3rem] px-[0px] mb-8 w-full`}>
        {/* Left Section: Logo and Description */}
        <div className="flex-1 flex flex-col justify-center items-center md:justify-start md:items-start text-center md:text-left relative">
          {/* Container with always glowing border */}
          <div className="flex flex-col justify-center items-center p-5 border-8 border-[#d71461] shadow-lg relative 
                    transition-all duration-300 shadow-[0_0_15px_5px_#d71461]">
            {/* Overlay Image */}
            <div className="flex flex-row items-center ml-8 space-x-2">
              <Image src={logo} alt="Budmashi Studio" width={40} height={40} />
              <p className="text-white text-[16px] leading-[17.8px]" style={{ fontFamily: "Play, sans-serif" }}>
                BUDMASHI<br />STUDIO
              </p>
            </div>

            {/* Description Text */}
            <p className={`${styles.paragraph} mt-4 max-w-[310px] text-white font-semibold`} style={{ fontFamily: "Play, sans-serif" }}>
              Budmashi Studios is a global leader in sound recordings, music publishing, and performance rights, showcasing Pakistan’s talent worldwide.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-row space-x-6 mt-3">
              {socialMedia.map((social) => (
                <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={social.icon}
                    alt={social.id}
                    width={20}
                    height={20}
                    className="sm:w-[20px] sm:h-[20px] w-[20px] h-[20px] object-contain cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Footer Links */}
        <div className="flex-[1] mt-[25%] sm:mt-0 w-full flex flex-row sm:flex-col md:flex-row justify-left md:justify-start">
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px] sm:min-w-[250px] text-center md:text-left">
              <h4
                className="font-poppins font-bold text-left text-[20px] leading-[27px] text-white"
                style={{ fontFamily: "Play, sans-serif" }}
              >
                {footerLink.title}
                <div className="w-[100px] sm:w-[150px] h-[1px] mt-2 bg-gradient-to-r from-[#d71461] to-blue-500 shadow-[0_0_100px_10px_#007BFF]"></div>
              </h4>

              <ul className="list-none mt-6">
                {footerLink.links.map((link, linkIndex) => (
                  <li
                    key={`${index}-${linkIndex}`}
                    onClick={() => setActive(link.name)} // Updated to use correct variable
                    className={`font-poppins text-left font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer ${
                      linkIndex !== footerLink.links.length - 1 ? "mb-3" : "mb-0"
                    }`}
                    style={{ fontFamily: "Play, sans-serif" }}
                  >
                   
                    <a href={`#${link.link}`}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="w-full pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[10px] leading-[17px] text-white">
          Copyright &copy; 2025 Budmashi Studio. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;

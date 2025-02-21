import { useState, useEffect } from "react";
import close from "../../public/close.svg";
// import menu from "../../public/menu.svg";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../constants";
import "@fontsource/play";
import "@fontsource/orbitron";
import { footerLinks, socialMedia } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Change background color after scrolling 50px
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex py-6 justify-between items-center navbar fixed z-50 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } transition-all duration-500 ease-in-out border-b-[1px] border-[#212064]`}
    >
      {/* Logo and Text in Column */}
      <div className="flex flex-row items-center ml-8 ml-[7%]">
        <img src='/logo.png' alt="hoobank" className="w-[25%] h-[25%]" />
        <p
          className="text-white text-[14px] leading-[18.8px]"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          BUDMASHI <br /> STUDIO
        </p>
      </div>

      {/* Navbar Links */}
      <ul className="list-none sm:flex hidden flex-1 justify-center space-x-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[16px]
              text-white
            `}
            // ${
            //   active === nav.title ? "text-white" : "text-dimWhite"
            // }
            style={{ fontFamily: "Orbitron, sans-serif" }}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {/* Social Media Icons (Desktop) */}
        <div className="flex flex-row px-20 space-x-8">
  {socialMedia.map((social) => (
    <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
      <Image
        src={social.icon}
        alt={social.id}
        className="w-[20px] h-[20px] object-contain cursor-pointer"
        width={120}
        height={120}
      />
    </a>
  ))}
</div>

      </ul>

      {/* Mobile Menu with Social Icons */}
      <div className="sm:hidden  flex flex-row items-center space-x-4 mr-4">

        {/* Menu Icon */}
        {/* <Image
          src={toggle ? close : GiHamburgerMenu}
          alt="menu"
          className="w-[30px] h-[30px] object-contain cursor-pointer bg-[#007BFF] p-1 rounded-lg"
          onClick={() => setToggle(!toggle)}
          width={130}
          height={130}
        /> */}
         {toggle ? (
          <IoClose size={40} onClick={() => setToggle(!toggle)} className="w-[30px] h-[30px] text-white  object-contain cursor-pointer bg-[#212064] p-1 rounded-lg"/> // Close Icon
        ) : (
          <GiHamburgerMenu size={40} onClick={() => setToggle(!toggle)}  className="w-[30px] h-[30px] text-white object-contain cursor-pointer bg-[#212064] p-1 rounded-lg" /> // Hamburger Menu Icon
        )}

        {/* Mobile Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 w-full sidebar`} 
        >
          <ul className="list-none flex flex-col items-start space-y-4 "style={{ fontFamily: "Orbitron, sans-serif" }}>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-semibold cursor-pointer text-[16px] text-black`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false); // Close menu on click
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { discount, robot, bgvideo, topright } from "../../public";
import styles from "../../style";
import GetStarted from "./GetStarted";
import Image from "next/image";
import "@fontsource/play";
import "@fontsource/orbitron";
import { footerLinks, socialMedia } from "../constants";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className="relative w-full sm:h-[400px] lg:h-[650px]  flex items-center justify-center overflow-hidden" >
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-[97%] overflow-hidden">
        <video
          className="w-full h-full opacity-3 absolute top-0 left-0 object-cover"
          src={bgvideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* Content Overlay */}
      <div className={`z-10 flex flex-col sm:flex-row items-center w-full text-white ${styles.paddingY} px-6 sm:px-20`}>
        {/* Left Side: Text Content */}
        <div className="flex-[40%] text-left py-4 px-4 max-w-xs sm:max-w-lg sm:mt-[24%] lg:mt-[50px]">
  <div className="flex justify-start font-semibold items-center mt-[37%] lg:mt-[25%] mb-1 sm:mb-1" style={{ fontFamily: "Orbitron, sans-serif" }}>
    <p className="text-lg text-[#c2115c] font-orbitron">WELCOME</p>
  </div>

  <h1 className="font-semibold text-[36px] sm:text-[61px] leading-[32px] sm:leading-[50.8px] font-orbitron" style={{ fontFamily: "Orbitron, sans-serif" }}>
    Feel the Vibe, Create the Groove          
  </h1>

  <p className="mt-4 sm:mt-1 text-[18px] sm:text-[22px] font-play" style={{ fontFamily: "Play, sans-serif" }}>
    New songs have been released this month with a new style.
  </p>

  <div className="flex justify-start font-semibold items-center mt-4 sm:mt-1" style={{ fontFamily: "Orbitron, sans-serif" }}>
    <p className="text-lg text-[#c2115c] font-orbitron">AVAILABLE ON</p>
  </div>

  {/* Social Icons */}
  <div className="flex justify-start mt-10 sm:mt-2 space-x-4">
    {socialMedia.map((social) => (
      <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
      <Image
        src={social.icon}
        alt={social.id}
        width={160}
        height={160}
        className="w-[16px] h-[16px] object-contain cursor-pointer"
      />
      </a>
    ))}
  </div>

  {/* Button */}
  <div className="flex justify-start mt-5 mb-2">
    <Button onClick={() => (window.location.hash = "about")}/>
  </div>
</div>


        {/* Right Side: Image */}
        <div className="flex-[60%] flex justify-center sm:justify-end mt-0">
          <Image src={topright} alt="robot" className="max-w-[100%] sm:max-w-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

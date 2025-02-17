import { useState } from "react";
import { twodiv, playicon, div2videos } from "../../public"; // Add video file
import Image from "next/image";
const Business = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to toggle between image & video

  return (
    <section className="flex flex-col items-center justify-center py-10 mt-6">
      {/* Title in Center */}
      <div className="mb-2 text-center">
        <p
          className="text-[#c2115c] font-semibold text-1xl font-orbitron"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          OUR JOURNEY
        </p>
      </div>

      <h1
        className="text-white text-4xl sm:text-5xl font-bold font-orbitron text-center"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Discover
      </h1>

      {/* Image/Video Container */}
      <div className="relative flex flex-col items-center justify-center w-full mt-4">
        {isPlaying ? (
          // Video when playing
          <video
            src={div2videos}
            controls
            autoPlay
            className="object-cover rounded-lg"
          />
        ) : (
          // Background Image when video is not playing
          <Image
            src={twodiv}
            alt="Business Background"
            width={900} 
            height={900}
            className="h-full object-cover rounded-lg"
          />
        )}

        {/* Play Button (Shows only when video is not playing) */}
        {!isPlaying && (
          <Image
            src={playicon}
            alt="Play Logo"
           width={300}
           height={100}
            className="absolute w-[20%] sm:w-[10%] object-contain left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setIsPlaying(true)} // Start video on click
          />
        )}
      </div>
    </section>
  );
};

export default Business;

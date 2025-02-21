import { playsong } from "../../public";
import { songs } from "../constants";
import Image from "next/image";
import styles from "../../style";

const Clients = () => (
  <section
  id="releases" 
    className={`${styles.flexCenter} `}
    style={{
      background: "linear-gradient(to top left, #100726 80%, #800040 100%)", // Smooth purple in top-left only
    }}
  >
    <div className="flex flex-col items-center w-full mb-20">
      {/* Centered Overview */}
      <p
        className="text-1xl text-[#c2115c] font-semibold mb-10 mt-20"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        RELEASES
      </p>

      {/* Table */}
      <div className="w-[100%] sm:w-[70%]">
        <table className="min-w-full table-auto text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>
          <thead>
            <tr >
              <th className="px-6 py-3 text-[10px] sm:text-lg text-left">Name of Song</th>
              <th className="px-4 py-3 text-[10px] sm:text-lg text-left">Date of Release</th>
              <th className="px-4 py-3 text-[10px] sm:text-lg text-start">Available On</th>
            </tr>
          </thead>
          <tbody className="" style={{ fontFamily: "Play, sans-serif" }}>
            {songs.map((song) => (
              <tr
                key={song.id}
                className="cursor-pointer"
                style={{
                  transition: "background-color 0.3s, transform 0.3s",
                }}
                // Apply hover effect for the entire row
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(to right, #100726, #800040)"; // Apply gradient to the entire row
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = ""; // Reset background color
                  e.currentTarget.style.transform = "scale(1)"; // Reset scale
                }}
              >
               <td className="px-6 py-2 sm:text-lg text-[10px] text-left flex items-center space-x-2">
               <Image 
    src={song.picture} 
    className="w-[27px] sm:w-[40px] sm:h-[40px] h-[27px] cursor-pointer" 
    alt="Play"
  />
  <Image 
    src={playsong} 
    className="w-[17px] sm:w-[24px] sm:h-[24px] h-[17px] cursor-pointer" 
    alt="Play"
  />
  <span>{song.name}</span>
</td>

                <td className="px-4 py-2 sm:text-lg text-left text-[10px] font-bold">{song.releaseDate}</td>
                <td className="px-4 py-6 justify-start items-center  flex   space-x-3">
        {song.availableOn.map((platform) => (
          <a 
            key={platform.name} 
            href={platform.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Image src={platform.icon} alt={platform.name} className="w-[13px] sm:w-[20px]   sm:h-[20px] h-[13px] cursor-pointer" />
          </a>
        ))}
      </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Clients;

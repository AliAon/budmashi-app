import React from 'react';
import styles, { layout } from "../../style";

const Artist = () => (
  <section
    id="artists"
    className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

    <div className="flex flex-col sm:flex-row  w-full justify-between">
      {/* Left Section: Artist Names */}
      <div className="w-full flex items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <p className="text-1xl text-[#c2115c] font-semibold" style={{ fontFamily: "Orbitron, sans-serif" }}>
          ARTISTS
        </p>
      </div>

      {/* Right Section: Artist Images */}
      <div className="flex flex-col sm:flex-row  justify-between  sm:space-y-0 ">
        {/* Artist Card 1 */}
        <div className="card flex flex-col items-center p-0 max-w-full sm:max-w-[300px] shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 relative group">
          <div
            className="w-[300px] sm:w-[200px] h-[400px] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://budmashi.com/wp-content/uploads/al_opt_content/IMAGE/budmashi.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-05-at-11.21.30-PM.jpeg')",
            }}
          ></div>
          <div style={{ fontFamily: "Orbitron, sans-serif" }} className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-center py-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-50%]">
            Siyam
          </div>
        </div>

        {/* Artist Card 2 */}
        <div className="card flex flex-col items-center p-0 max-w-full sm:max-w-[300px] shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 relative group">
          <div
            className="w-[300px] sm:w-[200px] h-[400px] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://budmashi.com/wp-content/uploads/al_opt_content/IMAGE/budmashi.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-05-at-11.19.30-PM-1.jpeg')",
            }}
          ></div>
          <div style={{ fontFamily: "Orbitron, sans-serif" }} className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-center py-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-50%]">
            Ghani
          </div>
        </div>

        {/* Artist Card 3 */}
        <div className="card flex flex-col items-center p-0 max-w-full sm:max-w-[300px] shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 relative group">
          <div
            className="w-[300px] sm:w-[200px] h-[400px] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://budmashi.com/wp-content/uploads/al_opt_content/IMAGE/budmashi.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-05-at-11.19.31-PM.jpeg')",
            }}
          ></div>
          <div style={{ fontFamily: "Orbitron, sans-serif" }} className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-center py-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-50%]">
            Eman
          </div>
        </div>

        {/* Artist Card 4 */}
        <div className="card flex flex-col items-center p-0 max-w-full sm:max-w-[300px] shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 relative group">
          <div
            className="w-[300px] sm:w-[200px] h-[400px] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://budmashi.com/wp-content/uploads/al_opt_content/IMAGE/budmashi.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-04-at-2.37.25-AM.jpeg')",
            }}
          ></div>
          <div style={{ fontFamily: "Orbitron, sans-serif" }} className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-center py-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-50%]">
            Budmashi
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Artist;

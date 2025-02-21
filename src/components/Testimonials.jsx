import bg2  from "../../public/bg2.jpg";
import styles from "../../style";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.flexCenter} flex-col relative h-auto sm:h-[500px] px-4 sm:px-0 py-12 bg-gradient-to-r from-[#0e0837] to-[#800040]`}
  >
    {/* Background Image Overlay with Opacity */}
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{
        backgroundImage: `url("/bg2.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.3, // Adjust opacity (0.0 to 1.0)
      }}
    ></div>

    {/* Text container - Absolute for desktop, stacked for mobile */}
    <div className="relative z-10 bg-primary bg-[#0e0837] p-[1.5rem] sm:p-8 shadow-lg sm:absolute sm:top-0 sm:right-20 sm:w-[55%] w-[100%]  mx-auto sm:text-left rounded-lg sm:rounded-none">
      <p
        className="text-1xl text-left sm:text-left text-[#c2115c] font-semibold"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Overview
      </p>
      <h1
        className="mt-4 sm:mt-5 text-left sm:text-left font-semibold text-white text-[24px] sm:text-[50px] leading-tight sm:leading-[50.8px]"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Global Music Publishing
      </h1>
      <p
        className="mt-4 sm:mt-5 text-left sm:text-left text-[15px] sm:text-[15px] text-white"
        style={{ fontFamily: "Play, sans-serif" }}
      >
        Beyond music production and development, we provide a global, full-service, independent music publishing outfit
        offering bespoke creative support from its A&R, Synchronization, and Marketing teams and diligent administration
        by its in-house Copyright, Licensing, Income Tracking, and Royalty departments.
      </p>
    </div>
  </section>
);

export default Testimonials;

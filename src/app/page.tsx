"use client";
import React, { useState, useEffect } from "react";
import {
  Artist,
  Billing,
  Business,
  CTA,
  Clients,
  Footer,
  Hero,
  Navbar,
  // Stats,
  Testimonials,
} from "../components";
import Image from "next/image";
import styles from "../../style";
import "@fontsource/play";
import "@fontsource/play/700.css";
import "@fontsource/orbitron";
import "@fontsource/orbitron/700.css";
import { motion } from "framer-motion"; // Import Framer Motion
// import logo from "./logo.png"; // Ensure you have the correct path
import preloaserpng from "../../public/preloaserpng.webp";
import Head from "next/head";
import Link from "next/link";

// Preloader Component with Animation
const Preloader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#0e0837] animate-gradient z-50">
  {/* Animated Logo */}
  <motion.div
    initial={{ opacity: 0.5 }}
    animate={{ opacity: [0.5, 1, 0.5] }} // Blinking effect
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="sm:w-[20%] lg:w-[20%] lg:h-[40%]  h-full sm:h-[20%] "
  >
    <div className="w-[100%] h-[100%] flex justify-center items-center">
    <Image
      src={preloaserpng} // ✅ Correct way to reference public images in Next.js
      alt="hoobank"
      // ✅ Define height to prevent layout shift
      className="sm:w-[20%] sm:h-[20%] lg:w-[100%] lg:h-[100%] xl:w-[100%] xl:h-[100%] "
    />
    </div>
   
  </motion.div>
</div>

);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
    <Head>
      <Link rel="icon" href="/logo.png" />
    </Head>
      {loading && <Preloader />}
      <div className={`bg-primary  w-full overflow-hidden ${loading ? "hidden" : "block"}`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <Hero />
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Business />
            <Billing />
          </div>
        </div>
        <Testimonials />
        <Clients />
        <Artist />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

import { apple, bill, google } from "../../public";
import styles, { layout } from "../../style";

const Billing = () => (
  <section
  id="about" 
  className={`${styles.paddingX} ${styles.paddingY}  ${styles.flexCenter} flex-col relative`}>
  <div className="w-full flex  md:flex-row flex-col lg:px-[3rem] px-[0px] sm:mb-16 mb-6 relative z-[1]">
  <div className="sm:w-full">
  <p className="text-1xl text-center  sm:text-left text-[#c2115c] font-semibold" style={{ fontFamily: "Orbitron, sans-serif" }}>
              ABOUT US
    </p>
  <h1 className="font-bold text-center mt-[5%] text-white sm:text-left justify-center text-[40px] leading-[35.8px]" style={{ fontFamily: "Orbitron, sans-serif" }}>
  
            We Are A <br/> Professional <br />music Production <br/> Company
    </h1>
  </div>
    <div className="w-full md:mt-0 mt-6">
    <p className="mt-5 text-[15px] text-white text-[16px]" style={{ fontFamily: "Play, sans-serif" }}>
    Budmashi Studios is an independent, worldwide leader in the development, production, management and acquisition of sound recordings, music publishing and theatrical performance rights and narrative content, focusing on showcasing the talent of Pakistan to the globe.
<br /><br />
Headquartered in USA with a fully functional recording studio and session musicians in Lahore, Pakistan, Budmashi Studios collaborates with the Pakistani artists across all genres to produce musical content that reflects the true spirit of musical talent hidden in Pakistan.          </p>
    </div>
  </div>
</section>
);

export default Billing;

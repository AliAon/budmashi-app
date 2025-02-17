const Button = ({ styles }) => (
  <a href="#about">
    <button
      type="button"
      className={`py-4 px-6 bg-[#007BFF] text-white font-poppins font-medium text-[15px] outline-none ${styles}`} style={{ fontFamily: "Play, sans-serif" }}>
      Discover More
    </button>
  </a>
);

export default Button;
  
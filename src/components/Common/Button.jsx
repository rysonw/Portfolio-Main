const Button = ({ children }) => {
  return (
    <button className="text-xl text-[#0e0c38] border-2 border-[#0e0c38] font-primary px-8 py-2 my-4 transition-all hover:scale-105 ease-in-out  duration-500 hover:bg-[#0e0c38] hover:text-white ">
      {children}
    </button>
  );
};

export default Button;

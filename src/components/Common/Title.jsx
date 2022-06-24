const Title = ({ children }) => {
  return (
    <h2
      className={`text-[1.8rem] md:text-5xl uppercase font-bold font-title text-primary my-[5rem] pb-4  mx-auto relative text-center title-text`}
    >
      {children}
    </h2>
  );
};

export default Title;

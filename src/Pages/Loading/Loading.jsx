import gif from "../../assets/loading.gif";

const Loading = ({ loaded, loading }) => {
  return (
    <>
      <div className="h-screen fixed flex w-full z-[500] pointer-events-none"> 
        <div
          className={`w-[50%] h-full bg-[#262626] duration-1000 transform ${
            loaded ? "translate-x-[-100%]" : "translate-x-[0]"
          }`}
        ></div>
        <div
          className={`w-[50%] h-full bg-[#262626] duration-1000 transform ${
            loaded ? "translate-x-[100%]" : "translate-x-[0]"
          }`}
        ></div>
        <div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 ${ 
            !loading ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <img src={gif} alt="loading" /> 
        </div>
      </div>
    </>
  );
};

export default Loading;

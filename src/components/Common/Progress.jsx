import { useEffect, useState } from "react";
import "./Progress.css";
import { progressPercentage } from "./ProgressData";
const Progress = ({ done, title }) => {
  const [style, setStyle] = useState({});
  const result = progressPercentage(`${done}`);
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 1200);
  }, []);

  return (
    <div className="my-3">
      <h3 className="mb-2 text-[1.08rem] font-primary text-left">{title}</h3>
      <div className="bg-primary rounded-[20px] relative h-3 w-full progress-line">
        <div
          className={`bg-primary rounded-[20px] flex justify-center items-center h-full w-0 opacity-0 transform ease duration-1000 delay-300 animated absolute after:absolute ${result} after:top-[-28px] after:right-0`}
          style={style}
        ></div>
      </div>
    </div>
  );
};

export default Progress;

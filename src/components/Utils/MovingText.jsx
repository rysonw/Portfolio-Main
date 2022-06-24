import Typewriter from "typewriter-effect";
import "./MovingText.css";

const MovingText = () => {
  return (
    <div className="mt-4 text-center md:text-left moving-text">
      <span className="text-black font-primary text-2xl md:text-4xl">
        I'm a
      </span>
      <Typewriter
        options={{ autoStart: true, loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "<span class='text-[#0e0c38] font-primary text-2xl md:text-4xl font-bold'>Student</span>"
            )
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              "<span class='text-[#f00512] font-primary text-2xl md:text-4xl font-bold'>Programmer</span>"
            )
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              "<span class='text-[#57ca56] font-primary text-2xl md:text-4xl font-bold'>Developer</span>"
            )
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              "<span class='text-[#57ca56] font-primary text-2xl md:text-4xl font-bold'>Service Member</span>"
            )
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              "<span class='text-[#57ca56] font-primary text-2xl md:text-4xl font-bold'>Leader</span>"
            )
            .pauseFor(1500)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default MovingText;

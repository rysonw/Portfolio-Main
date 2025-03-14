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
              "<span class='text-[#615aee] font-primary text-2xl md:text-4xl font-bold'>Engineer</span>"
            )
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              "<span class='text-[#f00512] font-primary text-2xl md:text-4xl font-bold'>Student</span>"
            )
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              "<span class='text-[#30722f] font-primary text-2xl md:text-4xl font-bold'>Veteran</span>"
            )
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              "<span class='text-[#61333d] font-primary text-2xl md:text-4xl font-bold'>Lifelong Learner</span>"
            )
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              "<span class='text-[#3e1763] font-primary text-2xl md:text-4xl font-bold'>Leader</span>"
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

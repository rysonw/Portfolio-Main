import { BsEnvelope, BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";

const Social = () => {
  return (
    <div className="flex justify-center items-center gap-x-8 my-6">
      <a href="mailto:ryson.wong1@outlook.com">
        <BsEnvelope className="text-2xl" />
      </a>

      <a href="https://www.linkedin.com/in/ryson-wong">
        <BsLinkedin className="text-2xl" />
      </a>
      <a href="https://github.com/rysonw">
        <BsGithub className="text-2xl" />
      </a>
    </div>
  );
};

export default Social;

import { BsEnvelope, BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";

const Social = () => {
  return (
    <div className="flex justify-center items-center gap-x-8 my-6">
      <a href="tel:808-428-1202">
        <BsTelephone className="text-2xl" />
      </a>
      <a href="mailto:wongryson36@gmail.com">
        <BsEnvelope className="text-2xl" />
      </a>

      <a href="https://www.linkedin.com/in/ryson-wong-a85980215">
        <BsLinkedin className="text-2xl" />
      </a>
      <a href="https://github.com/rysonw">
        <BsGithub className="text-2xl" />
      </a>
    </div>
  );
};

export default Social;

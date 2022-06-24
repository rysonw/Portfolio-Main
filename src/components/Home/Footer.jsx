import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="py-8 ">
      <FooterSocial />
      <p className="text-custom-blue mt-6 text-center">
        Built by Ryson Wong
        <span className="font-bold text-primary"></span> © 2022
      </p>
    </footer>
  );
};

export default Footer;

import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="py-8 ">
      <FooterSocial />
      <p className="mt-6 text-center">
        Built by <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:text-blue-600 transition-colors">Ryson Wong</span> 
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:text-blue-600 transition-colors"> © 2025</span>
        <span className="ml-2">🛠️</span> {/* Optional icon */}
      </p>
    </footer>
  );
};

export default Footer;

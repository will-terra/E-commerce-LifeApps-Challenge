import Logo from "../atoms/Logo";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-black w-full h-20 px-8">
      <p className="text-white text-xl cursor-pointer">Fale conosco</p>
      <Logo variant="white" />
    </div>
  );
};

export default Footer;

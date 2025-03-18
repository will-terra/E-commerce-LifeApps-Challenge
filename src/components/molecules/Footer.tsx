import Logo from "../atoms/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center bg-black w-full h-16 px-8">
      <p className="text-white text-xl cursor-pointer">Fale conosco</p>
      <Logo variant="white" />
    </footer>
  );
}

export default Footer;

import Link from "next/link";

import { LogoProps } from "@/types/Logo";

const Logo: React.FC<LogoProps> = ({ variant = "black" }) => {
  const styles = `text-[2.5rem] font-black ml-4 xl:ml-12 ${
    variant === "black" ? "text-black" : "text-white"
  }`;

  return (
    <Link href="/" aria-label="Ir para a página inicial">
      <h1 className={styles}>NEISH</h1>{" "}
    </Link>
  );
};

export default Logo;

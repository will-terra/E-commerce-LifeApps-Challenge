import Link from "next/link";

import { LogoProps } from "@/types/Logo";

const Logo: React.FC<LogoProps> = ({ variant = "black" }: LogoProps) => {
  const styles = `text-[2.5rem] font-black ml-4 lg:ml-12 ${
    variant === "black" ? "text-black" : "text-white"
  }`;

  return (
    <Link href="/">
      <h1 className={styles}>NEISH</h1>{" "}
    </Link>
  );
};

export default Logo;

import Link from "next/link";
import React from "react";

interface LogoProps {
  variant: "black" | "white";
}

const Logo = ({ variant = "black" }: LogoProps) => {
  const styles = `text-[2.5rem] font-black ml-12 ${
    variant === "black" ? "text-black" : "text-white"
  }`;

  return (
    <Link href="/">
      <h1 className={styles}>NEISH</h1>{" "}
    </Link>
  );
};

export default Logo;

import Link from "next/link";

import { MainButtonProps } from "@/types/MainButton";

const MainButton: React.FC<MainButtonProps> = ({
  children,
  ariaLabel,
  onClick,
  size = "small",
  variant = "black",
  href,
  styles,
}) => {
  const options = `flex justify-center items-center cursor-pointer hover:bg-gray-600 ${styles} ${
    size === "small"
      ? "text-sm py-1 px-4 w-fit max-w-[7rem] "
      : "text-lg py-2  min-w-[8rem]"
  } ${
    variant === "black" ? "bg-black text-white" : "bg-white text-black"
  } rounded-md border border-black`;

  if (href) {
    return (
      <Link href={href} className={options} aria-label={ariaLabel}>
        <div onClick={onClick}>{children}</div>
      </Link>
    );
  }

  return (
    <div className={options} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </div>
  );
};

export default MainButton;

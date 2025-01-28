import Link from "next/link";

interface MainButtonProps {
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  size?: "small" | "large";
  variant?: "black" | "white";
  href?: string;
  styles?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  children,
  ariaLabel,
  onClick,
  size = "small",
  variant = "black",
  href,
  styles,
}) => {
  const options = `flex justify-center items-center cursor-pointer ${styles} ${
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

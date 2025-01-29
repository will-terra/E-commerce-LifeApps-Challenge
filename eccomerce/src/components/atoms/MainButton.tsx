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
  const options = `flex justify-center items-center cursor-pointer hover:bg-gray-600 ${styles} ${
    size === "small"
      ? "text-sm py-1 px-4 w-fit max-w-[7rem] "
      : "text-lg py-2  min-w-[8rem]"
  } ${
    variant === "black" ? "bg-black text-white" : "bg-white text-black"
  } rounded-md border border-black`;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick?.();
    }
  };

  if (href) {
    return (
      <Link
        tabIndex={0}
        href={href}
        className={options}
        aria-label={ariaLabel}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        <button>{children}</button>
      </Link>
    );
  }

  return (
    <button
      tabIndex={0}
      className={options}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default MainButton;

import React from "react";

type MainButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "large";
  variant?: "black" | "white";
  href?: string;
};

const MainButton: React.FC<MainButtonProps> = ({
  children,
  ariaLabel,
  onClick,
  disabled,
  size = "small",
  variant = "black",
  href,
}) => {
  const styles = `${
    size === "small" ? "text-sm py-2 px-4" : "text-lg py-3 px-6"
  } ${
    variant === "black" ? "bg-black text-white" : "bg-white text-black"
  } rounded-md`;

  if (href) {
    return (
      <a href={href} className={styles} aria-label={ariaLabel}>
        <button onClick={onClick} disabled={disabled}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button
      className={styles}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default MainButton;

type MainButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  size?: "small" | "large";
  variant?: "black" | "white";
  href?: string;
};

const MainButton: React.FC<MainButtonProps> = ({
  children,
  ariaLabel,
  onClick,
  size = "small",
  variant = "black",
  href,
}) => {
  const styles = `flex justify-center items-center ${
    size === "small"
      ? "text-sm py-1 px-4 min-w-[2rem] max-w-[7rem] "
      : "text-lg py-2  min-w-[8rem]"
  } ${
    variant === "black" ? "bg-black text-white" : "bg-white text-black"
  } rounded-md border border-black`;

  if (href) {
    return (
      <a href={href} className={styles} aria-label={ariaLabel}>
        <div onClick={onClick}>{children}</div>
      </a>
    );
  }

  return (
    <div className={styles} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </div>
  );
};

export default MainButton;

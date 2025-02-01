interface AssistButtonProps {
  children: React.ReactNode;
  ariaLabel: string;
  size?: "small" | "large";
  variant?: "black" | "white";
  disabled?: boolean;
  className?: string;
}

const AssistButton: React.FC<AssistButtonProps> = ({
  children,
  ariaLabel,
  size = "small",
  variant = "black",
  disabled = false,
  className,
}) => {
  const options = `${className} flex justify-center items-center cursor-pointer hover:bg-gray-600 ${
    size === "small"
      ? "text-sm py-1 px-4 w-fit max-w-[7rem] "
      : "text-lg py-2  min-w-[8rem]"
  } ${
    variant === "black" ? "bg-black text-white" : "bg-white text-black"
  } rounded-md border border-black`;

  return (
    <div
      tabIndex={0}
      aria-label={ariaLabel}
      className={`${options} ${disabled ? "cursor-not-allowed" : ""}`}
    >
      {children}
    </div>
  );
};

export default AssistButton;

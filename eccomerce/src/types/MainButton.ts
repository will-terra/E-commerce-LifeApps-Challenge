export interface MainButtonProps {
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  size?: "small" | "large";
  variant?: "black" | "white";
  href?: string;
  styles?: string;
}

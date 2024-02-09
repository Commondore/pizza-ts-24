import cn from "clsx";

import styles from "./style.module.css";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  click: () => void;
  children: React.ReactNode;
  color?: "danger" | "success" | "info";
  size?: "xs" | "lg" | "xl";
}

const Button = ({
  children,
  click,
  color,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.btn,
        color && styles[color],
        size && styles[size]
      )}
      onClick={click}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

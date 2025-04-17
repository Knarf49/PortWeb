import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
  disabled?: boolean;
};

const baseStyle =
  "inline-flex items-center justify-center px-5 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500",
  secondary: "bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500",
  ghost: "border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white focus:ring-sky-400",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      disabled={disabled}
      className={clsx(
        baseStyle,
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </motion.button>
  );
}

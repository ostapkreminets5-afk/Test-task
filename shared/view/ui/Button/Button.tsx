import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../../lib/utils";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost" | "danger" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

const variantClass = new Map<Variant, string>([
  ["primary", styles.primary],
  ["ghost", styles.ghost],
  ["danger", styles.danger],
  ["outline", styles.outline],
]);

export const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cn(styles.base, variantClass.get(variant), className)}
    {...props}
  >
    {children}
  </button>
);

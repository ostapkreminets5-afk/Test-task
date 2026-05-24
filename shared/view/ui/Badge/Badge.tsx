import { cn } from "../../../lib/utils";
import styles from "./Badge.module.css";

type Variant = "success" | "error" | "warning" | "info";

type BadgeProps = {
  variant?: Variant;
  children: string | number;
  className?: string;
};

const variantClass = new Map<Variant, string>([
  ["success", styles.success],
  ["error", styles.error],
  ["warning", styles.warning],
  ["info", styles.info],
]);

export const Badge = ({
  variant = "info",
  children,
  className,
}: BadgeProps) => (
  <span className={cn(styles.base, variantClass.get(variant), className)}>
    {children}
  </span>
);

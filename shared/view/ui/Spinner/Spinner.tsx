import styles from "./Spinner.module.css";
import { cn } from "../../../lib/utils";

type SpinnerProps = {
  className?: string;
  label?: string;
};

export const Spinner = ({ className, label = "Loading..." }: SpinnerProps) => (
  <div
    className={cn(styles.wrapper, className)}
    role="status"
    aria-label={label}
  >
    <span className={styles.ring} aria-hidden="true" />
  </div>
);

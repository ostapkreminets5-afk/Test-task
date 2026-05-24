import type { ReactNode } from "react";
import styles from "./EmptyState.module.css";
import { cn } from "../../../lib/utils";

export const EmptyStateRoot = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(styles.wrapper, className)}
    role="status"
    aria-live="polite"
  >
    {children}
  </div>
);

export const EmptyStateIcon = ({ children }: { children: ReactNode }) => (
  <span className={styles.icon} aria-hidden="true">
    {children}
  </span>
);

export const EmptyStateTitle = ({ children }: { children: ReactNode }) => (
  <p className={styles.title}>{children}</p>
);

export const EmptyStateDescription = ({
  children,
}: {
  children: ReactNode;
}) => {
  if (!children) return null;
  return <p className={styles.description}>{children}</p>;
};

export const EmptyState = ({ children }: { children: ReactNode }) => (
  <EmptyStateRoot>{children}</EmptyStateRoot>
);

EmptyState.Root = EmptyStateRoot;
EmptyState.Icon = EmptyStateIcon;
EmptyState.Title = EmptyStateTitle;
EmptyState.Description = EmptyStateDescription;

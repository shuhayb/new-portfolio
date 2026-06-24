import React from "react";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-br from-accent-dark to-[#38BDF8] text-white shadow-[0_8px_30px_-8px_rgba(30,80,214,0.6)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(56,189,248,0.55)] dark:from-[#3B82F6] dark:to-accent-light"
      : "border border-text-light/20 text-text-light hover:border-accent-dark hover:text-accent-dark dark:border-text-dark/20 dark:text-text-dark dark:hover:border-accent-light dark:hover:text-accent-light";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

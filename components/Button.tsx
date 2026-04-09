import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const base = "px-8 py-3 rounded-full font-semibold transition";

  const variants = {
    primary: "bg-[rgb(var(--color-primary))] text-white hover:opacity-90",
    outline: "border border-white text-white hover:bg-white hover:text-[rgb(var(--color-primary))]",
    white: "bg-white text-[rgb(var(--color-primary))] hover:bg-gray-200",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props} />
  );
}
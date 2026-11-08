import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "outline";
  external?: boolean;
};

const variants = {
  primary: "bg-accent text-accent-fg font-bold hover:bg-fg",
  outline: "border border-line-strong text-fg hover:border-accent hover:text-accent",
};

export function ButtonLink({
  variant = "primary",
  external = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-7 text-base transition-colors ${variants[variant]} ${className}`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}

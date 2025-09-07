import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BaseButtonProps = React.ComponentProps<typeof Button>;

export type CTAButtonProps = Omit<BaseButtonProps, "asChild" | "children"> & {
  href?: string;
  children: React.ReactNode;
};

export function CTAButton({
  href,
  children,
  className,
  size = "xl",
  ...rest
}: CTAButtonProps) {
  const composedClassName = cn(
    "relative rounded-full isolate after:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-indigo-500/30 after:blur-2xl after:-z-10 after:opacity-80 after:transition-opacity after:duration-500 hover:after:opacity-100 focus:after:opacity-100 shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:shadow-[0_0_60px_rgba(99,102,241,0.55)] focus:shadow-[0_0_60px_rgba(99,102,241,0.55)] duration-500 after:ease-in",
    className
  );

  if (href) {
    return (
      <Button asChild size={size} className={composedClassName} {...rest}>
        <a href={href}>{children}</a>
      </Button>
    );
  }

  return (
    <Button size={size} className={composedClassName} {...rest}>
      {children}
    </Button>
  );
}

export default CTAButton;



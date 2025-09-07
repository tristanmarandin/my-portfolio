import { cn } from "@/lib/utils";

type DotBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
};

export function DotBackground({ children }: DotBackgroundProps) {
  return (
    <div className="relative flex w-full items-center justify-center bg-background">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children ? <div className="relative z-20 w-full">{children}</div> : null}
    </div>
  );
}

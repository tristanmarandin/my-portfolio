import { cn } from "@/lib/utils";

type GridSmallBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
};

export function GridSmallBackground({ children, className }: GridSmallBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center bg-background",
        // Default height can be overridden by className
        "h-[50rem]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      {children ? <div className="relative z-20 w-full">{children}</div> : null}
    </div>
  );
}

import { ImgHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

type BlurImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
};

export default function BlurImage({ className, onLoad, ...props }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      {...props}
      onLoad={(e) => {
        setIsLoaded(true);
        onLoad?.(e);
      }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform will-change-filter",
        isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-90 blur-md scale-[1.02]",
        className
      )}
    />
  );
}



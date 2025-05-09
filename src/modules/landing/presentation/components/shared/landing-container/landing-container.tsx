import { cn } from "@/lib/utils";
import React from "react";

interface LandingContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function LandingContainer(props: LandingContainerProps) {
  return (
    <div
      className={cn("container w-full mx-auto p-4", {
        [`${props?.className}`]: !!props?.className,
      })}
    >
      {props.children}
    </div>
  );
}

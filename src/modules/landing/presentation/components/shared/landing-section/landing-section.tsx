import { cn } from "@/lib/utils";

interface LandingSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function LandingSection(props: LandingSectionProps) {
  return (
    <section
      {...props}
      className={cn("w-full", {
        [`${props.className}`]: !!props.className,
      })}
    >
      {props.children}
    </section>
  );
}

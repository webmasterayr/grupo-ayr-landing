import {
  Card as ShadCnCard,
  CardContent as ShadCnCardContent,
  CardDescription as ShadCnCardDescription,
  CardFooter as ShadCnCardFooter,
  CardHeader as ShadCnCardHeader,
  CardTitle as ShadCnCardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card(props: CardProps) {
  return (
    <ShadCnCard
      className={cn("", {
        [`${props?.className}`]: !!props?.className,
      })}
      {...props}
    >
      {props.children}
    </ShadCnCard>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader(props: CardHeaderProps) {
  return (
    <ShadCnCardHeader
      className={cn("", {
        [`${props?.className}`]: !!props?.className,
      })}
      {...props}
    >
      {props.children}
    </ShadCnCardHeader>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle(props: CardTitleProps) {
  return (
    <ShadCnCardTitle
      className={cn("", {
        [`${props?.className}`]: !!props?.className,
      })}
      {...props}
    >
      {props.children}
    </ShadCnCardTitle>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription(props: CardDescriptionProps) {
  return (
    <ShadCnCardDescription
      className={cn("", {
        [`${props?.className}`]: !!props?.className,
      })}
      {...props}
    >
      {props.children}
    </ShadCnCardDescription>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent(props: CardContentProps) {
  return (
    <ShadCnCardContent
      className={cn("", {
        [`${props?.className}`]: !!props?.className,
      })}
      {...props}
    >
      {props.children}
    </ShadCnCardContent>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter(props: CardFooterProps) {
  return (
    <ShadCnCardFooter
      className={cn("", {
        [`${props?.className}`]: !!props?.className,
      })}
      {...props}
    >
      {props.children}
    </ShadCnCardFooter>
  );
}

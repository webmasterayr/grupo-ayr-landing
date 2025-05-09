"use client";
import { Button as ShadCnButton } from "@/components/ui/button";
import { ButtonSizes, ButtonVariants } from "./button-variants.enum";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: ButtonSizes.DEFAULT;
}

export default function Button(props: ButtonProps) {
  return (
    <ShadCnButton
      {...props}
      variant={props.variant ?? ButtonVariants.DEFAULT}
      size={props.size ?? ButtonSizes.DEFAULT}
      onClick={(e) => {
        if (props?.onClick) {
          props.onClick(e);
        }
      }}
    >
      {props.children}
    </ShadCnButton>
  );
}

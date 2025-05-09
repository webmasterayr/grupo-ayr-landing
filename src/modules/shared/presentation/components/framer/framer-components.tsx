"use client";
import { HTMLMotionProps, motion } from "framer-motion";

const FramerDiv = (props: HTMLMotionProps<"div">) => {
  return <motion.div {...props}>{props.children}</motion.div>;
};

const FramerButton = (props: HTMLMotionProps<"button">) => {
  return <motion.button {...props}>{props.children}</motion.button>;
};

export { FramerDiv, FramerButton };

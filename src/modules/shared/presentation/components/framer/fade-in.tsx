"use client";
import { ComponentProps, createContext, useContext } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
const FadeInStaggerContext = createContext(false);

const viewport = { margin: "0px 0px -200px", once: false };

interface FadeInStaggerProps extends Omit<MotionDivProps, "as"> {
  as: keyof typeof motion;
  speed?: number;
}

export const FadeInStagger = ({ as, speed = 0.12, ...props }: FadeInStaggerProps) => {
  const AsComponent = motion[as] as React.FC<Omit<FadeInProps, "as">>;

  return (
    <FadeInStaggerContext.Provider value={true}>
      <AnimatePresence key={props.key}>
        <AsComponent initial="hidden" transition={{ staggerChildren: speed }} viewport={{ once: false }} whileInView="visible" {...props} />
      </AnimatePresence>
    </FadeInStaggerContext.Provider>
  );
};

type MotionDivProps = ComponentProps<typeof motion.div>;

export interface FadeInProps extends Omit<MotionDivProps, "as"> {
  as: keyof typeof motion;
  delay?: number;
  duration?: number;
  href?: string;
  target?: string;
}

export const FadeInStaggredChildren: React.FC<FadeInProps> = ({ as, children, ...props }: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  const { key, ...motionProps } = props;
  // Extraer las propiedades que no queremos pasar a AsComponent

  const AsComponent = motion[as] as React.FC<Omit<FadeInProps, "as">>; // Omitimos 'as' aquí también

  return (
    <AnimatePresence key={key}>
      <AsComponent
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
          visible: { opacity: 1, y: 0 },
        }}
        {...(isInStaggerGroup
          ? {}
          : {
              initial: "hidden",
              viewport: viewport,
              whileInView: "visible",
            })}
        {...motionProps} // Pasamos las props omitiendo 'as'
      >
        {children}
      </AsComponent>
    </AnimatePresence>
  );
};

export const FadeIn: React.FC<FadeInProps> = ({ as, children, className, delay = 0.2, duration = 0.3, ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  const AsComponent = motion[as] as React.FC<Omit<FadeInProps, "as">>;

  return (
    <AsComponent
      className={className}
      transition={{ delay: delay, duration: duration }}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            viewport,
            whileInView: "visible",
          })}
      {...props}
    >
      {children}
    </AsComponent>
  );
};

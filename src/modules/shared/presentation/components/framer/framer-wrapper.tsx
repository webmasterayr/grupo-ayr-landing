// 'use client';

// import React, { JSX } from 'react';
// import { HTMLMotionProps, motion } from 'framer-motion';

// export type TagNameType = any;

// export type MotionComponentProps<TagName extends TagNameType> = any;

// export interface FramerProps<TagName extends TagNameType> {
//   as: TagName;
//   children?: React.ReactNode;
//   props?: MotionComponentProps<TagName>;
// }

// function Framer<TagName extends TagNameType>({ as, children, ...props }: FramerProps<TagName>) {
//   const MotionComponent = motion[as as keyof typeof motion];

//   return <MotionComponent {...props}>{children}</MotionComponent>;
// }

// export default Framer;

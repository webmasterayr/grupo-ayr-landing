"use client";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import RenderIf from "../../../utils/render-if/render-if";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface AppDialogProps {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  trigger: React.ReactNode;
  hideTrigger?: boolean;
  showHeader?: boolean;
  customHeader?: React.ReactNode;
  header?: React.ReactNode;
  content: React.ReactNode;
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  className?: string;
}

export function AppDialog(props: AppDialogProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = props.isOpen !== undefined ? props.isOpen : internalIsOpen;

  useEffect(() => {
    if (props.isOpen !== undefined) {
      setInternalIsOpen(props.isOpen);
    }
  }, [props.isOpen]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(state) => {
        setInternalIsOpen(state);
        if (props?.onOpenChange) {
          props?.onOpenChange(state);
        }
      }}
    >
      <RenderIf condition={!props.hideTrigger}>
        <DialogTrigger asChild>{props?.trigger ?? null}</DialogTrigger>
      </RenderIf>
      <DialogContent
        className={cn("p-0 max-h-[95vh] h-full max-w-[95%] sm:max-w-[400px] rounded-2xl", {
          [`${props?.className}`]: !!props.className,
        })}
      >
        <RenderIf condition={props?.showHeader ?? true}>
          <DialogHeader className="p-5 pb-0 max-w-[95%]">
            <RenderIf condition={!!props.header && !props?.customHeader}>
              <DialogTitle>{props.header}</DialogTitle>
            </RenderIf>
            <RenderIf condition={!!props?.customHeader}>{props.customHeader}</RenderIf>
          </DialogHeader>
        </RenderIf>

        <ScrollArea className="max-h-full px-5 overflow-auto">{props.content}</ScrollArea>
        <RenderIf condition={props?.showFooter ?? true}>
          <DialogFooter className="px-5 pb-2">{props?.footerContent ?? null}</DialogFooter>
        </RenderIf>
      </DialogContent>
    </Dialog>
  );
}

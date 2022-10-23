// your-tooltip.jsx

import React from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
type TooltipProps = {
  children: React.ReactNode;
  content: string;
  open?: boolean;
  onOpenChange?: () => void;
};
export function Tooltip({
  children,
  content,
  open,
  onOpenChange,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root onOpenChange={onOpenChange}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content side="top" align="center" {...props}>
        {content}
        <TooltipPrimitive.Arrow width={11} height={5} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}

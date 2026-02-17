import type * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "center";
  pretitle?: string;
  title: string;
}

export function SectionTitle({
  pretitle,
  title,
  align = "center",
  children,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <Container
      className={cn(
        "mt-4 flex w-full flex-col",
        align === "center" ? "items-center justify-center text-center" : "",
        className
      )}
      {...props}
    >
      {pretitle && (
        <div className="font-bold text-primary text-sm uppercase tracking-widest">
          {pretitle}
        </div>
      )}

      {title && (
        <h2 className="mt-3 max-w-2xl font-bold text-3xl text-foreground leading-snug tracking-tight lg:text-4xl lg:leading-tight">
          {title}
        </h2>
      )}

      {children && (
        <p className="max-w-2xl py-4 text-lg text-muted-foreground leading-normal lg:text-xl xl:text-xl">
          {children}
        </p>
      )}
    </Container>
  );
}

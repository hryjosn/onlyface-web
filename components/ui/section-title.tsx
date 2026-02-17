import { cn } from "@/lib/utils"
import * as React from "react"
import { Container } from "./container"

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  pretitle?: string
  title: string
  align?: "left" | "center"
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
        "flex w-full flex-col mt-4",
        align === "center" ? "items-center justify-center text-center" : "",
        className
      )}
      {...props}
    >
      {pretitle && (
        <div className="text-sm font-bold tracking-widest text-primary uppercase">
          {pretitle}
        </div>
      )}

      {title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-foreground lg:leading-tight lg:text-4xl">
          {title}
        </h2>
      )}

      {children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-muted-foreground lg:text-xl xl:text-xl">
          {children}
        </p>
      )}
    </Container>
  )
}

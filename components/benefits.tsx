import Image from "next/image"
import React from "react"
import { Container } from "./ui/container"
import { cn } from "@/lib/utils"

interface BenefitsProps {
  imgPos?: "left" | "right"
  data: {
    title: string
    desc: string
    image: any
    bullets?: {
      title: string
      desc: string
      icon: React.ReactElement
    }[]
  }
}

const Benefits = ({ imgPos = "left", data }: BenefitsProps) => {
  return (
    <section className="py-16 lg:py-24">
      <Container className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div
          className={cn(
            "flex items-center justify-center w-full lg:w-1/2",
            imgPos === "right" ? "lg:order-last" : ""
          )}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-border shadow-primary/5">
              <Image
                src={data.image}
                width={450}
                height={976}
                alt={data.title}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {data.title}
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {data.desc}
            </p>
          </div>

          {data.bullets && (
            <div className="grid gap-6">
              {data.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {bullet.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-foreground">
                      {bullet.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {bullet.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Benefits

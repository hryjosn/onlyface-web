import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./ui/container";

interface BenefitsProps {
  data: {
    title: string;
    desc: string;
    image: any;
    bullets?: {
      title: string;
      desc: string;
      icon: React.ReactElement;
    }[];
  };
  imgPos?: "left" | "right";
}

const Benefits = ({ imgPos = "left", data }: BenefitsProps) => {
  return (
    <section className="py-16 lg:py-24">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div
          className={cn(
            "flex w-full items-center justify-center lg:w-1/2",
            imgPos === "right" ? "lg:order-last" : ""
          )}
        >
          <div className="group relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50 blur-2xl transition duration-1000 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/5 ring-1 ring-border">
              <Image
                alt={data.title}
                className="h-auto w-full transform object-cover transition-transform duration-700 hover:scale-105"
                height={976}
                src={data.image}
                width={450}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col space-y-8 lg:w-1/2">
          <div className="space-y-4">
            <h3 className="font-extrabold text-3xl text-foreground tracking-tight sm:text-4xl lg:text-5xl">
              {data.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed lg:text-xl">
              {data.desc}
            </p>
          </div>

          {data.bullets && (
            <div className="grid gap-6">
              {data.bullets.map((bullet, index) => (
                <div className="flex items-start space-x-4" key={index}>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {bullet.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground text-lg">
                      {bullet.title}
                    </h4>
                    <p className="text-muted-foreground">{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;

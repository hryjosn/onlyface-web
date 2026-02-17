import type * as React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Container } from "./container";

interface ContentLayoutProps {
  children: React.ReactNode;
  subtitle?: string;
  title?: string;
}

export function ContentLayout({
  children,
  title,
  subtitle,
}: ContentLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 lg:py-20">
        <Container size="md">
          {(title || subtitle) && (
            <div className="mb-12 border-border border-b pb-8">
              {title && (
                <h1 className="mb-4 font-extrabold text-3xl text-foreground tracking-tight sm:text-4xl lg:text-5xl">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-muted-foreground text-xl">{subtitle}</p>
              )}
            </div>
          )}
          <article className="prose prose-slate dark:prose-invert prose-h2:mt-12 prose-h2:mb-4 prose-li:mb-2 prose-p:mb-6 max-w-none prose-h2:border-border prose-h2:border-b prose-h2:pb-2 prose-headings:font-bold prose-strong:font-bold prose-a:text-primary prose-h1:text-4xl prose-h2:text-2xl prose-li:text-muted-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-p:leading-relaxed prose-headings:tracking-tight prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

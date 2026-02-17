import { Container } from "./container"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import * as React from "react"

interface ContentLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

export function ContentLayout({ children, title, subtitle }: ContentLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 lg:py-20">
        <Container size="md">
          {(title || subtitle) && (
            <div className="mb-12 border-b border-border pb-8">
              {title && (
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-xl text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          <article className="prose prose-slate dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight 
            prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-li:text-muted-foreground prose-li:mb-2
            prose-strong:text-foreground prose-strong:font-bold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          ">
            {children}
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

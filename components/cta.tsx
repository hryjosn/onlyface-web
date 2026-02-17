import React from "react"
import { Container } from "./ui/container"
import { Button } from "./ui/button"

const Cta = () => {
  return (
    <Container className="py-12">
      <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8 mx-auto bg-primary px-8 py-10 lg:px-16 lg:py-16 rounded-[2.5rem] shadow-2xl shadow-primary/20">
        <div className="relative z-10 flex-grow text-center md:text-left space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to join the community?
          </h2>
          <p className="text-lg font-medium text-primary-foreground/80 max-w-xl">
            Experience a new way of connecting with authentic people. Download Onlyface now.
          </p>
        </div>
        <div className="relative z-10 flex-shrink-0">
          <Button 
            size="lg" 
            variant="secondary" 
            className="h-14 px-10 text-lg font-bold rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Get Started Free
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>
    </Container>
  )
}

export default Cta
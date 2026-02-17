import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Container } from "./ui/container"

// Images are imported from global constants or passed as props in a real app, 
// but here we follow the existing structure.
import Rogue from "../public/img/Rogue.png"

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      <Container className="relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-primary uppercase sm:text-lg lg:text-base xl:text-lg">
                Welcome to Onlyface
              </span>
              <span className="mt-1 block text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-foreground">Where Beauty Meets</span>
                <span className="block text-primary">Approval!</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Connect with like-minded individuals in a community that appreciates beauty and authenticity. Experience social media redesigned for the modern age.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <div className="flex flex-wrap items-center gap-4 sm:justify-center lg:justify-start">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.onlyface"
                  target="_blank"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image
                    src="https://image.onlyface.app/Google-Play-Icon.png"
                    width={180}
                    height={54}
                    alt="Get it on Google Play"
                    className="h-14 w-auto"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/pl/app/onlyface/id6467753501"
                  target="_blank"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image
                    src="https://image.onlyface.app/App-Store-Icon-new.png"
                    width={180}
                    height={54}
                    alt="Download on the App Store"
                    className="h-14 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl ring-1 ring-border/50 overflow-hidden">
              <Image
                src={Rogue}
                width={616}
                height={700}
                className="w-full object-cover dark:hidden transform hover:scale-105 transition-transform duration-700"
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
              <Image
                src="https://image.onlyface.app/Astro.webp"
                width={616}
                height={700}
                className="w-full object-cover hidden dark:block transform hover:scale-105 transition-transform duration-700"
                alt="Hero Illustration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -z-0 h-full w-1/2 bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-0 h-1/2 w-full bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

export default Hero

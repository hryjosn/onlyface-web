import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
// Images are imported from global constants or passed as props in a real app,
// but here we follow the existing structure.
import Rogue from "../public/img/Rogue.png";
import { Container } from "./ui/container";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      <Container className="relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="block font-semibold text-base text-primary uppercase tracking-wide sm:text-lg lg:text-base xl:text-lg">
                {t("welcome")}
              </span>
              <span className="mt-1 block font-extrabold text-4xl tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-foreground">{t("title1")}</span>
                <span className="block text-primary">{t("title2")}</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              {t("description")}
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <div className="flex flex-wrap items-center gap-4 sm:justify-center lg:justify-start">
                <Link
                  className="transition-transform hover:scale-105 active:scale-95"
                  href="https://play.google.com/store/apps/details?id=com.onlyface"
                  target="_blank"
                >
                  <Image
                    alt="Get it on Google Play"
                    className="h-14 w-auto"
                    height={54}
                    src="https://image.onlyface.app/Google-Play-Icon.png"
                    width={180}
                  />
                </Link>
                <Link
                  className="transition-transform hover:scale-105 active:scale-95"
                  href="https://apps.apple.com/pl/app/onlyface/id6467753501"
                  target="_blank"
                >
                  <Image
                    alt="Download on the App Store"
                    className="h-14 w-auto"
                    height={54}
                    src="https://image.onlyface.app/App-Store-Icon-new.png"
                    width={180}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
            <div className="relative mx-auto w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border/50">
              <Image
                alt="Hero Illustration"
                className="w-full transform object-cover transition-transform duration-700 hover:scale-105 dark:hidden"
                height={700}
                loading="eager"
                placeholder="blur"
                src={Rogue}
                width={616}
              />
              <Image
                alt="Hero Illustration"
                className="hidden w-full transform object-cover transition-transform duration-700 hover:scale-105 dark:block"
                height={700}
                src="https://image.onlyface.app/Astro.webp"
                width={616}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -z-0 h-full w-1/2 bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-0 h-1/2 w-full bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Hero;

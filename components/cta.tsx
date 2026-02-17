import { Button } from "./ui/button"
import { Container } from "./ui/container"
import { useTranslations } from "next-intl"

const Cta = () => {
  const t = useTranslations("CTA")

  return (
    <Container className="py-12">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-8 overflow-hidden rounded-[2.5rem] bg-primary px-8 py-10 shadow-2xl shadow-primary/20 md:flex-row lg:px-16 lg:py-16">
        <div className="relative z-10 flex-grow space-y-3 text-center md:text-left">
          <h2 className="font-extrabold text-3xl text-primary-foreground tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-xl font-medium text-lg text-primary-foreground/80">
            {t("description")}
          </p>
        </div>
        <div className="relative z-10 flex-shrink-0">
          <Button
            className="h-14 rounded-2xl px-10 font-bold text-lg shadow-lg transition-all hover:scale-105 active:scale-95"
            size="lg"
            variant="secondary"
          >
            {t("button")}
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>
    </Container>
  )
}

export default Cta

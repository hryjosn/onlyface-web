import Benefits from "../../components/benefits";
import Cta from "../../components/cta";
import {
  homeContent1,
  homeContent2,
  homeContent3,
} from "../../components/data";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import PopupWidget from "../../components/popupWidget";
import Testimonials from "../../components/testimonials";
import { SectionTitle } from "../../components/ui/section-title";
import Video from "../../components/video";
import { useTranslations } from "next-intl";

export default function Home() {
  const tBenefits = useTranslations("Benefits");
  const tFaq = useTranslations("FAQ");
  const tShowcase = useTranslations("Showcase");
  const tTestimonials = useTranslations("Testimonials");
  const tHomeContent = useTranslations("HomeContent");

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <div className="space-y-0" id="features">
        <Benefits
          data={{
            ...homeContent1,
            title: tHomeContent("1.title"),
            desc: tHomeContent("1.desc"),
          }}
        />
        <Benefits
          imgPos="right"
          data={{
            ...homeContent2,
            title: tHomeContent("2.title"),
            desc: tHomeContent("2.desc"),
          }}
        />
        <Benefits
          data={{
            ...homeContent3,
            title: tHomeContent("3.title"),
            desc: tHomeContent("3.desc"),
          }}
        />
      </div>

      <SectionTitle
        pretitle={tBenefits("pretitle")}
        title={tBenefits("title")}
      >
        {tBenefits("description")}
      </SectionTitle>

      <section className="bg-muted/30 py-20" id="faq">
        <SectionTitle pretitle={tFaq("pretitle")} title={tFaq("title")}>
          {tFaq("description")}
        </SectionTitle>
        <Faq />
      </section>

      <SectionTitle pretitle={tShowcase("pretitle")} title={tShowcase("title")}>
        {tShowcase("description")}
      </SectionTitle>
      <Video />

      <SectionTitle pretitle={tTestimonials("pretitle")} title={tTestimonials("title")}>
        {tTestimonials("description")}
      </SectionTitle>
      <Testimonials />

      <Cta />

      <Footer />
      <PopupWidget />
    </main>
  );
}

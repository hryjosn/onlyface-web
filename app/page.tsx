import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { SectionTitle } from "../components/ui/section-title";

import { homeContent1, homeContent2, homeContent3 } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Faq from "../components/faq";
import Video from "../components/video";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <div id="features" className="space-y-0">
        <Benefits data={homeContent1} />
        <Benefits imgPos="right" data={homeContent2} />
        <Benefits data={homeContent3} />
      </div>
      
      <SectionTitle
        pretitle="Onlyface Benefits"
        title="Why should you use this app?"
      >
        Unlock a world of authentic connections on Onlyface, where your unique beauty opens the door to meaningful relationships. Sign up today with just a selfie, enter our curated community, and experience connections that matter. Our exclusive approval system ensures you join a network of individuals who appreciate genuine connections.
      </SectionTitle>

      <section id="faq" className="py-20 bg-muted/30">
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Find answers to common questions about Onlyface and how our community works.
        </SectionTitle>
        <Faq />
      </section>

      <SectionTitle pretitle="Showcase" title="See Onlyface in action">
        Watch our presentation video to understand how Onlyface is redefining social connections.
      </SectionTitle>
      <Video />

      <SectionTitle pretitle="Testimonials" title="What our community says">
        Join thousands of satisfied users who have found authentic connections on Onlyface.
      </SectionTitle>
      <Testimonials />

      <Cta />

      <Footer />
      <PopupWidget />
    </main>
  );
}

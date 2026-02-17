import { Facebook, Heart, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "./ui/container";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: t("product"),
      links: [
        { name: t("features"), href: "/#features" },
        { name: t("safety"), href: "/csae-safety-standards" },
        {
          name: t("appStore"),
          href: "https://apps.apple.com/pl/app/onlyface/id6467753501",
        },
        {
          name: t("playStore"),
          href: "https://play.google.com/store/apps/details?id=com.onlyface",
        },
      ],
    },
    {
      title: t("support"),
      links: [
        { name: t("helpCenter"), href: "/delete-account-tutorial" },
        { name: t("privacy"), href: "/privacy" },
        { name: t("eula"), href: "/eula" },
        { name: t("deleteAccount"), href: "/delete-account-tutorial" },
      ],
    },
    {
      title: t("social"),
      links: [
        {
          name: "Instagram",
          href: "https://www.instagram.com/onlyface.official",
          icon: Instagram,
        },
        {
          name: "Facebook",
          href: "https://www.facebook.com/profile.php?id=61552669391757",
          icon: Facebook,
        },
      ],
    },
  ];

  return (
    <footer className="mt-12 border-border border-t bg-background">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link className="group flex items-center gap-2" href="/">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary/10">
                <Image
                  alt="Onlyface Logo"
                  className="h-8 w-8 object-contain"
                  height={32}
                  src="/img/logo.png"
                  width={32}
                />
              </div>
              <span className="font-bold text-foreground text-xl tracking-tight">
                Only<span className="text-primary">face</span>
              </span>
            </Link>
            <p className="max-w-xs text-muted-foreground text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex space-x-4">
              {sections[2].links.map((social) => (
                <a
                  className="text-muted-foreground transition-colors hover:text-primary"
                  href={social.href}
                  key={social.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon && <social.icon className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {sections.slice(0, 2).map((section) => (
            <div className="space-y-6" key={section.title}>
              <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-muted-foreground text-sm transition-colors hover:text-primary"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter/CTA Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">
              {t("joinCommunity")}
            </h4>
            <p className="text-muted-foreground text-sm">
              {t("downloadToday")}
            </p>
            <div className="flex flex-col space-y-4">
              <Link
                className="transition-transform hover:scale-105 active:scale-95"
                href="https://apps.apple.com/pl/app/onlyface/id6467753501"
                target="_blank"
              >
                <Image
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                  height={45}
                  src="https://image.onlyface.app/App-Store-Icon-new.png"
                  width={150}
                />
              </Link>
              <Link
                className="transition-transform hover:scale-105 active:scale-95"
                href="https://play.google.com/store/apps/details?id=com.onlyface"
                target="_blank"
              >
                <Image
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                  height={45}
                  src="https://image.onlyface.app/Google-Play-Icon.png"
                  width={150}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-border border-t pt-8 md:flex-row md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Onlyface. {t("rightsReserved")}
          </p>
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <span>{t("madeWith")}</span>
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span>{t("by")}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

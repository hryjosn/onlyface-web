import Image from "next/image"
import Link from "next/link"
import { Container } from "./ui/container"
import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/#features" },
        { name: "Safety", href: "/csae-safety-standards" },
        { name: "App Store", href: "https://apps.apple.com/pl/app/onlyface/id6467753501" },
        { name: "Play Store", href: "https://play.google.com/store/apps/details?id=com.onlyface" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/delete-account-tutorial" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "EULA", href: "/eula" },
        { name: "Delete Account", href: "/delete-account-tutorial" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "Instagram", href: "https://www.instagram.com/onlyface.official", icon: Instagram },
        { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61552669391757", icon: Facebook },
      ],
    },
  ]

  return (
    <footer className="bg-background border-t border-border mt-12">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-primary/10 flex items-center justify-center">
                <Image
                  src="/img/logo.png"
                  alt="Onlyface Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Only<span className="text-primary">face</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Onlyface is a revolutionary app that redefines social networking through beauty and community approval. Connect with genuine individuals.
            </p>
            <div className="flex space-x-4">
              {sections[2].links.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon && <social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {sections.slice(0, 2).map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-sm font-bold tracking-wider text-foreground uppercase">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
            <h4 className="text-sm font-bold tracking-wider text-foreground uppercase">
              Join the community
            </h4>
            <p className="text-sm text-muted-foreground">
              Download Onlyface today and experience the difference.
            </p>
            <div className="flex flex-col space-y-4">
              <Link
                href="https://apps.apple.com/pl/app/onlyface/id6467753501"
                target="_blank"
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <Image
                  src="https://image.onlyface.app/App-Store-Icon-new.png"
                  width={150}
                  height={45}
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.onlyface"
                target="_blank"
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <Image
                  src="https://image.onlyface.app/Google-Play-Icon.png"
                  width={150}
                  height={45}
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Onlyface. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Onlyface Team</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

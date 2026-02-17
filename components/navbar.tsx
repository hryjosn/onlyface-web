"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "../i18n/routing";
import ThemeChanger from "./DarkSwitch";
import { Container } from "./ui/container";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: t("privacy"), href: "/privacy" },
    { name: t("eula"), href: "/eula" },
    { name: t("safety"), href: "/csae-safety-standards" },
    { name: t("support"), href: "/delete-account-tutorial" },
  ];

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link className="group flex items-center gap-2" href="/">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary/10 transition-transform group-hover:scale-110">
              <Image
                alt="Onlyface Logo"
                className="h-8 w-8 object-contain"
                height={32}
                src="/img/logo.png"
                width={32}
              />
            </div>
            <span className="font-bold text-foreground text-xl tracking-tight sm:text-2xl">
              Only<span className="text-primary">face</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <ul className="flex list-none items-center gap-6">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-2 h-6 w-px bg-border/60" />

          {/* Language Switcher */}
          <div className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest">
            <button
              className={`transition-colors hover:text-primary ${
                locale === "en" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => handleLocaleChange("en")}
            >
              EN
            </button>
            <span className="text-border">/</span>
            <button
              className={`transition-colors hover:text-primary ${
                locale === "zh-TW" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => handleLocaleChange("zh-TW")}
            >
              繁中
            </button>
          </div>

          <ThemeChanger />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeChanger />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="p-2 text-muted-foreground transition-colors hover:text-primary focus:outline-none"
                >
                  {open ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Disclosure.Button>

                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="absolute top-full right-0 left-0 mt-1 border-border border-b bg-background/95 shadow-2xl backdrop-blur-xl lg:hidden">
                    <div className="flex flex-col space-y-4 p-6">
                      {navigation.map((item, index) => (
                        <Link
                          className="rounded-lg p-2 font-medium text-foreground text-lg transition-colors hover:bg-primary/10"
                          href={item.href}
                          key={index}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="flex items-center justify-around border-border border-t pt-4">
                        <button
                          className={`font-bold text-sm ${
                            locale === "en"
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                          onClick={() => handleLocaleChange("en")}
                        >
                          English
                        </button>
                        <button
                          className={`font-bold text-sm ${
                            locale === "zh-TW"
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                          onClick={() => handleLocaleChange("zh-TW")}
                        >
                          繁體中文
                        </button>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

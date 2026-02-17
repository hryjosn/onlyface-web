"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure, Transition } from "@headlessui/react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigation = [
    { name: "Privacy", href: "/privacy" },
    { name: "EULA", href: "/eula" },
    { name: "Safety", href: "/csae-safety-standards" },
    { name: "Support", href: "/delete-account-tutorial" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <Container className="flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
              <Image
                src="/img/logo.png"
                alt="Onlyface Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Only<span className="text-primary">face</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <ul className="flex items-center gap-6 list-none">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-px bg-border/60 mx-2" />
          <ThemeChanger />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeChanger />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                  aria-label="Toggle Menu"
                >
                  {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Disclosure.Button>

                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="absolute left-0 right-0 top-full mt-1 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl lg:hidden">
                    <div className="flex flex-col p-6 space-y-4">
                      {navigation.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="text-lg font-medium text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
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
}

export default Navbar;

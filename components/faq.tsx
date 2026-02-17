"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "./ui/container";

const Faq = () => {
  const t = useTranslations("FAQItems");

  // Create an array of indices to map over based on the number of items in the translation
  // Since next-intl doesn't support list-style translations easily without knowing the count,
  // we can use a fix number or a more dynamic approach if we know how many items there are.
  // In this case, we have 5 items.
  const faqIndices = [0, 1, 2, 3, 4];

  return (
    <Container className="py-12">
      <div className="mx-auto w-full max-w-3xl space-y-4">
        {faqIndices.map((index) => (
          <div className="group" key={index}>
            <Disclosure>
              {({ open }) => (
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    open
                      ? "border-primary/20 bg-card shadow-lg shadow-primary/5"
                      : "border-border bg-background hover:border-primary/20 hover:bg-card/50"
                  }`}
                >
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-foreground text-lg transition-colors focus:outline-none">
                    <span>{t(`${index}.question`)}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                        open ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-150 ease-out"
                    enterFrom="transform -translate-y-2 opacity-0"
                    enterTo="transform translate-y-0 opacity-100"
                    leave="transition duration-100 ease-in"
                    leaveFrom="transform translate-y-0 opacity-100"
                    leaveTo="transform -translate-y-2 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 pb-6 text-base text-muted-foreground leading-relaxed">
                      {t(`${index}.answer`)}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faq;

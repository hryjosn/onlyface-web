"use client";
import React from "react";
import { Container } from "./ui/container";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  return (
    <Container className="py-12">
      <div className="w-full max-w-3xl mx-auto space-y-4">
        {faqdata.map((item, index) => (
          <div key={index} className="group">
            <Disclosure>
              {({ open }) => (
                <div className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  open 
                  ? "bg-card border-primary/20 shadow-lg shadow-primary/5" 
                  : "bg-background border-border hover:border-primary/20 hover:bg-card/50"
                }`}>
                  <Disclosure.Button className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left transition-colors text-foreground focus:outline-none">
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
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
                    <Disclosure.Panel className="px-6 pb-6 text-base leading-relaxed text-muted-foreground">
                      {item.answer}
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
}

const faqdata = [
  {
    question: "How does Onlyface work?",
    answer: "Onlyface is a social networking app where users connect based on their physical appearance. Upon sign-up, users upload a selfie photo and enter a pending status. To become fully active, more than 1/3 of the total users must approve their photo.",
  },
  {
    question: "What is the purpose of the pending status?",
    answer: "The pending status allows existing users to vote on new members' photos, ensuring that the community maintains certain standards of attractiveness.",
  },
  {
    question: "What kind of photo should I upload for my profile?",
    answer:
      "Choose a high-quality selfie that accurately represents your appearance. Ensure good lighting and avoid filters or heavily edited photos.",
  },
  {
    question: "How long does it take to get approval from the community?",
    answer:
      "The approval process depends on the number of users and how quickly they vote. It may vary, but we aim for a timely and fair process.",
  },
  {
    question: "What happens if I don't get enough votes for approval?",
    answer:
      "If you don't receive enough votes, you will remain in pending status. You can continue to engage with the community and try again.",
  },
];

export default Faq;
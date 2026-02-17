"use client";
import { Disclosure, Transition } from "@headlessui/react";
import {
  AlertCircle,
  CheckCircle2,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { type SubmitHandler, useForm, useWatch } from "react-hook-form";
import { Button } from "./ui/button";

interface FormValues {
  apikey: string;
  botcheck: boolean;
  email: string;
  from_name: string;
  message: string;
  name: string;
  subject: string;
}

const PopupWidget = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit: SubmitHandler<FormValues> = async (data, e) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        const json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Something went wrong. Please try again later.");
        console.error(error);
      });
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button as={React.Fragment}>
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95">
                <span className="sr-only">Open Contact Form</span>
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MessageCircle className="h-6 w-6" />
                )}
              </button>
            </Disclosure.Button>

            <Transition
              enter="transition duration-200 cubic-bezier(0.4, 0, 0.2, 1)"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <Disclosure.Panel className="absolute right-0 bottom-20 w-[calc(100vw-3rem)] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl sm:w-[400px]">
                <div className="relative overflow-hidden bg-primary px-6 py-8">
                  <div className="relative z-10 flex flex-col space-y-1">
                    <h2 className="font-bold text-primary-foreground text-xl">
                      How can we help?
                    </h2>
                    <p className="text-primary-foreground/70 text-sm">
                      Send us a message and we'll get back to you soon.
                    </p>
                  </div>
                  <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary-foreground/10 blur-2xl" />
                </div>

                <div className="p-6">
                  {isSubmitSuccessful ? (
                    isSuccess ? (
                      <div className="fade-in zoom-in flex animate-in flex-col items-center justify-center py-10 text-center duration-300">
                        <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                          <CheckCircle2 className="h-12 w-12" />
                        </div>
                        <h3 className="font-bold text-foreground text-xl">
                          Success!
                        </h3>
                        <p className="mt-2 text-muted-foreground text-sm">
                          {Message ||
                            "Your message has been sent successfully."}
                        </p>
                        <Button
                          className="mt-6 rounded-xl"
                          onClick={() => reset()}
                          variant="outline"
                        >
                          Send another message
                        </Button>
                      </div>
                    ) : (
                      <div className="fade-in zoom-in flex animate-in flex-col items-center justify-center py-10 text-center duration-300">
                        <div className="mb-4 rounded-full bg-destructive/10 p-3 text-destructive">
                          <AlertCircle className="h-12 w-12" />
                        </div>
                        <h3 className="font-bold text-foreground text-xl">
                          Oops!
                        </h3>
                        <p className="mt-2 text-muted-foreground text-sm">
                          {Message ||
                            "Something went wrong. Please try again later."}
                        </p>
                        <Button
                          className="mt-6 rounded-xl"
                          onClick={() => reset()}
                          variant="outline"
                        >
                          Try again
                        </Button>
                      </div>
                    )
                  ) : (
                    <form
                      className="space-y-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input
                        type="hidden"
                        value="YOUR_ACCESS_KEY_HERE"
                        {...register("apikey")}
                      />
                      <input
                        type="hidden"
                        value={`${userName} sent a message from Onlyface`}
                        {...register("subject")}
                      />
                      <input
                        type="hidden"
                        value="Onlyface Web"
                        {...register("from_name")}
                      />
                      <input
                        className="hidden"
                        style={{ display: "none" }}
                        type="checkbox"
                        {...register("botcheck")}
                      />

                      <div className="space-y-2">
                        <label
                          className="font-semibold text-foreground text-sm"
                          htmlFor="full_name"
                        >
                          Full Name
                        </label>
                        <input
                          id="full_name"
                          placeholder="John Doe"
                          type="text"
                          {...register("name", {
                            required: "Full name is required",
                          })}
                          className={`flex h-12 w-full rounded-xl border bg-background px-4 py-2 text-sm ring-offset-background transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            errors.name ? "border-destructive" : "border-border"
                          }`}
                        />
                        {errors.name && (
                          <p className="font-medium text-destructive text-xs">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label
                          className="font-semibold text-foreground text-sm"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          placeholder="you@example.com"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className={`flex h-12 w-full rounded-xl border bg-background px-4 py-2 text-sm ring-offset-background transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            errors.email
                              ? "border-destructive"
                              : "border-border"
                          }`}
                        />
                        {errors.email && (
                          <p className="font-medium text-destructive text-xs">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label
                          className="font-semibold text-foreground text-sm"
                          htmlFor="message"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          placeholder="What would you like to say?"
                          rows={4}
                          {...register("message", {
                            required: "Message is required",
                          })}
                          className={`flex min-h-[120px] w-full rounded-xl border bg-background px-4 py-3 text-sm ring-offset-background transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            errors.message
                              ? "border-destructive"
                              : "border-border"
                          }`}
                        />
                        {errors.message && (
                          <p className="font-medium text-destructive text-xs">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        className="h-12 w-full rounded-xl font-bold text-md transition-all active:scale-[0.98]"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="h-4 w-4" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>

                      <p className="text-center text-[10px] text-muted-foreground">
                        Protected by Web3Forms
                      </p>
                    </form>
                  )}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PopupWidget;

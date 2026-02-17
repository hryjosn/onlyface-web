import { Quote } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
import { Card, CardContent } from "./ui/card";
import { Container } from "./ui/container";

const Testimonials = () => {
  const t = useTranslations("TestimonialItems");

  const testimonials = [
    {
      image: userOneImg,
    },
    {
      image: userTwoImg,
    },
    {
      image: userThreeImg,
    },
  ];

  return (
    <Container className="py-20">
      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            className="group relative overflow-hidden border-none bg-muted/50 transition-all hover:bg-card hover:shadow-xl"
            key={index}
          >
            <CardContent className="space-y-6 p-8">
              <Quote className="h-10 w-10 text-primary/20 transition-colors group-hover:text-primary/40" />
              <p className="font-medium text-foreground text-xl italic leading-relaxed">
                &ldquo;{t(`${index}.content`)}&rdquo;
              </p>

              <div className="flex items-center space-x-4 border-border/50 border-t pt-4">
                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-primary/10">
                  <Image
                    alt={t(`${index}.author`)}
                    className="h-full w-full object-cover"
                    height={56}
                    placeholder="blur"
                    src={testimonial.image}
                    width={56}
                  />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg leading-tight">
                    {t(`${index}.author`)}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {t(`${index}.title`)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;

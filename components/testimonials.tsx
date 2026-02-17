import Image from "next/image"
import React from "react"
import { Container } from "./ui/container"
import { Card, CardContent } from "./ui/card"
import { Quote } from "lucide-react"

import userOneImg from "../public/img/user1.jpg"
import userTwoImg from "../public/img/user2.jpg"
import userThreeImg from "../public/img/user3.jpg"

const Testimonials = () => {
  const testimonials = [
    {
      content: "Onlyface completely changed how I connect with people. The community is so supportive and authentic.",
      author: "Sarah Steiner",
      title: "Active Member",
      image: userOneImg,
    },
    {
      content: "I love the approval system! It makes the community feel exclusive and safe at the same time.",
      author: "Dylan Ambrose",
      title: "Premium User",
      image: userTwoImg,
    },
    {
      content: "The best social app I've used in years. Simple, beautiful, and the people are actually real.",
      author: "Gabrielle Winn",
      title: "Verified User",
      image: userThreeImg,
    },
  ]

  return (
    <Container className="py-20">
      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative overflow-hidden border-none bg-muted/50 transition-all hover:bg-card hover:shadow-xl group">
            <CardContent className="p-8 space-y-6">
              <Quote className="h-10 w-10 text-primary/20 transition-colors group-hover:text-primary/40" />
              <p className="text-xl leading-relaxed text-foreground font-medium italic">
              &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                <div className="flex-shrink-0 h-14 w-14 rounded-full overflow-hidden ring-2 ring-primary/10">
                  <Image
                    src={testimonial.image}
                    width={56}
                    height={56}
                    alt={testimonial.author}
                    className="object-cover h-full w-full"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground leading-tight">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}

export default Testimonials
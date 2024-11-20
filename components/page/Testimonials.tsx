"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import yes from "@/app/Image/Yes.jpg";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Mehwish",
      quote:
        "Compliment interested discretion estimating on stimulated apartments oh.",
      image: yes,
    },
    {
      name: "Elizabeth Jeff",
      quote:
        "Dear so sing when in find road of call. As distrusts behaviour abilities defective is.",
      image: yes,
    },
    {
      name: "Emily Thomas",
      quote:
        "Never at water me might. On formed merits hunted unable merely by mr whence or.",
      image: yes,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="container px-14 py-16 md:py-24 lg:py-32 mx-auto"
    >
      <div className="relative grid gap-10 items-center lg:grid-cols-2">
        {/* Decorative star */}
        <div className="absolute -top-10 right-0 text-purple-500">
          <div className="relative w-16 h-16">
            <Star className="w-8 h-8 absolute right-0 fill-purple-500" />
            <svg
              className="absolute top-0 right-8"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C20 20 20 0 20 0C20 0 20 20 40 20C20 20 20 40 20 40C20 40 20 20 0 20Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Left column - Header content */}
        <div className="flex flex-col gap-6 text-center lg:text-left animate-on-scroll">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
            Relation so in confined smallest children unpacked delicate. Why sir
            end believe uncivil respect. Always get adieus nature day course for
            common.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-[5px] hover:from-purple-600 hover:to-orange-600 text-white"
              size="lg"
            >
              View More
            </Button>
          </div>
        </div>

        {/* Right column - Testimonials */}
        <div className="flex flex-col gap-6 lg:-ml-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`relative ${
                index === 1
                  ? "border-l-4 border-l-purple-500 lg:-ml-12"
                  : "border-l-4 border-l-[#c8cbd0]"
              } transition-transform hover:-translate-y-1 animate-on-scroll overflow-hidden`}
            >
              <CardContent className="flex flex-col  gap-4 p-6">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile picture`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover z-10"
                />
                <div className="space-y-1 relative z-10">
                  <h3
                    className={` ${
                      index === 1 ? "" : ""
                    } font-semibold leading-none`}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className={` ${
                      index === 1 ? "" : "text-[#c8cbd0]"
                    } text-sm text-muted-foreground`}
                  >
                    {testimonial.quote}
                  </p>
                </div>
                <span
                  className={` ${
                    index === 1 ? "text-blue-600" : "text-gray-200"
                  } absolute top-0 left-0 text-[120px] leading-[100px]  opacity-50 font-serif`}
                >
                  "
                </span>
                <span
                  className={` ${
                    index === 1 ? "text-blue-600" : "text-gray-200"
                  } absolute bottom-0 right-0 text-[120px] leading-[100px] 0 opacity-50 font-serif rotate-180`}
                >
                  "
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

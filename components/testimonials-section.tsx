"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarvesh Surve ",
    // role: "CTO, InnovateTech Pvt Ltd",
    // location: "Kharadi, Pune",
    avatar: "SS",
    rating: 5,
    feedback:
      "I had given my laptop for repair at Vakratund Infotech and I am very happy with their service The staff was polite and helpful. They repaired my laptop quickly and now it is working very well. The service charges were also reasonable. My uncle had taken a projector on rent from Vakratund Infotech. ",
    extended:
      "The proiector quality was excellent and very easy to use. Delivery and return process was also smooth. Overall, we had a very good experience. I would surelv recommend Vakratund Infotech for both laptop repair and projector rental",
  },
  {
    name: "Manish Belekar",
    // role: "Operations Manager, CloudFirst Solutions",
    // location: "Hinjwadi, Pune",
    avatar: "MB",
    rating: 5,
    feedback:
      "I had given my Dell Capmutar new 2nd hand at Vakratund Infotech and I am very happy with their service The staff was polite and helpful. Camputer quickly and now it is working very well. The service charges were also reasonable.",
    extended:
      "The quality was excellent and very easy to use. Delivery and return process was also smooth. Overall, we had a very good experience. recommend Vakratund Infotech for both Camputer and projector rental",
  },
  {
    name: "Priyanka Thakur",
    // role: "Founder, PixelBridge Studios",
    // location: "Baner, Pune",
    avatar: "PT",
    rating: 5,
    feedback:
      "Fast & Excellent Service provider @Gaurav. Highly recommended - Vakratund infotech.",
    extended:
      "",
  },
  {
    name: "CA Sagar Lahane ",
    // role: "Admin Head, DataSync Technologies",
    // location: "Chennai",
    avatar: "CA",
    rating: 5,
    feedback:
      "Quick and professional services here. Highly recommended for all IT related products and services. 👍👍",
    extended:
      "",
  },
  {
    name: "Vijay Lode",
    // role: "IT Director, NexGen Enterprises",
    // location: "Bangalore",
    avatar: "VL",
    rating: 5,
    feedback:
      "Excellent service my Laptop windows totally crash recovery all data and we'll service my laptop",
    extended:
      " ",
  },
    {
    name: "Niranjan More ",
    // role: "IT Director, NexGen Enterprises",
    // location: "Bangalore",
    avatar: "NM",
    rating: 5,
    feedback:
      "Laptops offered at best affordable price !",
    extended:
      " ",
  },
    {
    name: "Akanksha Bhangale",
    // role: "IT Director, NexGen Enterprises",
    // location: "Bangalore",
    avatar: "AB",
    rating: 5,
    feedback:
      "I recently had Vakratund Infotech build a custom PC for me, and the experience was flawless. They helped me pick the best components for my budget and the cable management is incredibly clean.",
    extended:
      "The system was stress-tested before I picked it up, and it’s running like a dream. If you're looking for a professional build without the headache, this is the place to go ",
  },
    {
    name: "Sakshi Jha",
    // role: "IT Director, NexGen Enterprises",
    // location: "Bangalore",
    avatar: "SJ",
    rating: 5,
    feedback:
      "It's was really very nice product the look and the function of the laptop is really very good I like it thanks",
    extended:
      " ",
  },
];

export default function TestimonialsSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 3;
  
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visibleTestimonials = testimonials.slice(
    currentPage * perPage,
    currentPage * perPage + perPage,
    
  );

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-[hsl(var(--primary))]/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[hsl(var(--primary))]/30 bg-[hsl(var(--primary))]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl font-bold text-[hsl(var(--foreground))] md:text-5xl">
            What Our Clients{" "}
            <span className="text-[hsl(var(--primary))]">Say</span>
          </h2>
          {/* <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--muted-foreground))]">
            Trusted by IT companies and businesses across India for reliable, premium
            technology solutions.
          </p> */}
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((t, i) => {
            const globalIdx = currentPage * perPage + i;
            const isExpanded = expandedIdx === globalIdx;

            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex flex-col rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-all hover:border-[hsl(var(--primary))]/30 hover:shadow-lg hover:shadow-[hsl(var(--primary))]/5"
              >
                {/* Quote icon */}
                <Quote className="mb-4 h-8 w-8 text-[hsl(var(--primary))]/30" />

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={`star-${t.name}-${j}`}
                      className="h-4 w-4 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {`"${t.feedback}`}
                  {isExpanded && t.extended}
                  {!isExpanded && '..."'}
                  {isExpanded && '"'}
                </p>

                {/* Read more button */}
                <button
                  type="button"
                  onClick={() =>
                    setExpandedIdx(isExpanded ? null : globalIdx)
                  }
                  className="mb-6 w-fit text-sm font-semibold text-[hsl(var(--primary))] transition-colors hover:text-[hsl(var(--accent-foreground))]"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>

                {/* Avatar + Info */}
                <div className="flex items-center gap-3 border-t border-[hsl(var(--border))] pt-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--primary))]/15 font-serif text-sm font-bold text-[hsl(var(--primary))]">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                      {t.name}
                    </p>
                    {/* <p className="text-xs text-[hsl(var(--muted-foreground))]">{t.role}</p>
                    <p className="text-xs text-[hsl(var(--primary))]">{t.location}</p> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--foreground))] transition-all hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] disabled:opacity-30"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={`page-${i}`}
                type="button"
                onClick={() => setCurrentPage(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === currentPage
                    ? "w-8 bg-[hsl(var(--primary))]"
                    : "w-2.5 bg-[hsl(var(--foreground))]/20"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--foreground))] transition-all hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] disabled:opacity-30"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

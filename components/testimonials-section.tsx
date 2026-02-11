"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CTO, InnovateTech Pvt Ltd",
    location: "Kharadi, Pune",
    avatar: "RS",
    rating: 5,
    feedback:
      "TechNova Solutions has been our go-to IT partner since they started in 2022. Their laptop rental service for our project teams is seamless - delivery is always on time and the equipment quality is consistently excellent. The team handled our complete office networking setup including racks and switches with remarkable professionalism.",
    extended:
      " We've recommended them to multiple companies in Kharadi IT Park and the feedback has been unanimously positive. Their AMC for our CCTV systems gives us complete peace of mind.",
  },
  {
    name: "Priya Menon",
    role: "Operations Manager, CloudFirst Solutions",
    location: "Hinjwadi, Pune",
    avatar: "PM",
    rating: 5,
    feedback:
      "We needed 50 laptops on very short notice for a new project in Hinjwadi. TechNova delivered within 24 hours with everything pre-configured - OS, Microsoft 365, Outlook, the works. Their software installation team saved us days of setup time.",
    extended:
      " The pricing was very competitive compared to other vendors we contacted. We now have an ongoing rental arrangement with them and have also sourced Logitech headphones for our entire call center team through TechNova.",
  },
  {
    name: "Amit Kulkarni",
    role: "Founder, PixelBridge Studios",
    location: "Baner, Pune",
    avatar: "AK",
    rating: 5,
    feedback:
      "As a gaming studio, we needed high-performance custom-built PCs. TechNova assembled 15 gaming CPUs with exactly the specs we required. The build quality was outstanding and their technicians really knew their hardware.",
    extended:
      " They also set up our entire CCTV surveillance system and handle the AMC. Having a single vendor for hardware, networking, and security has simplified our IT operations tremendously.",
  },
  {
    name: "Sneha Iyer",
    role: "Admin Head, DataSync Technologies",
    location: "Chennai",
    avatar: "SI",
    rating: 5,
    feedback:
      "Even though we're based in Chennai, TechNova managed our desktop rental and delivery flawlessly. They supplied refurbished laptops that looked and performed like brand new. The cost savings compared to buying new were significant.",
    extended:
      " Their team even helped us configure our WiFi routers remotely. It's rare to find a vendor from Pune who serves other cities with this level of commitment and quality. We'll definitely continue working with them.",
  },
  {
    name: "Vikram Reddy",
    role: "IT Director, NexGen Enterprises",
    location: "Bangalore",
    avatar: "VR",
    rating: 5,
    feedback:
      "TechNova supplied networking equipment and Boat headphones for our 200-seat Bangalore office. The server rack installation was done professionally with minimal disruption to our operations.",
    extended:
      " Their projector rental for our annual conference was also top-notch. Having one reliable vendor handle everything from accessories to infrastructure has been a game-changer for our procurement process. Highly recommended for any IT company.",
  },
];

export default function TestimonialsSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visibleTestimonials = testimonials.slice(
    currentPage * perPage,
    currentPage * perPage + perPage
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
          <p className="mx-auto mt-4 max-w-2xl text-[hsl(var(--muted-foreground))]">
            Trusted by IT companies and businesses across India for reliable, premium
            technology solutions.
          </p>
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
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">{t.role}</p>
                    <p className="text-xs text-[hsl(var(--primary))]">{t.location}</p>
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

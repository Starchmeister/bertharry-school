import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Gallery — Bertharry English Private School",
  description:
    "Events, extracurricular activities and facilities at Bertharry English Private School, Tembisa.",
};

const categories = [
  {
    label: "Events",
    href: "/gallery/events",
    description: "Heritage Day, Career Day, Entrepreneurship Day, Celebrating Achievements and more.",
    preview: [
      "/Gallery/events/heritage day/imgi_16_her2.webp",
      "/Gallery/events/Career day/imgi_2_01.webp",
      "/Gallery/events/Entrepreneurship day/imgi_9_ent1.webp",
      "/Gallery/events/Celebrating Acheivements/imgi_6_cel2.webp",
    ],
  },
  {
    label: "Extra-Curricular",
    href: "/gallery/extracurricular",
    description: "Cheerleading, coding & robotics, debate, drama, netball, rugby, soccer and volleyball.",
    preview: [
      "/Gallery/Extra Circular – Berthharry English Private School/soccer/imgi_20_S1-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/Cheerleading/imgi_2_C1-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/drama/imgi_47_DR1-768x559.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/rugby/imgi_17_R1-1.webp",
    ],
  },
  {
    label: "Facilities",
    href: "/gallery/facilities",
    description: "Classrooms, school buildings, school hall, bookshop and uniform shop.",
    preview: [
      "/Gallery/facilities/classrooms/cl1.png",
      "/Gallery/facilities/school buildings/sb1.png",
      "/Gallery/facilities/school hall/sh1.png",
      "/Gallery/facilities/bookshop/b1.png",
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Gallery"
        title="Our Gallery"
        description="A look at life at Bertharry — our events, extracurricular activities and facilities."
      />

      <section className="container-gutter py-20 md:py-28 grid gap-10 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group flex flex-col rounded-xl border border-[var(--line)] overflow-hidden hover:border-[var(--accent)] transition-colors"
          >
            <div className="grid grid-cols-2 gap-0.5 bg-[var(--line)]">
              {cat.preview.map((src, i) => (
                <div key={i} className="aspect-square bg-[var(--panel)] overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="p-7 flex flex-col gap-3 flex-1 bg-[var(--panel)]">
              <h2 className="font-[family-name:var(--font-sora)] text-xl">{cat.label}</h2>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed flex-1">{cat.description}</p>
              <span className="mono-label text-[11px] text-[var(--accent)] mt-2">View Gallery →</span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

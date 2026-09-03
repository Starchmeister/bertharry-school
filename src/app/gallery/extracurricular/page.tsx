import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Extra-Curricular Gallery — Bertharry English Private School",
  description: "Photos from extracurricular activities at Bertharry — cheerleading, coding & robotics, debate, drama, netball, rugby, soccer and volleyball.",
};

const subsections = [
  {
    label: "Cheerleading",
    images: [
      "/Gallery/Extra Circular – Berthharry English Private School/Cheerleading/imgi_2_C1-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/Cheerleading/imgi_3_C2-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/Cheerleading/imgi_30_C1-1-300x218.webp",
    ],
  },
  {
    label: "Coding & Robotics",
    images: [
      "/Gallery/Extra Circular – Berthharry English Private School/coding and robotics/imgi_6_CR2-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/coding and robotics/imgi_7_CR3-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/coding and robotics/imgi_37_CR1-1-300x218.webp",
    ],
  },
  {
    label: "Debate",
    images: [
      "/Gallery/Extra Circular – Berthharry English Private School/debate/imgi_8_d1-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/debate/imgi_9_d2-1.webp",
    ],
  },
  {
    label: "Drama",
    images: [
      "/Gallery/Extra Circular – Berthharry English Private School/drama/imgi_47_DR1-768x559.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/drama/imgi_49_DR2-768x559.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/drama/imgi_51_DR3-768x559.webp",
    ],
  },
  {
    label: "Netball",
    images: [
      "/Gallery/Extra Circular – Berthharry English Private School/netball/imgi_14_NET1-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/netball/imgi_15_NET2-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/netball/imgi_16_NET3-1.webp",
    ],
  },
  {
    label: "Rugby",
    images: [
      "/Gallery/Extra Circular – Berthharry English Private School/rugby/imgi_17_R1-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/rugby/imgi_18_R2-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/rugby/imgi_19_R3-1.webp",
    ],
  },
  {
    label: "Soccer",
    images: [
      "/Gallery/Extra Circular – Berthharry English Private School/soccer/imgi_20_S1-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/soccer/imgi_21_S2-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/soccer/imgi_22_S3-1.webp",
    ],
  },
  {
    label: "Volleyball",
    images: [
      "/Gallery/Extra Circular – Berthharry English Private School/volleyball/imgi_24_V2-1.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/volleyball/imgi_66_V1-1-768x559.webp",
      "/Gallery/Extra Circular – Berthharry English Private School/volleyball/imgi_70_V3-1-768x559.webp",
    ],
  },
];

export default function ExtracurricularGalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Extra-Curricular"
        parent={{ label: "Gallery", href: "/gallery" }}
        description="Bertharrians are more than academics — see our learners in action across sport, arts and technology."
      />

      <section className="container-gutter py-20 md:py-28 space-y-16">
        {subsections.map((sub) => (
          <div key={sub.label}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-[family-name:var(--font-sora)] text-xl font-light whitespace-nowrap">
                {sub.label}
              </h2>
              <div className="flex-1 h-px bg-[var(--line)]" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {sub.images.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[var(--line)] aspect-[4/3] bg-[var(--panel)]">
                  <img
                    src={src}
                    alt={`${sub.label} ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

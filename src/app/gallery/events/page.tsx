import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Events Gallery — Bertharry English Private School",
  description: "Photos from school events at Bertharry English Private School including Heritage Day, Career Day, Entrepreneurship Day and more.",
};

const subsections = [
  {
    label: "Heritage Day",
    images: [
      "/Gallery/events/heritage day/imgi_16_her2.webp",
      "/Gallery/events/heritage day/imgi_17_her3.webp",
    ],
  },
  {
    label: "Career Day",
    images: [
      "/Gallery/events/Career day/imgi_2_01.webp",
      "/Gallery/events/Career day/imgi_3_02.webp",
      "/Gallery/events/Career day/imgi_4_03.webp",
    ],
  },
  {
    label: "Entrepreneurship Day",
    images: [
      "/Gallery/events/Entrepreneurship day/imgi_9_ent1.webp",
      "/Gallery/events/Entrepreneurship day/imgi_10_ent2.webp",
      "/Gallery/events/Entrepreneurship day/imgi_11_ent3.webp",
    ],
  },
  {
    label: "Celebrating Achievements",
    images: [
      "/Gallery/events/Celebrating Acheivements/imgi_6_cel2.webp",
      "/Gallery/events/Celebrating Acheivements/imgi_7_cel3.webp",
      "/Gallery/events/Celebrating Acheivements/imgi_8_cel4.webp",
    ],
  },
  {
    label: "E-Stone Visit",
    images: [
      "/Gallery/events/e-stone visit/imgi_12_Est1.webp",
      "/Gallery/events/e-stone visit/imgi_13_Est2.webp",
      "/Gallery/events/e-stone visit/imgi_46_yrfn.webp",
    ],
  },
  {
    label: "Old Berthians Event",
    images: [
      "/Gallery/events/old berthians event/imgi_21_old1.webp",
      "/Gallery/events/old berthians event/imgi_22_old2.webp",
      "/Gallery/events/old berthians event/imgi_23_old3.webp",
    ],
  },
];

export default function EventsGalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Events"
        parent={{ label: "Gallery", href: "/gallery" }}
        description="Highlights from our school events — celebrating culture, enterprise, achievement and community."
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

import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Facilities Gallery — Bertharry English Private School",
  description: "A look at the facilities at Bertharry English Private School — classrooms, school buildings, school hall, bookshop and uniform shop.",
};

const subsections = [
  {
    label: "Classrooms",
    images: [
      "/Gallery/facilities/classrooms/cl1.png",
      "/Gallery/facilities/classrooms/cl2.png",
      "/Gallery/facilities/classrooms/cl3.png",
    ],
  },
  {
    label: "School Buildings",
    images: [
      "/Gallery/facilities/school buildings/sb1.png",
      "/Gallery/facilities/school buildings/sb2.png",
      "/Gallery/facilities/school buildings/sb3.png",
      "/Gallery/facilities/school buildings/sb4.png",
    ],
  },
  {
    label: "School Hall",
    images: [
      "/Gallery/facilities/school hall/sh1.png",
      "/Gallery/facilities/school hall/sh2.png",
      "/Gallery/facilities/school hall/sh3.png",
    ],
  },
  {
    label: "Bookshop",
    images: [
      "/Gallery/facilities/bookshop/b1.png",
      "/Gallery/facilities/bookshop/b2.png",
      "/Gallery/facilities/bookshop/b3.png",
    ],
  },
  {
    label: "Uniform Shop",
    images: [
      "/Gallery/facilities/school uniform shop/us1.png",
      "/Gallery/facilities/school uniform shop/us2.png",
      "/Gallery/facilities/school uniform shop/us3.png",
    ],
  },
];

export default function FacilitiesGalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Facilities"
        parent={{ label: "Gallery", href: "/gallery" }}
        description="Our campus is designed to support learning at every level — explore our spaces."
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

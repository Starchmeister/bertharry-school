import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Gallery — Bertharry English Private School",
  description:
    "Uniform, events, facilities and extracurricular activities at Bertharry English Private School.",
};

const categories = [
  { id: "uniform", label: "Uniform", count: 4 },
  { id: "events", label: "Events", count: 6 },
  { id: "facilities", label: "Our Facilities", count: 6 },
  { id: "extracurricular", label: "Extracurricular Activities", count: 4 },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Gallery"
        title="Our Gallery"
        description="A look at life at Bertharry — our uniform, facilities, events and extracurricular activities."
      />

      {categories.map((category, ci) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-24 border-b border-[var(--line)] ${
            ci % 2 === 1 ? "bg-[var(--bg-alt)]" : ""
          }`}
        >
          <div className="container-gutter py-16 md:py-20">
            <span className="chip">{category.label}</span>
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(24px,3vw,36px)] leading-tight mt-6 mb-10">
              {category.label}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-xl overflow-hidden border-t border-l border-[var(--line)]">
              {Array.from({ length: category.count }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/5] bg-[var(--panel)] flex items-center justify-center border-r border-b border-[var(--line)]"
                >
                  <span className="mono-label text-[10px] text-[var(--text-dimmer)]">
                    Photo Pending
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

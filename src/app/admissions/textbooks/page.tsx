import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Textbooks — Bertharry English Private School",
  description:
    "Bertharry English Private School textbook store — all grades catered for. Ensure your child is fully prepared from day one.",
};

export default function TextbooksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Textbook Store"
        description="Ensure your child is fully equipped and ready to learn from day one."
      />

      <section className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1.2fr_1fr] items-start">
        <div>
          <span className="chip">All Grades Catered For</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6">
            Get the Required Textbooks
          </h2>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            Bertharry English Private School has a dedicated textbook store stocked
            with the prescribed books for every grade — from Pre-Primary right through
            to Grade 12. Ensure your child is fully prepared by securing all required
            textbooks before the start of each term.
          </p>
          <p className="mt-4 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            Having the correct textbooks from the very first day sets learners up for
            a confident and organised start to the academic year. Our team is on hand
            to help you find exactly what your child needs.
          </p>

          <div className="mt-10 rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8 max-w-md">
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">Available For</p>
            <ul className="mt-4 space-y-3">
              {["Pre-Primary", "Grade 1 – 3", "Grade 4 – 6", "Grade 7 – 9", "Grade 10 – 12"].map(
                (grade, i) => (
                  <li key={grade} className="flex items-baseline gap-4">
                    <span className="mono-label text-[var(--text-dimmer)] text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[family-name:var(--font-sora)] text-lg">{grade}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <p className="mt-10 text-sm text-[var(--text-dimmer)]">
            For more information contact{" "}
            <a href="tel:+27655087034" className="underline underline-offset-4 link-hover">
              065 508 7034
            </a>
            .
          </p>
        </div>

        <img src="/Gallery/facilities/bookshop/b1.png" alt="Textbook store" className="aspect-[4/3] object-cover rounded-xl w-full" loading="lazy" />
      </section>
    </>
  );
}

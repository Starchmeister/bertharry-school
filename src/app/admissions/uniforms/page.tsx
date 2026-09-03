import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Uniforms — Bertharry English Private School",
  description:
    "View the Bertharry English Private School uniform requirements and download the official uniform price list.",
};

export default function UniformsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="School Uniforms"
        description="All learners are required to be in full Bertharry uniform at all times. Smart dress is a reflection of our school values."
      />

      <section className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1.2fr_1fr] items-start">
        <div>
          <span className="chip">Uniform Store</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6">
            Official Bertharry Uniform
          </h2>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            Uniforms are available from the school&apos;s uniform store. Learners are
            expected to be in the correct, full uniform from their first day. Partial
            or incorrect uniform is not permitted on the school premises.
          </p>
          <p className="mt-4 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            Download the official uniform price list below for a full breakdown of
            items and their costs. For sizing and availability, please contact the
            school directly.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.bertharryschools.co.za/wp-content/uploads/2024/09/School-Uniform-Price-List.docx-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid"
            >
              View Price List
            </a>
          </div>

          <p className="mt-8 text-sm text-[var(--text-dimmer)]">
            For more information contact{" "}
            <a href="tel:+27655087034" className="underline underline-offset-4 link-hover">
              065 508 7034
            </a>
            .
          </p>
        </div>

        <img src="/Gallery/facilities/school uniform shop/us1.png" alt="Uniform store" className="aspect-[4/3] object-cover rounded-xl w-full" loading="lazy" />
      </section>
    </>
  );
}

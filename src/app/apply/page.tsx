import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Apply Online — Bertharry English Private School",
  description:
    "Apply online for admission to Bertharry English Private School via our D6 application platform.",
};

export default function ApplyPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <PageHeader
        eyebrow="Apply Online"
        title="Apply Online"
        description="Applications are submitted through our secure D6 online application platform."
      />

      <section className="container-gutter py-20 md:py-28">
        <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-10 md:p-16 text-center max-w-2xl mx-auto">
          <span className="chip">{year} Admissions Now Open</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3.4vw,40px)] leading-tight mt-6">
            Apply via the D6 Platform
          </h2>
          <p className="mt-5 text-[var(--text-dim)] leading-relaxed">
            Click below to be taken to Bertharry&apos;s official online
            application platform, hosted on D6, to submit your child&apos;s
            application.
          </p>
          <a
            href="https://3851.d6plus.co.za/register/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid mt-10"
          >
            Apply on D6
          </a>
        </div>

        <p className="text-center mt-10 text-[var(--text-dim)]">
          Prefer to speak to someone first? Call us on{" "}
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="underline underline-offset-4 link-hover"
          >
            {site.phone}
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4 link-hover"
          >
            {site.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}

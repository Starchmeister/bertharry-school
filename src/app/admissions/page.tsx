import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { downloads } from "@/data/site";

export const metadata: Metadata = {
  title: "Admissions — Bertharry English Private School",
  description:
    "Admissions are now open at Bertharry English Private School, Tembisa. Learn about the process and apply online.",
};

const steps = [
  {
    title: "Enquire",
    description:
      "Reach out to our admissions team by phone or email to check availability for your child's grade and phase.",
  },
  {
    title: "Register",
    description:
      "Download and complete the registration form, along with the fee structure and course structure documents below.",
  },
  {
    title: "Enroll",
    description:
      "Submit your application through our online application platform to secure your child's place at Bertharry.",
  },
];

export default function AdmissionsPage() {
  const now = new Date();
  const year = now.getMonth() >= 8 ? now.getFullYear() + 1 : now.getFullYear();

  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Admissions"
        description={`${year} admissions are now open. Here's how to register your child at Bertharry English Private School.`}
      />

      <section className="container-gutter py-20 md:py-28 grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="bg-[var(--bg)] p-8 md:p-10 border-r border-b border-[var(--line)]">
            <span className="mono-label text-[var(--text-dimmer)] text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="font-[family-name:var(--font-sora)] text-2xl mt-4">
              {step.title}
            </h2>
            <p className="mt-4 text-[var(--text-dim)] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </section>

      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">School Downloads</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3.4vw,42px)] leading-tight mt-6 mb-12 max-w-2xl">
            Everything you need to register
          </h2>
          <div className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] sm:grid-cols-2">
            {downloads.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--panel)] p-8 flex flex-col justify-between gap-8 hover:bg-[var(--fill-ghost)] transition-colors border-r border-b border-[var(--line)]"
              >
                <img
                  src="/Adobe_Acrobat_Reader_icon_(2020).svg"
                  alt="PDF"
                  className="w-8 h-8"
                />
                <span className="text-lg leading-snug">{d.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark bg-[var(--fill-solid)] text-[#f5f4f1]">
        <div className="container-gutter py-20 md:py-28 text-center">
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,4vw,52px)] leading-tight">
            Ready to Register Your Child?
          </h2>
          <p className="mt-5 text-[rgba(245,244,241,0.62)]">
            Apply online through our admissions platform.
          </p>
          <div className="mt-10">
            <Link href="/apply" className="btn-ghost">
              Apply Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

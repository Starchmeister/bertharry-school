import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Fee Structure — Bertharry English Private School",
  description:
    "View the current fee structure for Bertharry English Private School, covering registration, tuition and all grade phases.",
};

const fees = [
  {
    description: "Registration fee (new learners)",
    annual: "R800",
    monthly: "R800",
    note: "Payable on registration (non refundable).",
  },
  {
    description: "Re-registration fee (current learner)",
    annual: "R350",
    monthly: "R350",
    note: "Payable before 31 October",
  },
  {
    description: "Refundable deposit (new learners)",
    annual: "R500",
    monthly: "R500",
    note: "Payable on registration",
  },
  {
    description: "Pre-School",
    annual: "R13 200",
    monthly: "R1 200",
    note: "Payable monthly in advance before 1st of every month",
  },
  {
    description: "Grade 1 – 3",
    annual: "R15 600",
    monthly: "R1 420",
    note: "Payable monthly in advance before 1st of every month",
  },
  {
    description: "Grade 4 – 6",
    annual: "R16 800",
    monthly: "R1 530",
    note: "Payable monthly in advance before 1st of every month",
  },
  {
    description: "Grade 7 – 9",
    annual: "R18 000",
    monthly: "R1 640",
    note: "Payable monthly in advance before 1st of every month",
  },
  {
    description: "Grade 10 – 12",
    annual: "R19 200",
    monthly: "R1 750",
    note: "Payable monthly in advance before 1st of every month. Payment schedule differs for Grade 12",
  },
];

export default function FeeStructurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Fee Structure"
        description="All fees are reviewed annually. Please contact the school to confirm the latest figures before registering."
      />

      <section className="container-gutter py-20 md:py-28">
        <div className="overflow-x-auto rounded-xl border border-[var(--line)]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[var(--panel)] border-b border-[var(--line)]">
                <th className="px-6 py-4 mono-label text-[11px] text-[var(--text-dimmer)] font-normal">
                  Description
                </th>
                <th className="px-6 py-4 mono-label text-[11px] text-[var(--text-dimmer)] font-normal whitespace-nowrap">
                  Annual Amount
                </th>
                <th className="px-6 py-4 mono-label text-[11px] text-[var(--text-dimmer)] font-normal whitespace-nowrap">
                  Monthly Amount
                  <span className="block text-[10px] opacity-60">(11 months plan)</span>
                </th>
                <th className="px-6 py-4 mono-label text-[11px] text-[var(--text-dimmer)] font-normal">
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row, i) => (
                <tr
                  key={row.description}
                  className={`border-b border-[var(--line)] last:border-b-0 ${i % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--panel)]"}`}
                >
                  <td className="px-6 py-5 font-[family-name:var(--font-sora)] leading-snug">
                    {row.description}
                  </td>
                  <td className="px-6 py-5 font-[family-name:var(--font-sora)] font-medium whitespace-nowrap">
                    {row.annual}
                  </td>
                  <td className="px-6 py-5 font-[family-name:var(--font-sora)] font-medium whitespace-nowrap">
                    {row.monthly}
                  </td>
                  <td className="px-6 py-5 text-[var(--text-dim)] leading-relaxed">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-sm text-[var(--text-dimmer)] text-center">
          All fees are subject to change. For queries contact us on{" "}
          <a href="tel:+27655087034" className="underline underline-offset-4 link-hover">
            065 508 7034
          </a>
          .
        </p>
      </section>
    </>
  );
}

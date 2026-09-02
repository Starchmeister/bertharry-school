import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us — Bertharry English Private School",
  description:
    "Get in touch with Bertharry English Private School in Tembisa — phone, email and address.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a question about admissions, fees or our academic programme? Reach out."
      />

      <section className="container-gutter py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-3 mb-14">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8">
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">Call Us</p>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="block font-[family-name:var(--font-sora)] text-2xl mt-3 link-hover"
            >
              {site.phone}
            </a>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8">
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">Email Us</p>
            <a
              href={`mailto:${site.email}`}
              className="block font-[family-name:var(--font-sora)] text-2xl mt-3 break-all link-hover"
            >
              {site.email}
            </a>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8">
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">Visit Us</p>
            <p className="font-[family-name:var(--font-sora)] text-2xl mt-3">
              {site.fullAddress}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--line)] overflow-hidden aspect-video">
          <iframe
            title="Bertharry English Private School location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              site.fullAddress
            )}&output=embed`}
            className="w-full h-full grayscale-[40%] contrast-[1.05]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

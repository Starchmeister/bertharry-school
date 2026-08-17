import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
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

      <section className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-10">
          <div>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">
              Call Us
            </p>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="block font-[family-name:var(--font-sora)] text-2xl mt-3"
            >
              {site.phone}
            </a>
          </div>

          <div>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">
              Email Us
            </p>
            <a
              href={`mailto:${site.email}`}
              className="block font-[family-name:var(--font-sora)] text-2xl mt-3 break-all"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">
              Visit Us
            </p>
            <p className="font-[family-name:var(--font-sora)] text-2xl mt-3">
              {site.fullAddress}
            </p>
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
        </div>

        <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8 md:p-12">
          <h2 className="font-[family-name:var(--font-sora)] font-light text-2xl mb-8">
            Send us a message
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

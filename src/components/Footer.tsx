import Link from "next/link";
import { downloads, quickLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-alt)] border-t border-[var(--line)]">
      <div className="container-gutter py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src="/bertharrylogo.svg"
            alt="Bertharry English Private School"
            width={64}
            height={63}
            className="h-12 w-auto rounded-lg mb-5"
          />
          <p className="text-[var(--text-dim)] text-sm leading-relaxed max-w-sm">
            Bertharry English Private School has been committed to providing
            quality education for over three decades. We proudly serve the
            community of Tembisa, offering both primary and secondary
            education in a nurturing and supportive environment. Our
            learners are empowered to excel academically while also
            developing the life skills needed for future success.
          </p>
        </div>

        <div>
          <p className="mono-label text-xs mb-5 text-[var(--text-dimmer)]">
            School Downloads
          </p>
          <ul className="space-y-3">
            {downloads.map((d) => (
              <li key={d.label}>
                <a href={d.href} className="text-sm link-hover">
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-label text-xs mb-5 text-[var(--text-dimmer)]">
            Quick Links
          </p>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm link-hover">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-label text-xs mb-5 text-[var(--text-dimmer)]">
            Contact Us
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="link-hover"
              >
                {site.phone}
              </a>
            </li>
            <li className="text-[var(--text-dim)]">{site.fullAddress}</li>
            <li>
              <a href={`mailto:${site.email}`} className="link-hover">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`https://${site.website}`} className="link-hover">
                {site.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <p className="container-gutter py-5 text-center text-xs text-[var(--text-dimmer)] mono-label">
          © {new Date().getFullYear()} Bertharry English Private School — All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}

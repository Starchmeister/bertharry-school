import Link from "next/link";
import Image from "next/image";
import { phases } from "@/data/academics";
import SuccessStoriesCarousel from "@/components/SuccessStoriesCarousel";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const whyStudy = [
  "Umalusi Accreditation",
  "Excellent academic standard",
  "Strong encouragement for sports",
  "Strong encouragement for extra curricular (eg. chess, choir)",
];

const galleryPreview = [
  { label: "Uniform", href: "/gallery#uniform" },
  { label: "Events", href: "/gallery#events" },
  { label: "Our Facilities", href: "/gallery#facilities" },
  { label: "Extracurricular Activities", href: "/gallery#extracurricular" },
];

const admissionSteps = [
  { title: "Enquire", description: "Reach out to our admissions team to check availability." },
  { title: "Register", description: "Complete the registration form and fee structure documents." },
  { title: "Enroll", description: "Submit your application online to secure your child's place." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-gutter py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] items-start">
        <div>
          <span className="chip">Est. 1991</span>
          <h1 className="font-[family-name:var(--font-sora)] font-light text-[clamp(38px,6vw,72px)] leading-[1.05] mt-8">
            Bertharry English
            <br />
            Private School
          </h1>
          <p className="mt-8 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            Established in 1991 the school was named after its co-founding
            siblings, now Directors, Bertha and Harry Kumwenda.
          </p>
          <p className="mt-4 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            With a very humble beginning of a township crèche, and with only
            three learners, the school first opened its doors in Endulwini,
            at St Mathews Catholic Church premises.
          </p>
          <div className="mt-10">
            <Link href="/about" className="btn-solid">
              More About Us
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full rounded-xl border border-[var(--line)] overflow-hidden">
            <Image
              src="/homeimg1.png"
              alt="Bertharry English Private School campus"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-[var(--line)] bg-[var(--panel)]/95 backdrop-blur-sm p-6 grid grid-cols-2 gap-6 shadow-sm">
          <div>
            <p className="font-[family-name:var(--font-sora)] font-light text-3xl">
              1991
            </p>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)] mt-2">
              Founded
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-sora)] font-light text-3xl">
              30+
            </p>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)] mt-2">
              Years of Excellence
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-sora)] font-light text-3xl">
              3
            </p>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)] mt-2">
              Founding Learners
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-sora)] font-light text-3xl">
              2
            </p>
            <p className="mono-label text-[11px] text-[var(--text-dimmer)] mt-2">
              School Phases
            </p>
          </div>
          </div>
        </div>
        </div>
      </section>

      {/* Why study */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-2">
          <div>
            <span className="chip">Why Bertharry</span>
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6">
              Why Study at Bertharry?
            </h2>
            <p className="mt-6 text-[var(--text-dim)] leading-relaxed max-w-lg">
              With 30 years of educational experience, Bertharry is one of
              the oldest schools in Tembisa. Our focus goes beyond
              academics; we are committed to building young people
              holistically, ensuring they have the best opportunities for
              life success.
            </p>
            <div className="mt-10">
              <Link href="/admissions" className="btn-solid">
                Enroll Now
              </Link>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <ImagePlaceholder className="aspect-square mt-8" />
              <ImagePlaceholder className="aspect-square" />
            </div>
            <ul>
              {whyStudy.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-6 py-6 border-t border-[var(--line)] last:border-b"
                >
                  <span className="mono-label text-[var(--text-dimmer)] text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Academic phases */}
      <section className="container-gutter py-20 md:py-28">
        <span className="chip">Academics</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6 mb-14 max-w-2xl">
          One Journey, Every Phase
        </h2>

        <div className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-3">
          {phases.map((phase, i) => (
            <div
              key={phase.id}
              className="bg-[var(--panel)] p-8 flex flex-col border-r border-b border-[var(--line)]"
            >
              <span className="mono-label text-[var(--text-dimmer)] text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mono-label text-[11px] text-[var(--text-dim)] mt-3">
                {phase.grades}
              </span>
              <h3 className="font-[family-name:var(--font-sora)] font-light text-2xl mt-4">
                {phase.label}
              </h3>
              <p className="mt-4 text-[var(--text-dim)] leading-relaxed flex-1">
                {phase.summary}
              </p>
              <Link href={phase.href} className="nav-link mt-6">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Success stories */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
        <span className="chip">Success Stories</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6 mb-14 max-w-2xl">
          Old Bertharrians
        </h2>

        <SuccessStoriesCarousel />

        <div className="mt-10">
          <Link href="/success-stories" className="nav-link">
            View All Success Stories →
          </Link>
        </div>
        </div>
      </section>

      {/* Vision teaser */}
      <section className="container-gutter py-20 md:py-28 text-center">
        <span className="chip">Our Vision</span>
        <p className="font-[family-name:var(--font-sora)] font-light text-[clamp(24px,3.2vw,40px)] leading-snug mt-8 max-w-3xl mx-auto">
          &ldquo;Empowering our students to acquire, demonstrate, articulate
          and value knowledge and skills — supporting them as life-long
          learners who practice respect, tolerance, inclusion and
          excellence.&rdquo;
        </p>
        <Link href="/about" className="nav-link inline-block mt-8">
          Read Our Full Story →
        </Link>
      </section>

      {/* School Leadership */}
      <section id="leadership" className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Leadership</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6 mb-14">
            School Leadership
          </h2>

          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl">
            {[
              { name: "T. Montjane", role: "School Principal", img: "/principals/T.-MOTJANE.webp" },
              { name: "H. Kujinga", role: "Deputy Principal", img: "/principals/H.-KUJINGADEPUTY-PRINCIPAL.webp" },
              { name: "W. Moyo", role: "Deputy Principal", img: "/principals/MOYO-DEPUTY-PRINCIPAL-scaled (1).webp" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-[var(--panel)] rounded-xl border border-[var(--line)] overflow-hidden flex flex-col"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="p-6 flex flex-col gap-1">
                  <p className="mono-label text-[11px] text-[var(--text-dimmer)]">
                    {member.role}
                  </p>
                  <p className="font-[family-name:var(--font-sora)] text-xl leading-snug">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container-gutter py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="chip">Our Gallery</span>
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6">
              Life at Bertharry
            </h2>
          </div>
          <Link href="/gallery" className="nav-link">
            View Full Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryPreview.map((item) => (
            <Link key={item.label} href={item.href} className="block">
              <ImagePlaceholder label={item.label} className="aspect-square" />
            </Link>
          ))}
        </div>
      </section>

      {/* Admissions steps */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Admissions</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(30px,3.6vw,46px)] leading-tight mt-6 mb-14 max-w-2xl">
            How to Enroll
          </h2>
          <div className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-3">
            {admissionSteps.map((step, i) => (
              <div key={step.title} className="bg-[var(--panel)] p-8 border-r border-b border-[var(--line)]">
                <span className="mono-label text-[var(--text-dimmer)] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-sora)] text-2xl mt-4">
                  {step.title}
                </h3>
                <p className="mt-4 text-[var(--text-dim)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/admissions" className="btn-solid">
              View Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark bg-[var(--fill-solid)] text-[#f5f4f1]">
        <div className="container-gutter py-20 md:py-28 grid items-center gap-10 lg:grid-cols-[1fr_1.4fr_1fr]">
          <div
            className="hidden lg:flex items-end p-5 aspect-[4/5] rounded-xl border border-[rgba(245,244,241,0.16)] overflow-hidden"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(245,244,241,0.06) 0px, rgba(245,244,241,0.06) 1px, transparent 1px, transparent 14px)",
            }}
          >
            <span className="mono-label text-[10px] text-[rgba(245,244,241,0.5)] border border-[rgba(245,244,241,0.2)] rounded-md px-2.5 py-1.5">
              Photo Pending
            </span>
          </div>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,4vw,52px)] leading-tight">
              Ready to Register Your Child?
            </h2>
            <p className="mt-5 text-[rgba(245,244,241,0.62)]">
              Click on the button to enroll now.
            </p>
            <div className="mt-10">
              <Link href="/admissions" className="btn-ghost">
                Enroll Now
              </Link>
            </div>
          </div>
          <div
            className="hidden lg:flex items-end p-5 aspect-[4/5] rounded-xl border border-[rgba(245,244,241,0.16)] overflow-hidden"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(245,244,241,0.06) 0px, rgba(245,244,241,0.06) 1px, transparent 1px, transparent 14px)",
            }}
          >
            <span className="mono-label text-[10px] text-[rgba(245,244,241,0.5)] border border-[rgba(245,244,241,0.2)] rounded-md px-2.5 py-1.5">
              Photo Pending
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us — Bertharry English Private School",
  description:
    "For over 30 years, Bertharry English Private School has nurtured students into doctors, lawyers, engineers and business leaders from its home in Tembisa.",
};

const alumniFields = ["Doctors", "Lawyers", "Engineers", "Business Leaders"];

const missionObjectives = [
  "To provide or direct the effort of staff, parents and learners.",
  "To provide a measure by which the school can evaluate its progress.",
  "To provide a safe and conducive environment suitable for teaching and learning to take place.",
  "To create and develop responsible citizens by providing a supportive and hope giving environment.",
  "To provide proper healthy communication channels to enhance the culture of learning and teaching.",
  "To create the culture of participation in co-curricular activities in supporting and learning.",
  "To eradicate poverty in our surrounding area by reaching out to our community.",
];

const whyStudy = [
  "Umalusi Accreditation",
  "Excellent academic standard",
  "Strong encouragement for sports",
  "Strong encouragement for extra curricular (eg. chess, choir)",
];

const enrollFeatures = [
  "Accredited Institution",
  "Safe & Secure Environment",
  "Certificate of Excellence",
  "Career Oriented",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Us"
        description="Three decades of building young people holistically in the heart of Tembisa."
      />

      {/* Welcome */}
      <section className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1.3fr_1fr] items-start">
        <div>
          <span className="chip">Welcome</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6">
            Welcome to Bertharry English Private School
          </h2>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            For over 30 years, Bertharry English Private School has proudly
            nurtured and developed students into successful professionals
            across various fields. With a proven track record of excellence,
            our alumni have gone on to become doctors, lawyers, engineers,
            and business leaders, making a significant impact both locally
            and globally. Our holistic approach to education, coupled with a
            strong academic foundation, has empowered generations of
            students to pursue their dreams and excel in competitive
            industries.
          </p>
          <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
            At Bertharry, we are committed to providing a supportive
            learning environment that fosters critical thinking, leadership,
            and personal growth. Our success stories over the past three
            decades are a testament to the quality of education and
            opportunities we provide, helping learners build solid futures
            and contributing to society in meaningful ways.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-solid">
              Contact Us
            </Link>
          </div>
        </div>

        <div>
        <img src="/Gallery/facilities/school buildings/sb2.png" alt="Bertharry school building" className="aspect-[4/3] object-cover rounded-xl mb-6 w-full" loading="lazy" />
        <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8 md:p-10">
          <p className="mono-label text-[11px] text-[var(--text-dimmer)]">
            Our Alumni Go On To Become
          </p>
          <ul className="mt-6 space-y-5">
            {alumniFields.map((field, i) => (
              <li key={field} className="flex items-baseline gap-4">
                <span className="mono-label text-[var(--text-dimmer)] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-sora)] text-xl">
                  {field}
                </span>
              </li>
            ))}
          </ul>
          <div className="h-px bg-[var(--line)] my-8" />
          <p className="text-[var(--text-dim)] leading-relaxed text-sm">
            See where some of our Old Bertharrians are today on our{" "}
            <Link
              href="/success-stories"
              className="underline underline-offset-4 link-hover"
            >
              Success Stories
            </Link>{" "}
            page.
          </p>
        </div>
        </div>
      </section>

      {/* Historical background */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1.3fr_1fr] items-start">
          <div>
            <span className="chip">Our History</span>
            <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6">
              Historical Background
            </h2>
            <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
              Established in 1991, the school was named after its
              co-founding siblings, now Directors, Bertha and Harry
              Kumwenda. With a very humble beginning of a township crèche,
              and with only three learners, the school first opened its
              doors in Endulwini, at St Mathews Catholic Church premises.
            </p>
            <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl">
              The school improved each passing year with the introduction
              of the Primary school phase as the children graduated from
              the pre-school. The school prides itself as the first black
              owned private school, in the township, to have English as
              its Home Language and Afrikaans as the First Additional
              Language.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-8 md:p-10">
            <p className="mono-label text-[11px] text-[var(--text-dimmer)]">
              Founding Directors
            </p>
            <p className="font-[family-name:var(--font-sora)] text-2xl mt-4">
              Bertha Kumwenda
            </p>
            <p className="font-[family-name:var(--font-sora)] text-2xl mt-1">
              Harry Kumwenda
            </p>
            <div className="h-px bg-[var(--line)] my-8" />
            <p className="text-[var(--text-dim)] leading-relaxed">
              Named after its co-founding siblings, now Directors, the
              school first opened its doors in Endulwini in 1991 — and has
              served Tembisa families ever since.
            </p>
          </div>
        </div>
      </section>

      {/* Vision statement */}
      <section className="container-gutter py-20 md:py-28 grid gap-14 lg:grid-cols-[1fr_1.3fr] items-start">
        <div>
          <span className="chip">Our Vision</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(26px,3vw,38px)] leading-tight mt-6">
            Vision Statement
          </h2>
        </div>
        <p className="text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
          Our vision, beyond providing quality education, is hinged on
          empowering our students to acquire, demonstrate, articulate,
          value knowledge and skills. This attribute, we believe, will
          support them as life-long learners, to participate and
          contribute to the global world and practice the core values of
          the school, respect, tolerance, inclusion and excellence. We
          endeavour to provide the highest programs possible from early
          childhood through high school, to nourish the body, mind, and
          soul of each child in our care.
        </p>
      </section>

      {/* Mission statement */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--line)]">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">Our Mission</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,3.4vw,44px)] leading-tight mt-6 mb-12 max-w-2xl">
            Mission Statement
          </h2>
          <ul className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] md:grid-cols-2">
            {missionObjectives.map((item, i) => (
              <li key={item} className="bg-[var(--panel)] p-8 flex gap-6 border-r border-b border-[var(--line)]">
                <span className="mono-label text-[var(--text-dimmer)] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Bertharry */}
      <section className="container-gutter py-20 md:py-28">
        <span className="chip">Why Bertharry</span>
        <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,3.4vw,44px)] leading-tight mt-6 mb-12 max-w-2xl">
          What sets a Bertharrian apart
        </h2>
        <ul className="grid rounded-xl overflow-hidden border-t border-l border-[var(--line)] sm:grid-cols-2">
          {whyStudy.map((item, i) => (
            <li key={item} className="bg-[var(--panel)] p-8 flex gap-6 border-r border-b border-[var(--line)]">
              <span className="mono-label text-[var(--text-dimmer)] text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Our Team */}
      <section id="team" className="bg-[var(--bg-alt)] border-y border-[var(--line)] scroll-mt-24">
        <div className="container-gutter py-20 md:py-28">
          <span className="chip">The People</span>
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,3.4vw,44px)] leading-tight mt-6 mb-14">
            Our Team
          </h2>

          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl">
            {team.map((member) => (
              <div
                key={`${member.name}-${member.img}`}
                className="bg-[var(--panel)] rounded-xl border border-[var(--line)] overflow-hidden flex flex-col"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover object-top"
                  loading="lazy"
                />
                <div className="p-5 flex flex-col gap-1">
                  <p className="mono-label text-[11px] text-[var(--text-dimmer)]">{member.role}</p>
                  <p className="font-[family-name:var(--font-sora)] text-lg leading-snug">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark bg-[var(--fill-solid)] text-[#f5f4f1]">
        <div className="container-gutter py-20 md:py-28 text-center">
          <h2 className="font-[family-name:var(--font-sora)] font-light text-[clamp(28px,4vw,52px)] leading-tight">
            Enroll Your Child Today!
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {enrollFeatures.map((feature) => (
              <span
                key={feature}
                className="mono-label text-[11px] border border-[rgba(245,244,241,0.3)] px-5 py-3 text-[rgba(245,244,241,0.75)]"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/admissions" className="btn-ghost">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

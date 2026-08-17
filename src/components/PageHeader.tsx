import Link from "next/link";

export default function PageHeader({
  eyebrow,
  title,
  description,
  parent,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  parent?: { label: string; href: string };
}) {
  return (
    <section className="container-gutter pt-14 pb-16 md:pt-20 md:pb-20 border-b border-[var(--line)]">
      <p className="text-sm text-[var(--text-dimmer)]">
        <Link href="/" className="link-hover">
          Home
        </Link>{" "}
        /{" "}
        {parent && (
          <>
            <Link href={parent.href} className="link-hover">
              {parent.label}
            </Link>{" "}
            /{" "}
          </>
        )}
        <span className="text-[var(--text-dim)]">{title}</span>
      </p>
      <span className="chip mt-6 inline-block">{eyebrow}</span>
      <h1 className="font-[family-name:var(--font-sora)] font-light text-[clamp(32px,4.6vw,58px)] leading-[1.05] mt-6 max-w-3xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </section>
  );
}

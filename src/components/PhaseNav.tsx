import Link from "next/link";
import { phases } from "@/data/academics";

export default function PhaseNav({ currentId }: { currentId: string }) {
  const index = phases.findIndex((p) => p.id === currentId);
  const prev = phases[index - 1];
  const next = phases[index + 1];

  return (
    <div className="container-gutter py-8 flex items-center justify-between border-b border-[var(--line)]">
      {prev ? (
        <Link href={prev.href} className="nav-link">
          ← {prev.label}
        </Link>
      ) : (
        <Link href="/academics" className="nav-link">
          ← Academics
        </Link>
      )}
      <Link href="/academics" className="mono-label text-[13px] text-[var(--text-dimmer)] link-hover">
        All Phases
      </Link>
      {next ? (
        <Link href={next.href} className="nav-link">
          {next.label} →
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}

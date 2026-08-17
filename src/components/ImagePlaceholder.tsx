export default function ImagePlaceholder({
  label = "Photo Pending",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-xl border border-[var(--line)] bg-[var(--bg-alt)] overflow-hidden flex items-end justify-start p-5 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, var(--line) 0px, var(--line) 1px, transparent 1px, transparent 14px)",
      }}
    >
      <span className="mono-label text-[10px] text-[var(--text-dimmer)] bg-[var(--bg)] border border-[var(--line)] rounded-md px-2.5 py-1.5">
        {label}
      </span>
    </div>
  );
}

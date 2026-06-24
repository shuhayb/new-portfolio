export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-gradient font-sans font-bold leading-none tracking-tight ${className}`}
      aria-hidden="true"
    >
      SM
    </span>
  );
}

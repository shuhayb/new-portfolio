export function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2.75"
        y="2.75"
        width="58.5"
        height="58.5"
        rx="15.25"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-poppins), Poppins, sans-serif"
        fontSize="30"
        fontWeight={600}
        letterSpacing="-1.5"
        fill="currentColor"
      >
        SM
      </text>
    </svg>
  );
}

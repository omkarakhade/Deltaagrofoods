export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg
      viewBox="0 0 100 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 6 L94 82 L74 82 L50 40 L26 82 L6 82 Z"
        fill="none"
        stroke="#1FA34D"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <path
        d="M58 44 L82 82 L64 82 L50 58 Z"
        fill="none"
        stroke="#1FA34D"
        strokeWidth="8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

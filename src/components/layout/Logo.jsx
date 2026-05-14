const Logo = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="AM logo"
  >
    <defs>
      <linearGradient id="am-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f9a8d4" />
        <stop offset="50%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#am-grad)" opacity="0.18" />
    <rect x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="url(#am-grad)" strokeWidth="2" />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Inter, sans-serif"
      fontSize="28"
      fontWeight="700"
      fill="url(#am-grad)"
    >
      AM
    </text>
  </svg>
);

export default Logo;

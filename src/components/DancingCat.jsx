import '../styles/animations.css';

function DancingCat({ isPlaying, danceStyle }) {
  const rootClass = ['dancing-cat', isPlaying ? `dance-${danceStyle}` : 'dance-paused'].join(' ');

  return (
    <svg
      className={rootClass}
      viewBox="0 0 200 220"
      width="200"
      height="220"
      role="img"
      aria-label={isPlaying ? '춤추는 고양이' : '정지한 고양이'}
    >
      <path
        className="cat-tail"
        d="M150 150 Q190 140 185 90 Q182 70 165 75"
        fill="none"
        stroke="#f4a460"
        strokeWidth="14"
        strokeLinecap="round"
      />

      <ellipse className="cat-leg cat-leg-left" cx="75" cy="205" rx="14" ry="12" fill="#f4a460" />
      <ellipse className="cat-leg cat-leg-right" cx="125" cy="205" rx="14" ry="12" fill="#f4a460" />

      <ellipse className="cat-body" cx="100" cy="150" rx="55" ry="45" fill="#f6b26b" />

      <ellipse className="cat-paw cat-paw-left" cx="70" cy="185" rx="12" ry="10" fill="#fff" opacity="0.9" />
      <ellipse className="cat-paw cat-paw-right" cx="130" cy="185" rx="12" ry="10" fill="#fff" opacity="0.9" />

      <g className="cat-head">
        <polygon className="cat-ear cat-ear-left" points="55,55 40,15 75,45" fill="#f6b26b" />
        <polygon className="cat-ear cat-ear-right" points="145,55 160,15 125,45" fill="#f6b26b" />
        <polygon points="55,50 47,28 68,44" fill="#ffd8b0" />
        <polygon points="145,50 153,28 132,44" fill="#ffd8b0" />

        <circle cx="100" cy="80" r="50" fill="#f6b26b" />

        <path
          d="M60 55 L75 65 M140 55 L125 65"
          stroke="#e8993f"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        <g className="cat-eyes">
          <ellipse cx="80" cy="80" rx="7" ry="9" fill="#2b2b2b" />
          <ellipse cx="120" cy="80" rx="7" ry="9" fill="#2b2b2b" />
          <circle cx="82" cy="77" r="2" fill="#fff" />
          <circle cx="122" cy="77" r="2" fill="#fff" />
        </g>

        <path d="M100 95 L94 102 L106 102 Z" fill="#e08a6b" />
        <path
          d="M100 102 Q100 108 92 108 M100 102 Q100 108 108 108"
          stroke="#2b2b2b"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        <g stroke="#d98b4a" strokeWidth="2" strokeLinecap="round">
          <line x1="45" y1="85" x2="70" y2="88" />
          <line x1="45" y1="95" x2="70" y2="95" />
          <line x1="155" y1="85" x2="130" y2="88" />
          <line x1="155" y1="95" x2="130" y2="95" />
        </g>
      </g>
    </svg>
  );
}

export default DancingCat;

import React, { useEffect, useState } from 'react';

// Style block with hover animation for each letter
const styles = `
@font-face {
  font-family: 'CustomScriptFont';
  src: url('/fonts/YourFontName.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.animated-logo {
  width: 100%;
  height: auto;
  max-width: 90vw;
  display: block;
  margin: 0 auto;
}

.logo-text {
  font-family: 'CustomScriptFont', cursive;
  font-size: clamp(2rem, 10vw, 5rem);
  fill: #ffffff;
  dominant-baseline: middle;
  cursor: pointer;
  letter-spacing: 0.06em;
}

.logo-text tspan {
  transition: transform 0.3s ease, fill 0.3s ease;
  display: inline-block;
}

/* Hover animation with stagger */
.logo-text:hover tspan {
  animation: bounceWave 0.6s ease-in-out forwards;
}

.logo-text:hover tspan:nth-child(1) { animation-delay: 0s; }
.logo-text:hover tspan:nth-child(2) { animation-delay: 0.05s; }
.logo-text:hover tspan:nth-child(3) { animation-delay: 0.1s; }
.logo-text:hover tspan:nth-child(4) { animation-delay: 0.15s; }
.logo-text:hover tspan:nth-child(5) { animation-delay: 0.2s; }
.logo-text:hover tspan:nth-child(6) { animation-delay: 0.25s; }
.logo-text:hover tspan:nth-child(7) { animation-delay: 0.3s; }
.logo-text:hover tspan:nth-child(8) { animation-delay: 0.35s; }
.logo-text:hover tspan:nth-child(9) { animation-delay: 0.4s; }
.logo-text:hover tspan:nth-child(10) { animation-delay: 0.45s; }
.logo-text:hover tspan:nth-child(11) { animation-delay: 0.5s; }
.logo-text:hover tspan:nth-child(12) { animation-delay: 0.55s; }

@keyframes bounceWave {
  0%   { transform: translateY(0) scale(1); fill: #ffffff; }
  50%  { transform: translateY(-10px) scale(1.2); fill:rgb(255, 209, 24); }
  100% { transform: translateY(0) scale(1); fill: #ffffff; }
}
`;

const injectStyles = () => {
  if (document.getElementById('animated-svg-logo-hover-style')) return;
  const styleTag = document.createElement('style');
  styleTag.id = 'animated-svg-logo-hover-style';
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
};

const AnimatedSvgLogo = () => {
  const FULL_TEXT = 'Arjun Aadhith';
  const [text, setText] = useState('');

  useEffect(() => {
    injectStyles();
    let i = 0;
    const interval = setInterval(() => {
      setText(FULL_TEXT.slice(0, i + 1));
      i++;
      if (i === FULL_TEXT.length) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      className="animated-logo"
      viewBox="0 0 600 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated logo text Arjun Aadhith"
    >
      <text x="0" y="50%" className="logo-text">
        {text.split('').map((char, index) => (
          <tspan key={index}>{char}</tspan>
        ))}
      </text>
    </svg>
  );
};

export default AnimatedSvgLogo;

import React, { useState, useEffect } from 'react';
import { 
  Palette, Sparkle, Rocket, Zap, 
  Cpu, Hexagon, Layers, Compass 
} from 'lucide-react';
import './SymposiumHeader.css';

const FontStyles = [
  'font-serif',
  'font-sans',
  'font-mono',
  'tracking-wide',
  'font-light'
];

const ColorVariants = [
  'text-blue-400 animate-pulse',
  'text-green-400 animate-bounce', 
  'text-purple-400 animate-wiggle',
  'text-pink-400 animate-spin-slow',
  'text-orange-400 animate-float'
];

const SubTextIcons = [Palette, Sparkle, Rocket, Zap, Cpu, Hexagon, Layers, Compass];

const SymposiumHeader = () => {
  const [revealedText, setRevealedText] = useState('');
  const [isSubTextVisible, setIsSubTextVisible] = useState(false);
  const [currentFont, setCurrentFont] = useState('font-sans');
  const [currentColor, setCurrentColor] = useState('text-blue-400');
  const [currentIcon, setCurrentIcon] = useState(Palette);

  const fullText = 'From Department of Computer Science & Engineering';
  const subText = 'Explore ‧ Innovate ‧ Revolutionize';

  useEffect(() => {
    const revealText = () => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setRevealedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          // Show subtext after main text is revealed
          setTimeout(() => {
            setIsSubTextVisible(true);
            startSubTextAnimations();
          }, 1000);
        }
      }, 100); // Reduced speed from 50 to 100

      return () => clearInterval(intervalId);
    };

    const startSubTextAnimations = () => {
      setInterval(() => {
        setCurrentFont(FontStyles[Math.floor(Math.random() * FontStyles.length)]);
        setCurrentColor(ColorVariants[Math.floor(Math.random() * ColorVariants.length)]);
        setCurrentIcon(SubTextIcons[Math.floor(Math.random() * SubTextIcons.length)]);
      }, 3000); // Increased interval for smoother transitions
    };

    revealText();
  }, []);

  const IconComponent = currentIcon;

  return (
    <div className="codefest-container">
      <div className="main-text decrypt-animation">
        {revealedText}
        <span className="cursor animate-blink">|</span>
      </div>
      {isSubTextVisible && (
        <div 
          className={`
            sub-text 
            ${currentFont} 
            ${currentColor} 
            transform transition-all duration-700 
            hover:scale-105 
            hover:rotate-2
          `}
        >
          <IconComponent className="icon-animation w-8 h-8 mr-3 animate-bounce" />
          {subText}
        </div>
      )}
    </div>
  );
};

export default SymposiumHeader;
import{ useEffect, useRef } from "react";
import anime from "animejs";

const WritingAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textPath = textRef.current;
    const length = textPath.getTotalLength();

    textPath.style.strokeDasharray = length;
    textPath.style.strokeDashoffset = length;

    anime({
      targets: textPath,
      strokeDashoffset: [length, 0],
      easing: "easeInOutSine",
      duration: 3000,
      loop: false,
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <svg
        viewBox="0 0 600 200"
        className="w-3/4 max-w-lg"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
      >
        <path
          ref={textRef}
          d="M100 100 C150 50, 250 50, 300 100 S450 150, 500 100"
          strokeLinecap="round"
        />
        <text x="50" y="180" fontSize="30" fill="#fff">
          Arjun Aadhith
        </text>
      </svg>
    </div>
  );
};

export default WritingAnimation;

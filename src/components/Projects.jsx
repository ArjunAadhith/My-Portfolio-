import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "../components/Project.css";

const Projects = () => {
  // State for tracking active image in multiple image containers
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    blueContainer: 0,
    pinkContainer: 0,
    largeContainer: 0,
    leftColumn: 0,
    rightColumn: 0, // Added for right column
  });

  // State for tracking overlay texts based on active images
  const [overlayTexts, setOverlayTexts] = useState({
    blueContainer: "3D Modeling",
    pinkContainer: "Graphic Design",
    largeContainer: "Car Game",
  });

  // State to track auto-scroll status
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const [expandedImage, setExpandedImage] = useState(null);
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  // Refs for multiple image containers
  const blueContainerRef = useRef(null);
  const pinkContainerRef = useRef(null);
  const largeContainerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null); // Added for right column

  // Refs for interval timers
  const blueContainerTimer = useRef(null);
  const pinkContainerTimer = useRef(null);
  const largeContainerTimer = useRef(null);
  const leftColumnTimer = useRef(null);
  const rightColumnTimer = useRef(null); // Added for right column

  const projectDetails = {
    // Frontend projects
    "Paradize e-com": {
      description:
        "Paradize – A sleek, modern e-commerce platform delivering a seamless shopping experience on desktop.",
      liveLink: "https://paradize-ecom.netlify.app/",
      githubLink: "https://github.com/ArjunAadhith/Paradize.ecom.git",
    },
    "Flixora OTT Platform": {
      description:
        "Flixora: A desktop OTT platform offering intuitive UI and smart, personalized recommendations.",
      liveLink: "https://flixora-streaming-platform.netlify.app/",
      githubLink: "https://github.com/ArjunAadhith/Flixora-Movie-Platform.git",
    },
    "RideEase car rental": {
      description:
        "Effortless booking and sleek UI deliver a hassle-free car rental service on desktop.",
      liveLink: "https://rideease-car.netlify.app/",
      githubLink:
        "https://github.com/ArjunAadhith/RideEase-Premium-Car-Rental-Website.git",
    },
    "Codefest 2K25": {
      description:
        "A vibrant website for a coding event featuring participant registration and event details.",
      liveLink: "https://codefest-2k25.netlify.app/",
      githubLink:
        "https://github.com/ArjunAadhith/Codefest-2k25-Symposium-Website.git",
    },

    // 3D Modeling
    "Aston Martin Valhalla": {
      description:
        "A detailed 3D model of the Aston Martin Valhalla hypercar with realistic textures.",
      exploreLink: "https://3d-car-model-design.netlify.app/",
    },
    "Forza Wallpaper": {
      description:
        "A high-quality wallpaper design inspired by Forza racing games.",
      exploreLink: "https://forzahorizon-wallpaper.netlify.app/",
    },
    "Custom Wallpaper": {
      description:
        "A custom designed wallpaper with unique aesthetic elements.",
      exploreLink: "https://never-settle-wallpaper.netlify.app/",
    },
    "Gaming Setup": {
      description:
        "A modern gaming setup design with attention to detail and realistic lighting.",
      exploreLink: "https://gaming-wallpaper.netlify.app/",
    },

    // Graphic Design
    "Nike Brand Poster": {
      description:
        "A minimalist poster design for Nike featuring bold typography and dynamic composition.",
      exploreLink: "https://nike-shoe-design.netlify.app/",
    },
    "RideEase Logo Design": {
      description:
        "A modern logo design for RideEase car rental service emphasizing speed and reliability.",
      exploreLink: "https://rideease-logo.netlify.app/",
    },
    "THL Brand Identity": {
      description:
        "A comprehensive brand identity design for THL with logo, color scheme, and typography.",
      exploreLink: "https://thl-logo.netlify.app/",
    },

    // Projects
    "Car Game": {
      description:
        "An interactive racing game with realistic physics and engaging gameplay mechanics.",
      liveLink: "https://mini-car-game.netlify.app/",
      githubLink: "https://github.com/ArjunAadhith/Car-Game-Project-.git",
    },
    "QR Code Generator": {
      description:
        "A tool that creates customizable QR codes for various purposes with export options.",
      liveLink: "https://qr-code-gens.netlify.app/",
      githubLink: "https://github.com/ArjunAadhith/QR-Code-Generator.git",
    },
    "Form Validation Project": {
      description:
        "A comprehensive form validation solution with real-time feedback and accessibility features.",
      liveLink: "https://formvalidation-ui.netlify.app/",
      githubLink: "https://github.com/ArjunAadhith/Form-Validation-Project.git",
    },
    "Neumorphic Calculator": {
      description:
        "A calculator with neumorphic design elements for a modern and elegant user experience.",
      liveLink: "https://neumorphic-calcs.netlify.app/",
      githubLink: "https://github.com/ArjunAadhith/Neumorphic-Calculator.git",
    },

    // UI/UX Design
    "Stucor for Desktop": {
      description: "A redesigned desktop interface for Stucor educational platform with improved usability.",
      exploreLink: "https://www.figma.com/proto/nIfAXuv4TethAKm2JepTGh/Stucor-Desktop-UI?page-id=0%3A1&node-id=12-84&viewport=143%2C191%2C0.05&t=Tg8Ge3zHR5MsyIu5-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=308%3A273",
    },
    "Pet Frnd": {
      description:
        "A pet adoption platform design focusing on user experience and emotional connection.",
      exploreLink: "https://www.figma.com/proto/b0oJ5zPBtnU1Nb2v998pyl/Pet-Frnd?page-id=0%3A1&node-id=8-2&p=f&viewport=124%2C610%2C0.36&t=3l9jE8RIDk5x3itd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A2",
    },
    "TS Motors": {
      description:
        "A modern website design for TS Motors showcasing vehicles and services.",
      exploreLink: "https://www.figma.com/proto/sMiKy8vqCBgqGw2QYWXKp5/TS-MOTORS?page-id=0%3A1&node-id=4-3&p=f&viewport=62%2C418%2C0.22&t=tPUShUGbfKycNK7D-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A3&show-proto-sidebar=1",
    },
    "Google Sheet UI Design": {
      description:
        "A redesigned search functionality for Google Sheets with improved usability.",
      exploreLink: "https://www.figma.com/proto/1EXdPGE9ee6CT9m7TOaT3G/Google-Sheet-UI?page-id=0%3A1&node-id=1-8&viewport=161%2C430%2C0.79&t=WMM4bVIK5p1TsLpP-1&scaling=scale-down&content-scaling=fixed",
    },
    "Neumorphism control center": {
      description:
        "A control center interface with neumorphic design principles for a tactile feel.",
      exploreLink: "https://www.figma.com/proto/DRSTFzuFqxQzIQJgyAeErs/Untitled?page-id=1%3A2&node-id=3-3&viewport=627%2C931%2C0.19&t=3CsU2hGKvDd8IWju-1&scaling=scale-down&content-scaling=fixed",
    },
    "One Piece Music UI": {
      description:
        "A music player UI inspired by One Piece anime with themed visual elements.",
      exploreLink: "https://www.figma.com/proto/929gYewDfQUwWcfhbgq5A3/Music-UI-Vision?page-id=0%3A1&node-id=1-2&viewport=346%2C382%2C0.77&t=2HpKgEDGGyCxceIY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    },
    "yacht booking app": {
      description:
        "A luxury yacht booking app interface with elegant design and seamless booking flow.",
      exploreLink: "https://www.figma.com/proto/3rnSAp7DD9GnHI7vl5Yeco/Yacht-Booking?page-id=0%3A1&node-id=1-2&viewport=240%2C457%2C0.54&t=xpDAYoVJG4CJPOLB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    },
    "Login Page UI": {
      description:
        "A modern and secure login page design with clean aesthetics and good UX practices.",
      exploreLink: "https://www.figma.com/proto/FXAYL15VONilLo2ApgF0ag/Untitled?page-id=0%3A1&node-id=118-4&viewport=-1127%2C151%2C0.15&t=40pru97sFl0w3Kx9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=102%3A2",
    },
  };

  // Multiple images data with titles for overlay
  const blueContainerImages = [
    {
      src: "Aston Martin Valhalla.jpg",
      alt: "Aston Martin Valhalla",
      title: "Aston Martin Valhalla",
    },
    { src: "forza wallpaper.jpg", alt: "Wallpaper", title: "Forza Wallpaper" },
    { src: "my wallpaper.jpg", alt: "wallpaper 2", title: "Custom Wallpaper" },
    { src: "Gaming Wallpaper.jpg", alt: "wallpaper 3", title: "Gaming Setup" },
  ];

  const pinkContainerImages = [
    {
      src: "Nike Brand Poster.png",
      alt: "Nike Poster",
      title: "Nike Brand Poster",
    },
    {
      src: "RideEase logo.jpg",
      alt: "RideEase logo",
      title: "RideEase Logo Design",
    },
    { src: "THL Logo 1.jpg", alt: "THL Logo", title: "THL Brand Identity" },
  ];

  const largeContainerImages = [
    { src: "car game.png", alt: "Car Game", title: "Car Game" },
    {
      src: "QR Code Generator.png",
      alt: "QR Code Generator",
      title: "QR Code Generator",
    },
    {
      src: "form validation.png",
      alt: "Form Validation Project",
      title: "Form Validation Project",
    },
    {
      src: "Neumorphic Calculator.png",
      alt: "Neumorphic Calculator",
      title: "Neumorphic Calculator",
    },
  ];

  // Left column images data
  const leftColumnImages = [
    { src: "paradize.png", alt: "Paradize", title: "Paradize e-com" },
    {
      src: "flixora.png",
      alt: "Flixora OTT Platform",
      title: "Flixora OTT Platform",
    },
    {
      src: "car rental.png",
      alt: "RideEase car rental",
      title: "RideEase car rental",
    },
    { src: "codefest.png", alt: "Codefest 2K25", title: "Codefest 2K25" },
  ];

  // Right column images data (UI/UX Design)
  const rightColumnImages = [
    { src: "stucor for desktop.jpg", alt: "Stucor", title: "Stucor for Desktop" },
    { src: "pet frnd.jpg", alt: "pet frnd", title: "Pet Frnd" },
    { src: "TS MOTORS.jpg", alt: "TS Motors", title: "TS Motors" },
    { 
      src: "Google Sheet UI Design for Search icon.jpg", 
      alt: "Google sheet UI design for search icon", 
      title: "Google Sheet UI Design" 
    },
    { 
      src: "Neumorphism control center.png", 
      alt: "Neumorphism control center", 
      title: "Neumorphism control center" 
    },
    { 
      src: "one piece music ui.jpg", 
      alt: "One Piece Music UI", 
      title: "One Piece Music UI" 
    },
    { 
      src: "yacht booking app.jpg", 
      alt: "Yacht booking app", 
      title: "yacht booking app" 
    },
    { 
      src: "logging page design.jpg", 
      alt: "Login Page UI", 
      title: "Login Page UI" 
    },
  ];

  const handleImageClick = (title, imageSrc) => {
    // Get the project details including the exploreLink
    const projectDetail = projectDetails[title] || {};
    
    // Update state with clicked image details
    setExpandedImage({
      title: title,
      src: imageSrc,
      description: projectDetail.description || "No description available.",
      liveLink: projectDetail.liveLink || "#",
      githubLink: projectDetail.githubLink || "#",
      exploreLink: projectDetail.exploreLink || "#"  // Make sure exploreLink is included
    });

    // Show expanded card
    setIsCardExpanded(true);

    // Pause auto-scroll when viewing details
    pauseAutoScroll();
  };

  // Function to close expanded card
  const closeExpandedCard = () => {
    setIsCardExpanded(false);
  };

  // Click outside to close
  const expandedCardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expandedCardRef.current &&
        !expandedCardRef.current.contains(event.target)
      ) {
        closeExpandedCard();
      }
    };

    if (isCardExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCardExpanded]);

  // Add ESC key to close
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeExpandedCard();
      }
    };

    if (isCardExpanded) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isCardExpanded]);

  // Animation for gradient background
  useEffect(() => {
    const gradientAnimation = document.querySelector(".projects-container");
    if (gradientAnimation) {
      gradientAnimation.style.animation = "gradientBG 15s ease infinite";
    }
  }, []);

  // Auto scroll functionality
  useEffect(() => {
    // Only set up auto-scroll if isAutoScrolling is true
    if (isAutoScrolling) {
      // Set up auto-scroll for each container
      blueContainerTimer.current = setInterval(() => {
        navigateImages("blueContainer", 1);
      }, 2500);

      pinkContainerTimer.current = setInterval(() => {
        navigateImages("pinkContainer", 1);
      }, 2500);

      largeContainerTimer.current = setInterval(() => {
        navigateImages("largeContainer", 1);
      }, 2500);

      leftColumnTimer.current = setInterval(() => {
        navigateImages("leftColumn", 1);
      }, 2500);

      // Right column auto-scroll
      rightColumnTimer.current = setInterval(() => {
        navigateImages("rightColumn", 1);
      }, 2500);
    }

    // Clean up intervals on unmount or when isAutoScrolling changes
    return () => {
      clearInterval(blueContainerTimer.current);
      clearInterval(pinkContainerTimer.current);
      clearInterval(largeContainerTimer.current);
      clearInterval(leftColumnTimer.current);
      clearInterval(rightColumnTimer.current);
    };
  }, [isAutoScrolling, activeImageIndexes]); // Re-create intervals when activeImageIndexes changes

  // Pause auto-scroll when user interacts with the containers
  const pauseAutoScroll = () => {
    setIsAutoScrolling(false);

    // Resume auto-scroll after 5 seconds of inactivity
    const resumeTimer = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);

    // Clean up timeout if user interacts again before resuming
    return () => clearTimeout(resumeTimer);
  };

  // Add swipe functionality
  useEffect(() => {
    // Array of container objects with their respective refs and type (horizontal/vertical)
    const containers = [
      { ref: blueContainerRef, name: "blueContainer", type: "horizontal" },
      { ref: pinkContainerRef, name: "pinkContainer", type: "horizontal" },
      { ref: largeContainerRef, name: "largeContainer", type: "horizontal" },
      { ref: leftColumnRef, name: "leftColumn", type: "vertical" },
      { ref: rightColumnRef, name: "rightColumn", type: "horizontal" }, // Added right column
    ];

    // Add swipe functionality to all containers
    containers.forEach((container) => {
      const element = container.ref.current;
      if (!element) return;

      let startX, startY, startTime;
      let lastTouch = null;
      let isScrollingHorizontally = false;
      let isScrollingVertically = false;

      // Touch and mouse events threshold values
      const MIN_SWIPE_DISTANCE = 50; // Minimum distance required for a swipe
      const MAX_SWIPE_TIME = 300; // Maximum time in ms for a swipe
      const WHEEL_TIMEOUT = 100; // Timeout for wheel events in ms

      let wheelDebounceTimer = null;
      let lastWheelTimestamp = 0;
      let wheelDeltaX = 0;
      let wheelDeltaY = 0;

      // Touch events for mobile
      const touchStart = (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        startTime = new Date().getTime();
        lastTouch = { x: startX, y: startY };
        isScrollingHorizontally = false;
        isScrollingVertically = false;

        // Pause auto-scroll when user starts interaction
        pauseAutoScroll();
      };

      const touchMove = (e) => {
        if (!lastTouch) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - lastTouch.x;
        const diffY = currentY - lastTouch.y;

        // Determine scroll direction based on larger movement
        if (!isScrollingHorizontally && !isScrollingVertically) {
          if (Math.abs(diffX) > Math.abs(diffY)) {
            isScrollingHorizontally = true;
          } else {
            isScrollingVertically = true;
          }
        }

        // If scrolling in a different direction than container type, prevent default
        if (
          (container.type === "horizontal" && isScrollingVertically) ||
          (container.type === "vertical" && isScrollingHorizontally)
        ) {
          e.preventDefault();
        }

        lastTouch = { x: currentX, y: currentY };
      };

      const touchEnd = (e) => {
        if (!lastTouch || !startX || !startY) return;

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = endX - startX;
        const diffY = endY - startY;
        const elapsedTime = new Date().getTime() - startTime;

        // Check if it's a valid swipe (quick enough and long enough)
        if (elapsedTime <= MAX_SWIPE_TIME) {
          if (
            container.type === "horizontal" &&
            Math.abs(diffX) > MIN_SWIPE_DISTANCE
          ) {
            navigateImages(container.name, diffX < 0 ? 1 : -1);
          } else if (
            container.type === "vertical" &&
            Math.abs(diffY) > MIN_SWIPE_DISTANCE
          ) {
            navigateImages(container.name, diffY < 0 ? 1 : -1);
          }
        }

        lastTouch = null;
        isScrollingHorizontally = false;
        isScrollingVertically = false;
      };

      // Wheel event for laptop trackpad/swipe
      const handleWheel = (e) => {
        // Pause auto-scroll when user interacts
        pauseAutoScroll();

        const currentTime = new Date().getTime();

        // Accumulate wheel deltas
        wheelDeltaX += e.deltaX;
        wheelDeltaY += e.deltaY;

        // Reset timer
        clearTimeout(wheelDebounceTimer);

        // Process wheel event after WHEEL_TIMEOUT of inactivity
        wheelDebounceTimer = setTimeout(() => {
          // Handle horizontal containers
          if (container.type === "horizontal") {
            // Check if horizontal movement is dominant or there's significant movement
            const isHorizontalDominant =
              Math.abs(wheelDeltaX) > Math.abs(wheelDeltaY);
            const isSignificantMovement =
              Math.abs(wheelDeltaX) > MIN_SWIPE_DISTANCE;

            if (isSignificantMovement) {
              if (isHorizontalDominant || Math.abs(wheelDeltaY) < 50) {
                navigateImages(container.name, wheelDeltaX > 0 ? 1 : -1);
                e.preventDefault();
              }
            }
          }
          // Handle vertical containers
          else if (container.type === "vertical") {
            // Check if vertical movement is dominant or there's significant movement
            const isVerticalDominant =
              Math.abs(wheelDeltaY) > Math.abs(wheelDeltaX);
            const isSignificantMovement =
              Math.abs(wheelDeltaY) > MIN_SWIPE_DISTANCE;

            if (isSignificantMovement && isVerticalDominant) {
              navigateImages(container.name, wheelDeltaY > 0 ? 1 : -1);
            }
          }

          // Reset accumulators
          wheelDeltaX = 0;
          wheelDeltaY = 0;
        }, WHEEL_TIMEOUT);

        lastWheelTimestamp = currentTime;
      };

      // Add event listeners
      element.addEventListener("touchstart", touchStart, { passive: true });
      element.addEventListener("touchmove", touchMove, { passive: false });
      element.addEventListener("touchend", touchEnd);
      element.addEventListener("wheel", handleWheel, { passive: false });

      // Add mouse events for desktop interaction (hover to pause)
      element.addEventListener("mouseenter", pauseAutoScroll);

      // Clean up event listeners
      return () => {
        element.removeEventListener("touchstart", touchStart);
        element.removeEventListener("touchmove", touchMove);
        element.removeEventListener("touchend", touchEnd);
        element.removeEventListener("wheel", handleWheel);
        element.removeEventListener("mouseenter", pauseAutoScroll);
        clearTimeout(wheelDebounceTimer);
      };
    });
  }, [activeImageIndexes, isAutoScrolling]); // Re-add listeners when active indexes or auto-scroll state changes

  // Function to handle navigation in multiple image containers
  const navigateImages = (container, direction) => {
    const containerRef =
      container === "blueContainer"
        ? blueContainerRef
        : container === "pinkContainer"
        ? pinkContainerRef
        : container === "leftColumn"
        ? leftColumnRef
        : container === "rightColumn"
        ? rightColumnRef
        : largeContainerRef;

    const imagesData =
      container === "blueContainer"
        ? blueContainerImages
        : container === "pinkContainer"
        ? pinkContainerImages
        : container === "leftColumn"
        ? leftColumnImages
        : container === "rightColumn"
        ? rightColumnImages
        : largeContainerImages;

    let newIndex = activeImageIndexes[container] + direction;

    // Handle circular navigation
    if (newIndex < 0) newIndex = imagesData.length - 1;
    if (newIndex >= imagesData.length) newIndex = 0;

    // Update active index
    setActiveImageIndexes((prev) => ({
      ...prev,
      [container]: newIndex,
    }));

    // Update overlay text based on the new active image for non-left column containers
    if (container !== "leftColumn" && container !== "rightColumn") {
      setOverlayTexts((prev) => ({
        ...prev,
        [container]: imagesData[newIndex].title,
      }));
    }

    // Scroll to the new image - vertical for left column, horizontal for others
    if (containerRef.current) {
      if (container === "leftColumn") {
        containerRef.current.scrollTo({
          top:
            (containerRef.current.scrollHeight / imagesData.length) * newIndex,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollTo({
          left: containerRef.current.clientWidth * newIndex,
          behavior: "smooth",
        });
      }
    }
  };

  // Update overlay text when clicking pagination dots
  const handlePaginationClick = (container, index) => {
    // Pause auto-scroll when user interacts
    pauseAutoScroll();

    const imagesData =
      container === "blueContainer"
        ? blueContainerImages
        : container === "pinkContainer"
        ? pinkContainerImages
        : container === "leftColumn"
        ? leftColumnImages
        : container === "rightColumn"
        ? rightColumnImages
        : largeContainerImages;

    setActiveImageIndexes((prev) => ({ ...prev, [container]: index }));

    if (container !== "leftColumn" && container !== "rightColumn") {
      setOverlayTexts((prev) => ({
        ...prev,
        [container]: imagesData[index].title,
      }));
    }

    const containerRef =
      container === "blueContainer"
        ? blueContainerRef
        : container === "pinkContainer"
        ? pinkContainerRef
        : container === "leftColumn"
        ? leftColumnRef
        : container === "rightColumn"
        ? rightColumnRef
        : largeContainerRef;

    if (containerRef.current) {
      if (container === "leftColumn") {
        containerRef.current.scrollTo({
          top: (containerRef.current.scrollHeight / imagesData.length) * index,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollTo({
          left: containerRef.current.clientWidth * index,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="projects-container">
      <div className="sidebar">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          PROJECTS
        </motion.h1>
        <motion.div
          className="line"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        ></motion.div>
      </div>

      <motion.div
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column with Vertical Carousel */}
        <motion.div className="left-column" variants={itemVariants}>
          <div className="title">Frontend</div>
          <div className="vertical-carousel-wrapper">
            <div className="vertical-image-container" ref={leftColumnRef}>
              {leftColumnImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="image vertical-image-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  onClick={() => handleImageClick(image.title, image.src)}
                >
                  <LazyLoadImage
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  />
                  <div className="image-overlay">{image.title}</div>
                </motion.div>
              ))}
            </div>

            {/* Vertical Navigation Buttons */}
            <button
              className="nav-button vertical-prev-button"
              onClick={() => {
                pauseAutoScroll();
                navigateImages("leftColumn", -1);
              }}
              aria-label="Previous"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>

            <button
              className="nav-button vertical-next-button"
              onClick={() => {
                pauseAutoScroll();
                navigateImages("leftColumn", 1);
              }}
              aria-label="Next"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Vertical Pagination */}
            <div className="vertical-pagination">
              {leftColumnImages.map((_, index) => (
                <div
                  key={index}
                  className={`pagination-dot ${
                    activeImageIndexes.leftColumn === index ? "active" : ""
                  }`}
                  onClick={() => handlePaginationClick("leftColumn", index)}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="right-column">
          {/* Top Row */}
          <motion.div className="top-row" variants={itemVariants}>
            <div className="title">UI/UX Design</div>

            <div className="gallery-wrapper">
              <div className="image-container" id="image-container" ref={rightColumnRef}>
                <div className="image-row">
                  {rightColumnImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="small-image"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                      onClick={() => handleImageClick(image.title, image.src)}
                    >
                      <LazyLoadImage
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                      />
                      <div className="image-overlay">{image.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                className="nav-button prev-button"
                onClick={() => {
                  pauseAutoScroll();
                  navigateImages("rightColumn", -1);
                }}
                aria-label="Previous"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="nav-button next-button"
                onClick={() => {
                  pauseAutoScroll();
                  navigateImages("rightColumn", 1);
                }}
                aria-label="Next"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Pagination indicators */}
              <div className="image-pagination">
                {rightColumnImages.map((_, index) => (
                  <div
                    key={index}
                    className={`pagination-dot ${
                      activeImageIndexes.rightColumn === index ? "active" : ""
                    }`}
                    onClick={() => handlePaginationClick("rightColumn", index)}
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Container */}
          <div className="bottom-container">
            <div className="bottom-left">
              {/* Blue Container with Multiple Images */}
              <motion.div
                className="medium-image blue"
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="medium-image-container" ref={blueContainerRef}>
                  {blueContainerImages.map((image, index) => (
                    <div
                      key={index}
                      className="medium-image-item"
                      onClick={() => handleImageClick(image.title, image.src)}
                    >
                      <LazyLoadImage
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="image-overlay bottom-image-overlay">
                  {overlayTexts.blueContainer}
                </div>

                {/* Image pagination indicators */}
                <div className="image-pagination">
                  {blueContainerImages.map((_, index) => (
                    <div
                      key={index}
                      className={`pagination-dot ${
                        activeImageIndexes.blueContainer === index
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handlePaginationClick("blueContainer", index)
                      }
                    ></div>
                  ))}
                </div>

                {/* Navigation buttons */}
                <button
                  className="nav-button prev-button"
                  onClick={() => {
                    pauseAutoScroll();
                    navigateImages("blueContainer", -1);
                  }}
                  aria-label="Previous"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button
                  className="nav-button next-button"
                  onClick={() => {
                    pauseAutoScroll();
                    navigateImages("blueContainer", 1);
                  }}
                  aria-label="Next"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </motion.div>

              {/* Pink Container with Multiple Images */}
              <motion.div
                className="medium-image pink"
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="medium-image-container" ref={pinkContainerRef}>
                  {pinkContainerImages.map((image, index) => (
                    <div
                      key={index}
                      className="medium-image-item"
                      onClick={() => handleImageClick(image.title, image.src)}
                    >
                      <LazyLoadImage
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="image-overlay bottom-image-overlay">
                  {overlayTexts.pinkContainer}
                </div>

                {/* Image pagination indicators */}
                <div className="image-pagination">
                  {pinkContainerImages.map((_, index) => (
                    <div
                      key={index}
                      className={`pagination-dot ${
                        activeImageIndexes.pinkContainer === index
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handlePaginationClick("pinkContainer", index)
                      }
                    ></div>
                  ))}
                </div>

                {/* Navigation buttons */}
                <button
                  className="nav-button prev-button"
                  onClick={() => {
                    pauseAutoScroll();
                    navigateImages("pinkContainer", -1);
                  }}
                  aria-label="Previous"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button
                  className="nav-button next-button"
                  onClick={() => {
                    pauseAutoScroll();
                    navigateImages("pinkContainer", 1);
                  }}
                  aria-label="Next"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </motion.div>
            </div>

            {/* Large Container with Multiple Images */}
            <motion.div
              className="large-image"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="large-image-container" ref={largeContainerRef}>
                {largeContainerImages.map((image, index) => (
                  <div
                    key={index}
                    className="large-image-item"
                    onClick={() => handleImageClick(image.title, image.src)}
                  >
                    <LazyLoadImage
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="image-overlay bottom-image-overlay large-overlay">
                {overlayTexts.largeContainer}
              </div>

              {/* Image pagination indicators */}
              <div className="image-pagination">
                {largeContainerImages.map((_, index) => (
                  <div
                    key={index}
                    className={`pagination-dot ${
                      activeImageIndexes.largeContainer === index
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handlePaginationClick("largeContainer", index)
                    }
                  ></div>
                ))}
              </div>

              {/* Navigation buttons */}
              <button
                className="nav-button prev-button"
                onClick={() => {
                  pauseAutoScroll();
                  navigateImages("largeContainer", -1);
                }}
                aria-label="Previous"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="nav-button next-button"
                onClick={() => {
                  pauseAutoScroll();
                  navigateImages("largeContainer", 1);
                }}
                aria-label="Next"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Project Card Modal */}
      <AnimatePresence>
        {isCardExpanded && expandedImage && (
          <motion.div
            className="expanded-card-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="expanded-card"
              ref={expandedCardRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button className="close-button" onClick={closeExpandedCard}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="expanded-card-content">
                <div className="expanded-image-container">
                  <LazyLoadImage
                    src={expandedImage.src}
                    alt={expandedImage.title}
                    className="expanded-image"
                  />
                </div>

                <div className="expanded-details">
                  <h2>{expandedImage.title}</h2>
                  <p>{expandedImage.description}</p>

                  <div className="expanded-links">
                    {/* Check if the project is from UI/UX Design, Graphic Design, or 3D Modeling sections */}
                    {expandedImage.title &&
                    (blueContainerImages.some(
                      (LazyLoadImage) => LazyLoadImage.title === expandedImage.title
                    ) || // 3D Modeling
                      pinkContainerImages.some(
                        (LazyLoadImage) => LazyLoadImage.title === expandedImage.title
                      ) || // Graphic Design
                      [
                        "Stucor for Desktop",
                        "Pet Frnd",
                        "TS Motors",
                        "Google Sheet UI Design",
                        "Neumorphism control center",
                        "One Piece Music UI",
                        "yacht booking app",
                        "Login Page UI",
                      ].includes(expandedImage.title)) ? ( // UI/UX Design
                      // For UI/UX Design, Graphic Design, and 3D Modeling, show single "Explore Now" button
                      <a
                        href={expandedImage.exploreLink}
                        className="project-link explore-link pulse"
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        Explore Now
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          className="explore-icon"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    ) : (
                      // For other projects, show the original two buttons
                      <>
                        <a
                          href={expandedImage.liveLink}
                          target="_self"
                          rel="noopener noreferrer"
                          className="project-link live-link"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="link-icon"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          View Live
                        </a>

                        <a
                          href={expandedImage.githubLink}
                          target="_self"
                          rel="noopener noreferrer"
                          className="project-link github-link"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="link-icon"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          View Code
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

import { useRef, useState, useEffect } from 'react';

const GalleryComponent = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // Update button visibility based on scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Show left button if not at the start
      setShowLeftButton(scrollLeft > 0);
      
      // Show right button if not at the end
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Check initial state
      handleScroll();
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="gallery-container">
      {showLeftButton && (
        <button 
          className="scroll-button scroll-left"
          onClick={scrollLeft}
        >
          &lt;
        </button>
      )}
      
      <div 
        className="image-container" 
        ref={scrollContainerRef}
      >
        <div className="image-row">
          {/* Your image items here */}
        </div>
      </div>
      
      {showRightButton && (
        <button 
          className="scroll-button scroll-right"
          onClick={scrollRight}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default GalleryComponent;
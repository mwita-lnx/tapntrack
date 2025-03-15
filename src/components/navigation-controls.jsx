// NavigationControls Component
// File: NavigationControls.jsx
import React from 'react';

const NavigationControls = ({ 
  currentSlide, 
  totalSlides, 
  onPrev, 
  onNext, 
  onGoTo, 
  isTransitioning 
}) => {
  return (
    <>
      {/* Navigation dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Previous button */}
      <button 
        onClick={onPrev}
        disabled={currentSlide === 0 || isTransitioning}
        className={`absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-300 ${
          currentSlide === 0 ? 'opacity-0' : 'opacity-70 hover:opacity-100'
        }`}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {/* Next button */}
      <button 
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1 || isTransitioning}
        className={`absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-300 ${
          currentSlide === totalSlides - 1 ? 'opacity-0' : 'opacity-70 hover:opacity-100'
        }`}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
};

export default NavigationControls;

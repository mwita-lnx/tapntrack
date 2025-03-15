import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WrappItUp = ({ wrappedData, title = "Wrapped", logoText = "Tap & Track", logo = "Activity", color = "amber", returnPath = "/" }) => {
  // Use provided wrappedData or fall back to example data
  const data = wrappedData || [
    {
      title: "Your Total Customers",
      content: "1,257",
      subtitle: "That's 32% more than last year",
      gradient: `linear-gradient(45deg, var(--${color}-600), var(--${color}-800))`,
      list: [
        "Regular customers: 876",
        "New customers: 381",
        "Referrals: 124",
        "Online customers: 298",
        "In-store customers: 959"
      ]
    },
    {
      title: "Your Busiest Month",
      content: "December",
      subtitle: "With 186 transactions and 45% higher revenue",
      gradient: `linear-gradient(45deg, var(--${color}-700), var(--zinc-800))`,
      list: [
        "December: Ksh 256,430",
        "November: Ksh 196,820",
        "August: Ksh 187,340",
        "October: Ksh 174,590",
        "May: Ksh 162,780"
      ]
    },
    {
      title: "Your Best-Selling Product",
      content: "Premium Kitenge",
      subtitle: "You sold 342 units this year",
      gradient: `linear-gradient(45deg, var(--${color}-600), var(--zinc-900))`,
      list: [
        "Premium Kitenge: 342 units",
        "Denim Jeans: 298 units",
        "Cotton T-shirts: 256 units",
        "Leather Bags: 187 units",
        "Kids' School Uniforms: 154 units"
      ]
    },
    {
      title: "Your Customer Satisfaction",
      content: "4.8/5.0",
      subtitle: "Based on 876 reviews",
      gradient: `linear-gradient(45deg, var(--${color}-500), var(--zinc-700))`,
      list: [
        "5-star ratings: 694",
        "4-star ratings: 146",
        "3-star ratings: 28",
        "2-star ratings: 6",
        "1-star ratings: 2"
      ]
    },
    {
      title: "Your Business Growth",
      content: "27%",
      subtitle: "You're outperforming 82% of similar businesses",
      gradient: `linear-gradient(45deg, var(--${color}-600), var(--${color}-900))`,
      list: [
        "Revenue growth: 27%",
        "Customer growth: 32%",
        "Inventory turnover: 18% faster",
        "Average sale value: +15%",
        "Profit margin: +8%"
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide < data.length - 1 && !isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, isTransitioning, data.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning]);

  const nextSlide = () => {
    if (currentSlide < data.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 600);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 600);
    }
  };

  // Handle touch events for swipe navigation
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }
    
    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  // Go to a specific slide
  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 600);
    }
  };

  // Icon component based on prop
  const LogoIcon = () => {
    switch(logo) {
      case 'Hammer':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 13L13 16M16 13L19 10L14 5L11 8M16 13L8 5L3 10L11 18L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Farm':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Store':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7L16 7M4 7L8 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7V4M12 7L8 7M12 7L16 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 15V14C4 12.8954 4.89543 12 6 12H18C19.1046 12 20 12.8954 20 14V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 21H18C19.1046 21 20 20.1046 20 19V17C20 15.8954 19.1046 15 18 15H6C4.89543 15 4 15.8954 4 17V19C4 20.1046 4.89543 21 6 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Shirt':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L15 6V14C15 14 20 12 20 9V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 4L9 6V14C9 14 4 12 4 9V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 6H9L8 13H16L15 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 21H17C18.1046 21 19 20.1046 19 19V13H5V19C5 20.1046 5.89543 21 7 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default: 
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12H18L15 21L9 3L6 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <div 
      className="font-sans hj w-screen h-screen flex flex-col justify-between overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        "--animation-delay": "0.1s",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        :root {
          --amber-500: #f59e0b;
          --amber-600: #d97706;
          --amber-700: #b45309;
          --amber-800: #92400e;
          --amber-900: #78350f;
          --zinc-600: #52525b;
          --zinc-700: #3f3f46;
          --zinc-800: #27272a;
          --zinc-900: #18181b;
          --green-500: #22c55e;
          --green-600: #16a34a;
          --green-700: #15803d;
          --green-800: #166534;
          --green-900: #14532d;
          --blue-500: #3b82f6;
          --blue-600: #2563eb;
          --blue-700: #1d4ed8;
          --blue-800: #1e40af;
          --blue-900: #1e3a8a;
          --purple-500: #a855f7;
          --purple-600: #9333ea;
          --purple-700: #7e22ce;
          --purple-800: #6b21a8;
          --purple-900: #581c87;
        }
        
        /* Enhanced text contrast */
        .enhanced-text {
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
          font-weight: bold;
        }
        
        .list-item {
          color: white;
          font-weight: 600;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .list-number {
          color: white;
          font-weight: 700;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        /* Improved gradient overlay for better text contrast */
        .slide-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          z-index: 0;
        }
        
        /* Make content appear on top of the overlay */
        .slide-content {
          position: relative;
          z-index: 1;
        }
      `}} />
      {/* Slide container */}
      <div 
        className="flex-grow flex flex-col justify-center items-center relative slide-container"
        style={{ 
          background: data[currentSlide].gradient,
          transition: 'background 0.8s ease-in-out'
        }}
      >
        {/* Logo */}
        <div className="absolute top-6 left-6 text-white flex items-center z-10">
          <div className="p-2 rounded-full bg-black bg-opacity-20">
            <LogoIcon />
          </div>
          <span className="ml-2 text-xl font-bold enhanced-text">{title}</span>
        </div>

        <div 
          className={`flex flex-col justify-center items-center text-center p-8 max-w-2xl mx-auto transition-all duration-800 ease-in-out transform slide-content ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          style={{
            height: '100%',
            overflowY: 'auto'
          }}
        >
          <div className="text-white text-2xl font-bold mb-6 enhanced-text">
            {data[currentSlide].title}
          </div>
          <div className="text-white text-6xl font-bold mb-8 tracking-tight enhanced-text" style={{ 
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 4px 6px rgba(0, 0, 0, 0.6)'
          }}>
            {data[currentSlide].content}
          </div>
          <div className="text-white text-xl font-semibold mb-10 enhanced-text">
            {data[currentSlide].subtitle}
          </div>
          
          {/* List display with improved visibility */}
          <div className="w-full max-w-md">
            {data[currentSlide].list && (
              <ul className="text-white space-y-3">
                {data[currentSlide].list.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center bg-black bg-opacity-30 rounded-lg p-3 backdrop-blur-sm"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: !isTransitioning ? 'fadeIn 0.5s ease forwards' : 'none',
                      opacity: !isTransitioning ? 1 : 0,
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white bg-opacity-30 mr-3 list-number">
                      {index + 1}
                    </div>
                    <span className="text-left list-item">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-3 z-10">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Back button */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
          <Link 
            to={returnPath}
            className="py-3 px-6 bg-black bg-opacity-30 rounded-full text-white font-bold hover:bg-opacity-40 transition-all duration-300 border border-white border-opacity-20"
            style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}
          >
            Return to Dashboard
          </Link>
        </div>

        {/* Navigation arrows - improved with background for better visibility */}
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0 || isTransitioning}
          className={`absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-20 z-10 ${
            currentSlide === 0 ? 'opacity-0' : 'opacity-70 hover:opacity-100'
          }`}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          disabled={currentSlide === data.length - 1 || isTransitioning}
          className={`absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-20 z-10 ${
            currentSlide === data.length - 1 ? 'opacity-0' : 'opacity-70 hover:opacity-100'
          }`}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WrappItUp;
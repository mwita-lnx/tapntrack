// DataVisualizer Component
// File: DataVisualizer.jsx
import React, { useEffect, useRef } from 'react';

const DataVisualizer = ({ content, isTransitioning }) => {
  const containerRef = useRef(null);
  
  // Animation effect when content changes
  useEffect(() => {
    if (!containerRef.current || isTransitioning) return;
    
    const container = containerRef.current;
    
    // Reset classes
    container.classList.remove('animate-pulse');
    container.classList.remove('scale-100');
    container.classList.add('scale-95');
    
    // Trigger animation
    setTimeout(() => {
      container.classList.add('scale-100');
      container.classList.add('animate-pulse');
      
      setTimeout(() => {
        container.classList.remove('animate-pulse');
      }, 600);
    }, 50);
    
  }, [content, isTransitioning]);
  
  return (
    <div 
      ref={containerRef}
      className="text-white text-6xl font-bold mb-8 tracking-tight transition-all duration-500 transform"
    >
      {content}
    </div>
  );
};

export default DataVisualizer;

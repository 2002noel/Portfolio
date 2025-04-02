import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const digitRefs = useRef([]);
  const timeoutRef = useRef();
  const activeDigitsRef = useRef(0);
  
  useEffect(() => {
    if (isHovering) {
      // Wait for initial animation to complete before generating new digits
      const startNewDigits = () => {
        const container = document.querySelector('.matrix-effect');
        if (!container || !isHovering) return;

        const addNewDigit = () => {
          // Limit the number of concurrent new digits
          if (activeDigitsRef.current >= 10) {
            timeoutRef.current = setTimeout(addNewDigit, 500);
            return;
          }

          // Create a new digit
          const digit = document.createElement('span');
          digit.className = 'binary-digit new-digit';
          digit.textContent = Math.round(Math.random()).toString();
          
          // Random position inside the container
          const containerWidth = container.offsetWidth;
          const digitWidth = 14; // Width of digit in pixels
          const maxLeft = containerWidth - digitWidth;
          const leftPosition = Math.random() * maxLeft;
          digit.style.left = `${leftPosition}px`;
          
          container.appendChild(digit);
          activeDigitsRef.current++;

          // Remove the digit after animation completes
          digit.addEventListener('animationend', () => {
            if (digit.parentElement === container) {
              container.removeChild(digit);
              activeDigitsRef.current--;
            }
          });

          // Add delay between new digits
          timeoutRef.current = setTimeout(addNewDigit, 300);
        };

        addNewDigit();
      };

      // Start generating new digits after initial animation
      const timeoutId = setTimeout(startNewDigits, 2000);
      
      return () => {
        clearTimeout(timeoutId);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        activeDigitsRef.current = 0;
      };
    }
  }, [isHovering]);
  
  // Generate initial binary digits (20 digits)
  const initialDigits = Array.from({ length: 20 }, () => Math.round(Math.random()).toString());
  
  // Generate binary digits elements
  const binaryDigits = initialDigits.map((digit, i) => (
    <span 
      key={i} 
      className={`binary-digit ${isHovering ? 'animate' : ''}`}
      ref={el => digitRefs.current[i] = el}
    >
      {digit}
    </span>
  ));
  
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a 
            href="#home" 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h1 className={isHovering ? 'matrix-text' : ''}>Noel's Portfolio</h1>
            <div className="matrix-effect">
              {binaryDigits}
            </div>
          </a>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
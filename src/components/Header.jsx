import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const digitRefs = useRef([]);
  const animationFrameRef = useRef();
  
  useEffect(() => {
    if (isHovering) {
      // Wait for initial animation to complete before generating new digits
      const startNewDigits = () => {
        const container = document.querySelector('.matrix-effect');
        if (!container || !isHovering) return;

        const addNewDigit = () => {
          // Create a new digit
          const digit = document.createElement('span');
          digit.className = 'binary-digit new-digit';
          digit.textContent = Math.round(Math.random()).toString();
          
          // Random position
          digit.style.left = `${Math.random() * 100}%`;
          digit.style.top = '-20px';
          
          container.appendChild(digit);

          // Remove the digit after animation completes
          digit.addEventListener('animationend', () => {
            if (digit.parentElement === container) {
              container.removeChild(digit);
            }
          });

          animationFrameRef.current = requestAnimationFrame(addNewDigit);
        };

        addNewDigit();
      };

      // Start generating new digits after initial animation
      const timeoutId = setTimeout(startNewDigits, 2000);
      
      return () => {
        clearTimeout(timeoutId);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [isHovering]);
  
  // Generate initial binary digits
  const initialDigits = Array.from({ length: 50 }, () => Math.round(Math.random()).toString());
  
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
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
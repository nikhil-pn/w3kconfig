"use client";
import button from "./button.css";
import { useState, useEffect } from 'react';

import Link from 'next/link';

const Button = () => {
    const [isNavigating, setIsNavigating] = useState(false);
    const [menuIsActive, setMenuIsActive] = useState(true);
    useEffect(() => {
        if (isNavigating) {
          const timeoutId = setTimeout(() => {
            window.location.href = '/blackhole'; 
          }, 1800); // Delay for 1.8 seconds
    
          return () => clearTimeout(timeoutId);
        }
      }, [isNavigating]);
    
      const handleClick = () => {
        setIsNavigating(true);
        setMenuIsActive(false);
        console.log("Button clicked")
      };
    return (
      <div className="ml-72 mb-48 bg-red">
        
            <button onClick={handleClick}>
                <div class="blackhole">
                    <span class="rocket-path">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="rocket"> <g> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path> </g> </svg>
                    </span>
                    <span class="ring">
                    <span class="block"></span>
                    </span>
                </div>
                <span class="text">Don't get sucked in</span>
            </button>
          
      </div>
    );
  };
  
  export default Button
  

  
  
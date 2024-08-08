'use client'
import styles from '../Preloader/style.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../../app/utils/useMousePosition';
import AstronautCard from './AstronautCard';

export default function Treasurehunt() {
  const [isHovered, setIsHovered] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div className={styles.treasurehunt}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good
            <span className={styles.icon} onClick={toggleCard}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style={{fill:"#26e07f", verticalAlign: "middle", marginLeft: "5px"}}>
                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#1fb141">
                    <path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path>
                  </g>
                </g>
              </svg>
            </span>.
          </p>
      </motion.div>
      <div className={styles.body}>
        <p>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
      {showCard && <AstronautCard onClose={toggleCard} />}
    </div>
  )
}
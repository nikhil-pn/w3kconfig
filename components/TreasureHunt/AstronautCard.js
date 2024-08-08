import React from 'react';
import styles from '../Preloader/style.module.scss';

const AstronautCard = ({ onClose }) => {
  return (
    <div className={styles.cardOverlay}>
      <div className={styles.card}>
        <img
          src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
          alt=""
          className={styles.image}
        />
        <div className={styles.heading}>OMG!! You Found Me</div>
        <div className={styles.taskInstructions}>
          <p>Do these tasks to get awesome perks!!!</p>
          <div>
          <ol>
            <li>1.Follow me on X</li>
            <li>2.Post a photo of this event on X</li>
          </ol></div>
          <p>Don't forget to tag me!</p>
        </div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AstronautCard;
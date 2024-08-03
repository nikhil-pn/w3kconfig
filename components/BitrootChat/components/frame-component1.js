import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.module.scss';

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`${styles.frameComponent1} ${className}`}>
      <div className={styles.frameComponent1Inner} />
      <img
        className={styles.frameComponent1Vector}
        loading="lazy"
        alt=""
        src="/vector-1.svg"
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
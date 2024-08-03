import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.module.scss';

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`${styles.frameComponent} ${className}`}>
      <div className={styles.frameComponentInner} />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.module.scss';

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`${styles.frameComponent2} ${className}`}>
      <div className={styles.frameComponent2Inner}>
        <div className={styles.frameComponent2Background} />
        <b className={styles.frameComponent2Text}>
          BITROOT is an advanced AI chatbot that enhances user experience by
          providing efficient, natural language interactions for customer
          support, data retrieval, and more.
        </b>
      </div>
      <img
        className={styles.frameComponent2Vector}
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
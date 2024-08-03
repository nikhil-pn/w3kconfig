import React from 'react';
import FrameComponent1 from "./frame-component1";
import FrameComponent from "./frame-component";
import PropTypes from "prop-types";
import styles from './styles.module.scss';

const Content = ({ className = "" }) => {
  return (
    <div className={`${styles.content} ${className}`}>
      <div className={styles.contentInner}>
        <div className={styles.hiddenDiv} />
        <div className={styles.gmGmContainer}>
          <div className={styles.gmGmText}>
            gm gm
          </div>
        </div>
        <FrameComponent1 />
        <FrameComponent />
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
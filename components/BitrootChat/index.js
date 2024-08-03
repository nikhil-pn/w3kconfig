import FrameComponent2 from "./components/frame-component2";
import Content from "./components/content";
import styles from './components/styles.module.scss';

const BitrootChat = () => {
  return (
    <div className={styles.desktop}>
      <FrameComponent2 />
      <Content />
      <main className={styles.mainContent}>
        <img className={styles.noiseTexture} alt="" src="/images/noise--texture@2x.png" />
        <img className={styles.emptyShape} alt="" src="/images/empty-shape@2x.png" />
        <img className={styles.bitroot} alt="" src="/images/bitroot-1@2x.png" />
        <img className={styles.projectImage} loading="lazy" alt="" src="/images/project-20240801-132604401-1@2x.png" />
      </main>
    </div>
  );
};

export default BitrootChat;
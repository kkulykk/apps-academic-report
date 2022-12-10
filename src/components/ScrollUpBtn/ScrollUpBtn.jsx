import styles from './ScrollUpBtn.module.css';
import scrollSvg from '../../imgs/arrow_up_icon.svg';
import { useEffect, useState } from 'react';

const ScrollUpBtn = () => {
  const hasWindow = typeof window !== 'undefined';
  const [opacity, setOpacity] = useState(0);

  function handleElementsOnScroll() {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 600) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };
  }

  useEffect(() => {
    if (hasWindow) {
      handleElementsOnScroll();
    }
  }, [hasWindow]);

  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className={styles.scrollUpBtn} style={{ opacity }} onClick={handlerScrollUp} id="myBtn" type="button">
      <img src={scrollSvg} alt="arrow up" />
    </button>
  );
};

export default ScrollUpBtn;

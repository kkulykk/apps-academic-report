import { useTranslation } from 'react-i18next';

import Container from '../Container';

import styles from './Introduction.module.css';

import gradient from '../../imgs/gradient2.svg';

const images = {
  dean: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2Fdean.jpg?alt=media&token=0860da7f-e670-435d-9d22-d362ddb68d62'
};

const Introduction = () => {
  const [t] = useTranslation();
  return (
    <section className={styles.introduction}>
      <div className={styles.headingWrapper}>
        <div className={styles.headingLine}></div>
        <span>{t('introduction.deansWord')}</span>
      </div>
      <Container>
        <div className={styles.textWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={images.dean} alt="Yaroslav Prytula" />
            </div>
          </div>

          <div className={styles.deansText}>
            <p className={styles.introductionText}>{t('introduction.deansText')}</p>
            <div className={styles.nameWrapper}>
              <span className={styles.name}>{t('introduction.deansName')}</span>
              <br />
              <span>{t('introduction.deansTitle')}</span>
            </div>
          </div>
        </div>
        <div className={styles.gradient}>
          <img src={gradient} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Introduction;

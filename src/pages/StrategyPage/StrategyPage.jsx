import { useTranslation, Trans } from 'react-i18next';

import Container from '../../components/Container';
import AppBar from '../../components/AppBar';

import styles from './StrategyPage.module.css';

import gradient from '../../imgs/gradient2.svg';

const images = {
  strategyIcon:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2Ficon_strategy.svg?alt=media&token=892a6414-980c-4c57-881b-2ac1cdcdb2e1',
  icon1:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2Fgroup1.svg?alt=media&token=8aab5002-ce01-4dda-833f-77688cd28af4',
  icon2:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2Fgroup2.svg?alt=media&token=21c26633-6e4f-40ea-b851-47ae66511ee7',
  icon3:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2Fgroup3.svg?alt=media&token=a257ea9a-7f79-4cf5-8394-070d051eba9f',
  icon4:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2Fgroup4.svg?alt=media&token=5dc2af6c-709a-4362-b4de-438676ce1b6b',
  icon5:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2Fgroup5.svg?alt=media&token=0c575001-28ae-40de-803e-10758e7624d6',
  icon6:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2Fgroup6.svg?alt=media&token=7eb7cc9c-8e9a-4c83-931b-97a46c07f3ad'
};

const StrategyPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.strategyGoals2025.title')} />
      <Container>
        <section className={styles.strategy}>
          <div className={styles.headingWrapper}>
            <img className={styles.strategyIcon} src={images.strategyIcon} width="40" height="40" alt="ledder up" />
            <span className={styles.heading}>
              <Trans i18nKey="pages.strategyGoals2025.subtitle" components={[<br />]} />
            </span>
          </div>

          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.imgWrapper}>
                <img className={styles.listIcon} src={images.icon1} alt="dialog" />
              </div>
              <span className={styles.text}>{t('pages.strategyGoals2025.goal1')}</span>
            </li>

            <li className={styles.item}>
              <div className={styles.imgWrapper}>
                <img className={styles.listIcon} src={images.icon2} alt="people connections" />
              </div>
              <span className={styles.text}>{t('pages.strategyGoals2025.goal2')}</span>
            </li>

            <li className={styles.item}>
              <div className={styles.imgWrapper}>
                <img className={styles.listIcon} src={images.icon3} alt="people" />
              </div>
              <span className={styles.text}>{t('pages.strategyGoals2025.goal3')}</span>
            </li>

            <li className={styles.item}>
              <div className={styles.imgWrapper}>
                <img className={styles.listIcon} src={images.icon4} alt="note" />
              </div>
              <span className={styles.text}>{t('pages.strategyGoals2025.goal4')}</span>
            </li>

            <li className={styles.item}>
              <div className={styles.imgWrapper}>
                <img className={styles.listIcon} src={images.icon5} alt="flags" />
              </div>
              <span className={styles.text}>{t('pages.strategyGoals2025.goal5')}</span>
            </li>

            <li className={styles.item}>
              <div className={styles.imgWrapper}>
                <img className={styles.listIcon} src={images.icon6} alt="sector" />
              </div>
              <span className={styles.text}>{t('pages.strategyGoals2025.goal6')}</span>
            </li>
          </ul>
        </section>
        <div className={styles.gradient}>
          <img src={gradient} alt="" />
        </div>
      </Container>
    </>
  );
};

export default StrategyPage;

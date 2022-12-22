import { useTranslation, Trans } from 'react-i18next';

import Line from '../Line';

import styles from './Header.module.css';

import gradient from '../../imgs/gradient.svg';

const Header = () => {
  const [t] = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.line} />
      <div className={styles.gradient}>
        <img src={gradient} alt="" />
        {/*<div className={styles.shape}></div>*/}
        {/*<div className={styles.shape1}></div>*/}
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.title}>{t('header.title')}</h1>
        <h2 className={styles.missionHeading}>{t('header.mission')}</h2>
        <p className={styles.subtitle}>
          <Trans
            i18nKey="header.subtitle"
            components={[<span style={{ textTransform: 'uppercase', color: '#8BC751', fontWeight: '700' }} />]}
          />
        </p>
      </div>
      <div className={styles.line} />
    </header>
  );
};

export default Header;

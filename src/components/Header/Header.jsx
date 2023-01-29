import { useTranslation, Trans } from 'react-i18next';

import styles from './Header.module.css';

const Header = () => {
  const [t] = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.line} />
      <div className={styles.textContent}>
        <h1 className={styles.title}>{t('header.title')}</h1>
        <div className={styles.missionWrapper}>
          <div className={styles.missionLine}></div>
          <h2 className={styles.missionHeading}>{t('header.mission')}</h2>
        </div>
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

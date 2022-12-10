import { useTranslation } from 'react-i18next';

import styles from './Header.module.css';

const Header = () => {
  const [t] = useTranslation();
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t('header.title')}</h1>
      <h2 className={styles.missionHeading}>{t('header.mission')}</h2>
      <p>{t('header.subtitle')}</p>
    </header>
  );
};

export default Header;

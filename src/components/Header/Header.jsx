import { useTranslation } from 'react-i18next';

import styles from './Header.module.css';

import facultyLogoSvg from '../../imgs/uku_applied_sciences _faculty_logo.svg';

const Header = () => {
  const [t] = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.headerLabel}>
        <img className={styles.logo} src={facultyLogoSvg} width="100" height="40" alt="logo" />
        <span>{t('header.title')}</span>
      </div>
      <div className={styles.missionWrapper}>
        <h2 className={styles.missionHeading}>{t('header.mission')}</h2>
        <p>{t('header.subtitle')}</p>
      </div>
    </header>
  );
};

export default Header;

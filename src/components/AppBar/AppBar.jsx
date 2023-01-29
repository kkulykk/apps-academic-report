import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';
import i18n from 'i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import MenuItem from '../MenuItem';

import styles from './AppBar.module.css';

import FacultyLogo from '../../imgs/faculty_logo.svg';
import MenuIcon from '../../imgs/menu.svg';
import UCULogo from '../../imgs/ucu_logo.svg';

const AppBar = ({ name }) => {
  const [t] = useTranslation();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  document.body.style.position = show ? 'fixed' : '';

  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = (event) => setMatches(event.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
  }

  function handleUcuLogoClick() {
    if (i18n.language === 'en') window.open('https://ucu.edu.ua/en/');
    else window.open('https://ucu.edu.ua/');
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const pages = [
    { title: t('pages.whoWeAre.title'), to: '/who-we-are' },
    {
      title: t('pages.strategyGoals2025.title'),
      to: '/strategy-goals'
    },
    { title: t('pages.science.title'), to: '/science' },
    { title: t('pages.admissionCampaign.title'), to: '/admission-campaign-results' },
    { title: t('pages.warStories.title'), to: '/little-stories-of-a-big-war' },
    { title: t('pages.socialProjects.title'), to: '/social-projects' },
    { title: t('pages.structuralChanges.title'), to: '/new-members' },
    { title: t('pages.graduates.title'), to: '/alumni' }
  ];

  return (
    <div className={styles.appBar}>
      <Link className={styles.logo} to="/">
        <img className={styles.logo} src={FacultyLogo} width="50" height="50" alt="logo" />
      </Link>

      {name ? (
        <div className={styles.nameGroup}>
          <span className={styles.mainName}>{t('appBar.title')}</span>
          <span className={styles.name}>{name}</span>
        </div>
      ) : (
        <img className={styles.logo} src={UCULogo} onClick={handleUcuLogoClick} width="50" height="50" alt="UCU Logo" />
      )}

      <div className={styles.buttonsContainer}>
        <div className={styles.languageButtons}>
          <button
            type="button"
            className={styles.langButton}
            onClick={() => (i18n.language === 'en' ? i18n.changeLanguage('uk') : i18n.changeLanguage('en'))}
          >
            {i18n.language === 'en' ? 'UK' : 'EN'}
          </button>
        </div>
        <button type="button" className={styles.button} onClick={handleShow}>
          <img className={styles.menu} src={MenuIcon} width="30" height="30" alt="menu" />
        </button>
      </div>

      <Offcanvas show={show} onHide={handleClose} className={styles.menuContainer} placement="end">
        <Offcanvas.Header>
          <Link className={styles.logo} to="/">
            <img className={styles.logo} src={FacultyLogo} width="50" height="50" alt="logo" />
          </Link>
          <img
            className={styles.logo}
            src={UCULogo}
            onClick={handleUcuLogoClick}
            width="50"
            height="50"
            alt="UCU Logo"
          />
          <CloseButton variant="white" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className={styles.itemsWrapper}>
            {pages.map((page, num) => {
              return (
                <MenuItem
                  key={num}
                  isMobile={isMobile}
                  title={page.title}
                  to={page.to}
                  onClick={scrollToTop}
                  number={num + 1}
                />
              );
            })}
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AppBar;

import Offcanvas from 'react-bootstrap/Offcanvas';
import i18n from 'i18next';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './AppBar.module.css';

import FacultyLogo from '../../imgs/faculty_logo.svg';
import MenuIcon from '../../imgs/menu.svg';
import UCULogo from '../../imgs/ucu_logo.svg';

const AppBar = ({ name }) => {
  const [t] = useTranslation();
  // const isActive = useMediaQuery('(min-width: 767px)');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  document.body.style.position = show ? 'fixed' : '';

  // function useMediaQuery(query) {
  //   const [matches, setMatches] = useState(false);
  //
  //   useEffect(() => {
  //     const mediaQuery = window.matchMedia(query);
  //     setMatches(mediaQuery.matches);
  //     const handler = (event) => setMatches(event.matches);
  //     mediaQuery.addEventListener('change', handler);
  //     return () => mediaQuery.removeEventListener('change', handler);
  //   }, [query]);
  //
  //   return matches;
  // }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
        <img className={styles.logo} src={UCULogo} width="50" height="50" alt="UCU Logo" />
      )}

      <div className={styles.buttonsContainer}>
        <div className={styles.languageButtons}>
          <button
            type="button"
            style={{ fontWeight: i18n.language === 'en' ? 'bold' : 'normal' }}
            className={styles.langButton}
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </button>
          {'/'}
          <button
            type="button"
            style={{ fontWeight: i18n.language === 'uk' ? 'bold' : 'normal' }}
            className={styles.langButton}
            onClick={() => i18n.changeLanguage('uk')}
          >
            UK
          </button>
        </div>
        <button type="button" className={styles.button} onClick={handleShow}>
          <img className={styles.menu} src={MenuIcon} width="30" height="30" alt="menu" />
        </button>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className={styles.itemsWrapper}>
            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/who-we-are"
            >
              {t('pages.whoWeAre.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/admission-campaign-results"
            >
              {t('pages.admissionCampaign.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/strategy-goals"
            >
              {t('pages.strategyGoals2025.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/structure-changes"
            >
              {t('pages.structuralChanges.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/students-wins"
            >
              {t('pages.studentsWins.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/professors-wins"
            >
              {t('pages.teachersWins.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/social-projects"
            >
              {t('pages.socialProjects.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/certificate-programs"
            >
              {t('pages.certificatePrograms.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/graduates"
            >
              {t('pages.graduates.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/science"
            >
              {t('pages.science.title')}
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/ratings"
            >
              {t('pages.ratings.title')}
            </NavLink>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AppBar;

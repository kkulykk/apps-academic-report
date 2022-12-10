import Offcanvas from 'react-bootstrap/Offcanvas';
import i18n from 'i18next';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './AppBar.module.css';

import FacultyLogo from '../../imgs/faculty_logo.svg';
import MenuIcon from '../../imgs/menu.svg';

const lang = {
  uk: { native: 'UK' },
  en: { native: 'EN' }
};

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

      <div className={styles.nameGroup}>
        <span className={styles.mainName}>{t('appBar.title')}</span>
        <span className={styles.name}>{name}</span>
      </div>

      <div>
        {Object.keys(lang).map((lan) => (
          <button key={lan} onClick={() => i18n.changeLanguage(lan)}>
            {lang[lan].native}
          </button>
        ))}
      </div>

      <button type="button" className={styles.button} onClick={handleShow}>
        <img className={styles.menu} src={MenuIcon} width="30" height="30" alt="menu" />
      </button>

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
            ></NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/introductory-campaign-results"
            >
              {t('appBar.admissionResults')}
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
              {t('appBar.strategyGoals2025')}
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
              {t('appBar.structuralChanges')}
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
              {t('appBar.studentsWins')}
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
              {t('appBar.teacherSuccesses')}
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
              {t('appBar.socialProjects')}
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
              {t('appBar.certificatePrograms')}
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
              {t('appBar.graduates')}
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
              {t('appBar.science')}
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
              {t('appBar.ratings')}
            </NavLink>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AppBar;

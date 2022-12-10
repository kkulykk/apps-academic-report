import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from './AppBar.module.css';

import FacultyLogo from '../../imgs/faculty_logo.svg';
import MenuIcon from '../../imgs/menu.svg';

const AppBar = ({ name }) => {
  const isActive = useMediaQuery('(min-width: 767px)');
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.appBar}>
      <Link className={styles.logo} to="/">
        <img className={styles.logo} src={FacultyLogo} width="50" height="50" alt="logo" />
      </Link>

      <div className={styles.nameGroup}>
        <span className={styles.mainName}>{isActive ? <span>Академічний</span> : null}звіт 2020-2021</span>
        <span className={styles.name}>{name}</span>
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
            >
              Хто ми?
            </NavLink>

            <NavLink
              onClick={scrollToTop}
              className={styles.item}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(102, 45, 145)' : '',
                pointerEvents: isActive ? 'none' : ''
              })}
              to="/introductory-campaign-results"
            >
              Результати вступної кампанії
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
              Стратегічні цілі факультету 2025
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
              Структурні зміни
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
              Студентські перемоги
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
              Успіхи викладачів
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
              Суспільно-орієнтовані проекти
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
              Сертифікаційні програми
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
              Випускники
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
              Наука
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
              Рейтинги
            </NavLink>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AppBar;

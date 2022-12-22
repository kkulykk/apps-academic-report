import { NavLink } from 'react-router-dom';

import styles from './MenuItem.module.css';

import arrowIcon from '../../imgs/arrowIcon.svg';

const MenuItem = (props) => {
  const { onClick, number, to, title, isMobile } = props;
  return (
    <NavLink
      onClick={onClick}
      className={styles.item}
      style={({ isActive }) => ({
        fontWeight: isActive ? '700' : '500',
        pointerEvents: isActive ? 'none' : ''
      })}
      to={to}
    >
      <>
        {!isMobile ? <div className={styles.line}></div> : null}
        <p className={styles.number}>{`0${number}.`}</p>
        <p className={styles.textItem}>{title}</p>
        <img className={styles.icon} src={arrowIcon} width="14" height="14" alt="arrow icon" />
      </>
    </NavLink>
  );
};

export default MenuItem;

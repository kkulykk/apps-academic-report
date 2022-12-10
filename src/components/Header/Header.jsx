import styles from './Header.module.css';
import facultyLogoSvg from '../../imgs/uku_applied_sciences _faculty_logo.svg';


const Header = ()=>{
  return (
    <header className={styles.header}>
    <div className={styles.headerLabel}>
      
      
        <img className={styles.logo} src={facultyLogoSvg} width="100" height="40" alt="logo" />
      
      <span>Академічний звіт 2020-2021</span>
    </div>
    <div className={styles.missionWrapper}>
      <h2 className={styles.missionHeading}>Місія</h2>
      <p>Факультет прикладних наук УКУ готує лідерів галузі, що своїми знаннями, навичками і настановами змінюватимуть сьогоднішнє та майбутнє України та світу.</p>
    </div>
  </header>
  )
}

export default Header;
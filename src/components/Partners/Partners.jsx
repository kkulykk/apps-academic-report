import Container from '../Container';

import partners from '../../imgs/partners/partners.jpg';
import eleksLogo from '../../imgs/partners/eleks_logo.png';
import softServeLogo from '../../imgs/partners/ss_logo.png';
import fbRealityLab from '../../imgs/partners/fbRealityLab.png';
import advaSoft from '../../imgs/partners/advaSoft.png';


import styles from './Partners.module.css';

const Partners = ()=>{
  return(
    <section className={styles.partners}>
      <div className={styles.headingWrapper}>
        <span>наші партнери</span>
      </div>
      <Container>
        <p className={styles.text}>
        Завдяки підтримці компаній-партнерів факультет прикладних наук має змогу
        надавати стипендії найкращим студентам. Також спільно з спеціалістами цих 
        компаній ми організовуємо курси, зимові та літні школи, мітапи та багато іншого, 
        що допомагає студентам покращувати свої знання та навички у сфері ІТ.
        </p>
        <h3 className={styles.partnersHeading}>Стратегічні партнери:</h3>
        <ul className={styles.partnersWrapper}>
          <li className={styles.imgWrapper}>
            <img className={styles.strategyPartners} src={eleksLogo} alt="eleks logo"/>
          </li>
          <li className={styles.imgWrapper}>
            <img className={styles.strategyPartners} src={softServeLogo} alt="softServe logo"/>
          </li>
        </ul>

        <h3 className={styles.partnersHeading}>Sponsored Research Agreement:</h3>
        <ul className={styles.partnersWrapper}>
          <li className={styles.imgWrapper}>
            <img className={styles.sponsoredPartner} src={fbRealityLab} alt="eleks logo"/>
          </li>
          <li className={styles.imgWrapper}>
            <img className={styles.sponsoredPartner} src={advaSoft} alt="softServe logo"/>
          </li>
        </ul>
        
        <h3 className={styles.partnersHeading}>Партнери:</h3>
        <img className={styles.allPartners} src={partners} alt="partners logos"/>
      </Container>
    </section>
  )
}

export default Partners;
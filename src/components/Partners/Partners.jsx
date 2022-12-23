import Container from '../Container';

import styles from './Partners.module.css';

const images = {
  strategical:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2FstrategicalPartners.svg?alt=media&token=8133c84c-b20c-4aac-9fbe-a3649eff66f6',
  partners:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2Fpartners.svg?alt=media&token=b4ab3702-5186-4966-9e9e-2fbcb9334cc8'
};

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.headingWrapper}>
        <span>наші партнери</span>
      </div>
      <Container>
        <p className={styles.text}>
          Завдяки підтримці компаній-партнерів факультет прикладних наук має змогу надавати стипендії найкращим
          студентам. Також спільно з спеціалістами цих компаній ми організовуємо курси, зимові та літні школи, мітапи та
          багато іншого, що допомагає студентам покращувати свої знання та навички у сфері ІТ.
        </p>
        <h3 className={styles.partnersHeading}>Стратегічні партнери:</h3>
        <ul className={styles.partnersWrapper}>
          <img className={styles.strategyPartners} src={images.strategical} alt="eleks logo" />
        </ul>

        {/*<h3 className={styles.partnersHeading}>Sponsored Research Agreement:</h3>*/}
        {/*<ul className={styles.partnersWrapper}>*/}
        {/*<li className={styles.imgWrapper}>*/}
        {/*  <img className={styles.sponsoredPartner} src={fbRealityLab} alt="eleks logo" />*/}
        {/*</li>*/}
        {/*<li className={styles.imgWrapper}>*/}
        {/*  <img className={styles.sponsoredPartner} src={advaSoft} alt="softServe logo" />*/}
        {/*</li>*/}
        {/*</ul>*/}

        <h3 className={styles.partnersHeading}>Партнери:</h3>
        <img className={styles.allPartners} src={images.partners} alt="partners logos" />
      </Container>
    </section>
  );
};

export default Partners;

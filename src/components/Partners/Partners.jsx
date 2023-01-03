import Container from '../Container';

import styles from './Partners.module.css';

const images = {
  strategical:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2FstrategicalPartners.svg?alt=media&token=8133c84c-b20c-4aac-9fbe-a3649eff66f6',
  sponsoredResearch:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2FsponsoredResearch.svg?alt=media&token=dd2e39a2-6165-4098-a31b-9641e7a9bd70',
  partners:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2Fpartners.svg?alt=media&token=cdcf7bb5-e117-45cc-8f9d-efa0c0ad12df'
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
          <img className={styles.strategyPartners} src={images.strategical} alt="Strategical partners" />
        </ul>

        <h3 className={styles.partnersHeading}>Sponsored Research Agreement:</h3>
        <ul className={styles.partnersWrapper}>
          <img className={styles.sponsoredPartner} src={images.sponsoredResearch} alt="Sponsored research" />
        </ul>

        <h3 className={styles.partnersHeading}>Партнери:</h3>
        <img src={images.partners} alt="Partners logos" />
      </Container>
    </section>
  );
};

export default Partners;

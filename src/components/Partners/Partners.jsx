import { useTranslation } from 'react-i18next';

import Container from '../Container';

import styles from './Partners.module.css';

const images = {
  strategical:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2FstrategicalPartners.svg?alt=media&token=8133c84c-b20c-4aac-9fbe-a3649eff66f6',
  sponsoredResearch:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2FsponsoredResearch.svg?alt=media&token=dd2e39a2-6165-4098-a31b-9641e7a9bd70',
  partners:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2Fpartners.svg?alt=media&token=3b9f7e06-9ec5-46d2-be94-360d52e8c787'
};

const Partners = () => {
  const [t] = useTranslation();
  return (
    <section className={styles.partners}>
      <div className={styles.headingWrapper}>
        <div className={styles.partnersLine}></div>
        <span>{t('partners.title')}</span>
      </div>
      <Container>
        <p className={styles.text}>{t('partners.description')}</p>
        <h3 className={styles.partnersHeading}>{t('partners.strategicPartners')}</h3>
        <ul className={styles.partnersWrapper}>
          <img className={styles.strategyPartners} src={images.strategical} alt="Strategical partners" />
        </ul>

        <h3 className={styles.partnersHeading}>{t('partners.sponsoredResearchAgreement')}</h3>
        <ul className={styles.partnersWrapper}>
          <img className={styles.sponsoredPartner} src={images.sponsoredResearch} alt="Sponsored research" />
        </ul>

        <h3 className={styles.partnersHeading}>{t('partners.partners')}</h3>
        <img src={images.partners} alt="Partners logos" />
      </Container>
    </section>
  );
};

export default Partners;

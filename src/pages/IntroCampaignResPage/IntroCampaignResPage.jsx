import { useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import mobImg1 from '../../imgs/mobile/ukraine_mob.jpg';
import deskImg1 from '../../imgs/desktop/ukraine.jpg';

import styles from './IntroCampaignResPage.module.css';

const images = {
  bachelors: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fadmission-campaign%2FadmissionCampaignBachelorsUK.png?alt=media&token=5e8fc157-db88-4057-8660-6b30a71f1413',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fadmission-campaign%2FadmissionCampaignBachelorsEN.png?alt=media&token=f1f45c7d-70d4-4ba9-97b4-daa699cb225d'
  },
  masters: {
    uk: '',
    en: ''
  }
};

const AdmissionCampaignResPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.admissionCampaign.title')} />
      <Container>
        <section className={styles.section}>
          <div className={styles.imgWrapper}>
            <picture>
              <source srcSet={getLanguageImage(images.bachelors)} media="(min-width:768px)" />
              <img src={getLanguageImage(images.bachelors)} className={styles.img} alt="Ukraine map" />
            </picture>
          </div>

          <div className={styles.imgWrapper}>
            <picture>
              <source srcSet={deskImg1} media="(min-width:768px)" />
              <img src={mobImg1} className={styles.img} alt="Ukraine map" />
            </picture>
          </div>
        </section>
      </Container>
    </>
  );
};

export default AdmissionCampaignResPage;

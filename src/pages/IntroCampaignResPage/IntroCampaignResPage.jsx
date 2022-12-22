import { useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import mobImg1 from '../../imgs/mobile/ukraine_mob.jpg';
import deskImg1 from '../../imgs/desktop/ukraine.jpg';
import mobImg2 from '../../imgs/mobile/bacalavr_mob.jpg';
import deskImg2 from '../../imgs/desktop/bacalavr.jpg';

import styles from './IntroCampaignResPage.module.css';

const AdmissionCampaignResPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.admissionCampaign.title')} />
      <Container>
        <section className={styles.section}>
          <div className={styles.imgWrapper}>
            <picture>
              <source srcSet={deskImg2} media="(min-width:768px)" />
              <img src={mobImg2} className={styles.img} alt="Ukraine map" />
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

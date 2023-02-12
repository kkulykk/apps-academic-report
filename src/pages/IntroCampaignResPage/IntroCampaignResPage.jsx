import Zoom from 'react-medium-image-zoom';
import { useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './IntroCampaignResPage.module.css';
import 'react-medium-image-zoom/dist/styles.css';

const images = {
  bachelors: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fadmission-campaign%2FadmissionCampaignBachelorsUK.svg?alt=media&token=8e989023-beaa-41af-938f-3fd6eddca8ca',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fadmission-campaign%2FadmissionCampaignBachelorsEN.svg?alt=media&token=53bba618-0fb3-40ef-b376-a0fdafa1ad87'
  },
  masters: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fadmission-campaign%2FadmissionCampaignMastersUK.svg?alt=media&token=e692074e-1ffe-433d-ac02-cf69745cc9b9',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fadmission-campaign%2FadmissionCampaignMastersEN.svg?alt=media&token=df9f45a3-1724-478f-a735-6f87731ae540'
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
            <Zoom>
              <picture>
                <source srcSet={getLanguageImage(images.bachelors)} media="(min-width:768px)" />
                <img src={getLanguageImage(images.bachelors)} className={styles.img} alt="Bachelors admission results" />
              </picture>
            </Zoom>
          </div>

          <div className={styles.imgWrapper}>
            <Zoom>
              <picture>
              <source srcSet={getLanguageImage(images.masters)} media="(min-width:768px)" />
                <img src={getLanguageImage(images.masters)} className={styles.img} alt="Masters admission results" />
              </picture>
            </Zoom>
          </div>
        </section>
      </Container>
    </>
  );
};

export default AdmissionCampaignResPage;

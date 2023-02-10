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
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fadmission-campaign%2FadmissionCampaignMastersUK.svg?alt=media&token=a4f0487e-b5b9-4e06-85b1-4dbb3fb2f8a0',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fadmission-campaign%2FadmissionCampaignMastersEN.svg?alt=media&token=94a5975d-ad1f-4c51-94ac-9e6bd5423406'
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

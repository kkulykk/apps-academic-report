import Zoom from 'react-medium-image-zoom';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './GraduatesPage.module.css';
import 'react-medium-image-zoom/dist/styles.css';

const images = {
  alumni:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2Falumni.jpeg?alt=media&token=784863ee-9b68-467d-875a-e35e7d6c8966',
  furtherStudies: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2FfurtherStudiesEN.svg?alt=media&token=738f81f7-ce91-47e6-aadc-0c24a750af57',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2FfurtherStudiesUK.svg?alt=media&token=ec753cb6-e2ea-4915-9702-76b513cd9442'
  }
};

const GraduatesPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.graduates.title')} />
      <Container>
        <section className={styles.section}>
          <div className={styles.imgWrapper}>
            <picture>
              <img src={images.alumni} alt="happy students" />
            </picture>
          </div>
          <p className={styles.description}>
            <Trans i18nKey={'pages.graduates.text'} components={[<br />]} />
          </p>
          <Zoom>
            <div className={styles.imgWrapper}>
              <picture>
                <img
                  src={getLanguageImage(images.furtherStudies)}
                  className={styles.img}
                  alt="Where alumni continue studying"
                />
              </picture>
            </div>
          </Zoom>
        </section>
      </Container>
    </>
  );
};

export default GraduatesPage;

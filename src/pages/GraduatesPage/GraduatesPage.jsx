import Zoom from 'react-medium-image-zoom';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './GraduatesPage.module.css';
import 'react-medium-image-zoom/dist/styles.css';

const images = {
  alumni:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2Falumni.jpg?alt=media&token=31ae868e-fa32-4c38-bce6-e27e9f6650bc',
  furtherStudies: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2FfurtherStudiesEN.svg?alt=media&token=6fe0930e-72dd-442c-a3c4-a2d6566c7857',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2FfurtherStudiesUK.svg?alt=media&token=a510a1ea-7a97-4ca3-8199-6f488ef901e7'
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

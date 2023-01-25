import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './GraduatesPage.module.css';

const images = {
  alumni:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2Falumni.jpg?alt=media&token=31ae868e-fa32-4c38-bce6-e27e9f6650bc',
  furtherStudies: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2FfurtherStudiesEN.png?alt=media&token=3a3785a8-59e4-4d43-b8e8-4592e618c356',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2FfurtherStudiesUK.png?alt=media&token=7ca39d4c-b294-4eea-845d-832bb3c0a313'
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
          <div className={styles.imgWrapper}>
            <picture>
              <img
                src={getLanguageImage(images.furtherStudies)}
                className={styles.img}
                alt="Where alumni continue studying"
              />
            </picture>
          </div>
        </section>
      </Container>
    </>
  );
};

export default GraduatesPage;

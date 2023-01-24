import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import styles from './GraduatesPage.module.css';

const images = {
  alumni:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Falumni%2Falumni.jpg?alt=media&token=31ae868e-fa32-4c38-bce6-e27e9f6650bc'
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
            {/*<picture>*/}
            {/*  <source srcSet={grad1ImgBig} media="(min-width:768px)" />*/}
            {/*  <img src={grad1ImgMedium} className={styles.img} alt="APPS UCU ALUMNI" />*/}
            {/*</picture>*/}
          </div>
        </section>
      </Container>
    </>
  );
};

export default GraduatesPage;

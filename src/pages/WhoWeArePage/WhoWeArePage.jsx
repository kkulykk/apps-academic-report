import Zoom from 'react-medium-image-zoom';
import { useTranslation, Trans } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './WhoWeArePage.module.css';
import 'react-medium-image-zoom/dist/styles.css';

const images = {
  timeline: {
    mobile: {
      uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineMobileUK.svg?alt=media&token=c2b08734-d362-46ef-a9be-3d46472a2e9d',
      en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineMobileEN.svg?alt=media&token=e63cf7dc-6239-45f9-a1ed-2cae34b47961'
    },
    desktop: {
      en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineDesktopEN.svg?alt=media&token=4cb034df-e3a2-443e-8d5b-317155242166',
      uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineDesktopUK.svg?alt=media&token=6bf6ef9d-115b-4b7f-a92f-559331c06d1b'
    }
  },
  students: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FstudentsUK.svg?alt=media&token=db5875f5-4056-44de-909c-22de184b2e95',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FstudentsEN.svg?alt=media&token=7248573a-7578-4db2-9611-6b26417511d9'
  },
  employees: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FemployeesUK.svg?alt=media&token=3ebf66e6-9858-45cd-869b-174a58cf8513',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FemployeesEN.svg?alt=media&token=94df6afc-6f5e-4a49-8dfd-139e82e881f8'
  }
};

const WhoWeArePage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.whoWeAre.title')} />
      <Container>
        <section className={styles.section}>
          <p className={styles.text}>
            <Trans i18nKey={'pages.whoWeAre.subtitle'} />
          </p>
          <div className={styles.chartWrapper}>
            <img className={styles.chartIcon} src={getLanguageImage(images.employees)} alt="employees" />
            <img className={styles.chartIcon} src={getLanguageImage(images.students)} alt="students" />
          </div>

          <p className={styles.text}>
            <Trans i18nKey={'pages.whoWeAre.mainText'} components={[<br />]} />
          </p>
          <div className={styles.videos}>
            <iframe
              src={'https://www.youtube.com/embed/H6DZyAM3t4A'}
              style={{ borderRadius: '15px' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <iframe
              src={'https://www.youtube.com/embed/-OVKrbpkOtQ'}
              style={{ borderRadius: '15px' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>

          <div className={styles.bgTop}>
            <Zoom>
              <picture>
                <source srcSet={getLanguageImage(images.timeline.desktop)} media="(min-width:768px)" />
                <img src={getLanguageImage(images.timeline.mobile)} className={styles.img} alt="clouds" />
              </picture>
            </Zoom>
          </div>
        </section>
      </Container>
    </>
  );
};

export default WhoWeArePage;

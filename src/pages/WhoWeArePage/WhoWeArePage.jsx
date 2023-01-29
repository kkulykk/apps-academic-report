import { useTranslation, Trans } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './WhoWeArePage.module.css';

const images = {
  timeline: {
    mobile: {
      uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineMobileEN.svg?alt=media&token=c5dd5923-052e-4e79-9f5c-b4ffa112cd38',
      en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineMobileEN.svg?alt=media&token=c5dd5923-052e-4e79-9f5c-b4ffa112cd38'
    },
    desktop: {
      en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineDesktopEN.svg?alt=media&token=04bef019-6a37-4121-9417-59716cc5e550',
      uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineDesktopUK.svg?alt=media&token=a957ed2f-65a6-4e69-8f27-8fef984f13de'
    }
  },
  students: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FstudentsUK.svg?alt=media&token=3e71ab67-d020-4476-8db9-7f3a456cd4c9',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FstudentsEN.png?alt=media&token=3c9a35dd-14c4-4dcc-bc32-99ca1fd6e18c'
  },
  employees: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FemployeesUK.svg?alt=media&token=bbefb40d-7195-4bea-aeb4-2131a4555553',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FemployeesEN.svg?alt=media&token=f57ad27d-04a3-485f-8da5-0b7be7a6b857'
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <iframe
              src={'https://www.youtube.com/embed/-OVKrbpkOtQ'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>

          <div className={styles.bgTop}>
            <picture>
              <source srcSet={getLanguageImage(images.timeline.desktop)} media="(min-width:768px)" />
              <img src={getLanguageImage(images.timeline.mobile)} className={styles.img} alt="clouds" />
            </picture>
          </div>
        </section>
      </Container>
    </>
  );
};

export default WhoWeArePage;

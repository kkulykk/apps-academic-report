import { useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './WhoWeArePage.module.css';

const images = {
  timeline: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineUK.png?alt=media&token=cb90dca6-343d-439c-a7af-3651b3ffc70a',
    en: ''
  },
  students: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FstudentsUK.png?alt=media&token=45a0174a-0e1e-4de5-8b25-4bba9ea67085',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FstudentsEN.png?alt=media&token=3c9a35dd-14c4-4dcc-bc32-99ca1fd6e18c'
  },
  employees: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FemployeesUK.png?alt=media&token=32e8f387-5c09-4a0c-81b2-3e6820dadb9e',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FemployeesEN.png?alt=media&token=a5e16063-3c9f-49d5-aebe-164404a04dde'
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
            Факультет прикладних наук УКУ готує лідерів галузі, що своїми знаннями, навичками і настановами
            змінюватимуть сьогоднішнє та майбутнє України та світу.
          </p>
          <div className={styles.chartWrapper}>
            <img className={styles.chartIcon} src={getLanguageImage(images.employees)} alt="employees" />
            <img className={styles.chartIcon} src={getLanguageImage(images.students)} alt="students" />
          </div>

          <p className={styles.text}>
            Наші бакалаврські програми ‘’Комп’ютерні науки’’, ‘’ІТ та бізнес-аналітика’’, а також дворічна магістерська
            програма з комп’ютерних наук за спеціалізацією ‘’Науки про дані’’ розширяють фронтири освіти у сфері
            комп’ютерних наук та інформаційних технологій, а наші випускники – не просто успішні працівники
            всесвітньовідомих ІТ компаній, вони є лідерами, що готові творити нові продукти і послуги, нові ідеї та нові
            сенси як у галузі інформаційних технологій, так і в інших сферах людського життя.
            <br />
            Програми факультету розраховані на вмотивованих студентів, націлених на творчу самостійну працю над своїм
            професійним вдосконаленням і готових нести відповідальність за використання унікальних нагод для навчання,
            які перед ними відкриє ця програма.
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
              <source srcSet={images.timeline.uk} media="(min-width:768px)" />
              <img src={images.timeline.uk} className={styles.img} alt="clouds" />
            </picture>
          </div>
        </section>
      </Container>
    </>
  );
};

export default WhoWeArePage;

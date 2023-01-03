import { useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import styles from './WhoWeArePage.module.css';

const images = {
  timeline: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwho-we-are%2FtimelineUK.png?alt=media&token=cb90dca6-343d-439c-a7af-3651b3ffc70a',
    en: ''
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
          {/*<div className={styles.chartWrapper}>*/}
          {/*  <img className={styles.chartIcon} src={employers} alt="employers" />*/}
          {/*  <img className={styles.chartIcon} src={students} alt="students" />*/}
          {/*</div>*/}

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

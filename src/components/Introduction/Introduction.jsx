import Container from '../Container';

import styles from './Introduction.module.css';

const images = {
  dean: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fmain%2Fdean.jpg?alt=media&token=0860da7f-e670-435d-9d22-d362ddb68d62'
};

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.headingWrapper}>
        <span>слово декана</span>
      </div>
      <Container>
        <div className={styles.textWrapper}>
          <p className={styles.introductionText}>
            "Новий стандарт ІТ освіти" - гасло, яке народилось в 2015 році на початках обговорення започаткування ІТ
            напрямку навчання в УКУ. Гасло, яке стало і є магнітом для студентів; гасло, яке переконало наших числених
            партнерів; гасло, яке спонукало колег з інших університетів творити нові навчальні продукти; гасло, яке
            запалило нашу команду. Пройшли шість насичених та неймовірно цікавих років, що сформували факультет
            прикладних наук та велику спільноту друзів факультету. Ми багато спробували, ми багато досягнули, ми
            поставили нові великі цілі для себе. Але і надалі це гасло залишається важливим елементом нашої стратегії.
            Ми продовжуєм свідчити, служити, спілкуватись та творити новий стандарт ІТ освіти.
          </p>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={images.dean} alt="Yaroslav Prytula" />
            </div>
            <div className={styles.nameWrapper}>
              <span className={styles.name}>Ярослав Притула</span>
              <br />
              <span>декан факультету прикладних наук УКУ</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;

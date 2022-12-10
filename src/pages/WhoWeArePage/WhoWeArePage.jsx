import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import styles from './WhoWeArePage.module.css';

import topBig from '../../imgs/whoWeAre/topBig.jpg';
import topSmall from '../../imgs/whoWeAre/topSmall.jpg';
import bottomBig from '../../imgs/whoWeAre/bottomBig.jpg';
import bottomSmall from '../../imgs/whoWeAre/bottomSmall.jpg';
import employers from '../../imgs/whoWeAre/employers_.svg';
import students from '../../imgs/whoWeAre/students_.svg';
import img1 from '../../imgs/whoWeAre/01.svg';
import img2 from '../../imgs/whoWeAre/02.svg';
import img3 from '../../imgs/whoWeAre/03.svg';
import img4 from '../../imgs/whoWeAre/04.svg';
import img5 from '../../imgs/whoWeAre/05_eleks.svg';
import img6 from '../../imgs/whoWeAre/06.svg';
import img7 from '../../imgs/whoWeAre/07_softserve.svg';
import img8 from '../../imgs/whoWeAre/08_fb.svg';
import img9 from '../../imgs/whoWeAre/09.svg';
import img10 from '../../imgs/whoWeAre/10.svg';

const WhoWeArePage = () => (
  <>
    <AppBar name="Хто ми?" />
    <Container>
      <section className={styles.section}>
        <p className={styles.text}>
          Факультет прикладних наук УКУ готує лідерів галузі, що своїми знаннями, навичками і настановами змінюватимуть
          сьогоднішнє та майбутнє України та світу.
        </p>
        <div className={styles.chartWrapper}>
          <img className={styles.chartIcon} src={employers} alt="employers" />
          <img className={styles.chartIcon} src={students} alt="students" />
        </div>

        <p className={styles.text}>
          Наші бакалаврські програми ‘’Комп’ютерні науки’’, ‘’ІТ та бізнес-аналітика’’, а також дворічна магістерська
          програма з комп’ютерних наук за спеціалізацією ‘’Науки про дані’’ розширяють фронтири освіти у сфері
          комп’ютерних наук та інформаційних технологій, а наші випускники – не просто успішні працівники
          всесвітньовідомих ІТ компаній, вони є лідерами, що готові творити нові продукти і послуги, нові ідеї та нові
          сенси як у галузі інформаційних технологій, так і в інших сферах людського життя.
          <br />
          Програми факультету розраховані на вмотивованих студентів, націлених на творчу самостійну працю над своїм
          професійним вдосконаленням і готових нести відповідальність за використання унікальних нагод для навчання, які
          перед ними відкриє ця програма.
        </p>
        <div className={styles.bgTop}>
          <picture>
            <source srcSet={topBig} media="(min-width:768px)" />
            <img src={topSmall} className={styles.img} alt="clouds" />
          </picture>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img1} alt="dialog" />
            </div>
            <p className={styles.descrptn}>відкриття програми з Комп'ютерних наук УКУ CS@UCU</p>
            <p className={styles.year}>2015</p>
          </li>

          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img2} alt="people connections" />
            </div>
            <p className={styles.descrptn}>інавгурація факультету прикладних наук УКУ</p>
            <p className={styles.year}>2016</p>
          </li>

          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img3} alt="people" />
            </div>
            <p className={styles.descrptn}>відкриття магістерської програми з Наук про дані УКУ</p>
            <p className={styles.year}>2016</p>
          </li>

          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img4} alt="note" />
            </div>
            <p className={styles.descrptn}>відкриття бакалаврської програми з IT та бізнес-аналітики</p>
            <p className={styles.year}>2017</p>
          </li>

          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img5} alt="vector buisness-analitics" />
            </div>
            <p className={styles.descrptn}>стратегічне партнерство з Eleks</p>
            <p className={styles.year}>2017</p>
          </li>

          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img6} alt="eleks logo" />
            </div>
            <p className={styles.descrptn}>відкриття Лабораторії машинного навчання УКУ</p>
            <p className={styles.year}>2018</p>
          </li>

          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img7} alt="SoftServe logo" />
            </div>
            <p className={styles.descrptn}>стратегічне партнерство з SoftServe</p>
            <p className={styles.year}>2019</p>
          </li>

          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img8} alt="Facebook logo" />
            </div>
            <p className={styles.descrptn}>стратегічне партнерство з Facebook</p>
            <p className={styles.year}>2020</p>
          </li>

          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img9} alt="data engeneering" />
            </div>
            <p className={styles.descrptn}>відкриття сертифікаційної програми з Інженерії даних</p>
            <p className={styles.year}>2020</p>
          </li>

          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.listIcon} src={img10} alt="data analitics" />
            </div>
            <p className={styles.descrptn}>відкриття сертифікаційної програми з Аналітики даних</p>
            <p className={styles.year}>2021</p>
          </li>
          <div className={styles.bgbottom}></div>
        </ul>
        <div className={styles.bgTop}>
          <picture>
            <source srcSet={bottomBig} media="(min-width:768px)" />
            <img src={bottomSmall} className={styles.img} alt="ground" />
          </picture>
        </div>
      </section>
    </Container>
  </>
);

export default WhoWeArePage;

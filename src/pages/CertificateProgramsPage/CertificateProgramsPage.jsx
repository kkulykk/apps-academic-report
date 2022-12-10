import { useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import img1 from '../../imgs/certificatePrograms/data_science_2021.jpg';
import img2 from '../../imgs/certificatePrograms/winter_school.jpg';
import img3 from '../../imgs/certificatePrograms/prod_man_fun.jpg';
import img4 from '../../imgs/certificatePrograms/data_x_6.jpg';
import img5 from '../../imgs/certificatePrograms/DE.jpg';
import de from '../../imgs/certificatePrograms/de-image.jpg';
import ds from '../../imgs/certificatePrograms/ds-image.jpg';
import da from '../../imgs/certificatePrograms/da-image.jpg';

import styles from './CertificateProgramsPage.module.css';

const CertificateProgramsPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.certificatePrograms.title')} />
      <Container>
        <section className={styles.section}>
          <div className={styles.lastItem}>
            <img className={styles.dataImg} src={img4} alt="data x 6 " />
            <p className={styles.description}>
              <h3>Концепція Data X на факультеті прикладних наук УКУ</h3>
              <p>
                З моменту свого заснування, факультет прикладних наук УКУ органічно розвиває свої освітні пропозиції та
                наукові напрямки.
                <img className={styles.smImgs} src={ds} alt="data-science " />
                Після відкриття бакалаврської програми з комп’ютерних наук у 2015 році, вже через рік на факультеті
                виникла <a href="https://apps.ucu.edu.ua/data-science/">магістерська програма з Data Science</a>,
                паралельно з якою також стартувала{' '}
                <a href="https://apps.ucu.edu.ua/summerschool-ds/">
                  Літня школа з наук про дані (Lviv Data Science Summer School)
                </a>
                . З плином часу, факультет здобував репутацію місця, де Data Science є одним із пріоритетних освітніх
                напрямків, а згодом, після відкриття{' '}
                <a href="https://apps.ucu.edu.ua/mllab/">Лабораторії машинного навчання УКУ</a>, заявив про себе і як
                про перспективний дослідницький центр у цій галузі.
              </p>
              <img className={styles.smImgs} src={de} alt="data-enngeneering " />
              <p>
                Паралельно з цим, з ініціативи Олексія Молчановського, керівника програми з DS, на факультеті вже два
                роки ведуться{' '}
                <a href="https://apps.ucu.edu.ua/articles-and-research/data-science-job-market-2020/">
                  дослідження ринку Data Science в Україні
                </a>
                . Значною мірою, саме завдяки цим дослідженням на факультеті з’явилася 10-місячна{' '}
                <a href="https://apps.ucu.edu.ua/data-engineering/">
                  сертифікаційна програма з Інженерії даних (Data Engineering)
                </a>{' '}
                - аналізуючи потреби та запити роботодавців у сфері ІТ, вдалося виявити, що професія інженера даних
                набуває широкої популярності у сегменті роботи з даними. Дослідження ринку праці є своєрідним
                каталізатором, що дозволяє ґрунтовно і динамічно відстежувати нові тренди у галузі Data Science. Крім
                того, маючи актуальні результати таких досліджень, ми можемо скорочувати відставання між дуже динамічним
                ринком і освітніми програми, які з’являються внаслідок розвитку та росту сегменту Data Science в
                Україні.
              </p>
              <p>
                З іншого боку, ідея програми з інженерії даних виникла внаслідок поступового вдосконалення та росту
                напрямку Data Science на факультеті, адже з’явилася потреба працювати з все більшими масивами даних та
                їх алгоритмами. <br />
                <img className={styles.smImgs} src={da} alt="data-analitics " />А вже цього року, на факультеті
                прикладних наук УКУ стартували{' '}
                <a href="https://apps.ucu.edu.ua/data-analytics/">
                  сертифікаційну програму з Аналітики даних (Data Analytics)
                </a>
                , яка разом з магістерською програмою Data Science та сертифікаційною програмою Data Engineering
                формують цілий освітній центр, який ми назвали напрямком DataX на факультеті прикладних наук УКУ. Маючи
                ці три взаємопов’язані програми, ми маємо на меті стати своєрідним центром з підготовки відповідних
                фахівців, а також вести наукові дослідження у співпраці з Лабораторією машинного навчання УКУ. Третім
                елементом у концепції Data X є консалтинг та зовнішня експертиза для українського бізнесу чи
                громадського сектору у сфері аналітики даних. До прикладу, важливим елементом навчання на новоствореній
                програмі з Аналітики даних є робота над проектами, які мають практичну складову і спрямовані на
                вирішення реальних кейсів. Крім того, в останні роки на факультеті ораганізовується{' '}
                <a href="https://apps.ucu.edu.ua/home/business_challenge_2021/"> Business Tech Challenge</a> - хакатон,
                на якому учасники працюють над вирішенням певної проблеми українського бізнесу. Саме у такому форматі
                вдалося організувати співпрацю з компаніями “Кормотех” та “Fishka”.
                <br />
              </p>
              <p>
                Ця мережева освітня модель, яку пропонує факультет, дозволяє слухачам поступово зростати та розвиватися
                на території DataX, органічно здобуваючи один або декілька освітніх компонентів, що наповнюють концепцію
                DataX. Така модель вибудовує гнучку екосистему Data X, яка за свою природою відкрита на нові можливості
                в освіті, науці чи консалтингу, зважаючи, що середовище роботи з даними є дуже динамічним як в Україні
                так і в світі.
              </p>
            </p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={img1} alt="data science" />
            <p className={styles.description}>
              Уже шостий рік поспіль факультет прикладних наук УКУ орагнізовує літню школу наук про дані, яка в
              доковідні часи збирала до 100 учасників. Останні 2 роки школа відбувається виключно в онлайн форматі, що
              дозволило значно розширити кількість учасників - у 2020 і 2021 рр. студентами школи стали більше тисячі
              учасників. Традиційно, літня школа пропонує формат до 13 міні-курсів, з яких кожен учасник може обрати до
              чотирьох та проходити навчання протягом 2-4 днів. Це дозволяє глибше занурити студентів у теми, що їх
              найбільше цікавлять. Загалом до вибору пропонуються такі міні-програми, як: Customer Analytics, Natural
              Language Processing, Machine Teaching, Fairness and interpretability in Machine Learning, Discrete
              Computation Graphs, Applied Econometrics (Macro and Finance), Machine Learning for time series and sensor
              data, Deep Learning for Computer Vision, Bayesian Thinking for Applied Machine Learning, Machine learning
              for financial data structures, Conversational Design, Introduction to Urban Data Science та Security and
              Privacy of Machine Learning. Наприкінці школи студенти презентують фінальні завдання, отримані від
              викладачів школи. Студентами та викладачами школи є учасники як з Європи так і з Північної Америки та Азії
              - тому літня школа наук про дані також є доброю візитівкою УКУ, Львова та України серед численних
              учасників з-поза України.&nbsp;
              <a href="https://apps.ucu.edu.ua/summerschool-ds/">Детальніше про школу</a>
            </p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={img5} alt="de" />
            <p className={styles.description}>
              У вересні на сертифікаційній програмі з Data Engineering відбувся випуск першого набору - програму успішно
              завершили 16 людей. Навчальний курс на програмі розрахований на 10 місяців навчання на базі APPS UCU, а
              викладачами на програмі є досвідчені експерти в ІТ-індустрії, які мають великий досвід роботи та
              викладання в галузі Data Engineering. В жовтні розпочалося навчання у 34 студентів другого набору програми
              з DE. Головним партнером програми з DE є компанія Softserve.&nbsp;
              <a href="https://apps.ucu.edu.ua/data-engineering/">Детальніше про програму</a>
            </p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={img3} alt="product management" />
            <p className={styles.description}>
              Цього року факультет прикладних наук УКУ спільно з{' '}
              <a href="https://www.facebook.com/prjctrcomua/?__cft__%5B0%5D=AZXUkfobXWJ5OYSWLc8MHzYWxzSwoew763U-3LhK00jTkFZxzUGU-l_os-Mqy0G_otHTaVMqRrc5SRTBPgTRd7zTSmWA_ncTADLIShDRLCHTEy_IkWBsKWGIO_yTRD2dAh8tvNvriSF9wDgDHUEvrqCO164laNqck7s9aUrVyne2ofzbQhcqk5WCtIGidF47jkbEZY8NNSpDtL5_xgbCb2SxRJpyp1Jd6Awb83T8LHkAvQ&__tn__=kK-y-R">
                Projector{' '}
              </a>
              провели 4-ох місячну онлайн сертифікаційну програму Product Management Fundamentals. Ця програма
              зосереджена навколо того, щоб надати найважливіші навчики та знання необхідні для продуктового менеджера -
              від розробки ідеї та перевірки гіпотез, до ітераційного покращення продукту, маркетингу та аналітики. Вся
              теорія на програмі закріплювалася практикою, прикладними вправами та проєктами з реальними продуктовими
              кейсами. Програма орієнтована на продуктових менеджерів, які хочуть систематизувати знання та отримати
              досвід роботи з реальними продуктами; на бізнес аналітиків, UI/UX дизайнерів, проджект менеджерів, які
              хочуть розвиватися в продуктових командах.&nbsp;
              <a href="https://apps.ucu.edu.ua/product-management-fundamentals-prjctr/">Детальніше про програму</a>
            </p>
          </div>

          <div className={styles.imgWrapper}>
            <img src={img2} alt="winter school" />
            <p className={styles.description}>
              З початком 2021 року розвиток дизайн напрямку на факультеті прикладних наук УКУ отримав новий стимул, адже
              вперше в стінах УКУ відбулася повноцінна школа з дизайну. Ця ініціатива була організована в першу чергу
              для дизайнерів-початківців, проте участь у ній також брали вже досвідчені спеціалісти. Протягом 5 тижнів
              навчання, студенти школи прослухали модулі з інклюзивного дизайну, основ візуального дизайну, основ User
              Experience, роботи з клієнтом та Арт тайм менеджменту, а також розвитку особистого бренду дизайнера. Кожен
              з можулів базується на практичній складовій навчання, що дозволяє втілювати їх у реальних проектах. Щоб
              навчання було максимально цікавим та приносило практичну цінність, кожен учасник школи працював над певним
              запропонованим кейсом. Таким чином, уся практична робота, яка відбувалася на школі, мала шанс одразу
              втілюватись на реальних проектах.&nbsp;
              <a href="https://apps.ucu.edu.ua/design-school-2021/">Детальніше про школу</a>
            </p>
          </div>
        </section>
      </Container>
    </>
  );
};

export default CertificateProgramsPage;

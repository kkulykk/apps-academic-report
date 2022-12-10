import { useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import img1 from '../../imgs/socialProjects/project-01.jpg';
import img2 from '../../imgs/socialProjects/project-02.jpg';
import img3 from '../../imgs/socialProjects/project-03.jpg';
import img4 from '../../imgs/socialProjects/project-04.jpg';
import img5 from '../../imgs/socialProjects/project-05.jpg';
import img6 from '../../imgs/socialProjects/project-06.jpg';
import img7 from '../../imgs/socialProjects/project-07.jpg';

import styles from './SocialProjectsPage.module.css';

const SocialProjectsPage = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  return (
    <>
      <AppBar name="Суспільно-орієнтовані проекти" />
      <Container>
        <section className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img1} alt="man talking" />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen1(!open1);
                }}
              >
                {open1 ? (
                  <span class="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span class="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>

            {open1 ? (
              <p className={styles.description}>
                Розвиток сфери штучного інтелекту вже зовсім скоро може стати одним із пріоритетів розвитку міста
                Львова. У червні 2021 р. Комісія підприємництва, інвестицій, цифрової трансформації та спадщини
                одноголосно підтримала Концепцію розвитку штучного інтелекту у м.Львові ініційовану{' '}
                <a className={styles.link} href="https://apps.ucu.edu.ua/oleksii-molchanovskyi/">
                  Олексієм Молчановським
                </a>
                .<br />
                Концепція розвитку сфери штучного інтелекту у Львові спирається на міську стратегію «Львів — місто
                гідного життя». Її пропонують розвивати в трьох сферах: економіки, освіти та міського управління.
                <br />
                <a
                  className={styles.link}
                  href="https://lviv.goloszmin.org/news/lviv-mozhe-stati-tsentrom-shtuchnogo-intelektu-skhidnoi-evropi-oleksa-voznyak?fbclid=IwAR0ZlYmKPHVn5OkWXyKuB3NPkJBNnQZA9npcDns7-N-bRz8aB2n84RJqDWc"
                >
                  Детальніше
                </a>
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img2} alt="classroom" />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen2(!open2);
                }}
              >
                {open2 ? (
                  <span class="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span class="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>

            {open2 ? (
              <p className={styles.description}>
                Уже четвертий рік поспіль студенти факультету прикладних наук УКУ самостійно організовують “APPS Summer
                Camp” – літню школу, яка має на меті дати орієнтири для молодих людей у сфері комп’ютерних наук, які у
                майбутньому прагнуть будувати свою кар’єру в ІТ галузі. Студенти не тільки керують усіма організаційними
                процесами, але й самостійно викладають навчальні курси для учасників школи.
                <br />
                Під час навчання на “APPS Summer Camp” учасники мають можливість прослухати курси з Принципу Організації
                Комп’ютера, Аналітики даних, Дизайн мислення, Основ програмування у Python, Візуалізації даних,
                Робототехніки, Основ економіки. Навчальна програма також наповнена низкою інтерактивних занять, де учні
                вчаться розвивати ефективну комунікацію, вправляються в інтелектуальних змаганнях “Що?Де?Коли?”, а також
                мають зустрічі та спілкування з експертами з ІТ індустрії. Фінальним акордом у програмі літньої школи є
                презентація власного дослідницького проекту, який реалізовується протягом навчання на таборі.&nbsp;
                <a
                  className={styles.link}
                  href="https://lviv.goloszmin.org/news/lviv-mozhe-stati-tsentrom-shtuchnogo-intelektu-skhidnoi-evropi-oleksa-voznyak?fbclid=IwAR0ZlYmKPHVn5OkWXyKuB3NPkJBNnQZA9npcDns7-N-bRz8aB2n84RJqDWc"
                >
                  Детальніше
                </a>
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img6} alt="buisness tech chalange" />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen3(!open3);
                }}
              >
                {open3 ? (
                  <span class="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span class="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open3 ? (
              <p className={styles.description}>
                Уже другий рік поспіль факультет прикладних наук УКУ разом з великим українським бізнесом проводить
                Business Tech Challenge.
                <br />
                Business Tech Challenge – це можливість отримати прикладні знання у розробці нових продуктів; впровадити
                інноваційну ідею вирішення проблеми реального бізнесу; отримати унікальний досвід співпраці з провідними
                спеціалістами компанії та викладачами APPS UCU та позмагатися разом з своєю командою за Приз від
                компанії.
                <br />
                Цьогоріч учасники хакатону працювали над розв’язком дилеми компанії Fishka щодо того як задовольнити
                щоденні потреби клієнта через мобільний додаток, щоб діяти в межах наявної бізнес моделі та балансу
                взаємної вигоди. Переможцями хакатону стала команда студентів факультету прикладних наук УКУ - Юрій
                Лучка та Роксоляна Онишків, які отримали перемогу та приз 30 000 грн.
                <br />
                Модель Business Tech Challenge є виграшною для кожної із сторін, адже успішний бізнес пропонує свою
                проблему на вирішення учасникам, найкращі рішення яких мають можливість бути реалізованими в реальному
                житті.
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img4} alt="graphic" />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen4(!open4);
                }}
              >
                {open4 ? (
                  <span class="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span class="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open4 ? (
              <p className={styles.description}>
                З початку 2020 року Факультет прикладних наук УКУ почав досліджувати ринок вакансій в Україні на
                позиції, які пов’язані з Data Science. На основі цих досліджень ми що пів року публікуємо звіт з
                основними інсайтами. Для того, щоб виявляти тенденції в галузі Data Science у великих містах України
                (Київ, Львів, Харків, Одеса, Дніпро), ми проводимо динамічне дослідження-аналіз вакансій на сайтах
                dou.ua та djinni.co. Також ми вирішили оцінити відношення кількості вакансій у сфері Data Science до
                загальної кількості вакансій в IT.
                <br />З детальними результатами досілдження можна ознайомитися за&nbsp;
                <a
                  className={styles.link}
                  href="https://apps.ucu.edu.ua/articles-and-research/data-science-job-market-2021-1/"
                >
                  покликанням
                </a>
                .
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img5} alt="graphic" />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen5(!open5);
                }}
              >
                {open5 ? (
                  <span class="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span class="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open5 ? (
              <p className={styles.description}>
                У кінці 2020 р. Дмитро Лопушанський, студент факультету прикладних наук УКУ отримав патент на
                мультифункціональний пристрій для незрячих людей. Прилад HelpyEyes, над яким Дмитро працює вже два роки
                може виконувати 3 функції: визначати колір, вимірювати рівень освітленості та попереджати про перешкоди
                поблизу. Розробка має допомогти людям з серйозними зоровими порушеннями вирішити деякі з проблем, з
                якими стикаються щодня. Сам прилад є достатньо компактним, за розмірами його можна порівняти з
                кишеньковим ліхтариком.
                <br />
                Дмитро готував свою ідею для Малої академії наук України, завдяки якій потрапив на міжнародні конкурси.
                Дослідник уже представляв свій проект на ICYS (Міжнародна конференція молодих вчених) у Куала-Лумпурі в
                Малайзії, на OKSEF (Виставка-конкурс у сфері технічних наук та енергетики) в м. Ізмір, Туреччина та на
                AIGC (Глобальний конкурс інновацій) у Сінгапурі.
                <br />
                Ознайомитися з публічною частиною патенту можна на сайті Укрпатенту за&nbsp;
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fsis.ukrpatent.org%2Fuk%2Fsearch%2Fdetail%2F1465328%2F%3Ffbclid%3DIwAR0P9ZnO5DJhWstDRQ-GWIgHxYRaM8EWQ76w1Vs9CnJMzSHgLzefoBVQoQQ&h=AT3p5clRB0Z5swMRlJg9p1R5JL9z8eeInn2QhZ9RN99SPgj422ZEcgZ6BzU4QT_CZa3fkZFnVcph0AeIdBWeKxVekCcUW_nSeSHzwtXPVv93xwAz8hNJ2dz81d9ok1YyMpl2&__tn__=-UK-R&c%5B0%5D=AT0oE0IcNz7JemGrHlmGT4g1OJ7Ot6jz9YxErBcWe62odztO-SuYPrf-xe20_a2YuxLklvoQU9va-kJsuZnS7423vHWKs-1lWh5Snh4vRuicLXhzreaBn7m3YhbSmPcOthnaGi4rw2Ktd_gp1BTVhS2BQj3EeZ7qNTqNtGhqp7WjLRKOJ70OeI21gPfy7U2Ww-bykbHM">
                  покликанням
                </a>
                .<br />
                <a
                  className={styles.link}
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fucu.edu.ua%2Fnews%2Fstudent-pershokursnyk-uku-rozrobyv-prylad-dlya-nezryachyh%2F%3Ffbclid%3DIwAR0P9ZnO5DJhWstDRQ-GWIgHxYRaM8EWQ76w1Vs9CnJMzSHgLzefoBVQoQQ&h=AT1JfSoyz8gxb9yLeLEsbetTMd56UqrDtggr0FVOPW8hd_4aTMv3bp3bL34w_l7xmVAcEf9e54tl8H0ePLrEiH2wZPUAcn_x7Dvpbz9KIZTZT9-ZNPIcdcANE6vJnefk7COb&__tn__=-UK-R&c%5B0%5D=AT0oE0IcNz7JemGrHlmGT4g1OJ7Ot6jz9YxErBcWe62odztO-SuYPrf-xe20_a2YuxLklvoQU9va-kJsuZnS7423vHWKs-1lWh5Snh4vRuicLXhzreaBn7m3YhbSmPcOthnaGi4rw2Ktd_gp1BTVhS2BQj3EeZ7qNTqNtGhqp7WjLRKOJ70OeI21gPfy7U2Ww-bykbHM"
                >
                  Детальніше про прилад
                </a>
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img3} alt="girl" />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen6(!open6);
                }}
              >
                {open6 ? (
                  <span class="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span class="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open6 ? (
              <p className={styles.description}>
                Команда Студентського братства УКУ вже 9 рік поспіль ініціює проєкт «Великдень разом». Цьогоріч захід
                відбувся у Херсоні з 30 квітня по 3 травня, де згуртував молодь із Західної і Східної України для
                реалізації спільних соціальних проєктів, волонтерський ініціатив та святкування Воскресіння Христового.
                <br />
                «Проєкт “Великдень разом” став своєрідним продовженням студентської ініціативи “Різдво разом”. Саме
                слово “разом” вказує на спільність, єдність і співпрацю. Тому багато років, студенти створюють у різних
                куточках нашої країни можливості для зустрічі, спільного проведення часу з місцевою громадою, руйнування
                стереотипів та упереджень один до одного, а об’єднує усіх найбільше християнське свято – Христове
                Воскресіння». Головною організаторкою цьогорічної ініціативи була студентка факультету прикладних наук
                Софія Гаркот.
                <br />
                <a
                  className={styles.link}
                  href="https://ucu.edu.ua/news/velykden-razom-u-hersoni-vid-studentskogo-bratstva-uku/?fbclid=IwAR14ZzVFkW8AmFLknVLlPdhOhUbH_Ft4x7oYbXC84S1LsPMh4yrWx-pck58"
                >
                  Детальніше
                </a>
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img7} alt="data science in real life" />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen7(!open7);
                }}
              >
                {open7 ? (
                  <span class="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span class="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open7 ? (
              <p className={styles.description}>
                Важливим вектором розвитку факультету прикладних наук УКУ є організація курсів та проектів, які мають
                суспільно-орієнтовану специфіку. На магістерській програмі з Наук про дані на постійній основі
                відбувається навчальний курс “Data Science in real life”. В рамках цього курсу студенти-магістри
                працюють над практичними кейсами, які мають суспільну важливість.
                <br />
                Весною 2021 р. студенти розпочали два проекти у співпраці з Львівською міською радою, які стосувулися
                аналізу даних щодо середніх шкіл Львова, а також системи громадського транспорту міста.
                <br />
                У першому проекті студенти працювали з даними щодо аналізу успішності середніх шкіл за результатами ЗНО.
                Крім того вони аналізували дані щодо залежності між будівництвом нових житлових комплексів у місті і
                наявності шкіл у цих місцях. До уваги також бралися показники успішності шкіл за результатами ЗНО, які
                географічно знаходяться близько одна від одної.
                <br />
                У другому проекті студенти проаналізували різні проблемні аспекти у роботі громадського транспорту
                м.Львова. Серед них: аналіз оптимальності розташування зупинок громадського транспорту; повторюваності
                маршрутів громадського транспорту; аналіз мобільності містян на основі даних стільникового оператора
                зв’язку тощо.
                <br />
                Результати обох досліджень були передані до відповідних структур ЛМР для подальшої роботи.
                <br />
                Курс “Data Science in real life” продовжується вже в новому році і на даний момент студент-магістри
                працюють з даними Prozorro.
              </p>
            ) : null}
          </div>
        </section>
      </Container>
    </>
  );
};

export default SocialProjectsPage;

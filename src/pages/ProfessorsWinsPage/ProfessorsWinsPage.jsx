import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { useState } from 'react';

import styles from './ProfessorWinsPage.module.css';

import img1 from '../../imgs/profWins/prof-wins-01.jpg';
import img2 from '../../imgs/profWins/prof-wins-02.jpg';
import img3 from '../../imgs/profWins/prof-wins-03.jpg';
import img4 from '../../imgs/profWins/prof-wins-04.jpg';
import img5 from '../../imgs/profWins/prof-wins-05.jpg';
import img6 from '../../imgs/profWins/prof-wins-06.jpg';
import img7 from '../../imgs/profWins/prof-wins-07.jpg';

const ProfessorsWinsPage = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  return (
    <>
      <AppBar name="Успіхи викладачів" />
      <Container>
        <section className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img2} alt="Oles Dobosevich" />
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
                26 червня під час випускних урочистостей УКУ ректор о. Богдан Прах вручив чотирьом викладачам ректорську
                премію за виняткові досягнення у науковій праці. Серед лауреатів був також{' '}
                <a href="https://apps.ucu.edu.ua/oles-dobosevych/" className={styles.link}>
                  Олесь Добосевич
                </a>
                , який отримав свою нагороду за розбудову та наукові успіхи{' '}
                <a href="https://apps.ucu.edu.ua/mllab/" className={styles.link}>
                  Лабораторії машинного навчання УКУ(MLLab)
                </a>
                .<br />
                «У 2018 році ми з колегами стартували Лабораторію машинного навчання УКУ, яка є місцем для розвитку
                наукового потенціалу Факультету прикладних наук. Тут ми продовжуємо працювати над науковими розробками,
                які зокрема стосуються того як передбачити інфаркт, оцифрування кирилиці, каталогізації старих світлин.
                Крім того, наш дослідницький центр має налагоджені зв’язки з індустрією та науковими колами. Тому
                ректорську премію приймаю як нагороду, котра для мене є свідченням перших результатів цієї лабораторії і
                підтвердженням того, що робота, яку ми там проводимо, є важливою» - коментує свою нагороду Олесь
                Добосевич.
                <br />
                <a
                  href="https://ucu.edu.ua/news/chetvero-vykladachiv-uku-staly-laureatamy-rektorskoyi-premiyi-2021-za-naukovi-doslidzhennya/"
                  className={styles.link}
                >
                  Детальніше
                </a>
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img className={styles.image} src={img1} alt="Juliya Kleban" />
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
                Протягом осіннього семестру 2021-2022 н.р керівниця бакалаврської програми “ІТ та бізнес-аналітика”{' '}
                <a href="https://apps.ucu.edu.ua/yulia-kleban/" className={styles.link}>
                  Юлія Клебан
                </a>{' '}
                перебуває на дослідницькому стажуванні в США, м.Бостон за за програмою{' '}
                <a
                  href="https://fulbright.org.ua/uk/fulbright-research-and-development-program/"
                  className={styles.link}
                >
                  Fulbright Ukraine Research and development program
                </a>
                . Стажування відбувається на базі Бізнес-школи Університету, де зосереджені основні програми Business
                Analytics та Data Science, які є у фокусі професійних інтересів Юлії. Впродовж 6 місяців Юлія працює над
                темою застосування Project-Based Learning підходу до навчання та викладання для STEAM освітніх програм.
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img4} alt="Yaroslav Prytula" />
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
                У травні 2021 р. Вчена рада УКУ шляхом таємного голосування підтримала продовження контракту на наступне
                5-річчя декана Факультету прикладних наук Ярослава Притули. Коментуючи свою попередню каденцію, Ярослав
                Притула наголосив на трьох головних здобутках факультету за минулі п’ять років. Перше - це формування
                професійної, дієвої та дружньої команди факультету. Друге - наші студенти та випускники, які головним
                чином формують порядок денний розвитку факультету на наступні десятиліття. І третє - наша наукова робота
                у Лабораторії машинного навчання, яка є носієм знань та вмінь, які знаходяться на вістрі науки та
                сучасних технологічних розробок.
                <br />
                Окрім цього, вже у вересні цього року Ярослав Притула був переобраний до Сенату УКУ - колегіального
                органу управління та контролю Університету, який визначає основні засади і напрями його розвитку та
                приймає рішення з найважливіших питань його діяльності.
                <br />
                <a
                  href="https://ucu.edu.ua/news/yaroslav-prytula-nasha-formula-uspihu-zlagodzhena-robota-komandy-motyvovani-studenty-ta-rozvytok-naukovogo-vektoru-fakultetu/?fbclid=IwAR2gK9RBHKUMEEuWxWLnIrv-QHGhQq_3i3zMg89zSumATHGVTLGyneg6p7A"
                  className={styles.link}
                >
                  Детальніше
                </a>
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img3} alt="Rostislav Hryniv" />
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
                У 2020 році{' '}
                <a href="https://apps.ucu.edu.ua/rostyslav-hryniv/" className={styles.link}>
                  Ростислав Гринів
                </a>
                , професор кафедри прикладної математики та статистики УКУ отримав відзнаку “Викладач року” від нашого
                Університету. Кандидатів на відзнаку можуть висувати представники спільноти університету: викладачі,
                працівники, студенти, аспіранти та випускники. Така нагорода є доброю нагодою подякувати викладачам за
                їхню майстерну, натхненну, систематичну і багатопланову роботу зі студентами як в аудиторії, так поза
                нею. Цією відзнакою академічна спільнота та студентство УКУ наголошують на важливості належної оцінки
                якісного викладання в університеті та поширенні успішних викладацьких практик.
                <br />
                <a
                  href="https://ucu.edu.ua/news/vykladachi-roku-uku-2020-vrazhennya-ta-porady-vid-trijtsi-peremozhtsiv/"
                  className={styles.link}
                >
                  Детальніше
                </a>
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img7} alt="Yaroslav Prytula" />
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
                Протягом 2019-2020 рр., команда розробників, до якої також вховходив Сергій Міськів, розробили мобільну
                аплікацію{' '}
                <a
                  href="https://www.facebook.com/dzhuraapp/?__cft__%5B0%5D=AZXqmeXfO6rVnQJSRuy-J0Fj27Xu3f7QZMa5a4MsL9MZpNz9k7MoMxXTuBbehpT9srOHiJOQCzN4cxrIOY6Nv3v7I5NCMmUYKmf3bEieIUEyZrkk9l4imZ3KbZnE-SWdGVur6bkJDMMExCEII7mVx2u0s5hbIJNQikXghcc0baPNjKBeuez8MqF-YrmB3MiCEXo&__tn__=kK-R"
                  className={styles.link}
                >
                  Джура
                </a>{' '}
                для військовослужбовців строкової служби.
                <br />
                "Джура” виконує низку доволі простих, але корисних функцій:
                <ul>
                  <li>таймер служби, який показує користувачу кількість часу до закінчення служби;</li>
                  <li>спільний чат, який моніториться адмінами;</li>
                  <li>новини пов’язані з Армією та дотичними сегментами Української держави;</li>
                  <li>
                    велика кількість довідників від Статуту до розрізнювальних знаків та пагонів різних родів військ;
                  </li>
                </ul>
                У проекті, Сергій Міськів виконував роль Team Leader на iOS стороні додатку. Сергій створив першочергову
                архітектуру додатку та загальні правила написання коду, а також підтверджує всі pull requests та
                ініціативні зміни до кодової бази від студентів. Значна частина роботи над додатком була виконана під
                час навчального курсу “Розробка під iOS”, де до роботи над проектом були активно залучені наші студенти:
                Євгеній Оренчук, Андрій Коваль, Олег Тижай, Олег Микитин та Олександр Потапов.
                <br />
                <a href="https://www.facebook.com/csatucu/posts/2565782233715532" className={styles.link}>
                  Детальніше
                </a>
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img5} alt="two men" />
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
                Програма викладацьких стипендій в УКУ діє завдяки підтримці жертводавців, які всіляко сприяють не лише
                забезпеченню гідної заробітної плати найкращим викладачам, а й надають додаткові ресурси для їхнього
                професійного розвитку. У 2020 році такі стипендію від родини Любінців отримав{' '}
                <a
                  className={styles.link}
                  href="https://www.youtube.com/watch?v=L0Rw7dU6k6o&ab_channel=%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%D0%9A%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9%D0%A3%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82"
                >
                  Степан Фединяк
                </a>
                , заступник дакана факультету прикладних наук. Стипендію від Тараса Кицмея отримав{' '}
                <a
                  className={styles.link}
                  href="https://www.youtube.com/watch?v=ydnlhv5gCdQ&t=29s&ab_channel=%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%D0%9A%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9%D0%A3%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82"
                >
                  Андрій Романюк
                </a>{' '}
                , доцент кафедри комп'ютерних наук та інформаційних технологій УКУ.
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={img6} alt="two men" />
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
                А вже у 2021 році викладацькі стипендії від родини Любінців та від Тараса Кицмея отримали Олесь
                Добосевич, заступник декана факультету прикладних наук УКУ і Тарас Фірман, викладач курсів “Машинне
                навчання” і “Прогнозування та досілдження операцій”.
                <br />
                Ярослав Любінець є співзасновником та головою ради директорів компанії SoftServe, разом із дружиною
                багато років підтримують наш університет. Тарас Кицмей - співвласник і член ради директорів компанії
                SoftServe.
              </p>
            ) : null}
          </div>
        </section>
      </Container>
    </>
  );
};

export default ProfessorsWinsPage;

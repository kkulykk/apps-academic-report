import { useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import styles from './GraduatesPage.module.css';

import grad1ImgMedium from '../../imgs/graduates/Vypusk-FPN-004-tablet.jpg';
import grad1ImgBig from '../../imgs/graduates/Vypusk-FPN-004-desktop.jpg';
import gradImgMedium from '../../imgs/graduates/Vypusk-FPN-tablet.jpg';
import gradImgMBig from '../../imgs/graduates/Vypusk-FPN-desktop.jpg';

const GraduatesPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.graduates.title')} />
      <Container>
        <section className={styles.section}>
          <div className={styles.imgWrapper}>
            <picture>
              <source srcSet={gradImgMBig} media="(min-width:768px)" />
              <img src={gradImgMedium} alt="happy students" />
            </picture>
          </div>

          <p className={styles.description}>
            З року в рік спільнота випускників APPS UCU росте як кількісно так і якісно і ми радіємо, що вже сьогодні
            маємо невелику, але міцну спільноту випускників факультету, які готові долучатися до творення якісної ІТ
            освіти в УКУ, Україні та світі. У нас є особлива причину для радості, оскільки цього року ми мали перший
            випуск бакалаврської програми “ІТ та бізнес-аналітика” - свої дипломи отримали 18 щасливців. З не меншими
            емоціями радіємо за 37 випускників бакалаврської програми “Комп’ютерні науки”. Своє навчання успішно
            завершили також 14 випускників магістерської програми “Науки про дані”.
          </p>
          <div className={styles.imgWrapper}>
            <picture>
              <source srcSet={grad1ImgBig} media="(min-width:768px)" />
              <img src={grad1ImgMedium} className={styles.img} alt="APPS UCU ALUMNI" />
            </picture>
          </div>
          <p className={styles.description}>
            Також ми радіємо, що наші випускники все активніше та частіше долучаються до різноманітних проектів на
            факультеті: Дмитро Кушнір у цьому семестрі став асистентом на курсі “Принципи організації комп’ютера”; а
            Марія Добко перейшла на повну зайнятість у ML Lab, де розвиватиме проекти пов'язані з медициною, зокрема з
            медичними зображеннями. Олег Смолкін активно долучається до викладання курсу "Основи штучного інтелекту",
            Руслан Парцей - викладає курс "Бази даних", Костя Лєпешов і Таня Мартинюк долучаються до викладання курсу
            "Комп’ютерне бачення". Наталя Параняк та Матвій Ковтун працюють асистентами на курсі “Основи програмування”,
            а Андрій Присяжник на “Прогнозуванні та дослідженні операцій”. Наталя Новосад викладає курс зі "Вступу до
            статистики" на новій сертифікаційній програмі "Introduction to Data Analytics". Юрій Камінський викладає на
            магістерській програмі курс "Python Programming for Data Scientists" - Юрій Прийма та Дзвінка Яріш долучені
            на викладанні курсу "Deep Reinforcement Learning".
          </p>
        </section>
      </Container>
    </>
  );
};

export default GraduatesPage;

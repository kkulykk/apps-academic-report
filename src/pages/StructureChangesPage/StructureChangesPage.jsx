import { useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import imgSmall from '../../imgs/mobile/structure-changes-mob.jpg';
import imgBig from '../../imgs/desktop/structure-changes-desk.jpg';

import styles from './StructureChangesPage.module.css';

const StructureChangesPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.structuralChanges.title')} />
      <Container>
        <section className={styles.section}>
          <div className={styles.imgWrapper}>
            <picture>
              <source srcSet={imgBig} media="(min-width:768px)" />
              <img src={imgSmall} className={styles.img} alt="Ukraine map" />
            </picture>
          </div>

          <p className={styles.text}>
            <p>Потягом цього навчального року відбулося декілька змін у структурі нашого факультету.</p>
            <p>
              Найперше, ділимося приємною новиною про переобрання нашого&nbsp;
              <a className={styles.link} href="https://apps.ucu.edu.ua/yaroslav-prytula/">
                Ярослава Притули
              </a>
              &nbsp; до{' '}
              <a className={styles.link} href="https://ucu.edu.ua/about/administration/senate/">
                Сенату УКУ
              </a>{' '}
              - колегіального органу управління та контролю Університету, який визначає основні засади і напрями його
              розвитку та приймає рішення з найважливіших питань його діяльності.
            </p>
            <p>
              З червня 2021 р.{' '}
              <a className={styles.link} href="https://apps.ucu.edu.ua/oleksii-molchanovskyi/">
                Олексій Молчановський
              </a>
              &nbsp; став заступником декана APPS UCU з інновацій. На новоствореній посаді Олексій буде розвивати та
              підтримувати дух інновацій на факультеті, інтегровувати успішні освітні практики у сталі програми
              факультету, аналізувати ринок праці, розширювати мережу партнерств, а також залучатись до впровадження
              трансферу технологій.
            </p>

            <p>
              Маємо також зміни на наших бакалаврських програмах та{' '}
              <a className={styles.link} href="https://apps.ucu.edu.ua/data-science/">
                магістерській програмі з Data Science
              </a>{' '}
              -
              <a className={styles.link} href="https://apps.ucu.edu.ua/ruslan-partsey/">
                Руслан Парцей
              </a>
              , працівник{' '}
              <a className={styles.link} href="https://apps.ucu.edu.ua/mllab/">
                ML Lab UCU
              </a>{' '}
              та випускник програми з DS тепер також допомагатиме координувати нашу магістерську програму;&nbsp;
              <a className={styles.link} href="https://www.facebook.com/hrynykha.andriy">
                Андрій Гриниха
              </a>
              , окрім комунікаційного напрямку на факультеті тепер також координуватиме програму з CS, а{' '}
              <a className={styles.link} href="https://www.facebook.com/halinka.prystash">
                Галина Кирилейза
              </a>{' '}
              з IT&BA.&nbsp;
              <a className={styles.link} href="https://www.facebook.com/khrystyna.yakymets.9">
                Христина Якимець
              </a>{' '}
              підтримуватиме роботу деканату факультету та, зокрема, розвиватиме напрямок співпраці з нашими APPS UCU
              Alumni.
            </p>
          </p>
        </section>
      </Container>
    </>
  );
};

export default StructureChangesPage;

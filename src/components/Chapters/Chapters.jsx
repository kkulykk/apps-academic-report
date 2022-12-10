import { Link } from 'react-router-dom';

import Container from '../Container';

import styles from './Chapters.module.css';

const Chapters = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.chapters}>
      <Container>
        <nav className={styles.itemsWrapper}>
          <Link onClick={scrollToTop} className={styles.item} to="/who-we-are">
            Хто ми?
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/admission-campaign-results">
            Результати вступної кампанії
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/strategy-goals">
            Стратегічні цілі факультету
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/structure-changes">
            Структурні зміни
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/students-wins">
            Студентські перемоги
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/professors-wins">
            Успіхи викладачів
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/social-projects">
            Суспільно-орієнтовані проекти
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/certificate-programs">
            Сертифікаційні програми
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/graduates">
            Випускники
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/science">
            Наука
          </Link>
          <Link onClick={scrollToTop} className={styles.item} to="/ratings">
            Рейтинги
          </Link>
        </nav>
      </Container>
    </section>
  );
};

export default Chapters;

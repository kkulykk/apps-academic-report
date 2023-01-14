import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import AppBar from '../../components/AppBar/AppBar';
import { getLanguageImage } from '../../utils/services';

import styles from './StrategyPage.module.css';

const images = {
  desktop: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2FstrategicObjectivesEN.svg?alt=media&token=defc9b43-79f4-4e7b-8050-b045397b893a',
    // TODO: Add UK image
    uk: ''
  },
  mobile: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2FstrategicObjectivesMobileEN.svg?alt=media&token=151b1fba-712e-4e80-bdb7-3b22e400a7d6',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fstrategic-objectives%2FstrategicObjectivesMobileUK.svg?alt=media&token=c3d2a110-ce3d-454d-8a37-c23690268b34'
  }
};

const StrategyPage = () => {
  const [t] = useTranslation();
  const isMobile = useMediaQuery('(max-width: 950px)');

  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = (event) => setMatches(event.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
  }

  return (
    <>
      <AppBar name={t('pages.strategyGoals2025.title')} />
      <img
        className={styles.image}
        src={isMobile ? getLanguageImage(images.mobile) : getLanguageImage(images.desktop)}
        alt="people connections"
      />
    </>
  );
};

export default StrategyPage;

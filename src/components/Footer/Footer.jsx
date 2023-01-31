import { useTranslation } from 'react-i18next';

import Container from '../Container';

import styles from './Footer.module.css';

import ucuAndAppsLogo from '../../imgs/footer/ucuAppsLogo.svg';
import homeIcon from '../../imgs/footer/homeIcon.svg';
import emailIcon from '../../imgs/footer/mailIcon.svg';
import globeIcon from '../../imgs/footer/globeIcon.svg';
import phoneIcon from '../../imgs/footer/phoneIcon.svg';
import locationIcon from '../../imgs/footer/locationIcon.svg';
import instLogo from '../../imgs/footer/instagramIcon.svg';
import yotubeLogo from '../../imgs/footer/youtubeIcon.svg';
import fbLogo from '../../imgs/footer/facebookIcon.svg';
import linkedinLogo from '../../imgs/footer/linkedinIcon.svg';

const Footer = () => {
  const [t] = useTranslation();
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <img src={ucuAndAppsLogo} alt="logo" />
          <nav className={styles.socialWrapper}>
            <a className={styles.link} href="https://www.instagram.com/ucu_apps/" target="_blank" rel="noreferrer">
              <img src={instLogo} alt="Instagram logo" />
            </a>

            <a
              className={styles.link}
              href="https://www.youtube.com/channel/UCAXm37jEuwO_HicFxSs7b0g"
              target="_blank"
              rel="noreferrer"
            >
              <img src={yotubeLogo} alt="YouTube logo" />
            </a>

            <a className={styles.link} href="https://www.facebook.com/csatucu" target="_blank" rel="noreferrer">
              <img src={fbLogo} alt="Facebook logo" />
            </a>

            <a
              className={styles.link}
              href="https://www.linkedin.com/company/ucu-apps/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="Linkedin logo" />
            </a>
          </nav>
          <div className={styles.info}>
            <div className={styles.location}>
              <div className={styles.footerItem}>
                <img className={styles.icon} src={homeIcon} alt="location icon" />
                <p className={styles.text}>{t('footer.university')}</p>
              </div>
              <div className={styles.footerItem}>
                <img className={styles.icon} src={locationIcon} alt="location icon" />
                <p className={styles.text}>{t('footer.address')}</p>
              </div>
              <div className={styles.footerItem}>
                <a href="https://apps-ucu-report.netlify.app/" target="_blank" rel="noreferrer">
                  <p className={styles.text}>{t('footer.academicReport20202021')}</p>
                </a>
              </div>
            </div>
            <div className={styles.location}>
              <div className={styles.footerItem}>
                <img className={styles.icon} src={globeIcon} alt="location icon" />
                <p className={styles.text}>apps.ucu.edu.ua</p>
              </div>
              <div className={styles.footerItem}>
                <img className={styles.icon} src={emailIcon} alt="location icon" />
                <p className={styles.text}>apps@ucu.edu.ua</p>
              </div>
              <div className={styles.footerItem}>
                <img className={styles.icon} src={phoneIcon} alt="location icon" />
                <p className={styles.text}>(032)240 99 40, #3604</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

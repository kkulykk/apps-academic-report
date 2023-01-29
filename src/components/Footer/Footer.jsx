import Container from '../Container';

import styles from './Footer.module.css';

import instLogo from '../../imgs/footer/instagramIcon.svg';
import yotubeLogo from '../../imgs/footer/youtubeIcon.svg';
import fbLogo from '../../imgs/footer/facebookIcon.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <nav className={styles.socialWrapper}>
          <a className={styles.link} href="https://www.instagram.com/ucu_apps/">
            <img src={instLogo} alt="logo" />
          </a>

          <a className={styles.link} href="https://www.youtube.com/channel/UCAXm37jEuwO_HicFxSs7b0g">
            <img src={yotubeLogo} alt="logo" />
          </a>

          <a className={styles.link} href="https://www.facebook.com/csatucu">
            <img src={fbLogo} alt="logo" />
          </a>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;

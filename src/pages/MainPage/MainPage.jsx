import Header from '../../components/Header';
import Introduction from '../../components/Introduction';
import Partners from '../../components/Partners/Partners';
import AppBar from '../../components/AppBar';

import styles from './MainPage.module.css';

const MainPage = () => (
  <div className={styles.main}>
    <AppBar />
    <Header />
    <Introduction />
    <Partners />
  </div>
);

export default MainPage;

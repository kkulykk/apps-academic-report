import Zoom from 'react-medium-image-zoom';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './StructureChangesPage.module.css';
import 'react-medium-image-zoom/dist/styles.css';

import gradient from '../../imgs/gradient4.svg';


const images = {
  en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fnew-members%2FnewMembersEN.png?alt=media&token=1402510e-4ac0-436f-8031-8ec52e0848cc',
  uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fnew-members%2FnewMembersUK.png?alt=media&token=38b20627-1853-429d-9bdd-15d2a6a38c04'
};

const StructureChangesPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.structuralChanges.title')} />
      <Container>
        <section className={styles.section}>
          <div className={styles.imgWrapper}>
            <Zoom>
              <img src={getLanguageImage(images)} alt="New members" />
            </Zoom>
          </div>

          <p className={styles.text}>
            <Trans
              i18nKey={'pages.structuralChanges.description'}
              components={[
                <br />,
                <span
                  className={styles.link}
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/csatucu/posts/pfbid02Bf64zVWJYtyLC8SkhS1SKB6JtYdqvc62Cmm2MRZsoB96RtayrVWSXrBUQ4iMS4aml',
                      '_blank'
                    );
                  }}
                />,
                <span
                  className={styles.link}
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/csatucu/posts/pfbid0TZUfdStxzWBunvYzUVPSgDYeuVLyk6CZCAhKiTzNfiPwS9DXveDDzJ7XUUkraEvel',
                      '_blank'
                    );
                  }}
                />,
                <span
                  className={styles.link}
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/csatucu/posts/pfbid02eASQjSujD186Gg24pf2eXhJmFVxkNJDHnqZoQM9XFG6H9vVkyEEqvtaV2UMPBnpQl',
                      '_blank'
                    );
                  }}
                />,
                <span
                  className={styles.link}
                  onClick={() => {
                    window.open(
                      'https://www.facebook.com/csatucu/posts/pfbid0qRquXEPV5URjCqe3VQPqmsCazTUURwNHA9yinXwghHdBSbTMnZiER2Vr4jwnC28Bl',
                      '_blank'
                    );
                  }}
                />,
                <span
                  className={styles.link}
                  onClick={() => {
                    window.open('https://www.linkedin.com/in/vadim-ermolayev/', '_blank');
                  }}
                />,
                <span
                  className={styles.link}
                  onClick={() => {
                    window.open('https://apps.ucu.edu.ua/en/ms-amlv-2023/', '_blank');
                  }}
                />,
                <span
                  className={styles.link}
                  onClick={() => {
                    window.open('https://www.linkedin.com/in/darynapetrenko/', '_blank');
                  }}
                />
              ]}
            />
          </p>
        </section>
        <div className={styles.gradient}>
          <img src={gradient} alt="" />
        </div>
      </Container>
    </>
  );
};

export default StructureChangesPage;

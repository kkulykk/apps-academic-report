import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './WarStoriesPage.module.css';

const images = {
  AndriyKhoma: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FAndriyKhomaUK.png?alt=media&token=7596099b-af9b-47c7-a0cb-faa5d3c4c0f3',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FAndriyKhomaEN.png?alt=media&token=fcebb738-65a5-4395-9c14-3bdb1fd6df05'
  },
  YuriyOstapchuk: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FYuriyOstapchukUK.png?alt=media&token=f1d6fddd-c86b-48d4-a9fe-7830f57f32dc',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FYuriyOstapchukEN.png?alt=media&token=93194acf-3b4d-49c8-98a1-4d80c61fa6cb'
  },
  AndriyRomanyuk: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FAndriyRomanyukUK.png?alt=media&token=c3e4688c-bffb-448f-8892-72c6bc70cf24',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FAndriyRomanyukEN.png?alt=media&token=6544a0e9-afa3-4efb-b9c8-0648c1920c19'
  }
};

const WarStoriesPage = () => {
  const [t] = useTranslation();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <AppBar name={t('pages.warStories.title')} />
      <Container>
        <section className={styles.section}>
          <p className={styles.text}>{t('pages.warStories.subtitle')}</p>
        </section>
        <section className={styles.bannerSection}>
          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.AndriyRomanyuk)} alt={'Andriy Romanyuk'} />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen1(!open1);
                }}
              >
                {open1 ? (
                  <span className="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span className="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open1 ? (
              <p className={styles.description}>
                <Trans
                  i18nKey={'pages.warStories.andriyRomanyuk'}
                  components={[
                    <br />,
                    <strong />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://tvoemisto.tv/exclusive/ya_mig_zalyshatysya_doma_ale_ya_tut__vykladach_uku_yakyy_pishov_na_front_135154.html',
                          '_blank'
                        );
                      }}
                    />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://tvoemisto.tv/exclusive/ya_mig_zalyshatysya_doma_ale_ya_tut__vykladach_uku_yakyy_pishov_na_front_135154.html',
                          '_blank'
                        );
                      }}
                    />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.AndriyKhoma)} alt={'Andriy Khoma'} />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen2(!open2);
                }}
              >
                {open2 ? (
                  <span className="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span className="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open2 ? (
              <p className={styles.description}>
                <Trans
                  i18nKey={'pages.warStories.andriyKhoma'}
                  components={[
                    <br />,
                    <strong />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://tvoemisto.tv/news/zaraz_my_bilsh_organizovani_i_navcheni_yak_rozrobnyk_igor_perekvalifikuvatysya_u_viyskovogo_132671.html?fbclid=IwAR1ccC5Wapa6or34SY8bV4edfQGkBZoozr-NHPB5noj_EkaZ8H38FotE6hk',
                          '_blank'
                        );
                      }}
                    />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.YuriyOstapchuk)} alt={'Yuriy Ostapchuk'} />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen3(!open3);
                }}
              >
                {open3 ? (
                  <span className="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span className="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open3 ? (
              <p className={styles.description}>
                <Trans i18nKey={'pages.warStories.yuriyOstapchuk'} components={[<br />, <strong />]} />
              </p>
            ) : null}
          </div>
        </section>
      </Container>
    </>
  );
};

export default WarStoriesPage;

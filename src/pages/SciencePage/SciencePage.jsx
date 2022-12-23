import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './SciencePage.module.css';

const images = {
  cvpr: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2Fcvpr.png?alt=media&token=9637f82f-d635-428a-9c09-dcc686ef23ef',
  eccv: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2Feccv.png?alt=media&token=4618dde5-6ec4-47b5-82ba-9b6b561844fd',
  iecsit:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2Fiecsit.png?alt=media&token=6e409dc5-5481-47c3-8a5c-625278cad638',
  contribuling:
    'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2Fcontribuling.png?alt=media&token=cdd5980b-47ea-4230-b6d3-3c95788f12d4',
  kyiv: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FkyivEN.png?alt=media&token=6522a727-315a-47f9-9b70-6e599a7921fe',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FkyivUK.png?alt=media&token=1708199e-2548-4307-bfa8-5fdfdcd45af8'
  },
  nyu: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FnyuEN.png?alt=media&token=c5e2f550-42ef-416c-9a55-30c7545cd212',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FnyuUK.png?alt=media&token=ce82e556-f62b-4124-a2fa-48e3059dc47d'
  },
  neuro: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FneuroEN.png?alt=media&token=0c1f893a-bff3-4481-a293-d14b39e3257e',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FneuroUK.png?alt=media&token=46a72fdb-98da-42e8-aa5c-65095d2c9187'
  },
  toronto: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FtorontoEN.png?alt=media&token=3122681a-0045-4b6e-8c77-d392b4fb886f',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FtorontoUK.png?alt=media&token=8b197e09-ad06-4cc7-b420-15ea66e2479e'
  },
  google: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FgoogleEN.png?alt=media&token=5306a3ee-d1e5-4f9a-8146-42a6e34871a7',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FgoogleUK.png?alt=media&token=9b76511d-8cca-4906-bb1b-0763d1864cf4'
  },
  wien: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FwienEN.png?alt=media&token=18b78fd0-9e44-4944-aeaa-fc4f8ba61ada',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FwienUK.png?alt=media&token=cb88a402-7b9d-47c0-a340-74e1a5fdd473'
  },
  datax: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FdataxEN.png?alt=media&token=a3308975-20ef-46c6-b692-bd53a15ae2a9',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FdataxUK.png?alt=media&token=913f2aa2-a6e9-4e65-a8a9-0084d8947530'
  },
  daschool: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FdaschoolEN.png?alt=media&token=c0c884d6-b2df-4c59-8e55-126ed9fcf044',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FdaschoolUK.png?alt=media&token=db765bd7-8c91-4d9c-9e24-4a7832678be4'
  },
  aihouse: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FaihouseEN.png?alt=media&token=4cf5ad1e-5fa4-4633-a5c3-9efca01649b8',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FaihouseUK.png?alt=media&token=648aa427-7d2f-4643-bb8d-9dce77420929'
  },
  gamejam: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FgamejamEN.png?alt=media&token=ef329262-5f40-4398-be9c-a299cf5770a8',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FgamejamUK.png?alt=media&token=5c85be5f-ade4-43ea-9ae1-87d40a463386'
  }
};

const SciencePage = () => {
  const [t] = useTranslation();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);

  return (
    <>
      <AppBar name={t('pages.science.title')} />
      <Container>
        <section className={styles.section}>
          <h3 className={styles.heading}>{t('pages.science.conferencesTitle')}</h3>

          <div className={styles.wrapperPart}>
            <div className={styles.imgWrapper}>
              <img src={images.cvpr} alt={t('pages.science.article1')} />
            </div>
            <p className={styles.description} style={{ marginTop: '40px' }}>
              <Trans
                i18nKey={'pages.science.article1Description'}
                components={[
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open('https://www.facebook.com/CVPR2022/', '_blank');
                    }}
                  />,
                  <br />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open('https://arxiv.org/abs/2206.00997', '_blank');
                    }}
                  />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open(
                        'https://www.facebook.com/Georgia-Institute-of-Technology-233298973800060/?__cft__[0]=AZVvV9RSJi19svgs7atSyLbM5K22jSxPV5Xv2biZDM28QqsvCrvfvA__8kPPRyvJ6ldjN01vdx6SPJfHJAxt5f1WWWgiRpBlK5NVwRY9aESKizmNg3Y6HtBLZHverNELsN26_kQLshIKHIgfUDiVmXefkFUuYuv248UGVP7bBPFxuoPAViFIYaDiy9aOIeibaYIB8kMqPds4YtFCIkeB736_&__tn__=kK-R',
                        '_blank'
                      );
                    }}
                  />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open(
                        'https://www.facebook.com/MetaAI/?__cft__[0]=AZVvV9RSJi19svgs7atSyLbM5K22jSxPV5Xv2biZDM28QqsvCrvfvA__8kPPRyvJ6ldjN01vdx6SPJfHJAxt5f1WWWgiRpBlK5NVwRY9aESKizmNg3Y6HtBLZHverNELsN26_kQLshIKHIgfUDiVmXefkFUuYuv248UGVP7bBPFxuoPAViFIYaDiy9aOIeibaYIB8kMqPds4YtFCIkeB736_&__tn__=kK-R',
                        '_blank'
                      );
                    }}
                  />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open('https://arxiv.org/abs/2206.00997', '_blank');
                    }}
                  />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open('https://arxiv.org/abs/2204.03688', '_blank');
                    }}
                  />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open('https://arxiv.org/abs/2204.03688', '_blank');
                    }}
                  />
                ]}
              />
            </p>
          </div>

          <div className={styles.wrapperPart}>
            <div className={styles.imgWrapper}>
              <img src={images.eccv} alt={t('pages.science.article2')} />
            </div>
            <p className={styles.description}>
              <Trans
                i18nKey={'pages.science.article2Description'}
                components={[
                  <br />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open(
                        'https://l.facebook.com/l.php?u=https%3A%2F%2Farxiv.org%2Fabs%2F2112.07957%3Ffbclid%3DIwAR2-UXy74EzEqbbYN3Z3QHH33NjXkLCQiETkq56J3n3tOM9-aUerrV7YO88&h=AT3VzsizadNr4cuR-OVFN7dlVh5nDjTiK0vnMDpjRRkzslTUY4DFB5MP_mCB7oiTqNq2f8J2mGr2HwknrWwYeOXDRVKuwN4ZOA6wOWPCwoZ9Qu634JsBfUdNLuZgQoGo_1DJ&__tn__=-UK-R&c[0]=AT0Fs7vJnHRLYaNW2OdiKzVzhBg_9wPFvptFfutrfwIngvuhtN0z0Pko3HaWsCWNCjK4hSza5xr--9BOALC7z2a4dj3fsAKkXyRBjeY-ocsCTKgkHRMAXuPBxLlQOZxNuUjVSRqglkGk8ck3AfX9W7AVVdWSAlGQ-riNDw1xAR8wcKZFzmtJbNuMCtKGb1S_WKdxdVEQDNRlpTI4xnesaHQbtBuW_0xO9_4',
                        '_blank'
                      );
                    }}
                  />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open(
                        'https://l.facebook.com/l.php?u=https%3A%2F%2Farxiv.org%2Fabs%2F2112.07957%3Ffbclid%3DIwAR2-UXy74EzEqbbYN3Z3QHH33NjXkLCQiETkq56J3n3tOM9-aUerrV7YO88&h=AT3VzsizadNr4cuR-OVFN7dlVh5nDjTiK0vnMDpjRRkzslTUY4DFB5MP_mCB7oiTqNq2f8J2mGr2HwknrWwYeOXDRVKuwN4ZOA6wOWPCwoZ9Qu634JsBfUdNLuZgQoGo_1DJ&__tn__=-UK-R&c[0]=AT0Fs7vJnHRLYaNW2OdiKzVzhBg_9wPFvptFfutrfwIngvuhtN0z0Pko3HaWsCWNCjK4hSza5xr--9BOALC7z2a4dj3fsAKkXyRBjeY-ocsCTKgkHRMAXuPBxLlQOZxNuUjVSRqglkGk8ck3AfX9W7AVVdWSAlGQ-riNDw1xAR8wcKZFzmtJbNuMCtKGb1S_WKdxdVEQDNRlpTI4xnesaHQbtBuW_0xO9_4',
                        '_blank'
                      );
                    }}
                  />
                ]}
              />
            </p>
          </div>

          <div className={styles.wrapperPart}>
            <div className={styles.imgWrapper}>
              <img src={images.iecsit} alt={t('pages.science.article3')} />
            </div>
            <p className={styles.description} style={{ marginTop: '40px' }}>
              <Trans
                i18nKey={'pages.science.article3Description'}
                components={[
                  <br />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open(
                        'https://www.facebook.com/CSIT.Conference?__cft__[0]=AZWosbYs6i0oOrfS07wwkxdfANRbmawGhEHf1rp_SYWqjGNquOKEHU3jAy_cq7TzHUONnmZc-0DMGN0bBIoubfKpvcPcKOqIw6A0L5jmdJleTmcw7O7m1w1UK163PuDTbLnE383Nj6yy1MtIYZJNmjVIKG6WwGkfqHZpxaJlXi0pI8uDuvtHaRrtfSJ6Z_XVb0k&__tn__=-]K-R',
                        '_blank'
                      );
                    }}
                  />
                ]}
              />
            </p>
          </div>

          <div className={styles.wrapperPart}>
            <div className={styles.imgWrapper}>
              <img src={images.contribuling} alt={t('pages.science.article4')} />
            </div>
            <p className={styles.description}>
              <Trans
                i18nKey={'pages.science.article4Description'}
                components={[
                  <br />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open(
                        'https://www.facebook.com/csatucu/posts/pfbid0CKCAcoTPqLRMCRKavFd9xsNouMRDaNpXUhRZBmZUmaFEL4YPWXkVVNbym3iDBGeKl',
                        '_blank'
                      );
                    }}
                  />
                ]}
              />
            </p>
          </div>

          <div className={styles.wrapperPart}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.kyiv)} alt="ContribuLing 2022" />
            </div>
            <p className={styles.description}>
              <Trans
                i18nKey={'pages.science.article5Description'}
                components={[
                  <br />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open(
                        'https://www.facebook.com/csatucu/posts/pfbid024KdSWWP8bTpcVXuzLP6ejgzN1Pbr338ZxuEmcVmXk9617wP5XHydgYToFk8RTdYyl',
                        '_blank'
                      );
                    }}
                  />
                ]}
              />
            </p>
          </div>

          <h3 className={styles.heading}>{t('pages.science.internships')}</h3>
          <div className={styles.workshops}>
            <div className={styles.wrapper}>
              <div className={styles.imgWrapper}>
                <img src={getLanguageImage(images.nyu)} alt={t('pages.science.internship1')} />
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
                    i18nKey={'pages.science.internship1Description'}
                    components={[
                      <br />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/nyutandon/?__cft__[0]=AZVy2Bi0mNdq-NuTT8sClnuBAV_AEUZkD3OjkhpDoHfVQFt3pSjtvSSVHpu9PnSOD9N05o0KmgnXqi3Yc3yvTY8WqMhMs4NkIWuwxay4Xz54gkANGm1jW0xySoXnHcqV4hBWxtFrTToej9uvDpmq1ZXdIbkDrGdoeWEGGLdUyj4Pq_Ez3sXpxS2sYpONlHvp-TU&__tn__=kK-R',
                            '_blank'
                          );
                        }}
                      />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open('https://arxiv.org/pdf/2208.12700.pdf', '_blank');
                        }}
                      />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open('https://lbynum.github.io/interactive-causal-inference/', '_blank');
                        }}
                      />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://airesponsibly.net/2022/09/26/nyu-r-ai-summer-research-program-2022/?fbclid=IwAR1bsneNE2LfCPajHiSyp85aoeigWQ7xbVbMLU5Fvtqz9wAwtGq7Xa6yDOo',
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
                <img src={getLanguageImage(images.neuro)} alt={t('pages.science.internship2')} />
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
                    i18nKey={'pages.science.internship2Description'}
                    components={[
                      <br />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/wvumountaineers?__cft__[0]=AZUJkHlA1AMLdQm03f2U_MRzUY-O4Qpz18mb7fDFwOI7_uMICM4PehTDpEk30PobhBUigSKechfdNxjW4sORPE9PDEt13dzdGVAbhF49J0aI_1ecjQb7yTgWFx-roNnmhJ-rXFanzLuG98D0Ka3v2BzNihn8wgcFzusGCa2A7-DEGrCchh-3LvJeLPKISOBou6M&__tn__=-]K-R',
                            '_blank'
                          );
                        }}
                      />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/ucucsds?__cft__[0]=AZUJkHlA1AMLdQm03f2U_MRzUY-O4Qpz18mb7fDFwOI7_uMICM4PehTDpEk30PobhBUigSKechfdNxjW4sORPE9PDEt13dzdGVAbhF49J0aI_1ecjQb7yTgWFx-roNnmhJ-rXFanzLuG98D0Ka3v2BzNihn8wgcFzusGCa2A7-DEGrCchh-3LvJeLPKISOBou6M&__tn__=-]K-R',
                            '_blank'
                          );
                        }}
                      />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/csatucu/posts/pfbid02rnuKwGmEqGTPxY1bNtahx2Kd2QzqD2CuVSzYA9XTGqJQyiP2t54xgYXPG1P53ztdl',
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
                <img src={getLanguageImage(images.toronto)} alt={t('pages.science.internship3')} />
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
                  <Trans
                    i18nKey={'pages.science.internship3Description'}
                    components={[
                      <br />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/naukma/?__cft__[0]=AZVttLoKauUuXtedEMpvuFr1yMBKMgM-BG2kZRUO25ObnTwaV-bLk3zJC-lMMH9G-7PQ3xVzNOu9KnKytj_YNnYqW31aozNY7ZDia2_DqNQbibO2p1XFj2vhhMwXeQF-7QbVUTFwUPor5q0UH_d3kVDLCDK8ViQTjfn90fVDBS2_ERLcSGXXWMsL6AfB4gYYCWg&__tn__=kK-R',
                            '_blank'
                          );
                        }}
                      />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/universitytoronto/?__cft__[0]=AZVttLoKauUuXtedEMpvuFr1yMBKMgM-BG2kZRUO25ObnTwaV-bLk3zJC-lMMH9G-7PQ3xVzNOu9KnKytj_YNnYqW31aozNY7ZDia2_DqNQbibO2p1XFj2vhhMwXeQF-7QbVUTFwUPor5q0UH_d3kVDLCDK8ViQTjfn90fVDBS2_ERLcSGXXWMsL6AfB4gYYCWg&__tn__=kK-R',
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
                <img src={getLanguageImage(images.google)} alt={t('pages.science.internship4')} />
                <button
                  className={styles.expandBtn}
                  type="button"
                  onClick={() => {
                    setOpen4(!open4);
                  }}
                >
                  {open4 ? (
                    <span className="material-icons">keyboard_double_arrow_up</span>
                  ) : (
                    <span className="material-icons">keyboard_double_arrow_down</span>
                  )}
                </button>
              </div>
              {open4 ? (
                <p className={styles.description}>
                  <Trans
                    i18nKey={'pages.science.internship4Description'}
                    components={[
                      <br />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://dou.ua/lenta/articles/ukrainians-at-google/?from=slider&fbclid=IwAR3jXEaoiS6HaCKRje6ay8PueQr3dSbGASTprRrlgRB8MAhSpagK8fgSBnw',
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
                <img src={getLanguageImage(images.wien)} alt={t('pages.science.internship5')} />
                <button
                  className={styles.expandBtn}
                  type="button"
                  onClick={() => {
                    setOpen5(!open5);
                  }}
                >
                  {open5 ? (
                    <span className="material-icons">keyboard_double_arrow_up</span>
                  ) : (
                    <span className="material-icons">keyboard_double_arrow_down</span>
                  )}
                </button>
              </div>
              {open5 ? (
                <p className={styles.description}>
                  <Trans
                    i18nKey={'pages.science.internship5Description'}
                    components={[
                      <br />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/fhtechnikumwien?__cft__[0]=AZVzWtAAB-tbURkN3ZJhXlUKDKUEZrv51qcIRyJ70uU6T8WE48uWgczYzsmWhLLNrJ9oSuPM8o5XwYQJYmu0ejRPrDuZqgTR2bP4LqyOs3awhaD7cZ9zolsuFq99S3N-FjgpLoG2L5rKBflaOcrgIJOJk2OZanC3puNkw6RkbYpt9yNKEb4jHPIJcrxnViygw-w&__tn__=-]K-R',
                            '_blank'
                          );
                        }}
                      />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/oead.lemberg/?__cft__[0]=AZVzWtAAB-tbURkN3ZJhXlUKDKUEZrv51qcIRyJ70uU6T8WE48uWgczYzsmWhLLNrJ9oSuPM8o5XwYQJYmu0ejRPrDuZqgTR2bP4LqyOs3awhaD7cZ9zolsuFq99S3N-FjgpLoG2L5rKBflaOcrgIJOJk2OZanC3puNkw6RkbYpt9yNKEb4jHPIJcrxnViygw-w&__tn__=kK-R',
                            '_blank'
                          );
                        }}
                      />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/csatucu/posts/pfbid0N6YPTqW5uun61r61bCFa5BXvS2S8nQw5DmUML34uYm7hVxtsYqLoR5AAz1vtiPucl',
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
                <img src={getLanguageImage(images.datax)} alt={t('pages.science.internship6')} />
                <button
                  className={styles.expandBtn}
                  type="button"
                  onClick={() => {
                    setOpen6(!open6);
                  }}
                >
                  {open6 ? (
                    <span className="material-icons">keyboard_double_arrow_up</span>
                  ) : (
                    <span className="material-icons">keyboard_double_arrow_down</span>
                  )}
                </button>
              </div>
              {open6 ? (
                <p className={styles.description}>
                  <Trans
                    i18nKey={'pages.science.internship6Description'}
                    components={[
                      <br />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://bit.ly/ucu-datax-job-market-2021?fbclid=IwAR35lT-SBVx3wiTyxxc4f3ukQgEN8dQbBw4i8V5qP2PdFTTaO08FKMmDb5E',
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
                <img src={getLanguageImage(images.daschool)} alt={t('pages.science.internship7')} />
                <button
                  className={styles.expandBtn}
                  type="button"
                  onClick={() => {
                    setOpen7(!open7);
                  }}
                >
                  {open7 ? (
                    <span className="material-icons">keyboard_double_arrow_up</span>
                  ) : (
                    <span className="material-icons">keyboard_double_arrow_down</span>
                  )}
                </button>
              </div>
              {open7 ? (
                <p className={styles.description}>
                  <Trans
                    i18nKey={'pages.science.internship7Description'}
                    components={[
                      <br />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/JustAnswer.Ukraine?__cft__[0]=AZUrETbPlG787qMN8Jqyl1JxvCUqH7r1p4lTJTwayRLmIXRRZL9ASTAsF9Mgnw_S8q3nPgoVTUNDocYoepavTK4on1oZUWVGAyyreEwubfsCbRxbQvFPnLhuehrKt4zeWFaPhRSakjhUiqsag-jPV4IiBcXaf7wSCBniV8vKnEBFl9LtTZEI_ueC-vbpGP2aEZU&__tn__=-]K-R',
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
                <img src={getLanguageImage(images.aihouse)} alt={t('pages.science.internship8')} />
                <button
                  className={styles.expandBtn}
                  type="button"
                  onClick={() => {
                    setOpen8(!open8);
                  }}
                >
                  {open8 ? (
                    <span className="material-icons">keyboard_double_arrow_up</span>
                  ) : (
                    <span className="material-icons">keyboard_double_arrow_down</span>
                  )}
                </button>
              </div>
              {open8 ? (
                <p className={styles.description}>
                  <Trans
                    i18nKey={'pages.science.internship8Description'}
                    components={[
                      <br />,
                      <span
                        className={styles.link}
                        onClick={() => {
                          window.open(
                            'https://www.facebook.com/AIHouse.Ukraine/?__cft__[0]=AZUycMtnC_f8lzWUKp8BpsLDr-5dc5IcAlCGF60q0m_tpQMt7tWO8EHIZ2umrjd9kIoFDjX7Erj0uEjYsAdxZA1mfWOePCON3nnT9ehATMTCJ5KLNwGk4zyNv1m9UGSS3YwtQn5HebfXg_-d7zgIZSO53kEhflF-0CtU4KDiYkaUYNfx09_oVuC3X1ypAEJ9hAk&__tn__=kK-R',
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
                <img src={getLanguageImage(images.gamejam)} alt={t('pages.science.internship9')} />
                <button
                  className={styles.expandBtn}
                  type="button"
                  onClick={() => {
                    setOpen9(!open9);
                  }}
                >
                  {open9 ? (
                    <span className="material-icons">keyboard_double_arrow_up</span>
                  ) : (
                    <span className="material-icons">keyboard_double_arrow_down</span>
                  )}
                </button>
              </div>
              {open9 ? (
                <p className={styles.description}>
                  <Trans i18nKey={'pages.science.internship9Description'} components={[<br />]} />
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default SciencePage;

import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './EducationalProjectsPage.module.css';

const images = {
  nyu: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FnyuEN.png?alt=media&token=382795e4-faac-4bcb-82c4-92f67146af23',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FnyuUK.png?alt=media&token=aa36d724-0150-44bd-8d7c-b1477334e27c'
  },
  neuro: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FneuroEN.png?alt=media&token=f2d71b00-c0c8-4010-ae96-b1894e6db09e',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FneuroUK.png?alt=media&token=0917fc95-c8e8-4ac2-9fb1-014868db4d6e'
  },
  toronto: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FtorontoEN.png?alt=media&token=c51bc114-ace5-454d-a33a-79955a98f5eb',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FtorontoUK.png?alt=media&token=a3d7de75-a822-43b5-82d5-8b5c00bfc65a'
  },
  google: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FgoogleEN.png?alt=media&token=454fb26f-c0b2-4f2b-a3e0-8eb9fabda581',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FgoogleUK.png?alt=media&token=3bc49967-4845-4862-828b-2720ead1bb2e'
  },
  wien: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FwienEN.png?alt=media&token=7898f27c-1239-4e49-9fd8-c14fad6d4246',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FwienUK.png?alt=media&token=fc8ab36c-727e-4fac-981c-ee842eb6889f'
  },
  datax: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FdataxEN.png?alt=media&token=fedf6f12-f73d-48bf-9b12-b318ca15a9c3',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FdataxUK.png?alt=media&token=28dda111-e694-48be-b01a-89777ed990b6'
  },
  daschool: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FdaschoolEN.png?alt=media&token=5794a432-e537-49de-ba31-45fd97f92dee',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FdaschoolUK.png?alt=media&token=463d66ed-a057-4869-bd4d-e97fb45e08ee'
  },
  aihouse: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FaihouseEN.png?alt=media&token=60b0cbe3-71ae-4958-85ae-647421496754',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FaihouseUK.png?alt=media&token=918e5837-56ff-4a25-842f-977970594450'
  },
  gamejam: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FgamejamEN.png?alt=media&token=0098476d-3add-41a4-bb1b-ce9a6d3796cc',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FgamejamUK.png?alt=media&token=d234c873-c52c-4383-9ec5-8894d646a80b'
  },
  appsCamp: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FappsCampEN.png?alt=media&token=86087309-4913-46f8-a177-cc1663461bdc',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FappsCampUK.png?alt=media&token=d4f7c665-89be-4b1c-8bbd-af9873e12bed'
  },
  vulyk: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FvulykEN.png?alt=media&token=dbcfd6d0-3057-4590-9e17-466c866eaa08',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FvulykUK.png?alt=media&token=a70ddfc1-ad44-40a1-8368-ef6d0e421683'
  }
};

const EducationalProjectsPage = () => {
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
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);

  return (
    <>
      <AppBar name={t('pages.educationalProjects.title')} />
      <Container>
        <section className={styles.section}>
          <h3 className={styles.heading}>{t('pages.educationalProjects.internships')}</h3>
          <div className={styles.workshops}>
            <div className={styles.wrapper}>
              <div className={styles.imgWrapper}>
                <img src={getLanguageImage(images.nyu)} alt={t('pages.educationalProjects.internship1')} />
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
                    i18nKey={'pages.educationalProjects.internship1Description'}
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
                <img src={getLanguageImage(images.neuro)} alt={t('pages.educationalProjects.internship2')} />
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
                    i18nKey={'pages.educationalProjects.internship2Description'}
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
                <img src={getLanguageImage(images.toronto)} alt={t('pages.educationalProjects.internship3')} />
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
                    i18nKey={'pages.educationalProjects.internship3Description'}
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
                <img src={getLanguageImage(images.google)} alt={t('pages.educationalProjects.internship4')} />
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
                    i18nKey={'pages.educationalProjects.internship4Description'}
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
                <img src={getLanguageImage(images.wien)} alt={t('pages.educationalProjects.internship5')} />
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
                    i18nKey={'pages.educationalProjects.internship5Description'}
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
                <img src={getLanguageImage(images.datax)} alt={t('pages.educationalProjects.internship6')} />
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
                    i18nKey={'pages.educationalProjects.internship6Description'}
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
                <img src={getLanguageImage(images.daschool)} alt={t('pages.educationalProjects.internship7')} />
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
                    i18nKey={'pages.educationalProjects.internship7Description'}
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
                <img src={getLanguageImage(images.aihouse)} alt={t('pages.educationalProjects.internship8')} />
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
                    i18nKey={'pages.educationalProjects.internship8Description'}
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
                <img src={getLanguageImage(images.gamejam)} alt={t('pages.educationalProjects.internship9')} />
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
                  <Trans i18nKey={'pages.educationalProjects.internship9Description'} components={[<br />]} />
                </p>
              ) : null}
            </div>
          </div>
          <h3 className={styles.heading}>{t('pages.educationalProjects.publicOrientedProjectsTitle')}</h3>
          <div className={styles.workshops}>
            <div className={styles.wrapper}>
              <div className={styles.imgWrapper}>
                <img
                  src={getLanguageImage(images.appsCamp)}
                  alt={t('pages.educationalProjects.publicOrientedProjectsTitle')}
                />
                <button
                  className={styles.expandBtn}
                  type="button"
                  onClick={() => {
                    setOpen10(!open10);
                  }}
                >
                  {open10 ? (
                    <span className="material-icons">keyboard_double_arrow_up</span>
                  ) : (
                    <span className="material-icons">keyboard_double_arrow_down</span>
                  )}
                </button>
              </div>
              {open10 ? (
                <p className={styles.description}>
                  <Trans i18nKey={'pages.educationalProjects.project2'} components={[<br />]} />
                </p>
              ) : null}
            </div>

            <div className={styles.wrapper}>
              <div className={styles.imgWrapper}>
                <img
                  src={getLanguageImage(images.vulyk)}
                  alt={t('pages.educationalProjects.publicOrientedProjectsTitle')}
                />
                <button
                  className={styles.expandBtn}
                  type="button"
                  onClick={() => {
                    setOpen11(!open11);
                  }}
                >
                  {open11 ? (
                    <span className="material-icons">keyboard_double_arrow_up</span>
                  ) : (
                    <span className="material-icons">keyboard_double_arrow_down</span>
                  )}
                </button>
              </div>
              {open11 ? (
                <p className={styles.description}>
                  <Trans i18nKey={'pages.educationalProjects.project1'} components={[<br />]} />
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default EducationalProjectsPage;

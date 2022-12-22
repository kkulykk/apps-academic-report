import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import styles from './SciencePage.module.css';

import cvpr from '../../imgs/science/cvpr.png';
import eccv from '../../imgs/science/eccv.png';
import iecsit from '../../imgs/science/iecsit.png';
import contribuling from '../../imgs/science/contribuling.png';
import nyuUK from '../../imgs/science/nyuUK.png';
import neuroEN from '../../imgs/science/neuroEN.png';
import torontoEN from '../../imgs/science/torontoEN.png';
import googleEN from '../../imgs/science/googleEN.png';
import wienEN from '../../imgs/science/wienEN.png';
import dataxEN from '../../imgs/science/dataxEN.png';
import daschoolEN from '../../imgs/science/daschoolEN.png';
import aihouseEN from '../../imgs/science/aihouseEN.png';

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
              <img src={cvpr} alt={t('pages.science.article1')} />
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
              <img src={eccv} alt={t('pages.science.article2')} />
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
              <img src={iecsit} alt={t('pages.science.article3')} />
            </div>
            <p className={styles.description}>
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
              <img src={contribuling} alt={t('pages.science.article4')} />
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
            TODO: add banner
            {/*<div className={styles.imgWrapper}>*/}
            {/*  <img src={contribuling} alt="ContribuLing 2022" />*/}
            {/*</div>*/}
            <h2 className={styles.banersHead}>{t('pages.science.article5')}</h2>
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
                <img src={nyuUK} alt={t('pages.science.internship1')} />
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
                <img src={neuroEN} alt={t('pages.science.internship2')} />
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
                <img src={torontoEN} alt={t('pages.science.internship3')} />
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
                <img src={googleEN} alt={t('pages.science.internship4')} />
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
                <img src={wienEN} alt={t('pages.science.internship5')} />
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
                <img src={dataxEN} alt={t('pages.science.internship6')} />
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
                <img src={daschoolEN} alt={t('pages.science.internship7')} />
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
                <img src={aihouseEN} alt={t('pages.science.internship8')} />
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
                TODO: Add banner
                <img src={daschoolEN} alt={t('pages.science.internship9')} />
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

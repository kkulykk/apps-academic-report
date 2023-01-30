import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './SciencePage.module.css';

const images = {
  rectorsAward: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FrectorsAwardEN.png?alt=media&token=2af82819-4f82-4d4a-b4de-74bb730b269a',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FrectorsAwardUK.png?alt=media&token=55db7ed8-b11c-4451-92ec-d8e94677b30a'
  },
  phd: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FphdEN.png?alt=media&token=c167f0b4-aa13-484a-92cd-1e173a8985bb',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FphdUK.png?alt=media&token=6466ff6e-aab5-49bb-937c-2dc7887cb7c7'
  },
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
  },
  appsCamp: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FappsCampEN.png?alt=media&token=4e3b321b-a7f5-4567-b2d5-ab6f9294805f',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FappsCampUK.png?alt=media&token=3b00f7a9-320b-441d-9290-74672c3f5cb2'
  },
  vulyk: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FvulykEN.png?alt=media&token=fe02ba6d-db00-4e2d-b0b0-9010d7cff986',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fscience%2FvulykUK.png?alt=media&token=f512358a-e250-4244-9a39-6a02ee69d493'
  }
};

const SciencePage = () => {
  const [t] = useTranslation();

  return (
    <>
      <AppBar name={t('pages.science.title')} />
      <Container>
        <section className={styles.section}>
          <h3 className={styles.heading}>{t('pages.science.awardsTitle')}</h3>

          <div className={styles.wrapperPart}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.rectorsAward)} alt={t('pages.science.awardsTitle')} />
            </div>
            <p className={styles.description} style={{ marginTop: '40px' }}>
              <Trans i18nKey={'pages.science.rectorsAward'} components={[<br />]} />
            </p>
          </div>

          <div className={styles.wrapperPart}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.phd)} alt={t('pages.science.awardsTitle')} />
            </div>
            <p className={styles.description} style={{ marginTop: '40px' }}>
              <Trans
                i18nKey={'pages.science.phd'}
                components={[
                  <br />,
                  <span
                    className={styles.link}
                    onClick={() => {
                      window.open(
                        'https://www.facebook.com/Inria-Lille-Nord-Europe-132199733544881/?__cft__[0]=AZV9pV1L7eFQAakM1VIBlNEk3TQCazH6LFQtPWrJtyUoVINCeakid0KPWK92hFYCGIzkZUNkFwNk909LdKR_Jq3K0Tnm8adidep3uEvCAhl0gG_D1wiwPaVJ_IH5bYNm2IGaMdqOwhINVVcFnAi7uTF5Uf9dkJg7-iCmXqY_ndsDJMPj-2YMItB3fED74dG0Nqs&__tn__=kK-R',
                        '_blank'
                      );
                    }}
                  />
                ]}
              />
            </p>
          </div>

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
        </section>
      </Container>
    </>
  );
};

export default SciencePage;

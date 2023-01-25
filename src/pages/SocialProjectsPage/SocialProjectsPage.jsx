import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './SocialProjectsPage.module.css';

const images = {
  mykolaShuhai: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FmykolaShuhaiEN.png?alt=media&token=56a932ea-5c67-449d-a76b-8f638351516c',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FmykolaShuhaiUK.png?alt=media&token=1cbe22d3-5f64-496a-be49-6bb78d530dd3'
  },
  allUkrainianSchool: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FallUkrainianSchoolEN.png?alt=media&token=8225fae6-9429-42d7-8434-eb034665ba6a',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FallUkrainianSchoolUK.png?alt=media&token=3d1407ee-adf4-493a-8b45-a7aacf50ea7d'
  },
  artemDymydScholarship: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FartemDymydScholarshipEN.png?alt=media&token=a25f3271-fb4e-4107-97e6-2cce0bd32bf6',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FartemDymydScholarshipUK.png?alt=media&token=1129206f-90b4-4147-82d3-f81a2d601ae1'
  },
  dzyga: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FdzygaEN.png?alt=media&token=1efa85d1-cea5-459f-af55-1a8da5c3eb24',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FdzygaUK.png?alt=media&token=3726c739-1fe7-428f-bf67-30a4f704b925'
  },
  informationPlatform: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FinformationPlatformEN.png?alt=media&token=b1c09519-64b2-49af-ac65-00df4b62262e',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FinformationPlatformUK.png?alt=media&token=7793af7f-7776-4890-b78c-0be9540838a9'
  },
  naVarti: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FnaVartiEN.png?alt=media&token=75a91230-f3b9-46da-b963-d1de30db676b',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FnaVartiUK.png?alt=media&token=4438f369-8367-402e-9526-7dad5fa6470f'
  },
  objectDetectionDataset: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FobjectDetectionDatasetEN.png?alt=media&token=722781b3-5466-4c9e-90da-c291a2451c18',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FobjectDetectionDatasetUK.png?alt=media&token=3d136191-7208-44b4-b8aa-1bc92778f574'
  },
  saveArtUA: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FsaveArtUAEN.png?alt=media&token=d8b80e39-77d1-491b-a82e-4604d6afbdf7',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FsaveArtUAUK.png?alt=media&token=c950ecc1-d36b-431e-9c56-e49392dd1c39'
  },
  thermalAccumulators: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FthermalAccumulatorsEN.png?alt=media&token=008ebe3c-ad25-4c73-a8ce-307e3ca70d23',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FthermalAccumulatorsUK.png?alt=media&token=ba8762f0-5689-465c-a750-46300b80eb53'
  },
  volunteeringCenter: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FvolunteeringCenterEN.png?alt=media&token=83cc382c-d9b5-43b0-a531-7933ac436995',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FvolunteeringCenterUK.png?alt=media&token=70228a81-ecdc-4241-bece-82865695b2ed'
  },
  zbirNaMashynu: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FzbirNaMashynuEN.png?alt=media&token=bfbc9bf1-46b7-4467-b2bf-650df5f07c0d',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FzbirNaMashynuUK.png?alt=media&token=d79ba9b0-9b5a-4d6e-a4b4-f77342a1629b'
  },
  itInitiatives: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FitInitiativesEN.png?alt=media&token=00ebe12a-ab54-48ce-b25e-1ab39894c15a',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FitInitiativesUK.png?alt=media&token=c25bf626-a45c-4b4c-bb7d-6f3a76792ed2'
  }
};

const SocialProjectsPage = () => {
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
  const [open12, setOpen12] = useState(false);

  return (
    <>
      <AppBar name={t('pages.socialProjects.title')} />
      <Container>
        <section className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.dzyga)} alt={t('pages.socialProjects.dzyga')} />
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
                  i18nKey={'pages.socialProjects.dzygaDesc'}
                  components={[
                    <br />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open('https://dzygaspaw.com/', '_blank');
                      }}
                    />,
                    <b />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.naVarti)} alt={t('pages.socialProjects.naVarti')} />
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
                  i18nKey={'pages.socialProjects.naVartiUaDesc'}
                  components={[
                    <br />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open('https://onguard.in.ua/', '_blank');
                      }}
                    />,
                    <b />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img
                src={getLanguageImage(images.volunteeringCenter)}
                alt={t('pages.socialProjects.volunteeringCenter')}
              />
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
                  i18nKey={'pages.socialProjects.volunteeringCenterDesc'}
                  components={[
                    <br />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open('https://warinua.ucu.edu.ua/help-ukrainian-army/', '_blank');
                      }}
                    />,
                    <b />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.zbirNaMashynu)} alt={t('pages.socialProjects.zbirNaMashynu')} />
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
                <Trans i18nKey={'pages.socialProjects.zbirNaMashynuDesc'} components={[<br />, <b />]} />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.mykolaShuhai)} alt={t('pages.socialProjects.mykolaShuhai')} />
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
                  i18nKey={'pages.socialProjects.mykolaShuhaiDesc'}
                  components={[
                    <br />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://linktr.ee/nicola_suhaj_group?fbclid=IwAR24xzWp9M1sGMy0JkAMOmIHZBNh95b_R0zyq07q1tAcT530Dt2UvujmLvg',
                          '_blank'
                        );
                      }}
                    />,
                    <b />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img
                src={getLanguageImage(images.objectDetectionDataset)}
                alt={t('pages.socialProjects.objectDetectionDataset')}
              />
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
                  i18nKey={'pages.socialProjects.objectDetectionDatasetDesc'}
                  components={[
                    <br />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://l.facebook.com/l.php?u=https%3A%2F%2Fstorage.googleapis.com%2Fdrone_vehicle_footage_dataset_public%2F%3Ffbclid%3DIwAR1h3pCbi5Ygk8HAUNfMqRTtOq6TEv76LazkJOgLaE6QYcg6atVBfQ4alzc&h=AT1fO1feRTvrsB467KJ7m7DEpPjYYEcCBP09AvJ0PuWUbRHFGJ2uzOX-Y1X2G0340XbrjVYbgNv6fjaPHXUO_EleMbOHLQ5ni-DDWiYTstbfXuggAsX_GBP8EfibxHsz6aJu&__tn__=-UK-R&c[0]=AT1VymO__Rrkguz8tewKpv2QRrNqIo0L-hWEOJ80HTWHU8BDEkK-vY3SW86FBOEjbxIQG98aRwVZ4qinzdOvpEY3S_OovIkHJDXIypuRF4LSJDLZNtk-o2Dh66MY0Du_ZJx4NJmAxzqssynpREDeP47ZkhR7Aw0v0tuIGxRoFYAC1O-TnhL3FbO_Wx7TEDP6jnJBT2U664u_',
                          '_blank'
                        );
                      }}
                    />,
                    <b />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.saveArtUA)} alt={t('pages.socialProjects.saveArtUA')} />
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
                  i18nKey={'pages.socialProjects.saveArtUADesc'}
                  components={[
                    <br />,
                    <b />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open('https://saveartua.com/ua/map', '_blank');
                      }}
                    />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://www.facebook.com/hashtag/bigideachallenge?__eep__=6&__cft__[0]=AZUUBDyof0URkfq5AsReaGvNuCnCSnVq5DZHlsxM-CoLaqn0w6zVZAju2c020uU69S4c-YEST2kFGkq_PuralmIg-vgymbTsX84YQ9yT87zQP4QWZE8t9l1LKERuxgpvHr_LT1YNgysYjhdGZdPpJh9EsIUwqslfan1Z7pAVPFX6oHqr_gQnX99gjifuMTwZUjE&__tn__=*NK-R',
                          '_blank'
                        );
                      }}
                    />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://www.facebook.com/britishcouncil?__cft__[0]=AZUUBDyof0URkfq5AsReaGvNuCnCSnVq5DZHlsxM-CoLaqn0w6zVZAju2c020uU69S4c-YEST2kFGkq_PuralmIg-vgymbTsX84YQ9yT87zQP4QWZE8t9l1LKERuxgpvHr_LT1YNgysYjhdGZdPpJh9EsIUwqslfan1Z7pAVPFX6oHqr_gQnX99gjifuMTwZUjE&__tn__=-]K-R',
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
              <img
                src={getLanguageImage(images.thermalAccumulators)}
                alt={t('pages.socialProjects.thermalAccumulators')}
              />
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
                  i18nKey={'pages.socialProjects.thermalAccumulatorsDesc'}
                  components={[
                    <br />,
                    <b />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://www.facebook.com/csatucu/posts/pfbid02YjPeGMphqPgjoGotEse5iyBeB42ESDJNkP3Kv9ZpBzp5D9uZcXnKLNJrPMquYwZFl',
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
              <img
                src={getLanguageImage(images.informationPlatform)}
                alt={t('pages.socialProjects.informationPlatform')}
              />
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
                <Trans
                  i18nKey={'pages.socialProjects.informationPlatformDesc'}
                  components={[
                    <br />,
                    <b />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open('https://post-to-stop-war.in.ua/', '_blank');
                      }}
                    />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img
                src={getLanguageImage(images.allUkrainianSchool)}
                alt={t('pages.socialProjects.allUkrainianSchool')}
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
                <Trans
                  i18nKey={'pages.socialProjects.allUkrainianSchoolDesc'}
                  components={[
                    <br />,
                    <b />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://www.facebook.com/eschool.net.ua/?__cft__[0]=AZVmoFDqyfqln_tSg4nYdJ-95HgA25TnC0Zh0_bXu7jIkJW8yGnOjBOH1wgYu4MA3puySued4sJaO-j77Lgu09AZ0FG2u--07a9Gta8Qjxwd_bUKLsadcIu0_Vj0diDcwCY&__tn__=kK-R',
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
              <img
                src={getLanguageImage(images.artemDymydScholarship)}
                alt={t('pages.socialProjects.artemDymydScholarship')}
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
                <Trans
                  i18nKey={'pages.socialProjects.artemDymydScholarshipDesc'}
                  components={[
                    <br />,
                    <b />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://www.facebook.com/ProductManagementCommunity/?__cft__[0]=AZUBWBuoeG1Fb3oUebq62GgPfC1bWf6w001RnrsA0-AS37XkRBenRdQWxkAwYa9IyWcJHta4jdsbCFO6jkR4iikP20H3n8x0eX0K3t3W230GTv3vv0Vywma0-68U-sP16KuK46jhJVjLlakRTg0yXt74jnSO3aTbRhfC-6Zhbdtn8d8f6usctF7GRuD8NowGvPU&__tn__=kK-R',
                          '_blank'
                        );
                      }}
                    />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open('https://supporting.ucu.edu.ua/en/donate/?order=artem_dymyd', '_blank');
                      }}
                    />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.itInitiatives)} alt={t('pages.socialProjects.itInitiatives')} />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen12(!open12);
                }}
              >
                {open12 ? (
                  <span className="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span className="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open12 ? (
              <p className={styles.description}>
                <Trans
                  i18nKey={'pages.socialProjects.itInitiativesDesc'}
                  components={[
                    <br />,
                    <b />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://l.facebook.com/l.php?u=https%3A%2F%2Ft.me%2Fhelp_onroad_ua_bot%3Ffbclid%3DIwAR0coZr9eB8zV1_XUaE0K-gV5BuNAek164nfrA3Ty2_XgJEDylMO5LmF59Y&h=AT1id1h7bvry1PyLCINfw7JTNGPez6AbnfkSMDP593JrxWdLHE9Hk_k7iTcrOoh-BVd4kEYbRWYrf7RbbNBfEFfLsaNgIVW_bi_REJCPw4LCBw2OS21GDzpJkoA_v_FHUFl9&__tn__=-UK-R&c[0]=AT1Ri5AdqpqNhrzw5dhlfx3YN-r7Lm8MkX6TP66-ZX0b8XbPNXc1W0zy9MA5wvUZFgCyxIXyqegnQ9pAWvLH51AdUorVj15iJXR9tgCO10hVhT8NjPOewFC-WVw6M6kNU9GQjtr4hMX3xG75bqrw_8q0425pb8c0QUC5LMQra-UG4YU47giyhiIfnhpYSgGzlUIZo3XqpzBPbA',
                          '_blank'
                        );
                      }}
                    />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open('https://betha.in.ua/', '_blank');
                      }}
                    />
                  ]}
                />
              </p>
            ) : null}
          </div>
        </section>
      </Container>
    </>
  );
};

export default SocialProjectsPage;

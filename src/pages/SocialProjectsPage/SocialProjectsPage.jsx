import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './SocialProjectsPage.module.css';

const images = {
  mykolaShuhai: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FmykolaShuhaiEN.png?alt=media&token=a6e217e2-89a7-4c47-89b6-bac6125b664f',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FmykolaShuhaiUK.png?alt=media&token=5a0c761b-6386-4d79-ad76-7422afc9816d'
  },
  allUkrainianSchool: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FallUkrainianSchoolEN.png?alt=media&token=c539495a-0481-411f-bb43-ba9bcfb3d7f2',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FallUkrainianSchoolUK.png?alt=media&token=2bc1fb23-78f5-49e2-a2de-ef5d246f1bfc'
  },
  artemDymydScholarship: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FartemDymydScholarshipEN.png?alt=media&token=fbe864d0-60fe-4ade-9b2c-d0b0b172a7d2',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FartemDymydScholarshipUK.png?alt=media&token=ad96b3a5-4fcd-4f3e-98a2-33938d641f42'
  },
  dzyga: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FdzygaEN.png?alt=media&token=5f1a57a1-2520-41fc-bd92-da5538c607a0',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FdzygaUK.png?alt=media&token=7e423cd4-fa56-4315-97da-b1770fb9da96'
  },
  informationPlatform: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FinformationPlatformEN.png?alt=media&token=0abf3f89-611d-42eb-9382-06fe42990de5',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FinformationPlatformUK.png?alt=media&token=cff933d7-a6d3-42fd-bfc6-45e4f5f5e200'
  },
  naVarti: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FnaVartiEN.png?alt=media&token=5902ffb1-e1a6-4ea1-a853-a50b126f4cba',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FnaVartiUK.png?alt=media&token=19ef2598-3950-47fb-9f3d-98e6be08631a'
  },
  objectDetectionDataset: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FobjectDetectionDatasetEN.png?alt=media&token=527f0472-1f41-47a6-91ed-0cb6ed7a6f7f',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FobjectDetectionDatasetUK.png?alt=media&token=a001492e-0a28-4169-8e9d-57c7ea8a7892'
  },
  saveArtUA: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FsaveArtUAEN.png?alt=media&token=56f4e382-ad46-46f9-bb5c-45735c0f17fd',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FsaveArtUAUK.png?alt=media&token=0c267765-a04b-4f3e-91ab-5ad108b2a5ad'
  },
  thermalAccumulators: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FthermalAccumulatorsEN.png?alt=media&token=9f06d0aa-f16c-4e8d-8d11-558da5fb5a99',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FthermalAccumulatorsUK.png?alt=media&token=e6bc1645-6145-452b-ad3d-26d55f1c095f'
  },
  volunteeringCenter: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FvolunteeringCenterEN.png?alt=media&token=b10955fc-b05f-43f2-ad57-bdd022bd3a45',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FvolunteeringCenterUK.png?alt=media&token=49e0d4a4-be3b-465f-bbc9-a1c7e4563d68'
  },
  zbirNaMashynu: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FzbirNaMashynuEN.png?alt=media&token=d41d5d40-d9b3-4c66-8416-76ccc8d2e55d',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FzbirNaMashynuUK.png?alt=media&token=34864859-244c-4272-8933-e4bd573b6a9d'
  },
  itInitiatives: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FitInitiativesEN.png?alt=media&token=19b51b91-5162-451d-b344-7e56d5d10cdc',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FitInitiativesUK.png?alt=media&token=8d2b04bd-2b93-4a79-a42d-0f1d792fd144'
  },
  justAnswerUkraine: {
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FJustAnswerUkraineEN.png?alt=media&token=e86ec034-4bc3-4ca1-b82a-30f95ec5fd69',
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fsocial-projects%2FJustAnswerUkraineUK.png?alt=media&token=48953940-e73c-4586-b656-f29d23f89214'
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
  const [open13, setOpen13] = useState(false);

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

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.justAnswerUkraine)} alt={t('pages.socialProjects.JustAnswerUkraine')} />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen13(!open13);
                }}
              >
                {open13 ? (
                  <span className="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span className="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open13 ? (
              <p className={styles.description}>
                <Trans
                  i18nKey={'pages.socialProjects.JustAnswerUkraineDesc'}
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

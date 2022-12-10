import AppBar from "../../components/AppBar/AppBar";
import Container from "../../components/Container";

import strategyIcon from "../../imgs/strategy/icon_strategy.svg";
import icon1 from "../../imgs/strategy/group1.svg";
import icon2 from "../../imgs/strategy/group2.svg";
import icon3 from "../../imgs/strategy/group3.svg";
import icon4 from "../../imgs/strategy/group4.svg";
import icon5 from "../../imgs/strategy/group5.svg";
import icon6 from "../../imgs/strategy/group6.svg";

import styles from "./StrategyPage.module.css"

const StrategyPage = () =>(
  <>
    <AppBar name="Стратегічні цілі факультету 2025"/>
    <Container>
      <section className={styles.strategy}>
      <div className={styles.headingWrapper}>
        <img className={styles.strategyIcon} src={strategyIcon} width='40' height='40' alt="ledder up"/>
        <span className={styles.heading}>Стратегічні цілі <br/> факультету 2025</span>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
        <div className={styles.imgWrapper}>
          <img className={styles.listIcon} src={icon1} alt="dialog"/></div>
         <span className={styles.text}>наші випускники є тими, хто творять нові 
         робочі місця. Ми активно залучаємо студентів до викладення, науки та
          бізнес-проектів</span> 
        </li>

        <li className={styles.item}>
         <div className={styles.imgWrapper}>
           <img className={styles.listIcon}  src={icon2} alt="people connections"/></div>
         <span className={styles.text}>сформована alumni спільнота, яка продовжує 
         навчання та формування випускників впродовж життя та залучає їх до 
         різних освітніх ініціатив</span>
        </li>

        <li className={styles.item}>
        <div className={styles.imgWrapper}>
         <img className={styles.listIcon} src={icon3}   alt="people"/></div>
         <span className={styles.text}>сформована потужна команда постійних викладачів 
         як через навчання молодих викладачів, так і через залучення зіркових викладачів. 
         Ми піклуємось про наших працівників та створюємо комфортні умови онбордингу та 
         праці</span>
        </li>

        <li className={styles.item}>
         <div className={styles.imgWrapper}><img className={styles.listIcon}  src={icon4}  alt="note" /></div>
         <span className={styles.text}>науковий доробок та сформована мережа партнерств 
         робить факультет помітним та співмірним з кращими прикладами у співмірних
         унівеситетах світу</span>
        </li>

        <li className={styles.item}>
         <div className={styles.imgWrapper}><img className={styles.listIcon} src={icon5}   alt="flags" /></div>
         <span className={styles.text}>факультет є майданчиком для постійних експериментів</span>
        </li>

        <li className={styles.item}>
         <div className={styles.imgWrapper}><img className={styles.listIcon}  src={icon6} alt="sector" /></div>
         <span className={styles.text}>факультет активно розбудовує спільноту друзів 
         факультету та активно взаємодіє зі спільнотою, зокрема, через консалтинг, 
         запровадження курсів суспільно-орієнтованого навчання та впровадження курсів 
         "цифрового мислення" в світоглядне ядро та/чи загальноуніверситетські курси</span>
        </li>
      </ul>
      
      </section>
    </Container>
    
  </>
);

export default StrategyPage;
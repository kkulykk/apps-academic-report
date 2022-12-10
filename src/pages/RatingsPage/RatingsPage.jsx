import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';

import styles from './RatingsPage.module.css';

import dou from '../../imgs/ratings/dou-ua_vuzy-2020.jpg';
import forbes from '../../imgs/ratings/forbes_02.jpg';

const RatingsPage =()=>(
  <>
    <AppBar name="Рейтинги"/>
    <Container>
      <section className={styles.section}>
        <h2 className={styles.heading}>Рейтинг Forbes</h2>
        <div className={styles.wrapper}>
         <div className={styles.imgWrapperF}> 
           <img src={forbes} alt="forbes magazine" />
         </div>
           <p className={styles.descriptionF}>
           У 2020 році Forbes опублікував список 100 кращих факультетів України – 
           в нього увійшли по 10 факультетів в кожному з 10 популярних напрямків.
           Чотири факультети УКУ є серед топ-100 - Гуманітарний факультет, факультет 
           суспільних наук, факультет наук про здоров’я і звісна річ факультет 
           прикладних наук. APPS UCU отримав найвищу оцінку від експертів серед усіх 
           факультетів комп’ютерних наук та ІТ в Україні – 22 бали. Усі 4 факультети 
           мають найвищий середній бал серед вступників на контракт.&nbsp;
           <a className={styles.link} href="https://forbes.ua/ratings/reyting-fakultetiv-13042021-1356">Детальніше</a>
         </p>
        </div>
        
        <h2 className={styles.heading}>Рейтинг DOU</h2>
        <div className={styles.imgWrapper}> 
          <img src={dou} alt="dou" />
        </div>
         <p className={styles.description}>
          Згідно з дослідженням на платформі &nbsp; <a href="https://dou.ua/lenta/articles/ukrainian-universities-2020/">Developers.Org.Ua</a> , 
          Український католицький університет, а саме факультет прикладних 
          наук УКУ посів перше місце серед вишів в Україні для ІТ галузі в 
          2020 році! Рейтинг базувався на результатах вступної кампанії 2020
          року, за якими наш Університет посів перше місце за середньозваженим 
          балом заяв на IT-спеціальності, який склав — 189,15 бали.&nbsp;
          <a className={styles.link} href="https://dou.ua/lenta/articles/ukrainian-universities-2020/">Детальніше</a>
        </p>
        
         
      </section>
    </Container>
  </>
)

export default RatingsPage;
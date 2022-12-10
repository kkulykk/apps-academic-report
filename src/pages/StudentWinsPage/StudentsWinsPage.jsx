import { useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';


import img1 from '../../imgs/studWins/stud-wins-01.jpg';
import img2 from '../../imgs/studWins/stud-wins-02.jpg';
import img3 from '../../imgs/studWins/stud-wins-03.jpg';
import img4 from '../../imgs/studWins/stud-wins-04.jpg';
import img5 from '../../imgs/studWins/stud-wins-05.jpg';
import img6 from '../../imgs/studWins/stud-wins-06.jpg';
import img7 from '../../imgs/studWins/stud-wins-07.jpg';
import img8 from '../../imgs/studWins/stud-wins-08.jpg';
import img9 from '../../imgs/studWins/stud-wins-09.jpg';
import img10 from '../../imgs/studWins/stud-wins-10.jpg';
import img11 from '../../imgs/studWins/stud-wins-11.jpg';
import img12 from '../../imgs/studWins/stud-wins-12.jpg';
import img13 from '../../imgs/studWins/stud-wins-13.jpg';

import styles from './StudentsWinsPage.module.css';

const StudentsWinsPage = () => {
  const [open1, setOpen1]= useState(false);
  const [open2, setOpen2]= useState(false);
  const [open3, setOpen3]= useState(false);
  const [open4, setOpen4]= useState(false);
  const [open5, setOpen5]= useState(false);
  const [open6, setOpen6]= useState(false);
  const [open7, setOpen7]= useState(false);
  const [open8, setOpen8]= useState(false);
  const [open9, setOpen9]= useState(false);
  const [open10, setOpen10]= useState(false);
  const [open11, setOpen11]= useState(false);
  const [open12, setOpen12]= useState(false);
  const [open13, setOpen13]= useState(false);

return(

 <>
  <AppBar name="Студентські перемоги"/>
  <Container>
  <section className={styles.section}>
    <div className={styles.wrapper}>
     <div className={styles.imgWrapper}>
      <img src={img12} alt="students"/>
      <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen1(!open1)}}>
          {open1? 
           <span class="material-icons">
             keyboard_double_arrow_up
           </span> :
           <span class="material-icons">
             keyboard_double_arrow_down
           </span>
       }
       </button>
       </div>
      {open1? 
      <p className={styles.description}>
        За результатами цьогорічних змагань“International Mathematics Competition 
        for University Students” команда факультету виборола 1 золоту, 
        1 срібну та 2 бронзових медалей, в цілому отримавши 91.33 залікових балів 
        у загальному командному рейтингу. <br/>
        <span role="img" aria-label="golden medal">🥇</span>Володимир Фединяк - золота медаль<br/>
        <span role="img" aria-label="silver medal">🥈</span>Максим Процик - срібна медаль<br/>
        <span role="img" aria-label="bronze medal">🥉</span>Ярослав Романус, Гліб Солоджук - бронзові медалі<br/>
      
        <a className={styles.link} href="https://www.facebook.com/csatucu/posts/2606283662998722">Детальніше</a>
      </p> : null
      }

    </div>

    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
       <img src={img2} alt="students"/>
       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen2(!open2)}}>
       {open2? 
       <span class="material-icons">
         keyboard_double_arrow_up
       </span> :
       <span class="material-icons">
         keyboard_double_arrow_down
       </span>
       }
       </button>
      </div>
      {open2?<p className={styles.description}>
       На цьогорічній Міжнародній математичній олімпіаді серед школярів старших 
       класів команда України посіла 6 місце серед 107 країн світу.У складі нашої 
       збірної був також Захар Наумець - зараз першокурсник бакалаврської програми 
       “ІТ та бізнес-аналітика” APPS UCU, який посів 3 абсолютне місце з понад 600 учасників.<br/>
       
       <a className={styles.link} href="https://www.ukrinform.ua/rubric-society/3286055-ukrainski-skolari-posili-soste-misce-na-miznarodnij-matematicnij-olimpiadi.html">Детальніше</a>  
      </p>: null
       }
    </div>

    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
       <img src={img5} alt="ladder"/>
       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen3(!open3)}}>
        {open3? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
      </div>
      {open3? 
        <p className={styles.description}>
         Першокурсник APPS UCU Кузьма Володимир цього літа виборов бронзову медаль у 
         складі команди України на Міжнародній олімпіаді з фізики (IPHO, Lithuania - 2021).<br/>
        <a className={styles.link} href="https://galnet.fm/dvoye-uchniv-lvivskogo-litseyu-staly-pryzeramy-olimpiady-z-fizyky-u-lytvi/">Детальніше</a> 
        </p>: null
      }
    </div>

    

    <div className={styles.wrapper}>
     <div  className={styles.imgWrapper}>
      <img src={img6} alt="girl"/>
      <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen4(!open4)}}>
        {open4? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
      </div>
      {open4?
      <p className={styles.description}>
         На базі компанії  InterLogic Ukraine та за підтримки ЛМР відбувся хакатон для 
         студентів ІТ-спеціальностей.<br/>
         Найкращим проектом став телеграм-бот для пошуку втрачених тварин від Duo 
         Formaggi, над яким працювали наші другокурсниці Оля Люба та Вікторія Рой.<br/>
          Найкраща презентація проекту - мобільний додаток для 
          створення кастомних екскурсій Львовом від OverLogic - до збірної команди 
          від різних університетів входили теж наші другокурсники - Малик Стефан, Василевич 
          Владислав і Тарас Свистун.<br/>
        <a className={styles.link} href="https://www.facebook.com/csatucu/posts/2630513120575776">Детальніше</a>
      </p>: null
      }
    </div>

    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
       <img src={img7} alt="students with ukrainian flag"/>
       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen5(!open5)}}>
        {open5? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
      </div>
      {open5?
      <p className={styles.description}>
       Святослав Лушней, першокурсник APPS UCU та випускник&nbsp; 
       <a className={styles.link}  href="https://www.facebook.com/lpml.org/?__cft__[0]=AZWxTJ_FusW-rCbQ2grrcyYocja5rBpQzNnxWSaClQj1nCp6ClhtNyVpfO1JgfqjGLG-pQMbdZgJ1WWrfihHSF-TTOxnurLOc7WG0CJyty9kOKbrYY6s2hOXOse5GcCDSFs&__tn__=kK-R">ЛФМЛ - Львівський Фізико-Математичний 
       Ліцей [LPML]</a>  виборов золоту медаль на 14 Міжнародній Олімпіаді з Астрономії та Астрофізики, 
       організатором якої цього року була Колумбія. <a className={styles.link}  href="https://www.facebook.com/hashtag/ioaa2021?__eep__=6&__cft__[0]=AZWxTJ_FusW-rCbQ2grrcyYocja5rBpQzNnxWSaClQj1nCp6ClhtNyVpfO1JgfqjGLG-pQMbdZgJ1WWrfihHSF-TTOxnurLOc7WG0CJyty9kOKbrYY6s2hOXOse5GcCDSFs&__tn__=*NK-R">#IOAA2021</a> Олімпіада відбувалася в онлайн форматі, 
       а участь у ній брали учні та студенти з 48 країн світу. Олімпіада складається із 3-ох різних 
       індивідуальних турів та одного командного. Збірну команду України представляли 10 учасників, 
       які окрім “золота” також вибороли 3 срібних та 6 бронзових медалей.<br/>

       <a className={styles.link}  href="https://www.facebook.com/csatucu/posts/2676819355945152">Детальніше</a>
     </p>: null
       }

    </div>
    

    

    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
       <img src={img3} alt="students"/>
       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen6(!open6)}}>
        {open6? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>

      </div>
      {open6?
      <p className={styles.description}>
        Студентки 3 курсу Діана Гром’як, Анна Корабльова та Наталя Романишин активно 
        працюють над створенням медичної кнопки - приладу, який має допомогти пораненим 
        солдатам швидко викликати медичну службу для отримання невідкладної допомоги.<br/>
        Зеновій Попенюк та Євгеній Молодцов - минулого року студенти 4 курсу, а сьогодні 
        вже випусники факультету працювали над програмою, що має адаптувати 
        користування комп’ютерною клавіатурою для й з дитячим церебральним паралічем. 
        Обидва прототипи були представлені на міжнародній конференції.<br/>
        <a className={styles.link} href="https://www.facebook.com/csatucu/posts/2532258100401279">Детальніше</a>
     </p>: null
       }
    </div>

    <div className={styles.wrapper}>
      <div  className={styles.imgWrapper}>
      <img src={img13} alt="gstudents"/>
      <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen7(!open7)}}>
        {open7? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
      </div>   
      {open7?
       <p className={styles.description}>
        На міжнародних змаганнях для винахідників студент APPS UCU Богдан Магомета 
        представив свій проект” Face detection and recognition system development for 
        the visually impaired". Мета цієї роботи - створити пристрій, призначений для 
        використання незрячими людьми, що може допомогти ідентифікувати співрозмовників 
        його користувача за допомогою алгоритмів комп'ютерного зору.<br/> 
        Студентка Дар’я Мінєєва працювала над розробкою веб-додатку для планування 
        фізичної реабілітації хворих, що перенесли серцево-судинні захворювання та 
        покращення комунікації між лікарем та пацієнтом після виписки з лікарні.<br/> 
        <a className={styles.link} href="https://www.facebook.com/csatucu/posts/2434058690221221">Детальніше</a>
     </p>: null
      }
    </div>
    

    <div className={styles.wrapper}>
     <div className={styles.imgWrapper}>
      <img src={img1} alt="girl"/>
      <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen8(!open8)}}>
        {open8? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
      </div> 
      {open8?
      <p className={styles.description}>
        Студентка APPS UCU Соломія Леньо виступила з доповіддю «Квантово-топологічний 
        аналіз даних із фондової біржі” на конкурсі для молодих вчених.<br/>
        За результатами конкурсу Соломія Леньо отримала відзнаку від осередку 
        Українського фізичного товариства в Інституті фізики конденсованих систем НАНУ.<br/>
        <a className={styles.link} href="https://www.facebook.com/csatucu/posts/2413432898950467">Детальніше</a>
      </p>: null
       }
    </div>

    <div className={styles.wrapper}>
     <div  className={styles.imgWrapper}>
       <img src={img11} alt="girl"/>
       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen9(!open9)}}>
        {open9? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
     </div>
      {open9?
        <p className={styles.description}>
       Софія Книшоїд, Володимир Кузьма, Святослав Лушней та Матвій Притула, які 
       цьогоріч вступили до нашого Університету,  отримали премії від Верховної Ради 
       України.<br/>
        Наші студенти були серед тих 35 абітурієнтів, які отримали найвищі бали 
       за результатами ЗНО.<br/>
       <a className={styles.link}  href="https://tvoemisto.tv/news/shestero_studentiv_lvivskyh_vyshiv_yaki_naykrashche_sklaly_zno_otrymayut_po_100_tysyach_gryven_124614.html?fbclid=IwAR0ekhNaE4ckoFHvUliUJMafICqZJBUgdfBynH16nrdJEnoGQayVIQaPHO0">Детальніше</a>.
      </p>: null
      }
    </div>

    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
       <img src={img10} alt="girl"/>
       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen10(!open10)}}>
        {open10? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
      </div> 
      {open10?
      <p className={styles.description}>
        На цьогорічному Business Tech Challenge для компанії Fishka учасники хакатону 
        мали запропонувати рішення щодо проблеми утримання клієнта в додатку Fishka. 
        Команда “Асиметричний лідер” - Юрій Лучка Роксоляна Онишків (APPS.UCU) здобули 
        перемогу в хакатоні, напрацювававши найвдалішу пропозицію для компанії та 
        отримали грошовий приз у розмірі 30 тис.грн.<br/>
        <a className={styles.link} href="https://apps.ucu.edu.ua/home/business_challenge_2021/">Детальніше</a>
      </p>: null
       }

     </div>

    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
       <img src={img8} alt="girl"/>
       <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen11(!open11)}}>
     {open11? 
     <span class="material-icons">
       keyboard_double_arrow_up
     </span> :
     <span class="material-icons">
       keyboard_double_arrow_down
     </span>
     }
     </button>
      </div>  
      {open11?
       <p className={styles.description}>
         Минулого року наші студенти Тимофій Козак та Дар'я Шабацька організовували 
         онлайн-хакатон, присвячений темам, що здатні змінити освіту в Україні. 
         Переможцем HUCUTHON з призом у 10 000 гривень став Кирило Стрельбицький 
         (сьогодні першокурсник APPS UCU) з проектом DeskBoard. Цей додаток реалізований 
         за допомогою комп’ютерного зору та дозволяє вести трансляцію рукописного 
         матеріалу у відеоконференції.<br/>
         <a className={styles.link} href="https://www.facebook.com/csatucu/posts/2535369146756841">Детальніше</a>
        </p>: null
      }
    </div>

    <div className={styles.wrapper}>
      <div  className={styles.imgWrapper}>
        <img src={img9} alt="smartf"/>
        <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen12(!open12)}}>
        {open12? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
      </div>
      {open12?
      <p className={styles.description}>
       У грудні 2021 р. дві команди APPS UCU - “R2D2” - ( Д.Мінєєва, К.Волохатюк, Д. Кузьміна) 
       та “Well Baked Cookies”( М.Мацюк, М.Моргуненко, Д.Дацко) взяли участь у фіналі хакатону 
       SmaRTF - першому всеукраїнському інженерному хакатоні у галузях робототехніки, програмування,
       інженерії, електроніки та конструювання.<br/>
       Команди, які вийшли у фінал, отримали фінансування від партнерів та спонсорів хакатону на 
       деталі для прототипу та для його повної збірки. Крім того, кожна з команд мала свого 
       досвідченного ментора, який допомагав розвивати ідею проекту, а також пропонував шляхи 
       реалізації продукту.<br/>
       <a className={styles.link}  href="https://www.facebook.com/csatucu/posts/2684715768488844">Детальніше</a>
     </p>: null
       }
    </div>

    <div className={styles.wrapper}>
      <div  className={styles.imgWrapper}>
        <img src={img4} alt="students"/>
        <button className={styles.expandBtn}  type="button" onClick={()=>{setOpen13(!open13)}}>
        {open13? 
        <span class="material-icons">
          keyboard_double_arrow_up
        </span> :
        <span class="material-icons">
          keyboard_double_arrow_down
        </span>
        }
        </button>
      </div>
      {open13?
      <p className={styles.description}>
       У жовтні 2020 року студентка програми “Комп’ютерні науки” Ольга Стасюк стала 
       переможницею письменницького конкурсу, який організовувала ГО «Культурна \
       ініціатива “Букмоль”». Оля перемогла у номінації #teenwrite.  Вірші студентка 
       пише з дванадцяти років, а прозові твори – почала з десяти.<br/>
       <a className={styles.link}  href="https://ucu.edu.ua/news/zavzhdy-pyshu-na-odnomu-podyhu-peremozhnytsya-pysmennytskogo-konkursu-oleksandra-stasyuk/?fbclid=IwAR1xMODsGCaJF0EmBB6exI4cqgtQVfPtGbFDmn-sP3sw1PDP_2ECKMVDrPo">Детальніше</a>
     </p>: null
       }
    </div>

      </section>
</Container>
  
 </>
)
}

export default StudentsWinsPage;
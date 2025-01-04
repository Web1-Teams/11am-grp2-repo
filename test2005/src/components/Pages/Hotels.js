import React, { useState } from 'react';
import CardFilter from '../CardFilter/CardFilter';
import Card  from "../Card/Card";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import "./Hotels.css";
import hotel1 from '../../assets/hotel1J.jpg';
import hotel2J from '../../assets/hotel2J.jpg'
import hotel3J from '../../assets/hotel3J.jpg'
import hotel1N from '../../assets/hotel1N.jpg'
import hotel2N from '../../assets/hotel2N.jpg'
import hotel3N from '../../assets/hotel3N.jpg'
import hotel4N from '../../assets/hotel4N.jpeg'
import hotel1H from '../../assets/hotel1H.jpeg'
import hotel2H from '../../assets/hotel2H.jpg'
import hotel3H from '../../assets/hotel3H.jpg'
import hotel4H from '../../assets/hotel4H.jpg'
import hotel1B from '../../assets/hotel1B.jpg'
import hotel2B from '../../assets/hotel2B.jpg'
import hotel3B from '../../assets/hotel3B.jpg'
import hotel4B from '../../assets/hotel4B.jpg'
import hotel1R from '../../assets/hotel1R.jpg'
import hotel2R from '../../assets/hotel2R.jpg'
import hotel3R from '../../assets/hotel3R.jpg'
import hotel4R from '../../assets/hotel4R.jpg'
import hotel1JEN from '../../assets/hotel1JEN.jpg'
import hotel2JEN from '../../assets/hotel2JEN.jpg'
import hotel3JEN from '../../assets/hotel3JEN.jpg'
import hotel4JEN from '../../assets/hotel4JEN.jpg'
import hotelT from '../../assets/hotelT.jpg'
import hotel1JER from '../../assets/hotel1JER.jpg'
import hotel2JER from '../../assets/hotel2JER.jpg'
import hotel3JER from '../../assets/hotel3JER.jpg'
import hotel4JER from '../../assets/hotel4JER.jpg'


const Hotels =()=>{

  const [filterValue, setFilterValue] = useState("");

  const hotels = [
 
            {
              id:'1',
                category:"القدس",
                name: "Hotel Addar",
                img: hotel1,
                loc: "نحو 25 دقائق سيرًا على الأقدام من الحرم القدسي الشريف",
                site: "https://www.addar-hotel.com/?page_id=2"
            },
            {
              id:'2',
              category:"القدس",
                name: "Seven Arches Hotel",
                img: hotel2J,
                loc: "تتوفر في الغرف البسيطة خدمة إنترنت وأجهزة تلفزيون، ويضم بعضها مساحات للجلوس وحديقة وترّاسات. يقدّم الفندق أيضًا خدمة الغرف.",
                site: "https://www.facebook.com/7ArchesJRS/"
            },
            {
              id:'3',
              category:"القدس",
              name: "Hotel La Perle",
                img: hotel3J,
                loc: ":يقع Hotel la perle tlemcen بالقرب من El Mansourah، معلم جذب شهير في تلمسان ويعد وجهة رائعة للمسافرين",
                site: "https://www.facebook.com/hotel.la.perle.paris/"
            },
       
    
      
      
          {
            id:'4',
            category:"نابلس",
              name: "فندق القصر",
              img: hotel1N,
              loc: "فندق يقع في موقع مركزي في نابلس، يقدم خدمات استقبال ممتازة وغرف مريحة بمرافق حديثة",
              site: "https://www.facebook.com/profile.php?id=404558202898077&_rdr"
          },
          {
            id:'5',
            category:"نابلس",
              name: "فندق سليم أفندي",
              img: hotel2N,
              loc: "يُعد من أفخم فنادق نابلس، يوفر إقامة فاخرة مع مسبح وخدمات ترفيهية متكاملة",
              site: "https://www.saleemafandihotel.ps/"
          },
          {
            id:'6',
            category:"نابلس",
            name: "فندق جولدن روز",
              img: hotel3N,
              loc: "يقع بالقرب من البلدة القديمة ويتميز بخدمات مريحة وأجواء هادئة مع واي فاي مجاني",
              site:"https://www.facebook.com/rosehotelrooms/?locale=ar_AR"
          },
          {
            id:'7',
            category:"نابلس",
            name:"فندق الياسمين",
            img:hotel4N,
            loc:"فندق مميز في نابلس القديمة، قريب من الأسواق التاريخية ويضم مطعمًا يقدم أكلات محلية",
            site:"https://www.alyasmeen.com/"
          },
     
  
    
   
      {
        id:'8',
        category:"الخليل",
        name:"فندق ابو مازن",
        img:hotel1H ,
        loc:"يقع هذا الفندق ذو التصميم البسيط في مبنى على طراز قلعة بالقرب من مركز تجارية وةالقديم و57 كيلومتر عن مطار بانغيريون",
        site:"http://abumazengroup.ps/web/en/home-2/"
      },
      {
        id:'9',
        category:"الخليل",
        name:"فندق ريجنسي الخليل",
        img:hotel2H,
        loc:" موقع جيد بشكلٍ عام لمشاهدة المعالم السياحية والاستجمام وتناول الطعام والتجوّل الخليل,راس الجورةومقابل مستشفى الميزان",
        site:"https://www.facebook.com/p/Regency-Hotel-Hebron-%D9%81%D9%86%D8%AF%D9%82-%D8%B1%D9%8A%D8%AC%D9%86%D8%B3%D9%8A-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84-100070977612507/?locale=pt_BR&_rdr"
      },
      {
        id:'10',
        category:"الخليل",
        name:"فندق كوين بلازا",
        img:hotel3H,
        loc:"فندق كوين بلازا يقع في منطقة عين سارة في مدينة الخليل، بالقرب من مطعم كنتاكي. الفندق يتميز بموقع مركزي في قلب المدينة، مما يجعله قريبًا من المرافق والخدمات الرئيسية",
        site:"https://www.qphotel.ps/"
      },
      {
        id:'11',
        category:"الخليل",
        name:"Lamar Guest House",
        img:hotel4H,
        loc:"فندق Lamar Guest House يقع في الخليل، تحديدًا في شارع عين القرنة (Ein Al-Qurneh Street)، بالقرب من مناطق معروفة مثل حديقة النور ومرافق محلية أخرى",
        site:"https://www.facebook.com/lamarguesthouse/"
      },
   
   
      {
        id:'12',
        category:"بيت لحم",
        name:"Peermont Metcourt at Frontier",
        img:hotel1B,
        loc:"يقع Peermont Metcourt at Frontier, Bethlehem في بيت لحم على بعد 36 كم من نادي كلارينس للغولف",
        site:"https://frontierinn.co.za/peermont-metcourt-hotel/"
      },
      {
        id:'13',
        category:"بيت لحم",
        name:"The Perfect Corner Guesthouse",
        img:hotel2B,
        loc:"يوفر مكان إقامة في بيت لحم مع إمكانية الوصول إلى حديقة وبار، فضلاً عن خدمة الأمن على مدار اليوم. يتوفر مطعم في الموقع",
        site:"https://www.facebook.com/guestperfect/"
      },
      {
        id:'14',
        category:"بيت لحم",
        name:"Green Olive Panorama",
        img:hotel3B,
        loc:"يقع Green Olive Panorama في بيت لحم على بعد 35 كم من نادي كلارينس للغولف",
        site:"https://www.facebook.com/TgoPanorama/"
      },
      {
        id:'15',
        category:"بيت لحم",
        name:"The Green Olive Guesthouse",
        img:hotel4B,
        loc:"يوفر بيت ضيافة Green Olive أماكن إقامة في بيت لحم. تتميز جميع الغرف في بيت الضيافة هذا بتكييف الهواء وتوفر منطقة معيشة مجهزة بثلاجة وغلاية كهربائية وميكروويف وتلفزيون بشاشة مسطحة مع قنوات فضائية.",
        site:"https://www.facebook.com/GreenOliveGuesthouse/"
      },
   
     
      {
        id:'16',
       category:"رام الله والبيرة",

        name:"Royal Court Suites",
        img:hotel1R,
        loc:"وسط مدينة رام الله",
        site:"https://www.rcshotel.com"
      },
      {
        id:'17',
        category:"رام الله والبيرة",
        name:"Reggenza Hotel",
        img:hotel2R,
        loc:"شارع رام الله الرئيسي",
        site:"https://reggenahotel.com"
      },
      {
        id:'18',
        category:"رام الله والبيرة",
        name:"Caesar Hotel Ramallah",
        img:hotel3R,
        loc:" قرب ميدان المنارة",
        site:"https://www.caesar-hotel.ps"
      },
      {
        id:'19',
        category:"رام الله والبيرة",
        name:"Ocean Grand Hotel",
        img:hotel4R,
        loc:"رام الله البلدة القديمة",
        site:"https://www.facebook.com/oceangrandhotel/"
      },
  
   
      {
        id:'20',
        category:"جنين",
        name:"فندق حداد السياحي",
        img:hotel1JEN,
        loc:"من أرقى فنادق جنين، يوفر خدمات ترفيهية متنوعة وحديقة واسعة ومسبحًا عصريًا.",
        site:"https://www.facebook.com/groups/3183365332/?locale=de_DE"
      },
      {
        id:'21',
        category:"جنين",
        name:"سينما جنين للضيافة",
        img:hotel2JEN,
        loc:"بيت ضيافة مميز يقع في قلب المدينة، قريب من المعالم التاريخية ومناسب للإقامة الهادئة",
        site:"https://www.facebook.com/GuestHouseCinemaJenin/"
      },
      {
        id:'22',
        category:"جنين",
        name:"North Gate Hotel",
        img:hotel3JEN,
        loc:"موقع Canaan Fair Trade القريب، يجعل North Gate Hotel مكان رائع للإقامة وزيارة معلم Jenin الشهير",
        site:"https://www.facebook.com/NorthGateHoteljenin/"
      },
      {
        id:'23',
        category:"جنين",
        nema:"Al Mardawi Guesthouse",
        img:hotel4JEN,
        loc:"هذا البيت يمثل فرصة رائعة لاكتشاف التراث الفلسطيني والتفاعل مع العائلات المحلية",
        site:"https://www.facebook.com/AlMardawi.Guesthouse/"
      },
      
    
      {
        id:'24',
        category:"طولكرم",
        name:"San Moris",
        img:hotelT,
        loc:"طولكرم شارع نابلس",
        site:"https://www.facebook.com/san.moris.guest.house/?locale=ar_AR"
      }
      ,
      {
        id:'25',
        category:"اريحا",
        name:"Dolphin Suites Hotel",
        img:hotel1JER,
        loc:"يقع فندق دولفين سويتس في أريحا على بعد 13 كم من جسر اللنبي/الملك حسين، ويوفر مكان إقامة مع تراس",
        site:"https://www.facebook.com/hotel.jericho/"
      },
      {
        id:'26',
        category:"اريحا",
        name:"Sami Hostel",
        img:hotel2JER,
        loc:"يقع Sami Hostel على بعد 12 كم فقط من جسر اللنبي/الملك حسين، ويوفر أماكن إقامة في أريحا مع إمكانية الوصول إلى حديقة وبار، بالإضافة إلى خدمة الغرف",
        site:"https://www.facebook.com/pages/Jericho.%20Sami%20Hostel/2003891766493499/",
      },
      {
        id:'27',
        category:"اريحا",
        name:"Auberg-Inn Guesthouse",
        img:hotel3JER,
        loc:"Auberg-Inn هو بيت ضيافة يقع عند سفح جبل التجربة في مدينة أريحا التاريخية في فلسطين",
        site:"https://www.facebook.com/theaubergeinn/"
      },
      {
        id:'28',
        category:"اريحا",
        name:"Steele honey",
        img:hotel4JER,
        loc:"يقع Steele honey في أريحا على بعد 27 كم من بيت عنيا عبر الأردن و31 كم من حديقة جثسيماني، ويوفر إطلالة على الحديقة والحديقة",
        site:"https://www.facebook.com/p/Honey-holy-land-Jericho-100067585101598/"
      }
  ]  
  
  
  const filteredHotels = hotels.filter((hotel) =>
    filterValue === "" || hotel.category=== filterValue
);
    return(
      <div  className='parent-container'>
      <Navbar/>
      <Header
      
         title = 'أهلا بك في فنادقنا'
         subtitle = 'نقدم لك نخبة من فنادق فلسطين في كافة مدن الضفة الغربية'
         backgroundImage ="/images/hotels.webp"
      />
      
      <h1>فنادق الضفة الغربية</h1>
     
      <CardFilter setFilterValue={setFilterValue} />
      <div className="card-container" >
      {filteredHotels.map((hotel) => (
            <Card
              key={hotel.id}
              category={hotel.category}
              name={hotel.name}
              img={hotel.img}
              loc={hotel.loc}
              site={hotel.site}
            />
          ))
        }
      </div>
    </div>
    )
}


export default Hotels;
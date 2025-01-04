import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostBox from './PostBox';
import './PostContainer.css'; 
import PostFilter from './PostFilter';

function PostContainer() {
  const posts = [
    {
        imgSrc: "https://alamarabi.com/wp-content/uploads/2020/11/%D8%B5%D9%88%D8%B1%D8%A9-1.jpg",
        category: "اريحا",
        title: "أريحا: مدينة القمر وأروع تجربة تلفريك في فلسطين!",
        date: "12 12 2024",
        description: "ما الذي يجعل تلفريك أريحا تجربة لا تُنسى؟ تعرّف على هذه المدينة الساحرة التي تجمع بين عبق التاريخ وإطلالات خلابة من الأعلى. اكتشف سحر الأماكن المحيطة التي ستأخذك إلى عالم آخر!",
        id: 1,  
      },
   
    {
        imgSrc: "https://i.pinimg.com/736x/78/00/18/7800184ababab5a49b72ef9356412c7c.jpg",
        category: "نابلس",
        title: "ما السر وراء شهرة نابلس بلقب عاصمة الحلويات الشرقية؟",
        date: "12 12 2024",
        description: "اكتشف القصة المدهشة وراء الكنافة النابلسية، وكيف أصبحت نابلس وجهة لعشاق الحلويات في العالم. تعرّف على مكوناتها الأصيلة، وأشهر الأماكن التي تقدمها، والسر الذي يجعلها رمزًا ثقافيًا وسياحيًا فريدًا!",
        id: 2,  
      },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3g_MelwvMgqShfsKHkuWuvtTaZQLm7pMn3oSFLmVdNPsnNhiul6bStpFgUX-saw6Cel4&usqp=CAU",
      category: "رام الله",
      title: ",رام الله: قلب الثقافة الفلسطينية وروحها!هل تعلم؟",
      date: "12 12 2024",
      description: "اكتشف رام الله، قلب الثقافة الفلسطينية، حيث التاريخ يلتقي بالحداثة. استمتع بجولاتك بين شوارعها المليئة بالمقاهي، المطاعم، والمعالم السياحية التي تبرز جمال فلسطين.", 
       id: 3,  
    },
    {
        imgSrc: "https://i.pinimg.com/736x/42/7e/90/427e904f48a698bf1229cacd211ce628.jpg",
        category: "القدس",
        title: "القدس: عاصمة فلسطين وقبة الصخرة، رمز الإيمان والتاريخ!",
        date: "12 12 2024",
        description: "اكتشف قدسية القدس، عاصمة فلسطين، التي تضم قبة الصخرة، معلم ديني وتاريخي يعكس الروحانية العميقة والتاريخ الغني للمدينة. في قلبها، تلتقي الأديان والثقافات لتروي قصصًا عن الإيمان والحضارة.",
        id: 4,  
      },
      {
      imgSrc: "https://i.pinimg.com/736x/73/99/91/739991feadb20ed432f37f197e7aef2d.jpg",
      category: "قلقيلية",
      title:"قلقيلية: المدينة التي تحتوي على حديقة الحيوانات الوحيدة في فلسطين!" ,
      date: "12 12 2024",
      description: "هل تعلم أن قلقيلية تضم حديقة الحيوانات الوحيدة في فلسطين؟ اكتشف هذه المدينة الساحرة التي تجمع بين الطبيعة، الترفيه، وأجواء العائلة!",
      id: 5,  
    },
      {
        imgSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/3f/3f/a3.jpg",
        category: "اريحا",
        title: "هل سمعت عن المدينة الأقدم في العالم؟ اكتشف أريحا وسر ينبوع الحياة فيها!",
        date: "12 12 2024",
        description: "تعرف على أريحا، المدينة التي تحمل لقب الأقدم عالميًا، واكتشف سر عيون الماء التي جعلتها واحة خضراء في قلب الصحراء. تجربة فريدة تجمع بين التاريخ والطبيعة!",
        id: 6,  
      },
    {
    
      imgSrc: "https://i.pinimg.com/736x/16/3d/71/163d715e1d5048f99ece4f7d7c215096.jpg",
      category: "طولكرم",
      title: "طولكرم: مدينة الهدوء وعاصمة الزيتون الفلسطيني!",
      date: "12 12 2024",
      description: "اكتشف جمال طولكرم، المدينة التي تُلقب بعاصمة الزيتون الفلسطيني. من حقولها الخضراء إلى أسواقها الشعبية، تجربة مليئة بالهدوء والجمال الطبيعي.",
      id: 7,  
    },
   
    {
        imgSrc: "https://i.pinimg.com/236x/c3/ec/44/c3ec44d8dada319b4f7b4154922190a6.jpg",
        category: "نابلس",
        title: "نابلس: مدينة التراث والفن الفلسطيني بين الماضي والحاضر!",
        date: "12 12 2024",
        description: "هل تعرف أن نابلس هي مركز الثقافة الفلسطينية؟ اكتشف مدينة التراث والفن التي تحكي قصصًا عبر العصور! وتورث عبر الاجيال جيل بعد جيل",
        id: 8,  
      },
  ];

  const [filterValue, setFilterValue] = useState("الكل");

  const filteredPosts = posts.filter(post => {
    if (filterValue === "الكل") {
      return true;
    }
    return post.category === filterValue;
  });

  return (
    <div>
       <PostFilter setFilterValue={setFilterValue} />
      <section className="post-container">
        {filteredPosts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id}>  
            <PostBox {...post} />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default PostContainer;

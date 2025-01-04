import React from 'react';
import Card from '../Card/Card'; 

const Touristplaces = () => {

  const places = [
    // نابلس
    {
      id: 1,
      img: '/images/a1.png',
      name: 'جبل جرزيم',
      loc: 'نابلس',
      site: 'https://www.google.com/maps?q=32.2341,35.2580',    
    },
    {
      id: 2,
      img: '/images/a2.jpg',
      name: 'البلدة القديمة',
      loc: 'نابلس',
      site: 'https://www.google.com/maps?q=32.2211,35.2623',    
    },
    {
      id: 3,
      img: '/images/a3.jpg',
      name: 'منتزه القفزة',
      loc: 'نابلس',
      site: 'https://www.google.com/maps?q=32.2212,35.2534',    
    },
    // رام الله
    {
      id: 4,
      img: '/images/b1.jpg',
      name: 'سرية رام الله',
      loc: 'رام الله',
      site: 'https://www.google.com/maps?q=31.9075,35.2061',  
    },
    {
      id: 5,
      img: '/images/b3.jpg',
      name: 'الميدان المركزي',
      loc: 'رام الله',
      site: 'https://www.google.com/maps?q=31.9031,35.2077',    
    },
    {
      id: 6,
      img: '/images/b2.jpg',
      name: 'حديقة الاستقلال',
      loc: 'رام الله',
      site: 'https://www.google.com/maps?q=31.9070,35.2067',    
    },
    // الخليل
    {
      id: 7,
      img: '/images/c1.jpg',
      name: 'الحرم الإبراهيمي',
      loc: 'الخليل',
      site: 'https://www.google.com/maps?q=31.7101,35.2101',    
    },
    {
      id: 8,
      img: '/images/c2.jpg',
      name: 'سوق البلدة القديمة',
      loc: 'الخليل',
      site: 'https://www.google.com/maps?q=31.7116,35.2125',     
    },
    {
      id: 9,
      img: '/images/c3.png',
      name: 'تل الرميدة',
      loc: 'الخليل',
      site: 'https://www.google.com/maps?q=31.7236,35.2054', 
    },
    // سلفيت
    {
      id: 10,
      img: '/images/مدينة سلفيت القديمة.jpg',
      name: 'مدينة سلفيت القديمة',
      loc: 'سلفيت',
      site: 'https://www.google.com/maps?q=32.0533,35.2081',     
    },
    {
      id: 11,
      img: '/images/تل الضمر1.jpg',
      name: 'تل الضمر',
      loc: 'سلفيت',
      site: 'https://www.google.com/maps?q=32.0844,35.2065',    
    },
    {
      id: 12,
      img: '/images/حديقة سلفيت.jpg',
      name: 'حديقة البلدية',
      loc: 'سلفيت',
      site: 'https://www.google.com/maps?q=32.0601,35.2209',    
    },
    // بيرزيت
    {
      id: 13,
      img: '/images/جامعة بيرزيت.jpg',
      name: 'جامعة بيرزيت',
      loc: 'بيرزيت',
      site: 'https://www.google.com/maps?q=31.9509,35.2005', 
    },
    {
      id: 14,
      img: '/images/قرية بيتين1.jpg',
      name: 'قرية بيتين',
      loc: 'بيرزيت',
      site: 'https://www.google.com/maps?q=31.9563,35.2328', 
    },
    {
      id: 15,
      img: '/images/متحف جامعة بيرزيت.webp',
      name: 'متحف بيرزيت الجامعي',
      loc: 'بيرزيت',
      site: 'https://www.google.com/maps?q=31.9550,35.1983', 
    },
    // طولكرم
    {
      id: 16,
      img: '/images/سوق طولكرم القديم.jpg',
      name: 'سوق طولكرم القديم',
      loc: 'طولكرم',
      site: 'https://www.google.com/maps?q=32.3109,35.0123', 
    },
    {
      id: 17,
      img: '/images/تل_ الرماة.webp',
      name: 'تل الرماة',
      loc: 'طولكرم',
      site: 'https://www.google.com/maps?q=32.3275,35.0811', 
    },
    {
      id: 18,
      img: '/images/حديقة الامير.jpg',
      name: 'حديقة الأمير',
      loc: 'طولكرم',
      site: 'https://www.google.com/maps?q=32.3031,35.0184', 
    },
    // بيت لحم
    {
      id: 19,
      img: '/images/كنيسة المهد.webp',
      name: 'كنيسة المهد',
      loc: 'بيت لحم',
      site: 'https://www.google.com/maps?q=31.7051,35.2073', 
    },
    {
      id: 20,
      img: '/images/حقل الرعاة.jpg',
      name: 'حقل الرعاة',
      loc: 'بيت لحم',
      site: 'https://www.google.com/maps?q=31.7046,35.2020', 
    },
    {
      id: 21,
      img: '/images/جدار الفصل العنصري.jpg',
      name: 'جدار الفصل',
      loc: 'بيت لحم',
      site: 'https://www.google.com/maps?q=31.7059,35.1894', 
    },
    // أريحا
    {
      id: 22,
      img: '/images/عين السلطان.jpg',
      name: 'نبع عين السلطان',
      loc: 'أريحا',
      site: 'https://www.google.com/maps?q=31.8794,35.4441', 
    },
    {
      id: 23,
      img: '/images/تل السلطان.jpg',
      name: 'تل السلطان',
      loc: 'أريحا',
      site: 'https://www.google.com/maps?q=31.8502,35.4440', 
    },
    {
      id: 24,
      img: '/images/وادي القلط.jpg',
      name: 'وادي القلط',
      loc: 'أريحا',
      site: 'https://www.google.com/maps?q=31.8212,35.4640', 
    },
  ];

  return (
    <div className='card-boxx'>
      {places.map((place) => (
        <Card
          key={place.id}
          id={place.id}
          img={place.img}
          name={place.name}
          loc={place.loc}
          site={place.site}
        />
      ))}
    </div>
  );
};

export default Touristplaces;

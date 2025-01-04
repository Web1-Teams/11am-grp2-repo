import React from 'react';
import Card from './components/Card/Card';

const Touristplaces = () => {
 
  const places = [
    // نابلس
    {
      id: 1,
      img: '/images/a1.png',
      name: 'جبل جرزيم',
      loc: 'نابلس',
      site: 'https://example.com/جرزيم',
    },
    {
      id: 2,
      img: '/images/a2.jpg',
      name: 'البلدة القديمة',
      loc: 'نابلس',
      site: 'https://example.com/البلدة-القديمة',
    },
    {
      id: 3,
      img: '/images/a3.jpg',
      name: 'منتزه القفزة',
      loc: 'نابلس',
      site: 'https://example.com/منتزه-القفزة',
    },
    // رام الله
    {
      id: 4,
      img: '/images/b1.jpg',
      name: 'سرية رام الله',
      loc: 'رام الله',
      site: 'https://example.com/سرية-رام-الله',
    },
    {
      id: 5,
      img: '/images/b3.jpg',
      name: 'الميدان المركزي',
      loc: 'رام الله',
      site: 'https://example.com/الميدان-المركزي',
    },
    {
      id: 6,
      img: '/images/b2.jpg',
      name: 'حديقة الاستقلال',
      loc: 'رام الله',
      site: 'https://example.com/حديقة-الاستقلال',
    },
    // الخليل
    {
      id: 7,
      img: '/images/c1.jpg',
      name: 'الحرم الإبراهيمي',
      loc: 'الخليل',
      site: 'https://example.com/الحرم-الإبراهيمي',
    },
    {
      id: 8,
      img: '/images/c2.jpg',
      name: 'سوق البلدة القديمة',
      loc: 'الخليل',
      site: 'https://example.com/سوق-البلدة-القديمة',
    },
    {
      id: 9,
      img: '/images/c3.png',
      name: 'تل الرميدة',
      loc: 'الخليل',
      site: 'https://example.com/تل-الرميدة',
    },
    // سلفيت
    {
      id: 10,
      img: '/images/مدينة سلفيت القديمة.jpg',
      name: 'مدينة سلفيت القديمة',
      loc: 'سلفيت',
      site: 'https://example.com/مدينة-سلفيت-القديمة',
    },
    {
      id: 11,
      img: '/images/تل الضمر1.jpg',
      name: 'تل الضمر',
      loc: 'سلفيت',
      site: 'https://example.com/تل-الضمر',
    },
    {
      id: 12,
      img: '/images/حديقة سلفيت.jpg',
      name: 'حديقة البلدية',
      loc: 'سلفيت',
      site: 'https://example.com/حديقة-البلدية',
    },
    // بيرزيت
    {
      id: 13,
      img: '/images/جامعة بيرزيت.jpg',
      name: 'جامعة بيرزيت',
      loc: 'بيرزيت',
      site: 'https://example.com/جامعة-بيرزيت',
    },
    {
      id: 14,
      img: '/images/قرية بيتين1.jpg',
      name: 'قرية بيتين',
      loc: 'بيرزيت',
      site: 'https://example.com/قرية-بيتين',
    },
    {
      id: 15,
      img: '/images/متحف جامعة بيرزيت.webp',
      name: 'متحف بيرزيت الجامعي',
      loc: 'بيرزيت',
      site: 'https://example.com/متحف-بيرزيت-الجامعي',
    },
    // طولكرم
    {
      id: 16,
      img: '/images/سوق طولكرم القديم.jpg',
      name: 'سوق طولكرم القديم',
      loc: 'طولكرم',
      site: 'https://example.com/سوق-طولكرم-القديم',
    },
    {
      id: 17,
      img: '/images/تل_ الرماة.webp',
      name: 'تل الرماة',
      loc: 'طولكرم',
      site: 'https://example.com/تل-الرماة',
    },
    {
      id: 18,
      img: '/images/حديقة الامير.jpg',
      name: 'حديقة الأمير',
      loc: 'طولكرم',
      site: 'https://example.com/حديقة-الأمير',
    },
    // بيت لحم
    {
      id: 19,
      img: '/images/كنيسة المهد.webp',
      name: 'كنيسة المهد',
      loc: 'بيت لحم',
      site: 'https://example.com/كنيسة-المهد',
    },
    {
      id: 20,
      img: '/images/حقل الرعاة.jpg',
      name: 'حقل الرعاة',
      loc: 'بيت لحم',
      site: 'https://example.com/حقل-الرعاة',
    },
    {
      id: 21,
      img: '/images/جدار الفصل العنصري.jpg',
      name: 'جدار الفصل',
      loc: 'بيت لحم',
      site: 'https://example.com/جدار-الفصل',
    },
    // أريحا
    {
      id: 22,
      img: '/images/عين السلطان.jpg',
      name: 'نبع عين السلطان',
      loc: 'أريحا',
      site: 'https://example.com/عين-السلطان',
    },
    {
      id: 23,
      img: '/images/تل السلطان.jpg',
      name: 'تل السلطان',
      loc: 'أريحا',
      site: 'https://example.com/تل-السلطان',
    },
    {
      id: 24,
      img: '/images/وادي القلط.jpg',
      name: 'وادي القلط',
      loc: 'أريحا',
      site: 'https://example.com/وادي-القلط',
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

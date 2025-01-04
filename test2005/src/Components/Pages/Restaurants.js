
import React, { useState } from 'react';
import Header from '../Header/Header'
import Card from '../Card/Card';
import '../Card/cards.css'
import Navbar from '../Navbar/Navbar';
import CardFilter from '../CardFilter/CardFilter';

const Restaurants = () => {

    const [filterValue, setFilterValue] = useState("");

    const restaurants = [
        {
            category:"القدس",
            id: '1',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrD0EtB2pD2F2kIvNwB2lqCOWXTpeqjqZfd8OK-GvaCB0S1g4EOwO6VP8hxMpSq1vvhTM&usqp=CAU',
            name: 'Al-Mihbash Resturant',
            loc: 'الموقع:طريق نابلس 19، القدس',
            site: 'https://www.facebook.com/mihbash/',
        },
        {
            category:"القدس",
            id: '2',
            img: 'https://lh3.googleusercontent.com/p/AF1QipMOJhvWUvUIsDC5X5bvul7wd4eE8MOssKaV2TB8=s680-w680-h510 ',
            name: 'Sarwa Street Kitchen',
            loc: 'الموقع:شارع صلاح الدين 42، القدس',
            site: 'https://www.facebook.com/@sarwarstreetkitchen/',
        },
        {
            category:"القدس",
            id: '3',
            img: 'https://lh3.googleusercontent.com/p/AF1QipNV5SfQTZnVQ_kRxItjMiOCiuJdE8G6x-KrygP7=s680-w680-h510',
            name: 'Castalita Restaurant',
            loc: 'الموقع:طريق رام الله، القدس',
            site: 'https://castalita.com/',
        },
        {
            category:"القدس",
            id: '4',
            img: 'https://lh3.googleusercontent.com/p/AF1QipNiW1QYgAMyPM4wXoDpCut5WI8IlYnb_yALrkhZ=s680-w680-h510',
            name: 'Lina Restaurant',
            loc: 'الموقع:الخانقة 41، القدس',
            site: 'https://www.facebook.com/lina1hummus/',
        },
        {
            category:"القدس",
            id: '5',
            img: 'https://lh3.googleusercontent.com/p/AF1QipN9qqJOcsZXD2qdRr1c-4vTYCjs1zF-vT-3MmHU=s680-w680-h510',
            name: 'Alayed resturant',
            loc: 'الموقع: jerusalem- haneviim 2',
            site: 'https://www.facebook.com/alayedrestaurant/',
        },
        {
            category:"القدس",
            id: '6',
            img: 'https://lh3.googleusercontent.com/p/AF1QipPhbMN_1KfCT7DttENxLWNPlSdpHOlUrbzO6ZZs=s680-w680-h510',
            name: 'مطعم الف ليلة وليلة',
            loc: 'لموقع : نابلس شارع تونس',
            site: 'https://www.facebook.com/alf.layla.res/?locale=ar_AR',
        },
        {
            category:"القدس",
            id: '7',
            img: 'https://lh3.googleusercontent.com/p/AF1QipN-N9onsY6k6r2OJHFGDuHT8QpkuiSf2995kNok=s680-w680-h510',
            name: 'W-Restaurant',
            loc: ' الموقع: 66JP+394، نابلس ',
            site: 'https://www.facebook.com/wrestaurantpal/',
        },
        {
            category:"نابلس",
            id: '8',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOpAktlo1MzUdnsLeVAE413d79ss8Y-iUHoq9Q=s680-w680-h510',
            name: 'Heart Attack',
            loc: 'الموقع:رفيديا بجانب المستشفى العربي التخصصي ',
            site: 'href="https://www.facebook.com/profile.php?id=100068672408565',
        },
        {
            category:"نابلس",
            id: '9',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOac8aUhz6lE1C2Hfwa8uY5U3bnUN73SO7ZknvU=s680-w680-h510',
            name: 'Orgada Burgers',
            loc: 'الموقع: Abdul Rahim Mahmoud، نابلس',
            site: 'https://www.facebook.com/orgadaburger/?locale=ar_AR',
        },
        {
            category:"نابلس",
            id: '10',
            img: 'https://lh3.googleusercontent.com/p/AF1QipMgJLbPi3aaU3JSrlaVORWUUtSVCmFR35FSQkMH=s680-w680-h510',
            name: 'Tanoreen restaurant',
            loc: 'الموقع:66GP+XCW، نابلس',
            site: 'https://www.facebook.com/Tanooren/',
        },
        {
            category:"الخليل",
            id: '11',
            img: 'https://lh3.googleusercontent.com/p/AF1QipN5RrDuKYVwMgvNmlyFU1wQztfOp3V38Zv_KErg=s680-w680-h510',
            name: 'مطعم فيلا كافيه',
            loc: 'الموقع : H432+JGG, ras aljora street',
            site: 'https://www.facebook.com/Villa.restaurant.cafe/?locale=ar_AR',
        },
        {
            category:"الخليل",
            id: '12',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOLidDktzE9zF-eBKZUBIrg4OTRjSC2XUFIcpaR=s680-w680-h510',
            name: 'مطعم بيت الياسمين',
            loc: 'الموقع:  H442+42V، الخليل',
            site: 'https://www.facebook.com/beet.alyasamen/',
        },
        {
            category:"الخليل",
            id: '13',
            img: 'https://lh3.googleusercontent.com/p/AF1QipM-z-Unm_gyPPsVxlWh7EX7ESDb3vw0BILNU9fO=s680-w680-h510',
            name: 'شاورما ستورم',
            loc: 'الموقع: عمارة الاسراء-عين سلره,الخليل',
            site: 'https://www.facebook.com/shwarmastorm/?locale=ar_AR',
        },
        {
            category:"الخليل",
            id: '14',
            img: 'https://lh3.googleusercontent.com/p/AF1QipPZBeCjGpyIriqvMnwtubj1kQeYUNdhs6hCioum=s680-w680-h510',
            name: 'Yarz restaurant and cafe',
            loc: 'الموقع: Issa street',
            site: 'https://www.facebook.com/yarzRestaurant.Cafe/?locale=ar_AR',
        },
        {
            category:"الخليل",
            id: '15',
            img: 'https://lh3.googleusercontent.com/p/AF1QipNTGmHu4C0i8eV_18ONdvCdKKdYc9tlWDBfqtuZ=s680-w680-h510',
            name: 'مطعم الديرة',
            loc: 'الموقع:  G3MX+3QJ، الخليل',
            site: 'https://www.facebook.com/p/%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D9%84%D8%AF%D9%8A%D8%B1%D8%A9-Alderah-Restaurant-100063768351933/?locale=ar_AR',
        },
        {
            category:"بيت لحم",
            id: '16',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOy7jqAGPPWNTZhob8bCGP75xyVfvbFnX8E9ME=s680-w680-h510',
            name: 'Piatto Restaurant & Cafe',
            loc: 'الموقع:  P57V+5V4 al-Sahel Street, Beit Jala، بيت لحم',
            site: 'https://www.facebook.com/PiattoPS/',
        },
        {
            category:"بيت لحم",
            id: '17',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOVR7ruy4gQ2yERx6ZNgL3zxxcaE6MGgbol6yCx=s680-w680-h510',
            name: 'Julia Bethlehem',
            loc: 'الموقع:  P59R+VM5, Bir Una Street, بيت لحم',
            site: 'https://www.facebook.com/p/Julia-Bethlehem-100078133267161/',
        },
        {
            category:"بيت لحم",
            id: '18',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOIicYTMLVw7QAYwBK96yziio2lPtSrm4A01BEn=s680-w680-h510',
            name: 'Viendo Restaurant & Cafe',
            loc: 'الموقع: P672+C64، بيت لحم',
            site: 'https://www.facebook.com/ViendoRestaurant',
        },
        {
            category:"بيت لحم",
            id: '19',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOgBEEVi5KG6yme42Q7g-dP6xGWlsjZ-DZ7b0wC=s680-w680-h510',
            name: 'Tent Restaurant',
            loc: 'الموقع: bethlehem Beitshaour bethsahour',
            site: 'https://tent.ps/',
        },
        {
            category:"بيت لحم",
            id: '20',
            img: 'https://lh3.googleusercontent.com/p/AF1QipMpfX0AU4xwRCR0xKJS1AZUe5i4Tdh8mJpe-RFM=s680-w680-h510',
            name: 'OTTO',
            loc: 'الموقع: Karkafe St, بيت لحم',
            site: 'https://www.instagram.com/ottopizzaotto',
        },
        {
            category:"قلقيلية",
            id: '21',
            img: 'https://lh3.googleusercontent.com/p/AF1QipNkTSUW7wSkRkE64bxkWLcxrQHmqXekuDS5eHSY=s680-w680-h510',
            name: 'مطعم وكوفي شوب البيت',
            loc: 'الموقع: صوفين، قلقيلية',
            site: 'https://www.facebook.com/al.baiyte/',
        },
        {
            category:"قلقيلية",
            id: '22',
            img: 'https://lh3.googleusercontent.com/p/AF1QipPoBKweXxrIGKLiwNAXA7_kDKr2JSOuQucFw_xb=s680-w680-h510',
            name: 'مطعم الديوان',
            loc: 'الموقع: الغربي, Main Street, قلقيلية',
            site: 'https://www.facebook.com/Al.Dewan.Qalqilyah/?locale=ar_AR',
        },
        {
            category:"قلقيلية",
            id: '23',
            img: 'https://lh3.googleusercontent.com/p/AF1QipNopoVZ-pcpThFy92msekJh2iLQGjRZ3euJD8wf=s680-w680-h510',
            name: 'مطعم صوفين',
            loc: 'الموقع: قلقيلية الدوار',
            site: 'https://www.facebook.com/SofinRestaurantCafe/?locale=ar_AR',
        },
        {
            category:"قلقيلية",
            id: '24',
            img: 'https://lh3.googleusercontent.com/p/AF1QipPTU_q8YT11yJLhFyX8lYM9NNEOyCIQUbXuUH_Q=s680-w680-h510',
            name: 'كبة وبستوني كافي',
            loc: 'الموقع: الشارع الغربي، Qalqilyah',
            site: 'https://www.facebook.com/kuba.wbastoni/?locale=ar_AR',
        },
        {
            category:"رام الله والبيرة",
            id: '25',
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/6b/4d/28/step-into-raw-mediterranean.jpg?w=900&h=500&s=1',
            name: 'Zest Restaurant',
            loc: '1 Issa Ziadeh Street',
            site: 'https://www.google.com/maps/place/Zest+Resturant+Ramallah/@31.9017431,35.2029756,17z/data=!3m1!4b1!4m6!3m5!1s0x151d2b2ec862df91:0x1901796a73a1474d!8m2!3d31.9017386!4d35.2004007!16s%2Fg%2F11gr2w6w3j?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D',
        },
        {
            category:"رام الله والبيرة",
            id: '26',
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/83/e6/b9/alriad-ramallah-garden.jpg?w=900&h=-1&s=1',
            name: 'AL-Riad Ramallah',
            loc: 'الموقع:Saint Andrew Street',
            site: 'https://maps.app.goo.gl/qFcZCimGJdZcHx3w6',
        },
        {
            category:"رام الله والبيرة",
            id: '27',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/90/dd/fd/interno-del-ristorante.jpg',
            name: 'Darna Restaurant',
            loc: 'الموقع:Al Sahel Street',
            site: 'https://maps.app.goo.gl/6ndTK5pK4iA5jTpW8',
        },
        {
            category:"رام الله والبيرة",
            id: '28',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2j53hQPR01qENUQztZcLDXK2Cfs0N-nOXQ&s',
            name: 'Bahri Restaurant',
            loc: 'الموقع:Emil Habibi Street Al-Bireh Governorate',
            site: 'https://maps.app.goo.gl/fMzN9Wz2ho6rh8uTA',
        },
        {
            category:"رام الله والبيرة",
            id: '29',
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/7e/1f/41/img-20181124-151437-largejpg.jpg?w=1000&h=-1&s=1',
            name: 'Pronto',
            loc: 'الموقع:Jaffa Street',
            site: 'https://maps.app.goo.gl/ciLYppzyT6kgSKcK8',
        },
        {
            category:"طوباس",
            id: '30',
            img: 'https://lh3.googleusercontent.com/p/AF1QipMTw-d_oear7cyOwaHmZY5EvsVqjry8isMEnKMR=s680-w680-h510',
            name: 'مطعم وشاورما ابو شكري',
            loc: 'الموقع:  89C9+CXP، طوباس',
            site: 'https://www.facebook.com/abo.shokrie/?locale=ar_AR',
        },
        {
            category:"طوباس",
            id: '31',
            img: 'https://lh3.googleusercontent.com/p/AF1QipNTf9hu0nzrz3rQmFts_T0wV2-NC9WTZCXkoHED=s680-w680-h510',
            name: 'بيتزا الانيس',
            loc: 'الموقع: طوباس- قرب المستشفى التركي - مُقابل مصنع الإسمنت',
            site: 'https://www.facebook.com/alanees.resturant/?locale=ar_AR',
        },
        {
            category:"طوباس",
            id: '32',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28K3Snx-NnaN4yqQVv5a7IrNOl4t9ReAGnQ&s',
            name: 'Donattelo Pizza',
            loc: 'لموقع: طوباس -الشارع الرئيسي-مجمع عصام النمر-مقابل السوق الحرة',
            site: 'https://www.instagram.com/donatellopizza2023/',
        },
        {
            category:"طوباس",
            id: '33',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxS_7jUBp1sBD0JRKfFTjsndkZEDXtUv6rl1e9wcTzi4JAc8UgT3YaLlUR75afMTi83_k&usqp=CAU',
            name: 'مطعم فلسطين',
            loc: 'الموقع: طوباس-الشارع الرئيسي',
            site: 'https://www.facebook.com/p/%D9%85%D8%B7%D8%B9%D9%85-%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86_%D8%B7%D9%88%D8%A8%D8%A7%D8%B3-100033974809207/',
        },
        {
            category:"جنين",
            id: '34',
            img: 'https://lh3.googleusercontent.com/p/AF1QipPLFaXoZtgcwj0We_LLLtH44A1i9vDniyOO1cJi=s680-w680-h510',
            name: 'Teen wo Zaytoon Restaurant',
            loc: 'الموقع:  شارع الناصرة دوار الزايد،، جنين',
            site: 'https://www.facebook.com/teenozaytoon1/?locale=ar_AR',
        },
        {
            category:"جنين",
            id: '38',
            img: 'https://lh3.googleusercontent.com/p/AF1QipObnex5KnZsEutOtg7f7IFsRqD4U1sLQTU_wfs=s680-w680-h510',
            name: 'Ali-Baba Palace',
            loc: 'لموقع: جنين,جلمه،',
            site: 'https://www.facebook.com/AliBabaPalacePS/',
        },
        {
            category:"جنين",
            id: '39',
            img: 'https://lh3.googleusercontent.com/p/AF1QipNsMpXBAeh91XaHkfTqA8gommNNHbtypAu7kMr9=s680-w680-h510',
            name: 'مقهى دمشق',
            loc: 'الموقع: F75X+MW6، Nablus Street Jenin. جنين',
            site: 'https://www.facebook.com/demashq.caffee/',
        },
        {
            category:"جنين",
            id: '40',
            img: 'https://lh3.googleusercontent.com/p/AF1QipPaa1K7sVPBUugnCzydnmW7pMqBxn82Nz4gxYN-=s680-w680-h510',
            name: 'Beef Burger PS',
            loc: 'الموقع: Yahya Ayyash Circle Next to Oordeoo Company، جنين',
            site: 'https://www.facebook.com/beefburgerjenin/',
        },
        {
            category:"جنين",
            id: '41',
            img: 'https://lh3.googleusercontent.com/p/AF1QipPPeFUraFdouDxGhCAE9aR12rYvEL1SC-rIkJBb=s680-w680-h510',
            name: 'CTR-Restaurant',
            loc: 'الموقع: F78R+X6Q، حيفا، جنين',
            site: 'https://www.facebook.com/CTRPalestine/',
        },
        {
            category:"طولكرم",
            id: '42',
            img: 'https://lh3.googleusercontent.com/p/AF1QipMRG6cJoRl-8ZUImD0QxZFMkW3cC9dv8FYllwOO=s680-w680-h510',
            name: 'Level 7, Restaurant and Café',
            loc: 'الموقع: Nablus street Dr. Riyad Shalabi Building',
            site: 'https://www.facebook.com/p/Level-7-Restaurant-100048752923858/',
        },
        {
            category:"طولكرم",
            id: '43',
            img: 'https://lh3.googleusercontent.com/p/AF1QipMGB-BWM-BaJQzFli0ALLFBXdthA2hpZ7fMJD22=s680-w680-h510',
            name: 'Cest La Vie Restaurant & Cafe',
            loc: 'الموقع: Nablus street',
            site: 'https://www.facebook.com/RestaurantCelavie/?locale=ar_AR',
        },
        {
            category:"طولكرم",
            id: '44',
            img: 'https://lh3.googleusercontent.com/p/AF1QipPMLl-wbvJOgfmVP-PtKg1NFo3dwkq9C7i-iL7x=s680-w680-h510',
            name: 'family land &bowling',
            loc: 'الموقع: طولكرم ،شارع نابلس طولكرم',
            site: 'https://www.facebook.com/flbbowling',
        },
        {
            category:"طولكرم",
            id: '45',
            img: 'https://lh3.googleusercontent.com/p/AF1QipMES1YbUSiEgc6yqNpmct5LIqswlXk5Qqlb-EmN=s680-w680-h510',
            name: 'مطعم الطنطورة',
            loc: 'الموقع:مجمع الخاروف شارع المستشفى',
            site: 'https://www.facebook.com/tantoora/',
        },
        {
            category:"طولكرم",
            id: '46',
            img: 'https://lh3.googleusercontent.com/p/AF1QipPFaItP0YMWaj6ck3DbOd2gGi-GidJDS6YdpQor=s680-w680-h510',
            name: 'Pizza Kytaro',
            loc: 'الموقع:  828F+HJ7, طولكرم، الحي الغربي ، شارع قاقون, طولكرم',
            site: 'https://www.facebook.com/Pizza.kytaro/',
        },
        {
            category:"اريحا",
            id: '47',
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/65/8e/6d/caption.jpg?w=1000&h=-1&s=1',
            name: '21café Jericho',
            loc: 'الموقع:أريحا-شارع القدس',
            site: 'https://www.facebook.com/21cafejericho/?locale=ar_AR',
        },
        {
            category:"اريحا",
            id: '48',
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/a0/c3/21/grilled-vegetable.jpg?w=1000&h=-1&s=1',
            name: 'Temptation Restaurant',
            loc: 'الموقع:أريحا-تل-السلطان',
            site: 'https://temptationcenter.com/restaurant/',
        },
        {
            category:"اريحا",
            id: '49',
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/44/26/9d/limona.jpg?w=1000&h=-1&s=1',
            name: 'Limona',
            loc: 'الموقع:أريحا-النعيمة-شارع قصر هشام',
            site: 'https://www.facebook.com/limona.jericho/',
        },
        {
            category:"اريحا",
            id: '50',
            img: 'https://scontent.fjrs29-1.fna.fbcdn.net/v/t1.6435-9/69068688_118250626193876_412706100417134592_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N2yrD9xNZgoQ7kNvgFSYTyI&_nc_zt=23&_nc_ht=scontent.fjrs29-1.fna&_nc_gid=AQ_OQ0zg6CKsN0f3WU5ixJO&oh=00_AYCkcfPYK3aDja2RiuvwyLMEmuxONxcDMxzMXPdvZfBKcA&oe=679F38AA',
            name: 'Essawi Restaurant',
            loc: 'الموقع:أريحا-الساحة العامة',
            site: 'https://www.facebook.com/p/%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D9%84%D8%B9%D9%8A%D8%B3%D8%A7%D9%88%D9%8A-Essawi-Restaurant-100062958982912/',
        },
        {
            category:"اريحا",
            id: '51',
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9c/6f/29/photo6jpg.jpg?w=900&h=500&s=1',
            name: 'Waffella Shop',
            loc: 'الموقع:أريحا-شارع القدس',
            site: 'https://www.instagram.com/p/Co7BuNTojHM/',
        },
        {
            category:"سلفيت",
            id: '52',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOXlRp-vkHo47IW6FvGdyidJoNbJt8eNb4eoCBH=s680-w680-h510',
            name: 'Tadwega',
            loc: 'الموقع:سلفيت-شارع الداخلية القديمة',
            site: 'https://www.facebook.com/Tadwega/',
        },
        {
            category:"سلفيت",
            id: '53',
            img: 'https://lh3.googleusercontent.com/p/AF1QipNuCfKzj4ZYXEQPvScsZuckpt2amC9SavubYMYM=s680-w680-h510',
            name: 'BeBo Coffee & Toast',
            loc: 'الموقع:سلفيت-شارع الداخلية',
            site: 'https://www.facebook.com/TCBeBo/?locale=pt_PT&_rdr',
        },
        {
            category:"سلفيت",
            id: '54',
            img: 'https://media.gemini.media/img/large/2014/10/16/2014_10_16_15_34_0_546.jpg',
            name: 'Japanese Restaurant',
            loc: 'الموقع:سلفيت-شارع الداخلية',
            site: 'https://www.facebook.com/Japanese.restaurant1/',
        },
        {
            category:"سلفيت",
            id: '55',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOXDBPIesudT6qTj3gVeocqqafRjKf3QI3tb2kL=s680-w680-h510',
            name: 'مطعم ومشاوي أبو صبحي',
            loc: 'الموقع:سلفيت-شارع أبو جهاد',
            site: 'https://www.facebook.com/p/%D9%85%D8%B7%D8%B9%D9%85-%D9%88%D9%85%D8%B4%D8%A7%D9%88%D9%8A-%D8%A3%D8%A8%D9%88-%D8%B5%D8%A8%D8%AD%D9%8A-%D8%B3%D9%84%D9%81%D9%8A%D8%AA-100072271552010/?locale=ar_AR',
        },
        
       
    ];


    
    
      
       
     const filteredRestaurants = restaurants.filter((restaurant) =>
          filterValue === "" || restaurant.category=== filterValue
      );

    

    return (
        <div  className='parent-container'>
            <Navbar/>
            <Header
            
               title = 'أهلا بك في مطاعمنا'
               subtitle = 'نقدم لك نخبة من مطاعم فلسطين في كافة مدن الضفة الغربية'
               backgroundImage ="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/1d/27/5e/delicious-steak-bernaise.jpg?w=600&h=-1&s=1"
            />
            
            <h1>مطاعم الضفة الغربية</h1>
            <CardFilter setFilterValue={setFilterValue} />
            
            <div className="card-container">
            {filteredRestaurants.map((restaurant) => (
                    <Card 
                        key={restaurant.id}
                        id={restaurant.id}
                        category={restaurant.category}
                        img={restaurant.img}
                        name={restaurant.name}
                        loc={restaurant.loc}
                        site={restaurant.site}
                    />
                ))}
            </div>
           
        </div>
    );
    
};

export default Restaurants;

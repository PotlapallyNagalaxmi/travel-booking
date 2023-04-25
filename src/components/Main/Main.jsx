import React,{useEffect} from 'react';
import './main.css';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';
import img1 from '../../Asserts/img1.jfif';
import img2 from '../../Asserts/img2.jfif';
import img3 from '../../Asserts/img3.jpg';
import img4 from '../../Asserts/img4.avif';
import img5 from '../../Asserts/img5.jfif';
import img6 from '../../Asserts/img6.jfif';
import img7 from '../../Asserts/img7.jfif';
import img8 from '../../Asserts/img8.jfif';
import img9 from '../../Asserts/img9.jfif';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Data = [
  {
    id:1,
    imgSrc:img1,
    destTitle:'Bora Bora',
    location:'New Zeland',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world.This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:2,
    imgSrc:img2,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Huayna Picchu is a mountain in peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
  },

  {
    id:3,
    imgSrc:img3,
    destTitle:'Great Barrier Reef',
    location:'Australia',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "lavish" and "beauty".Always intresting to be in this place.'
  },

  {
    id:4,
    imgSrc:img4,
    destTitle:'Cappadocia',
    location:'Turkey',
    grade:'CULTURAL RELAX',
    fees:'$800',
    description:'According to the world Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:5,
    imgSrc:img5,
    destTitle:'Guanajuato',
    location:'Mexio',
    grade:'CULTURAL RELAX',
    fees:'$1100',
    description:'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors availble.Always welcome.'
  },

  {
    id:6,
    imgSrc:img6,
    destTitle:'Cinque Terre',
    location:'Italy',
    grade:'CULTURAL RELAX',
    fees:'$840',
    description:'The vibrant hues of the houses are its beanchmark and explain the beaty of this place.Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here.Happy exploring great food!'
  },

  {
    id:7,
    imgSrc:img7,
    destTitle:'Angkor Wat',
    location:'Cambodia',
    grade:'CULTURAL RELAX',
    fees:'$790',
    description:'Angkot wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Coambodia.This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id:8,
    imgSrc:img8,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah jahan in memory of his wife Mumtaz, the monument is breathtakingly.'
  },

  {
    id:9,
    imgSrc:img9,
    destTitle:'Bali Island',
    location:'Indonesia',
    grade:'CULTURAL RELAX',
    fees:'$500',
    description:'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago.Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
  }
]

const Main = () => {
  //lets create a rect hook to add a scroll animation...
  useEffect(() => {
    Aos.init({duration:2000})
},[] )


  return (
    <section className='main container section'>

      <div className='secTitle'>
       <h3 data-aos='fade-right' className='title'>
        Most visited destinations
       </h3>
      </div>
      
      <div className='secContent grid'>
      
      {
        Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return (
              <div key={id} 
              data-aos='fade-up'className='singleDestination'>
               {/* here it will return single id from the map array*/}

               <div className='imgDiv'>
                 <img src={imgSrc} alt={destTitle} />
               </div>

               <div className='cardInfo'>
                 <h4 className='destTitle'>{destTitle} </h4>
                 <span className='continent flex'>
                   <HiOutlineLocationMarker className='icon'/>
                   <span className='name'>{location} </span>
                 </span>

                 <div className='fees flex'>
                  <div className='grade'>
                    <span>{grade} <small>+1</small></span>
                  </div>
                  <div className='price'>
                    <h5>{fees} </h5>
                  </div>
                 </div>

                 <div className='desc'>
                  <p>{description} </p>
                 </div>

                 <button className='btn flex'>
                 DETAILS <HiOutlineClipboardCheck className='icon'/>
                 </button>
               </div>
              </div>
            )
        })
      }
      </div>

    </section>
  )
}

export default Main;
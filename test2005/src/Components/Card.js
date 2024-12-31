import React from 'react';
import './cards.css'

const Card = (props) =>{
    return(
        <div  className='card-box'>
            <img src={props.img}  alt='img'    />
              <div className='desc'>
                 <h2 className='name' >{props.name}</h2>
                 <p  className='loc'>{props.loc}</p>
                 <div >
                 <button className='btn'> قم بالتقييم</button>
                 </div>
                 <a  href={props.site}>الموقع</a>
              </div>
        </div>
    )
}
export default Card

import React from 'react';
import '../stylesheets/Testimony.css'

function Testimony(props){
    return(
      <div className='testimony-container'>
        <img className='testimony-imagen'
        src={require(`../images/testimony-${props.image}.jpeg`)}
        alt='Foto de Christina' />
        <div className='testimony-text-container'>
            <p className='testimony-name'>
              <strong>{props.name} </strong>en <strong>{props.country
              }</strong></p>
            <p className='job-testimony'>{props.job} en <strong>{props.company}</strong></p>
            <p className='text-testimony'>"{props.testimony}"</p>
        </div>
      </div>
    );
}
export default Testimony;
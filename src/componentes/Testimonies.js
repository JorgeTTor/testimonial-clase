import React from 'react';
import '../stylesheets/Testimony.css'

class Testimony extends React.Component {
  render() {

    return(
      <div className='testimony-container'>
        <img 
        className='testimony-imagen'
        src={require(`../images/testimony-${this.props.image}.jpeg`)}
        alt={`Foto de ${this.props.name}` } />
        <div className='testimony-text-container'>
            <p className='testimony-name'>
              <strong>{this.props.name} </strong>en <strong>{this.props.country
              }</strong></p>
            <p className='job-testimony'>{this.props.job} en <strong>{this.props.company}</strong></p>
            <p className='text-testimony'>"{this.props.testimony}"</p>
        </div>
      </div>
    );


  }
}

// function Testimony(props){
//     return(
//       <div className='testimony-container'>
//         <img className='testimony-imagen'
//         src={require(`../images/testimony-${props.image}.jpeg`)}
//         alt='Foto de Christina' />
//         <div className='testimony-text-container'>
//             <p className='testimony-name'>
//               <strong>{props.name} </strong>en <strong>{props.country
//               }</strong></p>
//             <p className='job-testimony'>{props.job} en <strong>{props.company}</strong></p>
//             <p className='text-testimony'>"{props.testimony}"</p>
//         </div>
//       </div>
//     );
// }
export default Testimony;
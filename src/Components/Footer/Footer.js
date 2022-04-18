import React from 'react'
import logo from './logo.jpg'

const Footer = () => {
  return (
    <>
    
     <footer>
         <div className='container text-center top'>
             <div className='img'>
                 <img src={logo} alt='' />
             </div>
             <p>2022. All rights reserved by Gabriel O.</p>
         </div>
     </footer>
    
    </>
  )
}

export default Footer
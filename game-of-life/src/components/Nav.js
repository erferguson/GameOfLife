import React from 'react'
import '../index.css'

export default class Nav extends React.Component {
   render(){
       return (
           <nav>
               <div className='navMain'>
                   <h4>created by:<a 
                    href='https://www.erferguson.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    >Eric Ferguson
                    </a>
                    </h4>
               </div>
           </nav>
       )
   }
}
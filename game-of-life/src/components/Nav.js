import React from 'react'

export default class Nav extends React.Component {
   render(){
       return (
           <nav>
               <div>
                    <h3>Eric Ferguson</h3>
               </div>
               <div>
                   <h4><a 
                    href='https://www.erferguson.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    >Portfolio
                    </a>
                    </h4>
               </div>
           </nav>
       )
   }
}
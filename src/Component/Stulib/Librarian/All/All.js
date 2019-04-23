import React from 'react';
import Cardlist from './Cardlist';



const All = () => 
{
  

    return (
      <div className ="tc">
     <p className='f4 ma0 dib link dim black grow pa3 pointer'>Paying More</p>
     <p className='f4 ma0 dib link dim black grow pa3 pointer'>Issue More</p>
     <p className='f4 ma0 dib link dim black grow pa3 pointer'>Recently Issue</p>
     <p className='f4 ma0 dib link dim black grow pa3 pointer'>-></p>
   <div className="mt4 tc" > 	
     <Cardlist />
   </div>
 
  </div>

 )
  
	
}

export default All;
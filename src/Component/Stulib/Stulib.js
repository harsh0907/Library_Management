import React from 'react';
import Person from './Person/Person';
import Librarian from './Librarian/Librarian';
import DBA from './DBA/DBA';

const Stulib = ({router,changeRout}) =>
{
	return (
    <div >
       <div className="tc">
        <div className="dib side">
          <p
          className="f3 ml0 dib black grow pa3 pointer">Sign out</p>
        </div>
        <div className="la dib tc ">
      	  <p className=" ma0 dib f1 bod " >Library Mangment</p>
      	  <p className=" ma0 dib f3 " > {`(${router}.)`} </p>
        </div>
        
        <div className="dib bod side">
          <p
          onClick = {()=>changeRout()} 
          className="f3 ml0 dib black grow pa3 pointer">Sign out</p>
        </div>
         
        {
          router === 'Person' 
          ? <Person />
          : (router === 'DBA'
            ? <DBA />
            : <Librarian />)
        }

       </div>
      

    </div>
	)
}

export default Stulib;
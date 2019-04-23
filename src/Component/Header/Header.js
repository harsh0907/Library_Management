import React from 'react';
import './Header.css';

const Header = ({changeRouter}) =>
{
	return (
      <div >
       <p className="tc f1 center bod" >Library Mangment</p>
       <article className =" mt20 b--black-10 mt5 w-100 w-50-m w-35-l mw6  center ">
        <p 
        onClick = {() => changeRouter('Person')}
        className=" maj tc center f2 grow no-underline br-pill ba bw1 ph3 pv2 mb2 pointer black"
        >Person</p><br/>
        <p 
        onClick = {() => changeRouter('Libraian')}
        className="maj tc center f2 grow no-underline br-pill ba bw1 ph3 pv2 mb2 pointer black"
        >Libraian</p>
        <p 
        onClick = {() => changeRouter('DBA')}
        className="maj tc mt5 center f2 grow no-underline br-pill ba bw1 ph3 pv2 mb2 pointer black"
        >DBA</p>
       </article>
      </div>
	)
}

export default Header;
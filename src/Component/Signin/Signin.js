import React from 'react';


const Signin = ({router,changeRouter,sta,changesta}) =>
{
	return (
       <div >
          <p className="tc f1 mt0 mb0 center bod" >Library Mangment</p>
          <p className="tc mt0 mb0 f3 center" > {`(${router})`} </p>
  <article className="br  ba dark-gray b--black-10 mt5 w-100 w-50-m w-25-l mw6 shadow-5 center" >
  <main className="pt4 pr4 pl4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 tc fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">{`Email-id`}</label>
        <input
       
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address"  
        id="email-address" 
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input
         
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"  
        id="password" 
        />
      </div>
    </fieldset>
    <div className="tc">
      <input 
        onClick = {() => changesta()}
        className="b ph3 ml2 pv2 center input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Sign in" 
      />
    </div>
    <div className="lh-copy mt0">
      { router === 'Person' ? 
      <p  
      onClick = {() => changeRouter('Librarian')}
      className="f6 tc link dim black db pointer">Librarian</p> 
      : <p
      onClick = {() => changeRouter('Person')}  
      className="f6 tc link dim black db pointer">Person </p> }
      <p  
      onClick = {() => changeRouter('DBA')}
      className="f6 tc link dim black db pointer">DBA</p> 
    </div>
  </div>
</main>
</article>
      </div>		
	)
}

export default Signin;
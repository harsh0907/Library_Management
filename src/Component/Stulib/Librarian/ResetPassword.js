import React, { Component } from 'react';


class ResetPassword extends Component
{
  
   constructor()
   {
     super();
     this.state = {
        sta: 'Old '
     }
   }
   onsubmit = () =>{
    if(this.state.sta !== "New")
    {this.setState({sta:"New " })}
    else
    {
      this.setState({sta:"Old " })
    }
   }


     render()
     {
        return (
        <div>  
        
   <div >
      <article className="br mt5 ba dark-gray b--black-10  w-100 w-50-m w-25-l mw6 shadow-5 center" >
  <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 tc fw6 ph0 mh0">Password</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="text">{` ${this.state.sta}Password `}</label>
        <input
       
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="Password" 
        name="Password"  
        id="Password" 
        />
      </div>
      {
        this.state.sta === "New "
        ?<div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="text">Conform Password </label>
        <input
       
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="Password" 
        name="Password"  
        id="Password" 
        />
        :<div></div>
      </div>
      :<div></div>
      }
    </fieldset>
    <div className="tc">
      <input 
        onClick = {() => this.onsubmit()}
        className="b ph3 ml2 pv2 center input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Submit" 
      />
    </div>
    
  </div>
</main>
</article>
    </div>
        
        </div>
   
 )
  
     }
    
	
}

export default ResetPassword;
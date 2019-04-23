import React, { Component } from 'react';
import Feedback from './Feedback'

class NewBook extends Component
{
  
   constructor()
   {
     super();
     this.state = {
        sta: true
     }
   }
   onsubmit = () =>{
    this.setState({sta: false })
   }


     render()
     {
        return (
        <div>  
        { 
          this.state.sta === false 

           ? <Feedback sta={false} />
           : 
    <div >
      <article className="br  ba dark-gray b--black-10 mt5 w-100 w-50-m w-25-l mw6 shadow-5 center" >
  <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 tc fw6 ph0 mh0">New Book</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Book Name</label>
        <input
       
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="Book-Name"  
        id="text" 
        />
      </div>
       
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Book Author</label>
        <input
       
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="Book-Athor"  
        id="text" 
        />
      </div>


    </fieldset>
    <div className="tc">
      <input 
      onClick = {() => this.onsubmit()}
        className="b ph3 ml2 pv2 center input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Submit" 
      />
    </div>
    <div className="lh-copy mt3">
    </div>
  </div>
</main>
</article>
  </div>
        }
        </div>
   
 )
  
     }
    
  
}

export default NewBook;
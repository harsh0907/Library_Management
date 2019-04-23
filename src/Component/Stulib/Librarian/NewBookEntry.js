import React, { Component } from 'react';
import Feedback from './Feedback'

class NewPerson extends Component
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

           ? <Feedback sta={true} />
           : 
    <div >
      <article className="br mt5 ba dark-gray b--black-10  w-100 w-50-m w-25-l mw6 shadow-5 center" >
  <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 tc fw6 ph0 mh0">New Book Entey</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="text">Book Name</label>
        <input
       
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="Name"  
        id="text" 
        />
    </div>
        <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="text">Author Name</label>
        <input
         
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="AuthorName"  
        id="text" 
        />
      </div>
      
    <div className="tc">
      <input 
       onClick = {() => this.onsubmit()}
        className="b ph3 ml2 pv2 center input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Submit" 
      />
    </div>
    </fieldset>
  </div>
</main>
</article>
   </div>
        }
        </div>
   
 )
  
     }
    
  
}
export default NewPerson;
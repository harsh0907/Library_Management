import React, { Component } from 'react';
import NewPerson from './NewPerson';
import NewLibrarian from './NewLibrarian';
import Person from './Person';
import Librarian from './Librarian';



class DBA extends Component 
{
  constructor()
  {
     super()
     this.state = {
        router : "NewPerson",
        hide : true
     }
  }
  
   changeRouter = (event) =>
  {
    this.setState({router:event});
  }
   
  
  render()
  {
    return (
     <div> 
     <div className="tc ma0 ">
          <p onClick = {() => this.changeRouter("NewPerson")} className='f4 dib ma0 link dim black grow pa3 pointer'>New Person</p>
          <p onClick = {() => this.changeRouter("NewLibrarian")} className='f4 ma0 dib link dim black grow pa3 pointer'>New Librarian</p>
          <p onClick = {() => this.changeRouter("Person")} className='f4 ma0 dib link dim black grow pa3 pointer'>Person</p>
          <p onClick = {() => this.changeRouter("Librarian")} className='ma0 f4 dib link dim black grow pa3 pointer'>Librarian</p>

        </div> 
    
   
        <div>
        {
        {
          'NewPerson': <NewPerson />,
          'NewLibrarian': <NewLibrarian />,
          'Person': <Person />,
          'Librarian': <Librarian />
          
        }[this.state.router]
      }
        </div>


    </div>
   )
  }
  
}

export default DBA;
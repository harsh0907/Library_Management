import React, { Component } from 'react';
import NewIssue from './NewIssue';
import Returnbook from './Returnbook';
import Salary from './Salary/Salary';
import PersonPayment from './PersonPayment';
import NewBook from './NewBook';
import NewBookEntry from './NewBookEntry';
import All from './All/All';
import ResetPassword from './ResetPassword';



class Librarian extends Component 
{
  constructor()
  {
     super()
     this.state = {
        router : "Returnbook",
        hide : true
     }
  }
  
   changeRouter = (event) =>
  {
    this.setState({router:event});
    if(event === 'All')
    {
      this.setState({hide: !(this.state.hide)})
    }
  }
   
   changeHide = () =>
  {
    this.setState({hide:!this.state.hide});
    if(!this.state.hide)
    {
      this.setState({router: "Returnbook" })
    }
  }
  
  render()
  {
    return (
     <div> 
    {
      this.state.hide === true
       ? <div className="tc ma0 ">
          <p onClick = {() => this.changeRouter("Returnbook")} className='f4 ma0 dib link dim black grow pa3 pointer'>Return book</p>
          <p onClick = {() => this.changeRouter("NewIssue")} className='f4 dib ma0 link dim black grow pa3 pointer'>New Issue</p>
          <p onClick = {() => this.changeRouter('PersonPaymant')} className='f4 ma0 dib link dim black grow pa3 pointer'>Person Paymant</p>
          <p onClick = {() => this.changeRouter("Salary")} className='f4 dib ma0 link dim black grow pa3 pointer'>Salary</p>
          <p onClick = {() => this.changeRouter("NewBookEntry")} className='f4 dib ma0 link dim black grow pa3 pointer'>New Book Entry</p>
          <p onClick = {() => this.changeRouter("All")} className='ma0 f4 dib link dim black grow pa3 pointer'>Book About</p>
          <p onClick = {() => this.changeRouter("ResetPassword")} className='ma0 f4 dib link dim black grow pa3 pointer'>Reset Password</p>


        </div> : <p onClick = {() => this.changeHide()} className='ma0 f4 dib link dim black grow pa3 pointer'>Book About</p>
    }
   
        <div>
        {
        {
          'Returnbook': <Returnbook />,
          'NewIssue': <NewIssue />,
          'PersonPaymant': <PersonPayment />,
          'Salary': <Salary />,
          'NewBook': <NewBook />,
          'NewBookEntry': <NewBookEntry />,
          'All': <All  />,
          'ResetPassword': <ResetPassword  />
          
          
        }[this.state.router]
      }
        </div>


    </div>
   )
  }
	
}

export default Librarian;
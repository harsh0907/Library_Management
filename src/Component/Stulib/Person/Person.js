import React,{Component} from 'react';
import Cardlist from './Cardlist';
import ResetPassword from './ResetPassword';


class Person extends Component
{
  constructor()
  {
    super();
    this.state = {
      sta : "All"
    }
  }
  onsta = (event) =>
  {
    console.log(event);
     this.setState({sta:event});
  }
  render()
  {
    return (
    <div>
        <div className="tc">
          <p
          onClick = {() => this.onsta("All")} 
          className='f3 dib link dim black grow pa3 pointer'>All</p>
          <p
           onClick = {() => this.onsta("Payingbook")} 
          className='f3 dib link dim black grow pa3 pointer'>Paying book</p>
          <p
          onClick = {() => this.onsta("Recentlyissue")} 
          className='f3 dib link dim black grow pa3 pointer'>Recently Issue</p>
          <p
          onClick = {() => this.onsta("ResetPassword")} 
          className='f3 dib link dim black grow pa3 pointer'>Reset Password</p>
        </div>

        <div className="tc">
          <h4 className='f3 ma0 black '>Final Amount  </h4>
          <h4 className='f3  mt0 black '>20</h4>
        </div>

        <div>
        {
        {
          'All': <Cardlist />,
          'Payingbook': <Cardlist />,
          'Recentlyissue': <Cardlist />,
          'ResetPassword': <ResetPassword onpass={()=> this.setState({sta:"All"})}/>          
        }[this.state.sta]
      }
        </div>
        
    </div>
  )
  }
	
}

export default Person;
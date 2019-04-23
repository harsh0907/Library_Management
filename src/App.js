import React, { Component } from 'react';
import 'tachyons';
import Header from './Component/Header/Header';
import Signin from './Component/Signin/Signin';
import Stulib from './Component/Stulib/Stulib';
import './App.css';

class App extends Component {
  constructor()
  {
  	 super();
  	 this.state = {
  	 	router : 'Home',
      sta : false
  	 }
  }
  changeRouter = (event) =>
  {
     this.setState({router:event})
  }
  
  changeRout = () =>
  {
    this.setState({router:"Home"})
    this.setState({sta:false})
  }

  changesta = () =>
  {
     this.setState({sta:true})
  }
  render() {

    return (
      <div >
        {
        	this.state.router ===  'Home' ? <Header changeRouter={this.changeRouter}/> 
        	:  (this.state.sta === false 
              ? <Signin  changesta={this.changesta} sta={this.state.sta} router={this.state.router} changeRouter={this.changeRouter} />
              : <div></div>) 
        }
        {
          this.state.sta === true ? <Stulib changeRout={this.changeRout} router={this.state.router}/> 
          : <div> </div>
        }
        
        
      </div>
    );
  }
}

export default App;

import React,{ Component } from 'react';
import Cardlist from './Cardlist';


class Person extends Component 
{
	constructor()
	{
	    super();
	    this.state = 
	    {
	    	input : ''
	    }
	}
	oninpu(event)
	{
		console.log(event.target.value);
	}
	render()
	{
       return (
	    <div>
	      <div className=" tc mt3">
        <input
        onChange = {this.oninpu}
        className="pa2 dib input-reset ba bg-transparent " 
        placeholder="Enter Name"
        type="text" 
        name="Name"  
        id="text" 
        />
    </div>
	      <Cardlist />
	    </div>
	)	
	}

}

export default Person;
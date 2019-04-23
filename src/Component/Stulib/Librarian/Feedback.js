import React from 'react';

const Feedback = ({sta,id,no}) =>
{
	return (
  <div className="dib mt5 tc " > 	
    <div className="tc bg-light-green shadow-5 bw2 br2 pa3 grow ma2 dib">

      <h1> Done </h1>
      {
        sta === true
        ? <div></div>
        :<div className="mt3">
      <p className="f6   ">{`${id}-id`}</p>
      <h2 className="f5  mt3">{`${no}`}</h2>
      </div>

      }
      
   </div>
 
  </div>
	)
}

export default Feedback;
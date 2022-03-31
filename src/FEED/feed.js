import React from 'react';
import ReactDOM from 'react-dom';
import './feed.css';
import Upper from './upper';
import Left from './left';
import Right from './right';
import Center from './center';

class Feed extends React.Component
{

	render()
	{
		
		return(
		<div>
		         <div class="top">
				    <Upper/>
					</div>
					
					
					<div class="row no-gutters r">
  <div class="col col-md-3 col-sm-12 col1">
    <Left/>
  </div>
  <div class="col col-md-6 col-sm-12 col2">
     <Center/>
  </div>
  <div class="col col-md-3 col-sm-12 col3">
  <Right/>
      
  </div>
  </div>
        </div>          


		);

	}
}
export default Feed;
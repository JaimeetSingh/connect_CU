import React from 'react';
import ReactDOM from 'react-dom';
import './Chat.css';
import Upper from '../FEED/upper';
import LeftChat from './LeftChat.js';
import RightChat from './RightChat.js';
import CenterChat from './CenterChat.js'

class Chat extends React.Component
{

	render()
	{
		
		return(
		<div class="main-chat">
		        <div class="top-chat">
				    <Upper/>
				</div>
				<div class="row no-gutters">
					<div class="col-md-3 col-sm-12 col5">
						<LeftChat/>
					</div>
					<div class="col-md-6 col-sm-12 col6">
						<CenterChat/>
					</div>
					<div class="col-md-3 col-sm-12 col7">
						<RightChat/>
					</div>
				</div>
		</div>
		);
	}
}
					
					

export default Chat;
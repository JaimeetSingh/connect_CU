import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Feed from './FEED/feed.js';
import Chat from './Chat/Chat.js';
import Login from './Login/Login.js';

class Main extends React.Component
{

	render()
	{
		
		return(
		<main>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/feed" component={Feed} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </main>
		
		      	
		);

	}
}


	
ReactDOM.render(
<div>
<BrowserRouter>
    <Main/>
</BrowserRouter>
</div>
,document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';

class Upper extends React.Component
{
  constructor(props)
  {
      super(props)
      this.state = {
      redirect:false,
      feed:false,
    };
  }

  Feed = () =>
  {
     this.setState({feed:true});
  }
	render()
	{
		if (this.state.feed) {
          return <Redirect push to="/Feed" />;
    }
	return(
		<div>
		
	<nav class="navbar navbar-expand-sm">

 <a class="navbar-brand navbr" onClick={this.Feed} href="#">
    <b>CUchats</b>
  </a>
  <img class="img-logo" src="logo5.png"/>
 
  <ul class="navbar-nav topnav">
    <li class="nav-item">
      <a class="nav-link" onClick={this.Feed} href="#"><i class="fas fa-home"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" target="_blank" href="https://www.bbc.com/news/world/asia/india"><i class="far fa-newspaper"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="far fa-thumbs-up"></i></a>
    </li>
	<li class="nav-item">
      <a class="nav-link" target="_blank"href="https://www.omegle.com/"><i class="far fa-comments"></i></a>
    </li>
	<li class="nav-item">
      <a class="nav-link" href="#"><i class="far fa-calendar"></i></a>
    </li>
	<li class="nav-item">
      <a class="nav-link" href="#"><i class="far fa-image"></i></a>
    </li>
  </ul>
 
</nav>        
</div>

		);

	}
}
export default Upper;
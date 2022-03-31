import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
class Right extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      redirect:false,
      chat:false,
      dp:window.dp
    };
  }
  Click = (event) =>
  {
  	var file = document.getElementById('file');
  	file.click();
  }
  Upload = (event) =>
  {
  	window.dp = event.target.files[0].name;
  	this.setState({
  		dp:window.dp,
  	})

  }
  Logout = () =>
  {
  	 this.setState({redirect:true});
  }
  Chat = () =>
  {
  	this.setState({chat:true});
  }
  render()
	{
		if (this.state.redirect) {
      		return <Redirect push to="/" />;
    	}
    	else if(this.state.chat)
    	{
    		return <Redirect push to="/Chat" />;
    	}
		
		return(
		
		          <div>
 <img src={this.state.dp} class="img im" id="dp"/>
	   <center>

	      <img src={window.src} class="rounded-circle imp"/>
		  <h5>{window.name}</h5>
		  <input type="file" class="upload" accept="image/*" name="image" id="file" 
		   hidden="hidden" onChange={this.Upload}/>
		  
  </center>
  <hr/>
  <a class="nav-link" onClick={this.Click} href="#"><i class="fas fa-upload"></i>&nbsp;&nbsp;Profile Picture</a>
  
  <a class="nav-link" href="#"><i class="fas fa-cog"></i>&nbsp;&nbsp;&nbsp;Settings</a>
   <a class="nav-link" href="#"><i class="fas fa-question"></i>&nbsp;&nbsp;&nbsp;&nbsp;Help</a>
    <a class="nav-link" onClick={this.Logout} href="#"><i class="fas fa-power-off"></i>&nbsp;&nbsp;&nbsp;Logout</a>
	<hr/>
	<a class="nav-link" href="#" onClick={this.Chat}><img src="http://emilcarlsson.se/assets/louislitt.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Louis Litt</a>
	<a class="nav-link" href="#"><img src="http://emilcarlsson.se/assets/harveyspecter.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Harvey Specter</a>
	<a class="nav-link" href="#"><img src="http://emilcarlsson.se/assets/rachelzane.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Rachel Zane</a>
	<a class="nav-link" href="#"><img src="http://emilcarlsson.se/assets/donnapaulsen.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Donna Paulsen</a>
				  </div>
                  


		);

	}
}
export default Right;
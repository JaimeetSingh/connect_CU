import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
class RightChat extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
    redirect:false,
    dp:window.dp,
   };
  }
  Logout = () =>
  {
    this.setState({redirect:true});
  }
  Click = () =>
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
  render()
    {
    if(this.state.redirect) {
      return <Redirect push to="/" />;
    }  
      
        return(
          
        <div>
        <img src={window.dp} class="img im" id="dp"/>
        <center>
          <img src={window.src} class="rounded-circle imp"/>
          <h5>{window.name}</h5>
          <input type="file"  accept="image/*" name="image" id="file"  onChange={this.Upload} hidden="hidden"/>

        </center>
  <hr/>
  <a class="nav-link" onClick={this.Click} href="#"><i class="fas fa-upload"></i>&nbsp;&nbsp;Profile Picture</a>
  
  <a class="nav-link" href="#"><i class="fas fa-cog"></i>&nbsp;&nbsp;&nbsp;Settings</a>
  <a class="nav-link" href="#"><i class="fas fa-question"></i>&nbsp;&nbsp;&nbsp;&nbsp;Help</a>
  <a class="nav-link" onClick={this.Logout} href="#"><i class="fas fa-power-off"></i>&nbsp;&nbsp;&nbsp;Logout</a>
  </div>
                  


        );

    }
}
export default RightChat;
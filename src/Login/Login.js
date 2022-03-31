import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
class Login extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      redirect:false,
    };
  }
  Submit = (event) =>  
    {
      window.dp="https://thumbs-prod.si-cdn.com/u73QLiHoUDXz_TGq1VZAwsu4R7Q=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/b8/84/b884ff45-f0b8-465b-9a80-8ef6e9d622c3/maxresdefault.jpg"
      event.preventDefault();
      var id = document.getElementById('username').value;
      var pwd = document.getElementById('pwd').value;
      var span = document.getElementById("span");
      if(/^[a-z0-9](\.?[a-z0-9]){5,}@chitkara.edu\.in$/.test(id))
      {
        if(id=="keshav138.cse19@chitkara.edu.in" && pwd=="keshav")
        {
          this.setState({redirect:true});
          window.name = "Keshav";
          window.src = "http://emilcarlsson.se/assets/rachelzane.png";
        }
        else if(id=="sam139.cse19@chitkara.edu.in" && pwd=="sam")
        {
          this.setState({redirect:true});
          window.name = "Sam";
          window.src = "http://emilcarlsson.se/assets/rachelzane.png"
        }
        else if(id=="kawal133.cse19@chitkara.edu.in" && pwd=="kawal")
        {
          this.setState({redirect:true});
          window.name = "Kawal";
          window.src = "http://emilcarlsson.se/assets/rachelzane.png"
        }
        else if(id=="hardik132.cse19@chitkara.edu.in" && pwd=="hardik")
        {
          this.setState({redirect:true});
          window.name = "Hardik";
          window.src = "http://emilcarlsson.se/assets/rachelzane.png"
        }
        else
        {
          span.innerHTML = "Wrong Email/Password";
        }
      }
      else
      {
        if(id.length==0)
        {
          span.innerHTML = "Please enter email address!"; 
        }
        else if(pwd.length==0)
        {
          span.innerHTML = "Please enter password!"; 
        }
        else
        {
          span.innerHTML = "Only Chitkara ID allowed!";
        }
      }


    }
  render()
  {
    if (this.state.redirect) {
      return <Redirect push to="/feed" />;
    }
    return(
    <div class="log">
    <div class="container">
    <div class="har">
    <h1><b>CUchats</b></h1>
    <h4><i>By <b>Chitkarians</b></i></h4>
    <h4><i>For <b>Chitkarians...</b></i></h4>



    </div>
    <div class="card">
     <div class="card-body">
     <form>
      
      <input type="email" class="form-control" id="username" placeholder="Email address" name="email" required/>
       <br/>
        <input type="password" class="form-control" id="pwd" placeholder="Password" name="pswd" required/>
       <br/>
       <center><span id="span" class="span"></span><br/></center>
        <button onClick={this.Submit} class="btn btn-primary btn-block"><b>Log In</b></button>
      <hr/>
      <br/>
      <center>
      <button type="submit" class ="btn btn-success">Create New Account</button>
      </center>
      </form>
      </div>
    </div>
    <p><b>Feel the memories</b> and Enjoy!</p>
    </div>
    </div>

    );
  }
}

export default Login
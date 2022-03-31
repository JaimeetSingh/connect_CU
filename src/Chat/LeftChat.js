import React from 'react';
import ReactDOM from 'react-dom';
import CenterChat from './CenterChat.js'

class LeftChat extends React.Component
{
  Change = (event) =>
  {
    var obj = new CenterChat();
    obj.Remove();
    let select  = document.querySelectorAll(".col5 .nav-link");
    for(var i=0; i<select.length; i++)
    {
    select[i].style.backgroundColor = "#282828";
    }
    let id = event.target.id;
    document.getElementById(id).style.backgroundColor="#1a1a1a";

  }
  render()
	{
		
		return(
        <div>
            <a class="nav-link a" id="a" onClick={this.Change} href="#"><img src="http://emilcarlsson.se/assets/louislitt.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Louis Litt</a>
            <a class="nav-link" id="b" onClick={this.Change} href="#"><img src="http://emilcarlsson.se/assets/harveyspecter.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Harvey Specter</a>
            <a class="nav-link" id="c" onClick={this.Change} href="#"><img src="http://emilcarlsson.se/assets/rachelzane.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Rachel Zane</a>
            <a class="nav-link" id="d" onClick={this.Change} href="#"><img src="http://emilcarlsson.se/assets/donnapaulsen.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Donna Paulsen</a>
            <a class="nav-link" id="e" onClick={this.Change} href="#"><img src="http://emilcarlsson.se/assets/louislitt.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Louis Litt</a>
            <a class="nav-link" id="f" onClick={this.Change} href="#"><img src="http://emilcarlsson.se/assets/harveyspecter.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Harvey Specter</a>
            <a class="nav-link" id="g" onClick={this.Change} href="#"><img src="http://emilcarlsson.se/assets/rachelzane.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Rachel Zane</a>
            <a class="nav-link" id="h" onClick={this.Change} href="#"><img src="http://emilcarlsson.se/assets/donnapaulsen.png" class="rounded-circle imcontacts"/>&nbsp;&nbsp;&nbsp;Donna Paulsen</a>

        </div>


		);

	}
}
export default LeftChat;
import React from 'react';
import ReactDOM from 'react-dom';

class CenterChat extends React.Component
{
     Send = () =>
     {
        var element = document.getElementById('write').value;
        if(!element.length)
        {
            return false;
        }
        console.log(element)
        var list = document.createElement("LI");
        list.className += "sent"; 
        var para = document.createElement("p");               
        var textnode = document.createTextNode(element);        
        para.appendChild(textnode);
        list.appendChild(para);
        document.getElementById("list").appendChild(list);
        if(element.length)
        {
            document.getElementById("write").value = null;
        
            if(element == "hello")
            {
                setTimeout(function(){
                    var list = document.createElement("LI");
                    list.className += "replies"; 
                    var para = document.createElement("p");               
                    var textnode = document.createTextNode("Hey how are you doing");        
                    para.appendChild(textnode);
                    list.appendChild(para);
                    document.getElementById("list").appendChild(list);
                 }, 3000);  
            }
            else if(element == "how are you?")
            {
                setTimeout(function(){
                    var list = document.createElement("LI");
                    list.className += "replies"; 
                    var para = document.createElement("p");               
                    var textnode = document.createTextNode("I am fine, what bout u?");        
                    para.appendChild(textnode);
                    list.appendChild(para);
                    document.getElementById("list").appendChild(list);
                 }, 3000);  
            }
            else
            {
               setTimeout(function(){
                    var list = document.createElement("LI");
                    list.className += "replies"; 
                    var para = document.createElement("p");               
                    var textnode = document.createTextNode("I didn't get that");        
                    para.appendChild(textnode);
                    list.appendChild(para);
                    document.getElementById("list").appendChild(list);
                 }, 3000);   
            }
        }


        
                
    }
    Remove = () =>
    {
       var myList = document.getElementById('list');
       myList.innerHTML = '';
     
    }
    render()
    {

        return(
            <div class="frame">
                <div class="messages">
                    <ul id="">
                        <li class="sent"><p>Hey Long Time!, How are you?</p></li>
                        <li class="replies"><p>Pretty Good How are U doing?</p></li>
                        <li class="sent"><p>Nothing just chilling</p></li>
                        <li class="replies"><p>That's good</p></li>
                    </ul>
                    <ul id="list">
                    </ul>
                </div>
                <div class="message-input">
                <div class="wrap">
                <input class="write" id="write" type="text" placeholder="Write your message..." />
                <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
                <button class="submit"  onClick={this.Send}><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
                </div>
            </div>
        );
    }
}




export default CenterChat;
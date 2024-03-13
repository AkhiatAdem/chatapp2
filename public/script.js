

        
const socket = io('http://localhost:5173');

socket.on('connect', () => {
    const login = document.querySelector(".login");
const username = document.querySelector(".username");
const log = document.querySelector(".log");
const chat = document.querySelector(".chat");
log.addEventListener("click",()=>{

    login.remove();
    chat.style.display = 'block';
    socket.emit('x',`${username.value} is connected`);
    
});
    

    const hello = document.querySelector("#button");
    const input = document.querySelector("#input");
    hello.addEventListener("click", () => {
        
            socket.emit('h', input.value,username.value); 
            input.value = ""
            
});

socket.on('r',(message,username)=>{
    displayMessage(message,username);

})

socket.on("xr",(message)=>{
    const msgdiv = document.createElement("div");
    msgdiv.classList.add("msgdiv");

    document.querySelector(".realchat").appendChild(msgdiv);
    const msg = document.createElement("h4");
    msg.innerText = message;
    msgdiv.appendChild(msg);
    const hr = document.createElement("hr");
    msgdiv.appendChild(hr);

})
});

function displayMessage(message,username){

    const msgdiv = document.createElement("div");
    document.querySelector(".realchat").appendChild(msgdiv);
    msgdiv.classList.add("msgdiv");
    const msguser = document.createElement("h4");
    msguser.innerText = `${username} at ${new Date().getHours()}:${new Date().getMinutes()}`;
    msguser.classList.add("user")
    msgdiv.appendChild(msguser);


    const msg = document.createElement("h4");
    msg.innerText = message;
    msg.classList.add("message");
    msgdiv.appendChild(msg);
    
    const hr = document.createElement("hr");
    msgdiv.appendChild(hr);

    

}



        
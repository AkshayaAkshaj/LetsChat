const firebaseConfig = {
    apiKey: "AIzaSyBDrjwFZ7YiXoaEwGtQp7MC69WrKEL03e0",
    authDomain: "let-s-chat-1c877.firebaseapp.com",
    databaseURL: "https://let-s-chat-1c877-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-1c877",
    storageBucket: "let-s-chat-1c877.appspot.com",
    messagingSenderId: "1080913838911",
    appId: "1:1080913838911:web:e5a8cb90faca5ff540898a"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");

   function send(){
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    
    });
    document.getElementById("msg").value = "";
    console.log("User name = "+user_name);
    console.log("Room name = "+room_name);
    console.log("Message is '"+msg+"'")
    
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png' height='20px' width='20px'></h4>";
message_with_tag="<h4 class='message_h4'>"+ message +"</h4>";
like_button="<button class='btn btn-primary' id="+ firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like :"+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
     } });  }); }
getData();

function update_like(message_id){
    console.log("Clicked on like button - "+message_id);
    button_id=message_id;
likes=document.getElementById(button_id).value ;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});

}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
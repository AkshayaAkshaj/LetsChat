
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
document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";

function add__room(){
  room_name=document.getElementById("room_name").value ;
  localStorage.setItem("room_name",room_name);
  
  firebase.database().ref("/").child(room_name).update({
   purpose:"Adding Room Name"
  });
  window.location="chat_page.html";
  
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("Room names-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();



function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="chat_page.html";
}
function logout(){
 window.location="index.html";
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
}



 

var firebaseConfig = {
      apiKey: "AIzaSyDjfAa5DfNHVOZLt5U98ERndywjMUTu3Tw",
      authDomain: "kwitter-a63e8.firebaseapp.com",
      databaseURL: "https://kwitter-a63e8-default-rtdb.firebaseio.com",
      projectId: "kwitter-a63e8",
      storageBucket: "kwitter-a63e8.appspot.com",
      messagingSenderId: "630399760322",
      appId: "1:630399760322:web:a97ed288cd6517f8d5085b"
    };
    
    firebase.initializeApp(firebaseConfig);
    room_name  = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!" ;
    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addRoomName"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_room.html";
          
          
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'#"+Room_names+"</div></hr>";
       document.getElementById("output").innerHTML += row ;
      
      });
});
}
      
getData();
function redirectToRoomName(name) 
{
       console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
 }

 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location.replace("index.html");
       
 }
function send()
{
      msg = document.getElementById("msg").valu;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
        
      })
      document.getElementById("msg").value = "";
      
}

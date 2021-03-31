
const config = {
      apiKey: "AIzaSyDjfAa5DfNHVOZLt5U98ERndywjMUTu3Tw",
      authDomain: "kwitter-a63e8.firebaseapp.com",
      databaseURL: "https://kwitter-a63e8-default-rtdb.firebaseio.com",
      projectId: "kwitter-a63e8",
      storageBucket: "kwitter-a63e8.appspot.com",
      messagingSenderId: "630399760322",
      appId: "1:630399760322:web:a97ed288cd6517f8d5085b"
    };
    firebase.initializeApp(config);
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         Name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>" + Name + "<img class = 'user_tick' src = 'tick.png'> </h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id +"value="+ like +" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button><hr>";
         row=name_with_tag + message_with_tag + like_button + span_with_tag ;
         document.getElementById("output").innerHTML += row;




//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like buttton -"+ message_id);
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
      

}

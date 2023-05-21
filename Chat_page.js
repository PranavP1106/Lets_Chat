var firebaseConfig = {
      apiKey: "AIzaSyDWImjci2_Zq1KV9VvH7m6ZYgc7QhN47Y4",
      authDomain: "letschat-17ebe.firebaseapp.com",
      databaseURL: "https://letschat-17ebe-default-rtdb.firebaseio.com",
      projectId: "letschat-17ebe",
      storageBucket: "letschat-17ebe.appspot.com",
      messagingSenderId: "116691931021",
      appId: "1:116691931021:web:99b8384225290bbc3e77c4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("User_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
      document.getElementById("msg").value="";
    }

function getData() { 
  firebase.database().ref("/"+room_name).on('value', function(snapshot) 
  { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key; childData = childSnapshot.val(); 
       if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


//Start code
console.log(firebase_message_id);
console.log(message_data);

Name=message_data["name"];
Message=message_data["message"];
Like=message_data["like"];

Name_tag="<h4>"+Name+"<img src='tick.png' class='user_tick'></h4>";
Message_tag="<h4 class='message_h4'>"+Message+"</h4>";
Like_btn="<button class='btn btn-warning' id="+firebase_message_id+" value="+Like+" onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+Like+"</span></button><hr>";
row=Name_tag+Message_tag+Like_btn+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();


function updateLike(message_id){
console.log("clicked on like button - "+message_id);
likes=document.getElementById(message_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
  like:updated_likes
});
}
function logout(){
  localStorage.removeItem("User_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
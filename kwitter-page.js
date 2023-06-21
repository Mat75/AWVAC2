var firebaseConfig = {
    apiKey: "AIzaSyBeBiHr8johWxn38e92Pp6gqyvuGAEdKGI",
    authDomain: "awba2-7661e.firebaseapp.com",
    databaseURL: "https://awba2-7661e-default-rtdb.firebaseio.com",
    projectId: "awba2-7661e",
    storageBucket: "awba2-7661e.appspot.com",
    messagingSenderId: "1035051133864",
    appId: "1:1035051133864:web:0a90d33e43872d7e54cb9d"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   UsRname=localStorage.getItem("uname")
  Salan=localStorage.getItem("sname")
  function Send(){
    send=document.getElementById("input").value
    firebase.database().ref(Salan).push({
        name:UsRname,
message:send,
like:0
    })
    document.getElementById("input").value=""
  }
  function getData() {
    firebase.database().ref("/" + Salan).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
  
  
                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
  }
  getData();
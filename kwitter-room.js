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
  function añadiendoSala (){
    Sname=document.getElementById("room_name").value
firebase.database().ref("/").child(UsRname).update({purpose:"añadiendo usuario"})
localStorage.setItem("sname",Sname)
window.location="kwitter-page.html"

  }
  function logOut(){
    localStorage.removeItem("user")
    localStorage.removeItem("roomname")
    window.location.replace("index.html");
}

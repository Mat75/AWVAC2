function uname(){
    Uname=document.getElementById("username").value
    localStorage.setItem("uname",uname)
    window.location="kwitter_room.html"
}
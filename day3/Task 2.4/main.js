window.addEventListener("keydown",function(e){
if(e.key==="Alt"){
    alert("alt key is pressed " + " keyCode: "+ e.keyCode)
}
else if(e.key==="Control"){
    alert("ctrl key is pressed " + " keyCode: "+ e.keyCode)
}
else if(e.key==="Shift"){
    alert("shift key is pressed " + " keyCode: "+ e.keyCode)
}
else{
    alert(" keyCode: " + e.keyCode)
}
});
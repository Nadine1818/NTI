let ipnum = document.getElementById("ipnum")

ipnum.addEventListener("keydown",function(e){
    if(isNaN(e.key)){
       e.preventDefault();
    }
})
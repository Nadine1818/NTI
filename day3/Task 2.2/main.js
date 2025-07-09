function dayName (date){
    var dayRegex = /^(0?[1-9]|1[0-2])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-](\d{4})$/;
    if(!dayRegex.test(date)){
       console.error("error invalid date");
       return null;
    }
    const d = new Date(date);
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[d.getDay()];

}

console.log(dayName("07-09-2025")); //MM-DD-YY
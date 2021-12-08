var lang = navigator.language;
var date = new Date();

var dayNumber = date.getDate();
var month = date.getMonth();

var dayName = date.toLocaleString(lang, {weekday : "long"});
var monthName = date.toLocaleString(lang, {month  : "long"});

var year = date.getFullYear();

document.getElementById("monthName").innerHTML = monthName;
document.getElementById("dayName").innerHTML = dayName;
document.getElementById("dayNumber").innerHTML = dayNumber;
document.getElementById("year").innerHTML = year;

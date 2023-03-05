
function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const dayOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

setInterval(() => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var monthName = monthNames[month];
    var day = date.getDay();
    var dayName = dayOfWeek[day-1];
    var hour = date.getHours();
    var minute = date.getMinutes();
    var secound = date.getSeconds();
    var milis = date.getMilliseconds();
    var format = 
    year + " " + monthName + " " + dayName + " "
     + FormatNumberLength(date.getDate(), 2) + " " + FormatNumberLength(hour, 2) + ":" + FormatNumberLength(minute, 2) + ":" + FormatNumberLength(secound, 2) + ":" + FormatNumberLength(milis, 3);
    document.getElementById("date").innerText = format;
}, 1);
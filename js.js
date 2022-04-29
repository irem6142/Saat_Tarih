var hour = document.getElementById('hour')
var minutes = document.getElementById('minutes')
var seconds = document.getElementById('seconds')

var day = document.getElementById('day')
var month = document.getElementById('month')
var year = document.getElementById('year')
setInterval(function() {
    var D = new Date()
    var saat = D.getHours()
    var dakika = D.getMinutes()
    var saniye = D.getSeconds()
    hour.innerHTML = saat
    minutes.innerHTML = dakika
    seconds.innerHTML = saniye
    if (saat >= 8 && saat <= 21) {
        hour.innerHTML = "&#128578;" + saat + "."
        minutes.innerHTML = dakika + "."
        seconds.innerHTML = saniye + "&#128522;"

    }
    if (saat >= 0 && saat < 8) {
        hour.innerHTML = "&#128564;" + "0" + saat + "."
        minutes.innerHTML = dakika + "."
        seconds.innerHTML = saniye + "&#128564; "
    }
    if (saat >= 22) {
        hour.innerHTML = "&#128564;" + saat + "."
        minutes.innerHTML = dakika + "."
        seconds.innerHTML = saniye + "&#128564; "
    }
    if (dakika < 10 && saat >= 0 && saat < 8) {
        minutes.innerHTML = "0" + dakika + "."
    }
    if (dakika < 10 && saat >= 22) {
        minutes.innerHTML = "0" + dakika + "."
    }
    if (dakika < 10 && saat >= 8 && saat <= 21) {
        minutes.innerHTML = "0" + dakika + "."
    }

    if (saniye < 10 && saat >= 0 && saat < 8) {
        seconds.innerHTML = "0" + saniye + "&#128564;"
    }
    if (saniye < 10 && saat >= 22) {
        seconds.innerHTML = "0" + saniye + "&#128564;"
    }
    if (saniye < 10 && saat >= 8 && saat <= 21) {
        seconds.innerHTML = "0" + saniye + "&#128522;"
    }


    var S = new Date()
    var gun = S.getDate()
    var ay = S.getMonth() + 1
    var yil = S.getFullYear()

    day.innerHTML = gun

    month.innerHTML = ay
    year.innerHTML = yil
    if (gun < 10) {
        day.innerHTML = "0" + gun
    }
    if (ay => 1 && ay <= 2) {
        month.innerHTML = "0" + ay

        year.innerHTML = "&#9924;"
    }
    if (ay == 12) {
        year.innerHTML = "&#9924;"
    }
    if (ay >= 3 && ay <= 5) {
        day.innerHTML = "&#127800;" + gun
        month.innerHTML = "0" + ay

        year.innerHTML = yil + "&#127794;"
    }
    if (ay >= 6 && ay <= 8) {
        day.innerHTML = "&#127774;" + gun
        month.innerHTML = "0" + ay
        year.innerHTML = yil + "&#127774;"

    }
    if (ay >= 9 && ay <= 11) {
        day.innerHTML = "	&#127809;" + gun

        year.innerHTML = yil + "&#127810;"

    }




}, 1000);

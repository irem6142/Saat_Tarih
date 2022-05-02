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
        hour.innerHTML = "&#128578; &nbsp;" + saat + "."
        minutes.innerHTML = dakika + "."
        seconds.innerHTML = saniye + " &nbsp;&#128522;"

    }
    if (saat == 8 || saat == 9) {
        hour.innerHTML = "&#128578; &nbsp;" + "0" + saat + "."
    }
    if (saat >= 0 && saat < 8) {
        hour.innerHTML = "&#128564; &nbsp;" + "0" + saat + "."
        minutes.innerHTML = dakika + "."
        seconds.innerHTML = saniye + " &nbsp;&#128564;"
    }
    if (saat >= 22) {
        hour.innerHTML = "&#128564; &nbsp;" + saat + "."
        minutes.innerHTML = dakika + "."
        seconds.innerHTML = saniye + " &nbsp;&#128564; "
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
        seconds.innerHTML = "0" + saniye + " &nbsp;&#128564;"
    }
    if (saniye < 10 && saat >= 22) {
        seconds.innerHTML = "0" + saniye + " &nbsp;&#128564;"
    }
    if (saniye < 10 && saat >= 8 && saat <= 21) {
        seconds.innerHTML = "0" + saniye + " &nbsp;&#128522;"
    }


    var S = new Date()
    var gun = S.getDate()
    var ay = S.getMonth() + 1
    var yil = S.getFullYear()

    day.innerHTML = gun
    month.innerHTML = ay
    year.innerHTML = yil

    if (ay >= 1 && ay <= 2 && gun < 10) {

        month.innerHTML = "0" + ay
        day.innerHTML = "&#9924; &nbsp;" + "0" + gun
        year.innerHTML = yil + " &nbsp;&#9924;"
    } else if (ay == 12 && gun < 10) {

        day.innerHTML = "&#9924;&nbsp;" + "0" + gun
        year.innerHTML = yil + " &nbsp;&#9924;"
    } else if (ay >= 3 && ay <= 5 && gun < 10) {
        day.innerHTML = "&#127800; &nbsp;" + "0" + gun
        month.innerHTML = "0" + ay

        year.innerHTML = yil + " &nbsp;&#127794;"
    } else if (ay >= 6 && ay <= 8 && gun < 10) {

        day.innerHTML = "&#127774; &nbsp;" + "0" + gun
        month.innerHTML = "0" + ay
        year.innerHTML = yil + " &nbsp;&#127774;"

    } else if (ay == 9 && gun < 10) {

        day.innerHTML = "&#127809;&nbsp;" + "0" + gun
        month.innerHTML = "0" + ay
        year.innerHTML = yil + "&nbsp;&#127810;"
    } else if (ay >= 10 && ay <= 11 && gun < 10) {

        day.innerHTML = "&#127809;&nbsp;" + "0" + gun
        month.innerHTML = ay
        year.innerHTML = yil + "&nbsp;&#127810;"

    }
    //Gün 10 dan büyük olduğunda 
    else if (ay >= 1 && ay <= 2) {
        month.innerHTML = "0" + ay
        day.innerHTML = "&#9924;&nbsp;" + gun
        year.innerHTML = yil + " &nbsp;&#9924;"
    } else if (ay == 12) {
        day.innerHTML = "&#9924; &nbsp;" + gun
        year.innerHTML = yil + " &nbsp;&#9924;"
    } else if (ay >= 3 && ay <= 5) {
        day.innerHTML = "&#127800; &nbsp;" + gun
        month.innerHTML = "0" + ay

        year.innerHTML = yil + " &nbsp;&#127794;"
    } else if (ay >= 6 && ay <= 8) {
        day.innerHTML = "&#127774; &nbsp;" + gun
        month.innerHTML = "0" + ay
        year.innerHTML = yil + " &nbsp;&#127774;"

    } else if (ay == 9) {
        day.innerHTML = "&#127809; &nbsp;" + gun
        month.innerHTML = "0" + ay
        year.innerHTML = yil + " &nbsp;&#127810;"
    } else if (ay >= 10 && ay <= 11) {
        day.innerHTML = "	&#127809; &nbsp;" + gun
        month.innerHTML = ay
        year.innerHTML = yil + " &nbsp;&#127810;"

    }





}, 1000);
let a = prompt("Merhaba", "Adınız  :")
let h = document.getElementById("h")
h.innerHTML += a

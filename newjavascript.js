


var start = document.getElementById('plyStart');
var zadatak = document.getElementById('zadatak');

var compjuterPrvi = document.getElementById("compjuterPrvi");
var compjuterDrugi = document.getElementById('compjuterDrugi');
var compjuterTreci = document.getElementById('compjuterTreci');
var praviIgrac = document.getElementById('plyOnepolje');

var ply1btn = document.getElementById("ply1btn");
var ply2btn = document.getElementById("ply2btn");
var ply3btn = document.getElementById("ply3btn");
var ply4btn = document.getElementById("ply4btn");

var countDown = 4;
var index = 0;

var pitanja = [
    "danas je divan dan",
    "danas je hladno i pada sneg",
    "danas je tmurno i oblacno"
];

start.addEventListener("click", zapocniPartiju);

function zapocniPartiju() {

    var loop = setInterval(function () {
        countDown--;
        if (countDown === 0) {
            clearInterval(loop);
            postaviPitanje();
        }
        start.innerHTML = countDown;
    }, 1000);


}
var trenutnoPitanje = pitanja[Math.floor(Math.random() * 3)];
function postaviPitanje() {
    start.style.display = "none";
    zadatak.style.display = "block";
    zadatak.innerHTML = trenutnoPitanje;
    praviIgrac.focus();

    compjuterPrvikucka();
    compjuterDrugikucka();
    compjuterTrecikucka();
    praviIgrackucka();
}


function compjuterPrvikucka() {
    var pitanjce = trenutnoPitanje.split("");
    var loop = setInterval(function () {
        if (pitanjce.length !== 0) {
            compjuterPrvi.innerHTML += pitanjce.shift();
        } else {
            clearInterval(loop);
            index++;
            ply2btn.innerHTML = `POSITION ${index}`;
            ply2btn.style.background = "green";
        }
    }, 350);

}
;

function compjuterDrugikucka() {
    var pitanjce = trenutnoPitanje.split("");
    var loop = setInterval(function () {
        if (pitanjce.length !== 0) {
            compjuterDrugi.innerHTML += pitanjce.shift();
        } else {
            clearInterval(loop);
            index++;
            ply3btn.innerHTML = `POSITION ${index}`;
            ply3btn.style.background = "green";
        }
    }, 250);

}
;

function compjuterTrecikucka() {
    var pitanjce = trenutnoPitanje.split("");
    var loop = setInterval(function () {
        if (pitanjce.length !== 0) {
            compjuterTreci.value += pitanjce.shift();
        } else {
            clearInterval(loop);
            index++;
            ply4btn.innerHTML = `POSITION ${index}`;
            ply4btn.style.background = "green";
        }
    }, 150);

}
;

function  praviIgrackucka() {

    praviIgrac.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            var tekstUser = praviIgrac.value.trim();
            if (tekstUser === trenutnoPitanje) {
                index++;
                ply1btn.style.background = "green";
                ply1btn.innerHTML = `POSITION ${index}`;
            } else {
                ply1btn.style.background = "red";
                ply1btn.innerHTML = 'WRONG typing';
            }
            ;
        }

    });


}
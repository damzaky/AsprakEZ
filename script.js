var namz = "Dmz"; //asprak unique identifier

var dv = document.createElement("div");
dv.style.left = "0";
dv.style.right = "0";
dv.style.top = "0";
dv.style.bottom = "0";
dv.style.height = "100%";
dv.style.width = "100%";
dv.style.zIndex = "999";
dv.style.background = "rgba(0, 0, 0, 0.8)";
dv.style.color = "white";
dv.style.position = "fixed";
dv.style.display = "table";
var dvt = '<div style="display: table-cell;vertical-align: middle;text-align: center;padding: 20px 30px;"><h1 style="font-size: 300%;color:#fff!important;border:0!important;text-transform:none;font-family: arial, sans-serif;">Sabar bosq, sedang melakukan keajaiban :v</h1><h2 style="font-size: 150%;color:#fff!important;border:0!important;text-transform:none;font-family: arial, sans-serif;">Silakan tunggu <span id="countdown">11</span> detik</h2></div>';
document.body.appendChild(dv);
dv.innerHTML = dvt;
function get(url, callback) {
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
if (xhr.readyState == 4) {
if (typeof callback === "function") {
callback.apply(xhr);
}
}
};
xhr.send();
}

function du(downloadURL) {

   location = downloadURL;

}

function ca(url){
var x;
x = new XMLHttpRequest();
x.onreadystatechange = function(){
if (x.readyState == 4 && x.status == 200){
}
}
x.open("POST", url, true);
x.send();
}
var mer = document.querySelectorAll('[title="ubah status TA"],[original-title="ubah status TA"]');
var merd = document.querySelectorAll('[title="ubah status jurnal"],[original-title="ubah status jurnal"]');
var merde = document.querySelectorAll('[title="ubah status TK"],[original-title="ubah status TK"]');
for (var i = 0; i < mer.length; i++) {
ca(mer[i].getAttribute("href"));
}
for (var i = 0; i < merd.length; i++) {
ca(merd[i].getAttribute("href"));
}
for (var i = 0; i < merde.length; i++) {
ca(merde[i].getAttribute("href"));
}
var links = document.getElementsByClassName('gradeX');
namz = namz.toLowerCase();
for (var i = 0; i < links.length; i++) {
var nams =links[i].innerHTML.toLowerCase();
if( nams.indexOf(namz) != -1) {
var damz = links[i];
var zak = damz.querySelectorAll('[title="Upload"],[original-title="Upload"]');
document.getElementsByName("param1[]")[i].value=0;
document.getElementsByName("param3[]")[i].value=0;
document.getElementsByName("param4[]")[i].value=0;
for (var j = 0; j < zak.length; j++) {
if(zak[j].hasAttribute("href")){
var s;
get(zak[j].getAttribute("href"),
function(){
s = this.responseText;
s = s.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
ss = s[s.length-2];
if(j=0){
du(ss);
}else{
ca(ss);
}
}
);
}
}
}	
}
var seconds;
var temp;
function countdown() {
seconds = document.getElementById('countdown').innerHTML;
seconds = parseInt(seconds, 10);
if (seconds == 1) {
temp = document.getElementById('countdown');
temp.innerHTML = "0";
//document.createElement('form').submit.call(document.getElementById('formNilaiPraktikan'));
return;
}
seconds--;
temp = document.getElementById('countdown');
temp.innerHTML = seconds;
timeoutMyOswego = setTimeout(countdown, 1000);
} 
countdown();

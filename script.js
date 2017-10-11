var namz = "Dmz";

function ca(url){
    var x;
    x = new XMLHttpRequest();
    x.onreadystatechange = function(){
        if (x.readyState == 4 && x.status == 200){
            //callback(x.responseText);
        }
    }
    x.open("GET", url, true);
    x.send();
}
var links = document.getElementsByClassName('gradeX');
for (var i = 0; i < links.length; i++) {
if(links[i].innerHTML.indexOf(namz) != -1) {
	var damz = links[i];
	var zak = damz.querySelectorAll('[title="Upload"],[original-title="Upload"]');
    links[i].style.backgroundColor = "#e6edf5";
	document.getElementsByName("param1[]")[i].value=0;
	document.getElementsByName("param3[]")[i].value=0;
	document.getElementsByName("param4[]")[i].value=0;
	//document.querySelector('[title="upload"]');
	for (var j = 0; j < zak.length; j++) {
if(zak[j].hasAttribute("href")){	
zak[j].style.backgroundColor = "yellow";
}
}
}
	
}
var mer = document.querySelectorAll('[title="ubah status TA"]');
var merd = document.querySelectorAll('[title="ubah status jurnal"]');
var merde = document.querySelectorAll('[title="ubah status TK"]');
for (var i = 0; i < mer.length; i++) {
mer[i].style.backgroundColor = "blue";
ca(mer[i].getAttribute("href"));
}
for (var i = 0; i < merd.length; i++) {
merd[i].style.backgroundColor = "blue";
ca(merd[i].getAttribute("href"));
}
for (var i = 0; i < merde.length; i++) {
merde[i].style.backgroundColor = "blue";
ca(merde[i].getAttribute("href"));
}
document.createElement('form').submit.call(document.getElementById('formNilaiPraktikan'));

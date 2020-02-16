function Jalankan(){
	var a = document.baseURI;
	document.getElementById('contoh1').innerHTML = a;
	var b = 'green';
	document.body.style.backgroundColor=b;
	document.getElementById('contoh2').innerHTML = b;
	var c = document.createElement('input');
	var d = document.createElement('br');
	document.body.appendChild(c);
	document.body.appendChild(d);
}

var a, n, as, k;

function val(){
	a = [],                 // Массив с элементами
  n = 6;                  // Количество карточек

	as = [0,0],             // Массив из сумм чисел
  k=0;                    // Счётчик положения для присваивания суммы

	// Присваивание рандома
	for(var i = 0; i < n; i++){
	   let val = Math.round(Math.random() * 9);
	   a.push(val);

	   i<3  ?  k=0  :  k=1;

	   as[k]+=val;
	};
	console.log(a)
	console.log(as);

	document.getElementById('section-val').innerText=(as[0]===as[1])+"";
	document.getElementById('section__num_1').innerText=""+a[0]+a[1]+a[2];
	document.getElementById('section__num_2').innerText=""+a[3]+a[4]+a[5];
	document.getElementById('val1').innerText=as[0];
	document.getElementById('val2').innerText=as[1];
};
val();

document.getElementById("replay").onclick = function(){
	val();
};

var bgi = document.getElementById('section__bgi');
document.onmousemove = function (event) {
	var 
		x = event.clientX,
		y = event.clientY;

	bgi.style.left=-x/60+"px";
	bgi.style.top=-y/60+"px";
};
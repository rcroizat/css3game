// 4 animations, we chose one randomly
function animation() {
  return Math.floor(Math.random() * (4 - 1)) + 1;
}

window.setInterval(function(){
	var en =  '';
	en = document.createElement('div');
	document.getElementById('main').appendChild(en);
	en.className = 'enemy';
	en.innerHTML = '<div class="loose">Perdu <a href="index.html">Rejouer</a></div>';
	en.style.display = 'block';
	en.style.animation=' fire'+animation()+' 2s linear forwards';

}, 500);

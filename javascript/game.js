// 4 animations, we chose one randomly
function animation() {
  return Math.floor(Math.random() * (8 - 1)) + 1;
}


// one enemy every 0.3s
window.setInterval(function(){
	var en =  '';
	en = document.createElement('div');
	document.getElementById('main').appendChild(en);
	en.className = 'enemy';
	en.innerHTML = '<div class="loose">Perdu <a href="index.html">Rejouer</a></div>';
	en.style.display = 'block';
	en.style.animation=' fire'+animation()+' 2s linear forwards';

}, 300);

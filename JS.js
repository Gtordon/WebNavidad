const contador = document.getElementById("contador");

//contador 2026
const navidad = new Date(2026, 11, 25, 0, 0, 0).getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = navidad - ahora;

    if (diferencia < 0) {
        contador.innerHTML = "¡Feliz Navidad!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

const intervalo = setInterval(actualizarContador, 1000);
actualizarContador();

function generarRandom(min, max) {
  return Math.random() * (max - min) + min
}

for(let i = 0;i <= 50;i++) {
	var el = document.createElement('div')
	var ran = generarRandom(5, 20)
	var ranCinco = generarRandom(4, 8)
	var ranSeis = generarRandom(0, 5)
	var ranDos = generarRandom(5, 300)
	var ranTres = generarRandom(5, 300)
	var ranCuatro = generarRandom(5, 110)
	
	el.style.marginLeft = ranDos + 'vw';
	el.style.marginRight = ranTres + 'vw';	
	el.style.marginTop = '-' + (parseInt(ran) + 10) + 'px';	
	el.style.background = '#'+i+i+i
	el.style.width = ran + 'px';
	el.style.height = ran + 'px';
	el.style.animationDuration = ranCinco + 's';
	el.style.animationDelay = ranSeis + 's';
	
	
	
	
	document.body.appendChild(el)
	el.classList.add('punto')
}
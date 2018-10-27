
		window.addEventListener('load',cargar, true);

function regre(){
			
	window.location.assign('index.html');
   } 


		function agregar(){
			notas = document.getElementById('nota');
			notas.innerHTML = notas.value;
			//BOM
			localStorage.setItem('nota',notas.innerHTML);
			//notas.value = "";//
		}

		function cargar(){
			if (localStorage.getItem('nota')) {
				notas = document.getElementById('nota');
				notas.innerHTML = localStorage.getItem('nota');
			}
			boton = document.getElementById('agre');
			boton.addEventListener('click',agregar,true);
		}

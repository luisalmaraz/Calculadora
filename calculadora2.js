function concatenar(dato){
			//alert("hola");
		dato = document.getElementById("lol").value+=dato;
		//dato += document.getElementById("entrada").value;
		//innerHTML += dato;

	}
function borrar(){
	//alert("hola");
	document.getElementById("lol").value="";
 }
function iguals(){
	imp = document.getElementById("lol").value;
	//alert(imp);  
		if (imp == "007"){
window.location.assign('acordeon2.html');
   }  
   res = eval(imp);
   document.getElementById("lol").value=res;
}
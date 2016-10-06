// JavaScript Document
//llena dinámicamente la lista comuna
function MostrarComuna()
{	var ciudad = document.getElementById("cboCiudad");
	var comuna = document.getElementById("cboComuna");
	comuna.options.length = 0;
	switch (ciudad.selectedIndex)
		{	
		case 1 : 	var c = ['--Seleccione--','Iquique','pica','Pozo Al Monte','Chépica'];
		break;
		case 2 : 	var c = ['--Seleccione--','Antofagasta','Mejillones','Sierra Gorda'];
		break;
		case 3 : 	var c = ['--Seleccione--','Diego de Almagro','Caldera'];
		break;
		}
		for(var i = 0; i<c.length;i++)
		{
			comuna.options[i] = new Option(c[i],i,i);
		}
		comuna.selectedIndex = 0;
}
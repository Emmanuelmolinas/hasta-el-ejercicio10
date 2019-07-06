/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldo;
    var valorPorcentaje;
    var aumento;
    var resultado;

    sueldo=document.getElementById("sueldo").value;

    sueldo=parseInt(sueldo);

    valorPorcentaje=10;

    aumento=1+(valorPorcentaje/100);

    resultado=sueldo*aumento;
    document.getElementById("resultado").value=resultado

  




    
    









    



   
    


	
}

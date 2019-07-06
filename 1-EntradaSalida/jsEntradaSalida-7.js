/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numero1;
    var numero2;
    var suma;

    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;
    
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);


    suma=numero1+numero2;
    alert("la suma es :" + suma);

	
}

function restar()
{
    var nuemro1;
    var numero2;
    var resta;
    
    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);

    resta=numero1-numero2;
    alert("la resta es : " + resta);
}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var multiplicar;

    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);

    

    multiplicar=numero1*numero2;
    alert("el resultado es : " + multiplicar);

	
}

function dividir()
{   
  
    var num1;
    var num2;
    var division;

    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;

    num1=parseInt(num1);
    num2=parseInt(num2);

    division=num1/num2;
    alert("el resultado es : " + division);

	
}


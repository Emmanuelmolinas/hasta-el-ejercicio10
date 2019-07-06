/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;

    var suma;

    //alert(dato); sale undefined

    //dato = document.getElementById("numeroUno").value; No anda da null

    numero1=document.getElementById("numeroUno").value;
    numero2=document.getElementById("numeroDos").value;

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);


    suma=numero1+numero2;
    alert("la suma es : "+ suma);
    

    


}


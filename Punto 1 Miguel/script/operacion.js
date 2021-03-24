function soloNum(evt){
	if(window.event){
		keynum=evt.keyCode;
	}	
	else{
		keynum=evt.which;
	}

	if(keynum>47&&keynum<58 || keynum==8 || keynum==13){
		return true;
	}	
	else{
		alert("solo se aceptan numeros :)");
		return false;
	}	
}	
function validar(){
	var  x, y;
	x=document.getElementById("primernumero").value;
	y=document.getElementById("segundonumero").value;
	  if (x.length==0 || y.length==0){
		window.alert("solo se acepta operaciones con datos ingresados :)")
	}
}	   

function myop1() {  
    var x,y,suma,text;  
    x = document.getElementById("primernumero").value;  
    y = document.getElementById("segundonumero").value;
    suma=parseFloat(x)+parseFloat(y);  
    text= suma;    
    document.getElementById("sum").innerHTML = text;  
}    
function myop2() {
	var x,y,resta,text;
	x = document.getElementById("primernumero").value;  
    y = document.getElementById("segundonumero").value;
    resta=parseFloat(x)-parseFloat(y);  
    text= resta;    
    document.getElementById("rest").innerHTML = text;  
}	
function myop3() {
	var x,y,multiplicacion,text;
	x = document.getElementById("primernumero").value;  
    y = document.getElementById("segundonumero").value;
    multiplicacion=parseFloat(x)*parseFloat(y);  
    text= multiplicacion;    
    document.getElementById("multi").innerHTML = text;  
}	
function myop4() {
	var x,y,division,text;
	x = document.getElementById("primernumero").value;  
    y = document.getElementById("segundonumero").value;
    division=parseFloat(x)/parseFloat(y);  
    text= division;    
    document.getElementById("div").innerHTML = text;  
}
function myop5() {
	var x,y,potencia,text;
	x = document.getElementById("primernumero").value;  
    y = document.getElementById("segundonumero").value;
    potencia= Math.pow(parseFloat(x),parseFloat(y));  
    text= potencia;    
    document.getElementById("pot").innerHTML = text;  
}	

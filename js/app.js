var operaciona = 0;
    var operacionb = 0;
    var operacion = "";
    var resultado = 0;
    var isSign = false;




     var display = document.getElementById('display')
     display.innerHTML = '0';



   var resultado = document.getElementById('sign');
   var reset = document.getElementById('on');
   var suma = document.getElementById('mas');
   var resta = document.getElementById('menos');
   var multiplicacion = document.getElementById('por');
   var division = document.getElementById('dividido');
   var igual = document.getElementById('igual');
   var punto = document.getElementById('punto');
   var uno = document.getElementById('1');
   var dos = document.getElementById('2');
   var tres = document.getElementById('3');
   var cuatro = document.getElementById('4');
   var cinco = document.getElementById('5');
   var seis = document.getElementById('6');
   var siete = document.getElementById('7');
   var ocho = document.getElementById('8');
   var nueve = document.getElementById('9');
   var cero = document.getElementById('0');



   uno.onclick = function(){
     if(display.innerHTML == "0"){
       display.innerHTML = "";
     }
     if(display.innerHTML.length >= 8){
     }else{
     display.innerHTML += "1"
     }

   }


   dos.onclick = function(){
     if(display.innerHTML == "0"){
       display.innerHTML = "";
     }
     if(display.innerHTML.length >= 8){
     }else{
     display.innerHTML += "2"
     }
   }
   tres.onclick = function(){
     if(display.innerHTML == "0"){
       display.innerHTML = "";
     }
     if(display.innerHTML.length >= 8){
     }else{
     display.innerHTML += "3"
     }
   }
   cuatro.onclick = function(){
     if(display.innerHTML == "0"){
       display.innerHTML = "";
     }
     if(display.innerHTML.length >= 8){
     }else{
     display.innerHTML += "4"
     }
   }
   cinco.onclick = function(){
     if(display.innerHTML == "0"){
       display.innerHTML = "";
     }
     if(display.innerHTML.length >= 8){
     }else{
     display.innerHTML += "5"
     }
   }
   seis.onclick = function(){
     if(display.innerHTML == "0"){
       display.innerHTML = "";
     }
     if(display.innerHTML.length >= 8){
     }else{
     display.innerHTML += "6"
     }
   }
   siete.onclick = function(){
     if(display.innerHTML == "0"){
       display.innerHTML = "";
     }
     if(display.innerHTML.length >= 8){
     }else{
     display.innerHTML += "7"
     }
   }
   ocho.onclick = function(){
     if(display.innerHTML == "0"){
       display.innerHTML = "";
     }
     if(display.innerHTML.length >= 8){
     }else{
     display.innerHTML += "8"
     }
   }
   nueve.onclick = function(){
     if(display.innerHTML == "0"){
       display.innerHTML = "";
     }
     if(display.innerHTML.length >= 8){
     }else{
     display.innerHTML += "9"
     }
   }
   cero.onclick = function(){
     display.innerHTML += "0"
   }

   suma.onclick = function(){
     operaciona = display.innerHTML;
     operacion = "+";
     display.innerHTML = "";
   }

   resta.onclick = function(){
     operaciona = display.innerHTML;
     operacion = "-";
     display.innerHTML = "";
   }

   multiplicacion.onclick = function(){
     operaciona = display.innerHTML;
     operacion = "*";
     display.innerHTML = "";
   }

   division.onclick = function(){
     operaciona = display.innerHTML;
     operacion = "/";
     display.innerHTML = "";

   }
   igual.onclick = function(){
       operacionb = display.innerHTML;
       if(operacion == "+"){
       resultado = parseFloat(operaciona) + parseFloat(operacionb);
       }
       if(operacion == "-"){
       resultado = parseFloat(operaciona) - parseFloat(operacionb);
       }
       if(operacion == "*"){

       resultado = parseFloat(operaciona) * parseFloat(operacionb);
       }
       if(operacion == "/"){
       resultado = parseFloat(operaciona) / parseFloat(operacionb);
       }
       if(display.innerHTML.length >= 8){
         resultado
       }else{
        resultado=  resultado.toExponential(2);
       display.innerHTML = resultado
       }



   }
   on.onclick = function(){
     display.innerHTML = "0"
   }
   sign.onclick = function(){
     isSign = !isSign;
     if(isSign && display.innerHTML!="0"){
       display.innerHTML = "-" + display.innerHTML;
     }else{
       display.innerHTML =
       display.innerHTML.slice(1);
     }
   }
   sign.onclick = function(){
     display.innerHTML = display.innerHTML + ".";
     if(display.innerHTML!="0"){
       display.innerHTML =  display.innerHTML + "." ;
     }else{
       display.innerHTML =
       display.innerHTML.slice(1);
     }
   }
   uno.addEventListener("mousedown",function(){
         uno.setAttribute("style","transform:scale(1,1)")
     })
     uno.addEventListener("mouseout",function(){
         uno.setAttribute("style","transform:scale(1.1,1.1)")
     })
     dos.addEventListener("mousedown",function(){
           dos.setAttribute("style","transform:scale(1,1)")
       })
       dos.addEventListener("mouseout",function(){
           dos.setAttribute("style","transform:scale(1.1,1.1)")
       })
       tres.addEventListener("mousedown",function(){
           tres.setAttribute("style","transform:scale(1,1)")
       })
       tres.addEventListener("mouseout",function(){
           tres.setAttribute("style","transform:scale(1.1,1.1)")
       })
       cuatro.addEventListener("mousedown",function(){
           cuatro.setAttribute("style","transform:scale(1,1)")
       })
       cuatro.addEventListener("mouseout",function(){
           cuatro.setAttribute("style","transform:scale(1.1,1.1)")
       })
       cinco.addEventListener("mousedown",function(){
           cinco.setAttribute("style","transform:scale(1,1)")
       })
       cinco.addEventListener("mouseout",function(){
           cinco.setAttribute("style","transform:scale(1.1,1.1)")
       })
       seis.addEventListener("mousedown",function(){
           seis.setAttribute("style","transform:scale(1,1)")
       })
       seis.addEventListener("mouseout",function(){
           seis.setAttribute("style","transform:scale(1.1,1.1)")
       })
       siete.addEventListener("mousedown",function(){
           siete.setAttribute("style","transform:scale(1,1)")
       })
       siete.addEventListener("mouseout",function(){
           siete.setAttribute("style","transform:scale(1.1,1.1)")
       })
       ocho.addEventListener("mousedown",function(){
           ocho.setAttribute("style","transform:scale(1,1)")
       })
       ocho.addEventListener("mouseout",function(){
           ocho.setAttribute("style","transform:scale(1.1,1.1)")
       })
       nueve.addEventListener("mousedown",function(){
           nueve.setAttribute("style","transform:scale(1,1)")
       })
       nueve.addEventListener("mouseout",function(){
           nueve.setAttribute("style","transform:scale(1.1,1.1)")
       })
       cero.addEventListener("mousedown",function(){
           cero.setAttribute("style","transform:scale(1,1)")
       })
       cero.addEventListener("mouseout",function(){
           cero.setAttribute("style","transform:scale(1.1,1.1)")
       })
       sign.addEventListener("mousedown",function(){
           sign.setAttribute("style","transform:scale(1,1)")
       })
       sign.addEventListener("mouseout",function(){
           sign.setAttribute("style","transform:scale(1.1,1.1)")
       })
       raiz.addEventListener("mousedown",function(){
           raiz.setAttribute("style","transform:scale(1,1)")
       })
       raiz.addEventListener("mouseout",function(){
           raiz.setAttribute("style","transform:scale(1.1,1.1)")
       })
       dividido.addEventListener("mousedown",function(){
           dividido.setAttribute("style","transform:scale(1,1)")
       })
       dividido.addEventListener("mouseout",function(){
           dividido.setAttribute("style","transform:scale(1.1,1.1)")
       })
       por.addEventListener("mousedown",function(){
           por.setAttribute("style","transform:scale(1,1)")
       })
       por.addEventListener("mouseout",function(){
           por.setAttribute("style","transform:scale(1.1,1.1)")
       })
       punto.addEventListener("mousedown",function(){
           punto.setAttribute("style","transform:scale(1,1)")
       })
       punto.addEventListener("mouseout",function(){
           punto.setAttribute("style","transform:scale(1.1,1.1)")
       })
       menos.addEventListener("mousedown",function(){
           menos.setAttribute("style","transform:scale(1,1)")
       })
       menos.addEventListener("mouseout",function(){
           menos.setAttribute("style","transform:scale(1.1,1.1)")
       })
       igual.addEventListener("mousedown",function(){
           igual.setAttribute("style","transform:scale(1,1)")
       })
       igual.addEventListener("mouseout",function(){
           igual.setAttribute("style","transform:scale(1.1,1.1)")
       })
       mas.addEventListener("mousedown",function(){
           mas.setAttribute("style","transform:scale(1,1)")
       })
       mas.addEventListener("mouseout",function(){
           mas.setAttribute("style","transform:scale(1.1,1.1)")
       })
       on.addEventListener("mousedown",function(){
           on.setAttribute("style","transform:scale(1,1)")
       })
       on.addEventListener("mouseout",function(){
           on.setAttribute("style","transform:scale(1.1,1.1)")
       })

var calculadora = {

	visor: document.getElementById("display"),
	valorDisplay: "0",
	operacion: "",
	Valor1: 0,
	Valor2: 0,
	ValorUlt: 0,
	Result: 0,
	TeclaIgual: false,

	inicia: (function(){
		this.asignarFuncion();
		this.asignarBotones(".tecla");

	}),


 	asignarFuncion: function(){
		document.getElementById("0").addEventListener("click", function() {calculadora.TecleaNumero("0");});
		document.getElementById("1").addEventListener("click", function() {calculadora.TecleaNumero("1");});
		document.getElementById("2").addEventListener("click", function() {calculadora.TecleaNumero("2");});
		document.getElementById("3").addEventListener("click", function() {calculadora.TecleaNumero("3");});
		document.getElementById("4").addEventListener("click", function() {calculadora.TecleaNumero("4");});
		document.getElementById("5").addEventListener("click", function() {calculadora.TecleaNumero("5");});
		document.getElementById("6").addEventListener("click", function() {calculadora.TecleaNumero("6");});
		document.getElementById("7").addEventListener("click", function() {calculadora.TecleaNumero("7");});
		document.getElementById("8").addEventListener("click", function() {calculadora.TecleaNumero("8");});
		document.getElementById("9").addEventListener("click", function() {calculadora.TecleaNumero("9");});
		document.getElementById("menos").addEventListener("click", function() {calculadora.TecleaOperacion("-");});
		document.getElementById("mas").addEventListener("click", function() {calculadora.TecleaOperacion("+");});
		document.getElementById("on").addEventListener("click", function() {calculadora.borrarDisplay();});
		document.getElementById("sign").addEventListener("click", function() {calculadora.AlterSigno();});
		document.getElementById("raiz").addEventListener("click", function() {calculadora.TecleaOperacion("raiz");});
		document.getElementById("dividido").addEventListener("click", function() {calculadora.TecleaOperacion("/");});
		document.getElementById("punto").addEventListener("click", function() {calculadora.TecleaDecimal();});
		document.getElementById("igual").addEventListener("click", function() {calculadora.ImprimirResult();});
		document.getElementById("por").addEventListener("click", function() {calculadora.TecleaOperacion("*");});

	},

		borrarDisplay: function(){
 	  this.valorDisplay = "0";
		this.operacion = "";
		this.Valor1 = 0;
		this.Valor2 = 0;
		this.Result = 0;
		this.Operación = "";
		this.TeclaIgual = false;
		this.ValorUlt = 0;
		this.ActDisplay();
	},

	AlterSigno: function(){
		if (this.valorDisplay !="0") {
			var aux;
			if (this.valorDisplay.charAt(0)=="-") {
				aux = this.valorDisplay.slice(1);
			}	else {
				aux = "-" + this.valorDisplay;
			}
		this.valorDisplay = "";
		this.valorDisplay = aux;
		this.ActDisplay();
		}
	},

	TecleaDecimal: function(){
		if (this.valorDisplay.indexOf(".")== -1) {
			if (this.valorDisplay == ""){
				this.valorDisplay = this.valorDisplay + "0.";
			} else {
				this.valorDisplay = this.valorDisplay + ".";
			}
			this.ActDisplay();
		}
	},

	TecleaNumero: function(valor){
		if (this.valorDisplay.length < 8) {

			if (this.valorDisplay=="0") {
				this.valorDisplay = "";
				this.valorDisplay = this.valorDisplay + valor;
			} else {
				this.valorDisplay = this.valorDisplay + valor;
			}
		this.ActDisplay();
		}
	},

	TecleaOperacion: function(oper){
		this.Valor1 = parseFloat(this.valorDisplay);
		this.valorDisplay = "";
		this.operacion = oper;
		this.TeclaIgual = false;
		this.ActDisplay();
	},

	ImprimirResult: function(){
 		if(!this.TeclaIgual){
			this.Valor2 = parseFloat(this.valorDisplay);
			this.ValorUlt = this.Valor2;
			this.realizarOperacion(this.Valor1, this.Valor2, this.operacion);
		} else {
		this.realizarOperacion(this.Valor1, this.ValorUlt, this.operacion);
		}
		this.Valor1 = this.Result;
   	this.valorDisplay = "";
 		if (this.Result.toString().length < 9){
			this.valorDisplay = this.Result.toString();
		} else {
			this.valorDisplay = this.Result.toString().slice(0,8) + "...";
		}
 		this.TeclaIgual = true;
		this.ActDisplay();
	},

	realizarOperacion: function(Valor1, Valor2, operacion){
		switch(operacion){
			case "+":
				this.Result = eval(Valor1 + Valor2);
			break;
			case "-":
				this.Result = eval(Valor1 - Valor2);
			break;
			case "*":
				this.Result = eval(Valor1 * Valor2);
			break;
			case "/":
				this.Result = eval(Valor1 / Valor2);
			break;
			case "raiz":
				this.Result = eval(Math.sqrt(Valor1));
		}
	},


		asignarBotones: function(selector){
			var x = document.querySelectorAll(selector);
			for (var i = 0; i<x.length;i++) {
				x[i].onmouseover = this.eventoMenosBoton;
				x[i].onmouseleave = this.eventoMasBoton;
			};
		},
	 	eventoMenosBoton: function(event){
			calculadora.MenosBoton(event.target);
		},
	 	eventoMasBoton: function(event){
			calculadora.MasBoton(event.target);
		},


		MenosBoton: function(elemento){
			elemento.setAttribute("style","transform:scale(1.1,1.1)")
		},

		MasBoton: function(elemento){
			elemento.setAttribute("style","transform:scale(1,1)")
		},

	ActDisplay: function(){
		this.visor.innerHTML = this.valorDisplay;
	}

};
 calculadora.inicia();

alert("Bienvenido a Maximo's Seguros");

let nombreCliente = prompt("Ingrese su nombre: ");

function saludarCliente(nombreCliente) {
    alert("Hola " + nombreCliente + " gracias por visitarnos, ¿En que podemos ayudarte? ");
}

saludarCliente(nombreCliente);

let avisoAlCliente = alert("Se cobra un 10% del total del seguro como comision");

let valorFerrari = 150000
let valorAudi = 75000
let valorFord = 36000
let valorMclaren = 170000
let valorChevrolet = 35000
let valorRenault = 15000
let valorBmw = 50000
let valorPorsche = 160000
let valorMaserati = 120000

while(true){
    let num = prompt("por favor ingrese su numero de DNI, escriba salir para terminar");

    if(!isNaN(num) && num != null && num != ""){
        alert("Muchas gracias, continuemos");
      break;
    }else if(num == "salir"){
        break;
    }else{
        alert("Formato incorrecto");
      continue;
    }
}
alert("Trabajamos con Ferrari, Ford, Mclaren, Maserati, Chevrolet, Renault, Audi, Bmw y Porsche")

let modelo = prompt("Ingrese su modelo de auto: ");
if (modelo === "Ferrari") {
    alert ("El total de su seguro mensual es de: " + (valorFerrari + valorFerrari*(10/100)));
} else if (modelo === "Ford"){
    alert ("El total de su seguro mensual es de: " + (valorFord + valorFord*(10/100)));
} else if (modelo === "Mclaren"){
    alert ("El total de su seguro mensual es de: " + (valorMclaren + valorMclaren*(10/100)));
} else if (modelo === "Maserati"){
    alert ("El total de su seguro mensual es de: " + (valorMaserati + valorMaserati*(10/100)));
} else if (modelo === "Chevrolet"){
    alert ("El total de su seguro mensual es de: " + (valorChevrolet + valorChevrolet*(10/100)));
} else if (modelo === "Renault"){
    alert ("El total de su seguro mensual es de: " + (valorRenault + valorRenault*(10/100)));
} else if (modelo === "Audi"){
    alert ("El total de su seguro mensual es de: " + (valorAudi + valorAudi*(10/100)));
} else if (modelo === "Bmw"){
    alert ("El total de su seguro mensual es de: " + (valorBmw + valorBmw*(10/100)));
} else if (modelo === "Porsche"){
    alert ("El total de su seguro mensual es de: " + (valorPorsche + valorPorsche*(10/100)));
} else {
    alert ("Modelo de auto que no trabajamos");
}

alert("Los pagos se acreditan a una tarjeta de crédito o débito");

while(true){
    let num = prompt("por favor ingrese el numero de su tarjeta, escriba salir para terminar");

    if(!isNaN(num) && num != null && num != ""){
        alert("Muchas gracias por contratar Maximo's Seguros");
      break;
    }else if(num == "salir"){
        break;
    }else{
        alert("No se encuentra esta tarjeta");
      continue;
    }
}
var resultado = document.getElementById("resultado");
generar(300);

function generar(numero) {
    for(i=1;i<=numero;i++) {
        if(divisible(i,3)) {
            resultado.innerHTML += "fizz";
        }
        if(divisible(i,5)==true) {
            resultado.innerHTML += " buzz";
        }
        if(!divisible(i,3) && !divisible(i,5)) {
            resultado.innerHTML += i;
        }
        resultado.innerHTML += "<br>"
    }
}

function divisible(num,divisor) {
    if(num%divisor==0) {
        return true;
    }
    else {
        return false;
    }
}
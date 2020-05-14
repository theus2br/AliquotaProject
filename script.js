function calcularAliquota(){
    var valorMensal =  parseInt(document.getElementById("valorMensal").value);
    var valorAnual = valorMensal * 12;
    var div = document.getElementById("resultado");   
    var divCalculoShow = document.getElementById("calculoShow");   
    var e = document.getElementById("tipoEstabelecimento");
    var porcentagemCategoria = e.options[e.selectedIndex].value;
    var calculo;
    var calculo2;

    //Aliquota em %
    var AliquotaFaixa1 = 0.04;
    var AliquotaFaixa2 = 0.073;
    var AliquotaFaixa3 = 0.095;
    var AliquotaFaixa4 = 0.107;
    var AliquotaFaixa5 = 0.143;
    var AliquotaFaixa6 = 0.19;

    //PIS/PASEP em %
    var pisFaixa1 = 0.0276;
    var pisFaixa2 = 0.0276;
    var pisFaixa3 = 0.0276;
    var pisFaixa4 = 0.0276;
    var pisFaixa5 = 0.0276;
    var pisFaixa6 = 0.0613;

    // Cofins em %
    var cofinsFaixa1 = 0.1274; 
    var cofinsFaixa2 = 0.1274;
    var cofinsFaixa3 = 0.1274;
    var cofinsFaixa4 = 0.1274;
    var cofinsFaixa5 = 0.1274;
    var cofinsFaixa6 = 0.2827;

    //valor a deduzir em R$
    var valorDeduzirFaixa1 = 0;
    var valorDeduzirFaixa2 = 5940;
    var valorDeduzirFaixa3 = 13860;
    var valorDeduzirFaixa4 = 22500;
    var valorDeduzirFaixa5 = 87300;
    var valorDeduzirFaixa6 = 378000;

    debugger;
    if(valorAnual <= 180000){
        calculo = (valorAnual * AliquotaFaixa1) - valorDeduzirFaixa1;
        divCalculoShow.innerHTML = "Valor anual: " + valorAnual + " * " + AliquotaFaixa1 + " - " + valorDeduzirFaixa1 + " = " + calculo + "\n";
        calculo2 = (((calculo * porcentagemCategoria) * pisFaixa1) + ((calculo * porcentagemCategoria) * cofinsFaixa1)) * 60;
        divCalculoShow.innerHTML += '<br>';
        divCalculoShow.innerHTML += "((" + Math.round(calculo) + " * " + porcentagemCategoria + ")" + " * " + pisFaixa1 + ") + ((" + Math.round(calculo) + " * " + porcentagemCategoria +")" + " * " + cofinsFaixa1 + ") * " + 60 + " = " +  Math.round(calculo2); 
        divCalculoShow.innerText += "\n Credito Apurado: " + Math.round(calculo2);
        div.innerText = calculo2;
       
    }
    else if (valorAnual > 180000 && valorAnual <= 360000){
        calculo = (valorAnual * AliquotaFaixa2) - valorDeduzirFaixa2;
        divCalculoShow.innerHTML = "Valor anual: " + valorAnual + " * " + AliquotaFaixa2 + " - " + valorDeduzirFaixa2 + " = " + calculo + "\n";
        calculo2 = (((calculo * porcentagemCategoria) * pisFaixa2) + ((calculo * porcentagemCategoria) * cofinsFaixa2)) * 60;
        divCalculoShow.innerHTML += '<br>';
        divCalculoShow.innerHTML += "((" + Math.round(calculo) + " * " + porcentagemCategoria + ")" + " * " + pisFaixa2 + ") + ((" + Math.round(calculo) + " * " + porcentagemCategoria +")" + " * " + cofinsFaixa2 + ") * " + 60 + " = " +  Math.round(calculo2); 
        divCalculoShow.innerText += "\n Credito Apurado: " + Math.round(calculo2);
        div.innerText = calculo2;
    }
    else if (valorAnual > 360000 && valorAnual <= 720000){
        calculo = (valorAnual * AliquotaFaixa3) - valorDeduzirFaixa3;
        divCalculoShow.innerHTML = "Valor anual: " + valorAnual + " * " + AliquotaFaixa3 + " - " + valorDeduzirFaixa3 + " = " + calculo + "\n";
        calculo2 = (((calculo * porcentagemCategoria) * pisFaixa3) + ((calculo * porcentagemCategoria) * cofinsFaixa3)) * 60;
        divCalculoShow.innerHTML += '<br>';
        divCalculoShow.innerHTML += "((" + Math.round(calculo) + " * " + porcentagemCategoria + ")" + " * " + pisFaixa3 + ") + ((" + Math.round(calculo) + " * " + porcentagemCategoria +")" + " * " + cofinsFaixa3 + ") * " + 60 + " = " +  Math.round(calculo2); 
        divCalculoShow.innerText += "\n Credito Apurado: " + Math.round(calculo2);
        div.innerText = calculo2;
    }
    else if (valorAnual > 720000 && valorAnual <= 1800000){
        calculo = (valorAnual * AliquotaFaixa4) - valorDeduzirFaixa4;
        divCalculoShow.innerHTML = "Valor anual: " + valorAnual + " * " + AliquotaFaixa4 + " - " + valorDeduzirFaixa4 + " = " + calculo + "\n";
        calculo2 = (((calculo * porcentagemCategoria) * pisFaixa4) + ((calculo * porcentagemCategoria) * cofinsFaixa4)) * 60;
        divCalculoShow.innerHTML += '<br>';
        divCalculoShow.innerHTML += "((" + Math.round(calculo) + " * " + porcentagemCategoria + ")" + " * " + pisFaixa3 + ") + ((" + Math.round(calculo) + " * " + porcentagemCategoria +")" + " * " + cofinsFaixa3 + ") * " + 60 + " = " +  Math.round(calculo2); 
        divCalculoShow.innerText += "\n Credito Apurado: " + Math.round(calculo2);
        div.innerText = calculo2;
    }
    else if (valorAnual > 1800000 && valorAnual < 3600000){
        calculo = (valorAnual * AliquotaFaixa5) - valorDeduzirFaixa5;
        divCalculoShow.innerHTML = "Valor anual: " + valorAnual + " * " + AliquotaFaixa5 + " - " + valorDeduzirFaixa5 + " = " + calculo + "\n";
        calculo2 = (((calculo * porcentagemCategoria) * pisFaixa5) + ((calculo * porcentagemCategoria) * cofinsFaixa5)) * 60;
        divCalculoShow.innerHTML += '<br>';
        divCalculoShow.innerHTML += "((" + Math.round(calculo) + " * " + porcentagemCategoria + ")" + " * " + pisFaixa5 + ") + ((" + Math.round(calculo) + " * " + porcentagemCategoria +")" + " * " + cofinsFaixa5 + ") * " + 60 + " = " +  Math.round(calculo2); 
        divCalculoShow.innerText += "\n Credito Apurado: " + Math.round(calculo2);
        div.innerText = calculo2;
    }
    else if (valorAnual > 3600000 && valorAnual < 4800000){
        calculo = (valorAnual * AliquotaFaixa6) - valorDeduzirFaixa6;
        calculo2 = (((calculo * porcentagemCategoria) * pisFaixa6) + ((calculo * porcentagemCategoria) * cofinsFaixa6)) * 60;
        divCalculoShow.innerHTML += '<br>';
        divCalculoShow.innerHTML += "((" + Math.round(calculo) + " * " + porcentagemCategoria + ")" + " * " + pisFaixa6 + ") + ((" + Math.round(calculo) + " * " + porcentagemCategoria +")" + " * " + cofinsFaixa6 + ") * " + 60 + " = " +  Math.round(calculo2); 
        divCalculoShow.innerText += "\n Credito Apurado: " + Math.round(calculo2);
        div.innerText = calculo2;
    }else{
        alert("Valor Invalido! O valor está acima dos valores definidos")
    }
    div.innerText = "CRÉDITO APURADO R$ " + Math.round(calculo2) + ",00";

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    }

    

    
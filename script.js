function calcularAliquota(){
    
    var valorMensal =  parseInt(document.getElementById("valorMensal").value);
    var valorAnual = valorMensal * 12;
    var div = document.getElementById("resultado");   
    var divCalculoEfetivaShow = document.getElementById("calculoShow");   
    var e = document.getElementById("tipoEstabelecimento");
    var porcentagemCategoria2 = e.options[e.selectedIndex].value;
    var porcentagemCategoria = parseFloat(porcentagemCategoria2).toFixed(4);
    var aliquotaEfetiva;
    var calculo2;
    var tributado;
    var monofasico;
    var monofasicoFinal;
    var totalRecalculado;
    var restituido;
    var aux;
   

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

    
    if(valorAnual <= 180000){}
    else if (valorAnual > 180000 && valorAnual <= 360000){}
    else if (valorAnual > 360000 && valorAnual <= 720000){}
    else if (valorAnual > 720000 && valorAnual <= 1800000){}
    else if (valorAnual > 1800000 && valorAnual < 3600000){
        debugger;
        //ALÍQUOTA EFETIVA 
        aliquotaEfetiva = ((valorAnual * AliquotaFaixa5) - valorDeduzirFaixa5)/valorAnual;
        aliquotaEfetiva = parseFloat((aliquotaEfetiva).toFixed(6));
        divCalculoEfetivaShow.innerHTML = "\n" + valorAnual + " * " + AliquotaFaixa5 + " - " + valorDeduzirFaixa5 + ")/" + valorAnual + " = " + aliquotaEfetiva*100 + "%\n";
        
        //CÁLCULO DO SIMPLES NACIONAL
        calculo2 = valorMensal * aliquotaEfetiva;
        divCalculoEfetivaShow.innerHTML += '<br>';
        divCalculoEfetivaShow.innerHTML += "" + valorMensal + " * " + aliquotaEfetiva*100 + "% = " + calculo2 + "\n";  
        
        //Seguimento - 100%
        aux = 1 - porcentagemCategoria;
        aux = parseFloat(aux).toFixed(2);

        //BASE DE aliquotaEfetiva (seguimento) TRIBUTADO
        tributado = (valorMensal * aux) * aliquotaEfetiva; 
        divCalculoEfetivaShow.innerHTML += '<br>';
        divCalculoEfetivaShow.innerHTML += aux*100 + "% + " + valorMensal + " * " + aux*100 + "% = " + tributado;  

        //Porcentagem do MONOFASICO
        var somaGerais = (cofinsFaixa5 + pisFaixa5);
        var multiGerais = aliquotaEfetiva * somaGerais;
        monofasico = aliquotaEfetiva - multiGerais;
        monofasico = parseFloat(monofasico).toFixed(4);
        divCalculoEfetivaShow.innerHTML += '<br>';
        divCalculoEfetivaShow.innerHTML += aliquotaEfetiva*100 + " - " +  aliquotaEfetiva*100 + " * " + cofinsFaixa5*100 + " + " + pisFaixa5*100 + "))" + " = " + monofasico*100 + "%";
        divCalculoEfetivaShow.innerHTML += '<br>';
        

        //BASE DE aliquotaEfetiva 80% MONOFASICO
        monofasicoFinal = (valorMensal * porcentagemCategoria) * monofasico;
        divCalculoEfetivaShow.innerHTML += "\n(" + porcentagemCategoria + "%)" + "(" + valorMensal + " * " + porcentagemCategoria + ") * " + monofasico + " = " + monofasicoFinal;
        
        //TOTAL RECALCULADO
        totalRecalculado = tributado + monofasicoFinal;
        divaliquotaEfetivaShow.innerHTML += tributado + " + " + monofasicoFinal + " = " + totalRecalculado;

        //ECONOMIA MENSAL
        economiaMensal = calculo2 - totalRecalculado;
        divaliquotaEfetivaShow.innerHTML += calculo2 + " - " + totalRecalculado + " = " + economiaMensal;

        //VALOR RESTITUIDO
        restituido = economiaMensal * 60; 
        div.innerText = restituido;
    }
    else if (valorAnual > 3600000 && valorAnual < 4800000){}
    else{
        alert("Valor Invalido! O valor está acima dos valores definidos")
    }
    div.innerText = "CRÉDITO APURADO R$ " + Math.round(calculo2) + ",00";

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    }

    

    
function calcularAliquota() {

    var valorMensal = parseInt(document.getElementById("valorMensal").value);
    var valorAnual = valorMensal * 12;
    var div = document.getElementById("resultado");
    var divCalculoEfetivaShow = document.getElementById("calculoShow");
    var e = document.getElementById("tipoEstabelecimento");
    var porcentagemCategoria2 = e.options[e.selectedIndex].value;
    var porcentagemCategoria = parseFloat(porcentagemCategoria2).toFixed(4);

    debugger;
    var faixaGeral;
    var AliquotaFaixa = new Array();
    var pisFaixa = new Array();
    var valorDeduzirFaixa = new Array();
    var cofinsFaixa = new Array();
    var aliquotaEfetiva;
    var calculo2;
    var tributado;
    var monofasico;
    var monofasicoFinal;
    var totalRecalculado;
    var restituido;
    var aux;

    var i;

    if (valorAnual <= 180000) { i = 0; }
    else if (valorAnual > 180000 && valorAnual <= 360000) { i = 1; }
    else if (valorAnual > 360000 && valorAnual <= 720000) { i = 2; }
    else if (valorAnual > 720000 && valorAnual <= 1800000) { i = 3; }
    else if (valorAnual > 1800000 && valorAnual <= 3600000) { i = 4; }
    else if (valorAnual > 3600000 && valorAnual < 4800000) { i = 5; }
    else { i = 6; }

    //Aliquota em %
    AliquotaFaixa[0] = 0.04;
    AliquotaFaixa[1] = 0.073;
    AliquotaFaixa[2] = 0.095;
    AliquotaFaixa[3] = 0.107;
    AliquotaFaixa[4] = 0.143;
    AliquotaFaixa[5] = 0.19;

    //PIS/PASEP em %
    if (i != 6) { pisFaixa[i] = 0.0276; } else { pisFaixa[i] = 0.0613; }

    // Cofins em %
    if (i != 6) { cofinsFaixa[i] = 0.1274; } else { cofinsFaixa[i] = 0.2827; }

    //valor a deduzir em R$
    valorDeduzirFaixa[0] = 0;
    valorDeduzirFaixa[1] = 5940;
    valorDeduzirFaixa[2] = 13860;
    valorDeduzirFaixa[3] = 22500;
    valorDeduzirFaixa[4] = 87300;
    valorDeduzirFaixa[5] = 378000;

    //ALÍQUOTA EFETIVA 
    aliquotaEfetiva = ((valorAnual * AliquotaFaixa[i]) - valorDeduzirFaixa[i]) / valorAnual;
    aliquotaEfetiva = parseFloat((aliquotaEfetiva).toFixed(6));
    divCalculoEfetivaShow.innerHTML = "\n" + valorAnual + " * " + AliquotaFaixa[i] + " - " + valorDeduzirFaixa[i] + ")/" + valorAnual + " = " + aliquotaEfetiva * 100 + "%\n";

    //CÁLCULO DO SIMPLES NACIONAL
    calculo2 = valorMensal * aliquotaEfetiva;
    divCalculoEfetivaShow.innerHTML += '<br>';
    divCalculoEfetivaShow.innerHTML += "" + valorMensal + " * " + aliquotaEfetiva * 100 + "% = " + calculo2 + "\n";

    //Seguimento - 100%
    aux = 1 - porcentagemCategoria;
    aux = parseFloat(aux).toFixed(2);

    //BASE DE aliquotaEfetiva (seguimento) TRIBUTADO
    tributado = (valorMensal * aux) * aliquotaEfetiva;
    divCalculoEfetivaShow.innerHTML += '<br>';
    divCalculoEfetivaShow.innerHTML += aux * 100 + "% + " + valorMensal + " * " + aux * 100 + "% = " + tributado;

    //Porcentagem do MONOFASICO
    var somaGerais = (cofinsFaixa[i] + pisFaixa[i]);
    var multiGerais = aliquotaEfetiva * somaGerais;
    monofasico = aliquotaEfetiva - multiGerais;
    monofasico = parseFloat(monofasico).toFixed(4);
    divCalculoEfetivaShow.innerHTML += '<br>';
    divCalculoEfetivaShow.innerHTML += aliquotaEfetiva * 100 + " - " + aliquotaEfetiva * 100 + " * " + cofinsFaixa[i] * 100 + " + " + pisFaixa[i] * 100 + "))" + " = " + monofasico * 100 + "%";
    divCalculoEfetivaShow.innerHTML += '<br>';


    //BASE DE aliquotaEfetiva 80% MONOFASICO
    monofasicoFinal = (valorMensal * porcentagemCategoria) * monofasico;
    divCalculoEfetivaShow.innerHTML += "\n (" + valorMensal + " * " + porcentagemCategoria * 100 + "%) * " + monofasico * 100 + " = " + monofasicoFinal;

    //TOTAL RECALCULADO
    totalRecalculado = tributado + monofasicoFinal;
    divCalculoEfetivaShow.innerHTML += '<br>';
    divCalculoEfetivaShow.innerHTML += "\n" + tributado + " + " + monofasicoFinal + " = " + totalRecalculado;

    //ECONOMIA MENSAL
    economiaMensal = calculo2 - totalRecalculado;
    divCalculoEfetivaShow.innerHTML += '<br>';
    divCalculoEfetivaShow.innerHTML += "\n" + calculo2 + " - " + totalRecalculado + " = " + economiaMensal;

    //VALOR RESTITUIDO
    restituido = economiaMensal * 60;
    divCalculoEfetivaShow.innerHTML += '<br>';
    divCalculoEfetivaShow.innerHTML += "\n" + economiaMensal + " * 60 = " + restituido;
    div.innerText = restituido;

    if (i != 6) {
        div.innerText = "CRÉDITO APURADO R$ " + Math.round(restituido) + ",00";
        var img = document.getElementById('img');
        $(this).attr("src","denied.png");
    } else {
        div.innerText = "Com base no valor informado sua empresa não se enquadra no simples nacional.";
        document.getElementById("resultado").style.color =rgb(237,28,36);
    }
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
}




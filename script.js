function calcularAliquota(){
    debugger;
    var valorMensal =  parseInt(document.getElementById("valorMensal").value);
    var valorAnual = valorMensal * 12;
    var div = document.getElementById("resultado");   
    var tipoCategoria = "adega";
    var calculo;
    var calculo2;

    //faixas em %
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

    // Cofins
    var cofinsFaixa1 = 0.1274; 
    var cofinsFaixa2 = 0.1274;
    var cofinsFaixa3 = 0.1274;
    var cofinsFaixa4 = 0.1274;
    var cofinsFaixa5 = 0.1274;
    var cofinsFaixa6 = 0.2827;

    //valor a deduzir em R$
    var valorDeduzirFaixa1 = 1;
    var valorDeduzirFaixa2 = 5940;
    var valorDeduzirFaixa3 = 13860;
    var valorDeduzirFaixa4 = 22500;
    var valorDeduzirFaixa5 = 87300;
    var valorDeduzirFaixa6 = 378000;

    var tipoCategoria;
    var porcentagemCategoria;
    
    switch (tipoCategoria) {
        case "adega": porcentagemCategoria = 0.70;            
        case "autopecas": porcentagemCategoria = 0.80;          
        case "bares_restaurantes": porcentagemCategoria = 0.25;          
        case "casa_show": porcentagemCategoria = 0.25;           
        case "centro_automotivo": porcentagemCategoria = 0.50;        
        case "farmacias": porcentagemCategoria = 0.90;         
        case "loja_conveniencia": porcentagemCategoria = 0.70;            
        case "mercados_mercearias": porcentagemCategoria = 0.10;        
        case "perfumaria": porcentagemCategoria = 0.85;         
        case "petshop": porcentagemCategoria = 0.30;      
            break;    
        default: Outros
            break;
    }
    if(valorAnual <= 180000){
        calculo = (valorAnual * AliquotaFaixa1) - valorDeduzirFaixa1;
        calculo = (((calculo * porcentagemCategoria) * pisFaixa1) + ((calculo * porcentagemCategoria) * cofinsFaixa1)) * 60;
        div.innerText = calculo;
    }
    else if (valorMensal > 180000 && valorMensal <= 360000){
        calculo = (valorAnual * AliquotaFaixa2) - valorDeduzirFaixa2;
        div.innerText = calculo;
    }
    else if (valorMensal > 360000 && valorMensal <= 720000){
        calculo = (valorAnual * AliquotaFaixa3) - valorDeduzirFaixa3;
        div.innerText = calculo;
    }
    else if (valorMensal > 720000 && valorMensal <= 1800000){
        calculo = (valorAnual * AliquotaFaixa4) - valorDeduzirFaixa4;
        div.innerText = calculo;
    }
    else if (valorMensal > 1800000 && aliquota < 3600000){
        calculo = (valorAnual * AliquotaFaixa5) - valorDeduzirFaixa5;
        div.innerText = calculo;
    }
    else if (aliquota > 3600000 && aliquota < 4800000){
        calculo = (valorAnual * AliquotaFaixa6) - valorDeduzirFaixa6;
        div.innerText = calculo;
    }else{
        alert("Excedeu o limite!")
    }
    }

    
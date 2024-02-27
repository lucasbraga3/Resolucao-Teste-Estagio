var titulo = document.getElementsByClassName("title-1"); //Extrai o nome do produto
console.log("Nome do Produto: " + titulo[0].textContent); //Imprime o nome do produto
var atributos = document.getElementsByClassName("field"); //Extrai os atributos do produto
var valoratributos = document.getElementsByClassName("field_value"); //Extrai todos os valores dos atributos acima
for(var i = 0; i < atributos.length; i++){
    console.log(atributos[i].textContent + ": " + valoratributos[i].textContent); //Imprime os atributos e seus valores
}
var notas = document.getElementsByClassName("attr_title"); //Extrai cada classificação do produto
for(var i = 0; i < notas.length; i++){ 
    console.log(notas[i].textContent); //Imprime as classificações do produto
}
var ingredientes = document.getElementsByClassName("panel_text"); //Extrai diversas informações sobre o produto envolvendo seus ingredientes
if (ingredientes[0].outerText == false){console.log("Ingredientes: indefinidos")} else { console.log("Ingredientes: " + ingredientes[0].outerText);} //Imprime os ingredientes do produto, caso existam
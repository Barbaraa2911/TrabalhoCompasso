var formulario =document.getElementsByName("formulario")[0],
    elementos = formulario.elements
    botao = document.getElementsById("enviar")

var validar = function(e){
    
    if(formulario.emocional.value == ""){
        e.preventDefault();
        alert("selecione como você esta se sentindo");

    };
    if(formulario.motivo.value ==""){
        e.preventDefault();
        alert("selecione o motivo ")
    };
    var valor = [formulario.emocional.value,formulario.motivo.value,formulario.comentario.value]
        if(valor !=""){
            console.log(valor)
        };
        if(formulario.motivo.value && formulario.emocional.value !=""){
            alert("Resposta enviada click em concluir")
        }
};
formulario.addEventListener("submit",validar)


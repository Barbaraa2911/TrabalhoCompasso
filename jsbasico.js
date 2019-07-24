var formulario = document.getElementsByName("formulario")[0],
    botao = document.getElementById("enviar")
    

var validar = function(e){

    if(formulario.emocional.value == ""){
        e.preventDefault();
        alert('Selecione como você esta se sentindo');
    };
    if(formulario.motivo.value == ""){ 
        e.preventDefault();
        alert("selecione o motivo");
    };
    var valor = [formulario.motivo.value,formulario.emocional.value,formulario.comentario.value]
        if (valor != ""){
            console.log(valor)
    };
    if(formulario.motivo.value && formulario.emocional.value !=""){
        alert("Resposta enviada click em concluir")
    }
};
formulario.addEventListener("submit", validar)



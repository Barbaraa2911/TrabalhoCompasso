
var botaoAdicionar = document.querySelector("#atualiza");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.myjson.com/bins/nkvld");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var funcionarios = JSON.parse(resposta);

            funcionarios.forEach(function(funcionario) {
                adicionaFuncionarioNaTabela(funcionario);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});


 
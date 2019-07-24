var botaoAdicionar = document.querySelector("#atualiza");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var funcionario = obtemfuncionarioDoFormulario(form);

    var erros = validafuncionario(funcionario);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionafuncionarioNaTabela(funcionario);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemfuncionarioDoFormulario(form) {

    var funcionario = {
        nome: form.nome.value,
        periodo: form.periodo.value,
        gestor: form.altura.value,
        sede: form.sede.value,
        cliente: form.cliente.value,
        status: form.sede.value,
        email: form.email.value,
      
    }

    return funcionario;
}

function montaTr(funcionario) {
    var funcionarioTr = document.createElement("tr");
    funcionarioTr.classList.add("funcionario");

    funcionarioTr.appendChild(montaTd(funcionario.nome, "info-nome"));
    funcionarioTr.appendChild(montaTd(funcionario.periodo, "info-periodo"));
    funcionarioTr.appendChild(montaTd(funcionario.gestor, "info-gestor"));
    funcionarioTr.appendChild(montaTd(funcionario.email, "info-email"));
    funcionarioTr.appendChild(montaTd(funcionario.cliente, "info-cliente"));
    funcionarioTr.appendChild(montaTd(funcionario.status, "info-status"));
    funcionarioTr.appendChild(montaTd(funcionario.sede, "info-sede"));


    return funcionarioTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaFuncionarioNaTabela(funcionario) {
    var funcionarioTr = montaTr(funcionario);
    var tabela = document.querySelector("#tabela-funcionarios");
    tabela.appendChild(funcionarioTr);
}

class Cadastro {
    constructor() {
        this.dados = [];
    }

    cadastrarDado(dado) {
        this.dados.push(dado);
    }

    listarDados() {
        return this.dados;
    }

    editarDado(index, novoDado) {
        if (index >= 0 && index < this.dados.length) {
            this.dados[index] = novoDado;
            return true;
        }
        return false;
    }

    deletarDado(index) {
        if (index >= 0 && index < this.dados.length) {
            this.dados.slice(index, 1);
            return true;
        }
        return false;
    }
}

const cadastro = new Cadastro();

function listarDados() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Dados Cadastrados:</h2>";

    const dados = cadastro.listarDados();
    if (dados.length === 0) {
        resultadoDiv.innerHTML += "<p>Nenhum dado cadastrado.</p>";
    } else {
        for (let i = 0; i < dados.length; i++) {
            resultadoDiv.innerHTML += `<p>${i + 1}. ${dados[i]}</p>`;
        }
    }
}

function cadastrarDado() {
    const novoDado = prompt("Digite o novo dado:");
    if (novoDado !== null && novoDado !== "") {
        cadastro.cadastrarDado(novoDado);
        alert("Dado cadastrado com sucesso!");
    } else {
        alert("Operação cancelada ou dado vazio.");
    }
}
function cadastrarDado() {
    const novoDado = prompt("Digite o novo dado:");
    if (novoDado !== null && novoDado !== "") {
        cadastro.cadastrarDado(novoDado);
        alert("Dado cadastrado com sucesso!");
    } else {
        alert("Operação cancelada ou dado vazio.");
    }
}
function cadastrarDado() {
    const novoDado = parseInt(prompt("Digite o número de jogadores:"));
    if (novoDado !== null && novoDado !== "") {
        cadastro.cadastrarDado(novoDado);
        alert("Dado cadastrado com sucesso!");
    } 
    else {
        alert("Operação cancelada ou dado vazio.");
    }
}
function editarDado() {
    const index = prompt("Digite o índice do dado que deseja editar:");
    const novoDado = prompt("Digite o novo valor:");
    
    if (index !== null && novoDado !== null) {
        if (cadastro.editarDado(parseInt(index) - 1, novoDado)) {
            alert("Dado editado com sucesso!");
        } else {
            alert("Índice inválido.");
        }
    } else {
        alert("Operação cancelada.");
    }
}

function deletarDado() {
    const index = prompt("Digite o índice do dado que deseja deletar:");

    if (index !== null) {
        if (cadastro.deletarDado(parseInt(index) - 1)) {
            alert("Dado deletado com sucesso!");
        } else {
            alert("Índice inválido.");
        }
    } else {
        alert("Operação cancelada.");
    }
}
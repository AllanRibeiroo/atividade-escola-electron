var formCadastro =document.getElementById("form-cadastro")

var listaCadastro = []

function cadastrarEscola(event) {

    event.preventDefault()

    var nome = document.getElementById("nome").value

    var idade = document.getElementById("idade").value

    var matricula = document.getElementById("matricula").value

    var mae = document.getElementById("mae").value

    var telefone = document.getElementById("telefone").value

    console.log(nome)
    console.log(matricula)
    console.log(mae)
    console.log(telefone)

    var objetoCadastro = {
        nome: nome,
        matricula: matricula,
        idade: idade,
        mae: mae,
        telefone: telefone

    }
    console.log("Cadastro feito", objetoCadastro)

    listaCadastro.push(objetoCadastro)


}
 //console.log("Função cadastrarProduto chamada")

formCadastro.addEventListener("submit", cadastrarEscola)
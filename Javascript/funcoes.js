function OlaMundo(){
    alert("entrei");//Caixa de mensagem ao usuário
}

function coletar(){
    var nome;
    var telefone;
    var data;
    var endereco;
    var situacao;
    var pessoa;
    var trabalhando;
    var resultado;

    //Teste de caixa branca - ver cada problema por vez
    nome = document.getElementById("tNome").value;
    telefone = document.getElementById("tTelefone").value;
    data = document.getElementById("tDtNascimento").value;
    endereco = document.getElementById("tEndereco").value;
    situacao = document.querySelector("input[name='situacao']:checked").value;//Pegar um código(código)
    //pessoa = document.getElementsByName("profissao").value;
    //trabalhando = document.getElementsByName("trabalho").value;

    resultado = "Dados Cadastrais\nNome: " + nome + 
                "\nTelefone: " + telefone +
                "\nData de Nascimento: " + data +
                "\nEndereço: " + endereco +
                "\nSituação Civil: " + situacao +
                "\nSituação Jurídica: " + pessoa +
                "\nTrabalhando? " + trabalhando;
    
    
    document.getElementById("resultado").value = resultado;
}//Fim do método

function Somar(){
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("tPrimeiro").value);//Converter para inteiro
    num2 = parseInt(document.getElementById("tSegundo").value);

    resultado = num1 + num2;
    alert(resultado);
}

function Subtrair(){
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("tPrimeiro").value);
    num2 = parseInt(document.getElementById("tSegundo").value);

    resultado = num1 - num2;
    alert(resultado);
}

function Dividir(){
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("tPrimeiro").value);
    num2 = parseInt(document.getElementById("tSegundo").value);

    resultado = num1 / num2;
    alert(resultado);
}

function Multiplicar(){
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("tPrimeiro").value);
    num2 = parseInt(document.getElementById("tSegundo").value);

    resultado = num1 * num2;
    alert(resultado);
}
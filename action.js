$(document).ready(function(){
    $("#notific").hide();
    var url_string = window.location.href;
    var url = new URL(url_string);
    var retorno = url.searchParams.get("retorno");
    if(retorno != null || retorno != undefined){
        if(retorno){
            document.getElementById("campo").style= "display: none";
            alert("Cadastrado com sucesso!");
        }else{
            document.getElementById("campo").style= "display: none";
            alert("Ocorreu algum erro!");
        }
    }

    function validar(nome, email, senha, confirmSenha){
        if(nome == "" || senha == "" || email == "" || confirmSenha == ""){
            alert("Por favor, preecha todos os campos!");
            return false;
        }else{
            if(senha != confirmSenha){
                alert("As senhas não conincidem!");
                return false;
            }
        }
        return true;
    }
    function enviar(){
        let nome = $("#nome");
        let email = $("#email");
        let senha = $("#senha");
        let confirm = $("#passwordConfirm");
        if(validar(nome.val(), email.val(), senha.val(), confirm.val())){
            return true;
        }else{
            senha.val("");
            confirm.val("");
        }
    }
    $("#cadastrar").click(function(){
        if(enviar()){
            $("#notific").show();
            $.ajax(
                method = "POST",
                url = "https://a959dbf49800.ngrok.io/git/raception.js",
                data = {
                    nome: $("#nome"),
                    email: $("#email"),
                    senha: $("#senha")
                }
            ).done(function(){
                $("#notific").hide();
                alert("Cadastrado com sucesso!");
            }).fail(function(){
                $("#notific").hide();
                alert("Ops, ocorreu um erro inesperado, atualiza a pagina e tente novamente!");
            });
        }
    });
});
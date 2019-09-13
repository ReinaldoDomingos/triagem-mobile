function abrirModal(n) {
    if (n) {
        $("#myModal" + n).modal('show');
    } else
    {
        $("#myModal1").modal('show');
    }
}

function fecharModal() {
    $("#myModal1").modal('hide');
}
function salvar(e) {
    if ($('#m-aceitar-termo-paciente').prop('checked')) {
        if ($('#password').val().length >= 4) {
            fecharModal()
            abrirModal(2)
        } else {
            alert("Peça a um(a) enfermeiro(a) digitar a senha!")
        }
    } else {
        alert("É necessario aceitar os termos e condições de uso!")
    }
}

function salvarAlteracoes() {
    $('#collapseOne').collapse('hide');
}

function mostrarSenha() {
    var v = $("#m-aceitar-termo-paciente").prop("checked");
    if (v)
        $('#password').attr("disabled", false);
    else
        $('#password').attr("disabled", true);
}

$("#m-aceitar-termo-paciente").change(
        function () {
            mostrarSenha()
        }
);
$(function () {
    var altura = screen.height
    var largura = screen.width
    if(location.href.indexOf('index.htm')!=-1){
        var  w = ($('#btInicial').css('height'))
        var total = Number(w.substring(0,w.length-2));
        var l = ((100 - parseInt(total/innerWidth * 100))/2)
        $('#btInicial').css('width',w)
        .css('left',l + '%')
    }
    if (altura >= 570) {
        $('#app').hide()
        .show();
    } else {
        $('#app').hide()
        .css('min-height', altura)
        .show();
    }
})

function getMaiorPalavraSintoma(estadoAtual) {
    var maior = 0;
    var i = localStorage.getItem('sintoma-id');
    var id;
    if (lista_sintomas[i].vermelho && estadoAtual == 'vermelho') {
        var vm = lista_sintomas[i].vermelho.length;
        for (var j = 0; j < lista_sintomas[i].vermelho.length; j++) {
            if (lista_sintomas[i].vermelho[j].length > maior) {
                maior = lista_sintomas[i].vermelho[j].length;
            }
        }
    } else if (lista_sintomas[i].laranja && estadoAtual == 'laranja') {
        for (var j = 0; j < lista_sintomas[i].laranja.length; j++) {
            if (lista_sintomas[i].laranja[j].length > maior) {
                maior = lista_sintomas[i].laranja[j].length;
            }
        }
    } else if (lista_sintomas[i].amarelo && estadoAtual == 'amarelo') {
        for (var j = 0; j < lista_sintomas[i].amarelo.length; j++) {
            if (lista_sintomas[i].amarelo[j].length > maior) {
                maior = lista_sintomas[i].amarelo[j].length;
            }
        }
    } else if (lista_sintomas[i].verde && estadoAtual == 'verde') {
        for (var j = 0; j < lista_sintomas[i].verde.length; j++) {
            if (lista_sintomas[i].verde[j].length > maior) {
                maior = lista_sintomas[i].verde[j].length;
            }
        }
    }
    return maior;
}
function iniciar() {
    location.href = 'cadastro.html'

}
function cadastrar() {
    googleDrive.uploadFile( function(success) { alert("All file has been successfully uploaded"); }, function(error) { alert("Something went wrong. Please try again..."); }, filePath);
    var data_hora = $('input[type="datetime-local"]').val()
    var dia = data_hora.substring(8,10)
    var mes = data_hora.substring(5,7)
    var ano = data_hora.substring(0,4)
    var paciente = {
        'nome': $('#cadastro-nome-paciente').val(),
        'sexo': $('#cadastro-sexo-paciente').val(),
        'idade': $('#cadastro-idade-paciente').val(),
        'posto': $('#cadastro-unidade-paciente').val(),
        'cidade': $('#cadastro-cidade-paciente').val(),
        'pa': $('#cadastro-pa-paciente').val(),
        'temp': $('#cadastro-temperatura-paciente').val(),
        'peso': $('#cadastro-peso-paciente').val(),
        'altura': $('#cadastro-altura-paciente').val(),
        'pulso': $('#cadastro-pulso-paciente').val(),
        'glicemia': $('#cadastro-glicemia-paciente').val(),
        'salo2': $('#cadastro-saturacao-paciente').val(),
        'has': $('#cadastro-has-paciente').prop('checked'),
        'diabetes': $('#cadastro-diabetes-paciente').prop('checked'),
        'cardiopata': $('#cadastro-cardiopata-paciente').prop('checked'),
        'alergia': $('#cadastro-alergia-paciente').prop('checked'),
        'medicamentos': $('#cadastro-medicamento-paciente').val(),
        'queixa': $('#cadastro-queixa-paciente').val(),
        'datahora_inicio': $('input[type="datetime-local"]').val(),
        'dia': dia,
        'mes': mes,
        'ano': ano,
        'cor': $('#cadastro-cor-paciente').val()
    }
    localStorage.setItem('paciente-dados', JSON.stringify(paciente))
    if(location.href.indexOf('cadastro.html')!=-1)
        location.href = 'classificacao.html'
}

function loadCSS(url) {
    var lnk = document.createElement('link');
    lnk.setAttribute('id', "css-adicional");
    lnk.setAttribute('type', "text/css");
    lnk.setAttribute('rel', "stylesheet");
    lnk.setAttribute('href', url);
    document.getElementsByTagName("head").item(0).appendChild(lnk);
}
function removerCSS(id) {
    $('#' + id).remove();
}
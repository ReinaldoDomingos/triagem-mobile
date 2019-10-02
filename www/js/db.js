var nome_mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
"Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
var db = null, consultas= [], consulta;

var consultas_processadas = false
db = window.openDatabase("triagem", "1.0", "Triagem DB", 1000000);
db.transaction(populateDB, errorCB, successCB);

try {
    db.transaction(queryConsultaDB, errorCB);    
} catch (e) {
    // console.log(e)
}

function errorInserirRegistroCB(err) {
    if (err.code != 0 & err.code != 5) {
    }
}
function sucessInserirRegistroCB() {
}

var id = 0;
/**
 * Created by Reinaldo Junior on 28/06/2017.
 * Reultilizado by Reinaldo Junior on 18/09/2019
 */
 function deletarDB(tx) {
    tx.executeSql('DELETE FROM registroanimal WHERE id =' + this.id);
}
function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS consultas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome, sexo, idade, '
        +'posto, cidade, pa, temp, peso, altura, pulso, glicemia, salo2, medicamentos, queixa, datahora_inicio, '+
        'has, cardiopata, diabetes, alergia, dia, mes, ano, cor)');
}
function insertDB(tx) {
    cadastrar();    
    var p = JSON.parse(localStorage.getItem('paciente-dados'))

    tx.executeSql("INSERT INTO consultas (nome,sexo,idade,posto,cidade,pa,temp,peso,altura,pulso,glicemia,"+
        "salo2,medicamentos,queixa,datahora_inicio, has, cardiopata, diabetes, alergia, dia, mes, ano, cor) VALUES ('"+p.nome+"','"+
        p.sexo+"','"+p.idade+"','" +p.posto+"','"+p.cidade+"','"+p.pa+"','"+p.temp+"','"+p.peso+"','"+p.altura+"','"+p.pulso+"','"+
        p.glicemia+"','"+p.salo2+"','"+p.medicamentos+"','"+p.queixa+"','"+p.datahora_inicio+"', '"+
        p.has+"','"+p.cardiopata+"','"+p.diabetes+"','"+p.alergia+"', '"+p.dia+"', '"+p.mes+"', '"+p.ano+"', '"+ p.cor +"')");
}
function queryDB(tx) {
    tx.executeSql('SELECT * FROM consultas', [], querySuccess, errorCB);
}
// Query the success callback
//
function querySuccess(tx, results) {
    var len = results.rows.length;
    var tipoReg = "";

    for (var i = 0; i < 12; i++) {
        consultas[i] = {
            id:i,
            nome: nome_mes[i],
            dias: []
        }
    }

    for (var i = 0; i < results.rows.length; i++) {
        var mes = Number(results.rows.item(i).mes) 
        var qtd = consultas[mes-1].dias.length
        consultas[mes-1].dias[qtd] = results.rows.item(i)
    }
    if(location.href.indexOf('relatorio.html')!=-1)
        listar_registros()
    else if (location.href.indexOf('registros.html')!=-1){     
        var id =  localStorage.getItem('consulta-id')
        var mes = localStorage.getItem('consulta-mes')
        // console.log(consultas[mes])
        for (var i = 0; i < consultas[mes].dias.length; i++) {
            if(consultas[mes].dias[i].id == id){ 
                consulta = consultas[mes].dias[i]
                break
            } 
        }
        if(id && mes){
            // console.log('id e mes')
            listar_registro()
        }else if(mes){    
            // console.log('mes apenas')
            mes = Number(mes)            
            consulta = consultas[mes].dias[0]
            // console.log(consultas[mes].dias.length)            
            listar_registro(consultas[mes])            
        }
    }
}
function queryConsultaDB(tx) {
    tx.executeSql('SELECT * FROM consultas', [], queryConsultaSuccess, errorCB);
}

// Query the success callback
//
function queryConsultaSuccess(tx, results) {
    var size = results.rows.length;
    // consultas = results.rows;     
}

function apagar(id) {
    this.id = id;
    db.transaction(deletarDB, errorCB);
//    id = this.id;
}

// Transaction error callback
//
function errorCB(tx, err) {
    console.log("erroCB " + err)
}
function sucesso() {
    // console.log('sucesso')
}
// Transaction success callback
//
function successCB() {
    // alert("success!");
    db.transaction(queryDB, errorCB);
}

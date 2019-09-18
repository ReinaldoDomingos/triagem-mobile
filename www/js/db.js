var db = null, consultas= undefined;
var consultas_processadas = false
db = window.openDatabase("triagem", "1.0", "Triagem DB", 1000000);
db.transaction(populateDB, errorCB, successCB);

try {
    db.transaction(queryConsultaDB, errorCB);    
} catch (e) {
    console.log(e)
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
        'has, cardiopata, diabetes, alergia)');
}
function insertDB(tx) {
    cadastrar();    
    var p = JSON.parse(localStorage.getItem('paciente-dados'))

    tx.executeSql("INSERT INTO consultas (nome,sexo,idade,posto,cidade,pa,temp,peso,altura,pulso,glicemia,"+
        "salo2,medicamentos,queixa,datahora_inicio, has, cardiopata, diabetes, alergia) VALUES ('"+p.nome+"','"+
        p.sexo+"','"+p.idade+"','" +p.posto+"','"+p.cidade+"','"+p.pa+"','"+p.temp+"','"+p.peso+"','"+p.altura+"','"+p.pulso+"','"+
        p.glicemia+"','"+p.salo2+"','"+p.medicamentos+"','"+p.queixa+"','"+p.datahora_inicio+"', '"+
        p.has+"','"+p.cardiopata+"','"+p.diabetes+"','"+p.alergia+"')");
}
function queryDB(tx) {
    tx.executeSql('SELECT * FROM consultas', [], querySuccess, errorCB);
}
// Query the success callback
//
function querySuccess(tx, results) {
    var len = results.rows.length;
    var tipoReg = "";
    consultas = results.rows
    listar_registros()
}
function queryConsultaDB(tx) {
    tx.executeSql('SELECT * FROM consultas', [], queryConsultaSuccess, errorCB);
}

// Query the success callback
//
function queryConsultaSuccess(tx, results) {
    var size = results.rows.length;
    consultas = results.rows; 
    consultas_processadas= true 
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
    console.log('sucesso')
}
// Transaction success callback
//
function successCB() {
    // alert("success!");
    db.transaction(queryDB, errorCB);
}

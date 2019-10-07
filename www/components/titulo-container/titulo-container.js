Vue.component('titulo-container',{
    props:['titulo'],
    template: 
    `<div class="paciente alert alert-dark dados-paciente titulo-container" role="alert">
    <span style="float: left;" @click="voltar()"> <i  class='material-icons'>arrow_back</i></span>
    <h1 id="titulo">{{titulo}}
    
    <span id="btExportar" style="float: right;" onclick="exportar()"> <i id="btDownload" class='material-icons'>save_alt</i></span>
    </h1>
    </div>`,
    data(){
        return{
            paciente:{nome: '',sexo:'',idade:''}
        }
    },
    methods:{
        voltar(){
            let paginaAtual = location.href;
            console.log(paginaAtual)
            if(paginaAtual.indexOf('registros.html')!= -1) location.href = '../relatorio/relatorio.html'
           else if(paginaAtual.indexOf('relatorio.html')!= -1) location.href = '../../index.html'
        }
}
});

var cadastro = new Vue({
    el: '#titulo-container',
    data:{
    }
});


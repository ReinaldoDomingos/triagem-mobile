Vue.component('titulo-container',{
    props:['titulo'],
    template: 
    `<div class="paciente alert alert-dark dados-paciente titulo-container" role="alert">
    <h1 id="titulo">{{titulo}}
    
    <span style="float: right;" onclick="exportar()"> <i id="btDownload" class='material-icons'>save_alt</i></span>
    </h1>
    </div>`,
    data(){
        return{
            paciente:{nome: '',sexo:'',idade:''}
        }
    }
});

var cadastro = new Vue({
    el: '#titulo-container',
    data:{
    }
});


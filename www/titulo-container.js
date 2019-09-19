Vue.component('titulo-container',{
    props:['titulo'],
    template: 
    `<div class="paciente alert alert-dark dados-paciente titulo-container" role="alert">
    <h1>{{titulo}}
    <span v-bind:class="{'oi': this.filho!='true', 'oi-share': this.filho!='true'}" style="float: right;"></span>
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
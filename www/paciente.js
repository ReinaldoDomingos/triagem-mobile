Vue.component('paciente-dados',{
    props:{},
    template: 
    `<div id="paciente" class="paciente alert alert-dark dados-paciente" role="alert">
    <p class="info-paciente lead">
    <p class="text-center"> <span id="nome-paciente"> {{paciente.nome}}</span> <br> <span id="sexo-paciente">{{paciente.sexo}}</span> - <span id="idade-paciente">{{paciente.idade}}</span> ano(s)
    </p>
    </div>`,
    data(){
        return{
            paciente:{nome: '',sexo:'',idade:''}
        }
    },
    mounted: function() {
        var paciente_dados = JSON.parse(localStorage.getItem('paciente-dados'))
        this.paciente.nome = paciente_dados.nome
        this.paciente.idade  = paciente_dados.idade
        this.paciente.sexo = paciente_dados.sexo
    }
});
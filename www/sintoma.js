$('#cadastro').toggle();
var app = new Vue({
        el: '#app',
        data:{
                estadoAtual: 'vermelho',
                gravidade: '',
                resumoGravidade: '',
                sintoma: '',
                maxItem:10,
                minItem:1,
                doencas: ['Agressão', 'Alergia', 'Alteração do comportamento', 'Asma',
                'Autoagressão', 'Bebê Chorando', 'Cefaléia', 'Convulsões', 'Corpo Estranho',
                'Criança Irritadiça', 'Criança Mancando', 'Desmaio no Adulto', 'Diabetes',
                'Diarréia e/ou Vômitos', 'Dispnéia em Adulto', 'Dispinéia em Criança',
                'Doença Mental', 'Doença Sexualmente Transmissível', 'Dor Abdominal em Adulto',
                'Dor Abdominal em Criança', 'Dor Cervical', 'Dor de Garganta', 'Dor Lombar',
                'Dor Testicular', 'Dor Torácica', 'Embriaguez Aparente', 'Erupção Cutânea',
                'Exposição a Agente Químico', 'Feridas', 'Gravidez', 'Hemorragia Digestiva',
                'Infecções Locais e Abcessos', 'Mal Estar em Adulto', 'Mal Estar em Criança',
                'Mordeduras e Picadas', 'Overdose e Envenenamento', 'Pais Preocupados', 'Palpitações',
                'Problemas Dentários', 'Problemas em Extremidades', 'Problemas em Face',
                'Problemas em Olhos', 'Problemas em Ouvidos', 'Problemas Urinários', 'Quedas',
                'Queimaduras', 'Sangramento Vaginal', 'Trauma Cranioencefálico', 'Trauma Maior',
                'Trauma Toracoabdominal', 'Outros'],
                pageOfItems: [],
                cidades :
                ["Água Clara", "Alcinópolis", "Amambaí", "Anastácio", "Angélica",
                "Antônio João", "Aparecida do Taboado", "Aquidauana", "Aral Moreira", "Bandeirantes",
                "Bataguassu", "Bataiporã", "Bela Vista",
                "Bodoquena", "Bonito", "Brasilândia", "Caarapó", "Camapuã",
                "Campo Grande", "Caracol", "Cassilândia", "Chapadão do Sul", "Corguinho",
                "Coronel Sapucaia", "Corumbá", "Costa Rica", "Coxim",
                "Deodápolis", "Dois Irmãos do Buriti", "Douradina", "Dourados", "Eldorado",
                "Fátima do Sul", "Glória de Dourados", "Guia Lopes da Laguna", "Iguatemi", "Inocência",
                "Itaporã", "Itaquiraí", "Ivinhema", "Japorã", "Jaraguari",
                "Jardim", "Jateí", "Juti", "Ladário", "Laguna Carapã",
                "Maracaju", "Miranda", "Mundo Novo", "Naviraí", "Nioaque",
                "Nova Alvorada do Sul", "Nova Andradina", "Novo Horizonte do Sul", "Paranaíba", "Paranhos",
                "Pedro Gomes", "Ponta Porã", "Porto Murtinho", "Ribas do Rio Pardo", "Rio Brilhante",
                "Rio Negro", "Rio Verde de Mato Grosso", "Rochedo", "Santa Rita do Pardo", "São Gabriel do Oeste",
                "Selvíria", "Sete Quedas", "Sidrolândia", "Sonora", "Tacuru",
                "Taquarussu", "Terenos", "Três Lagoas", "Vicentina"],
                paciente:{nome: '', sexo:'', idade:''}
        },
        mounted: function() {
                var paciente_dados = JSON.parse(localStorage.getItem('paciente-dados'))
                this.paciente.nome = paciente_dados.nome
                this.paciente.idade = paciente_dados.idade
                this.paciente.sexo = paciente_dados.sexo
                getMaiorAltura();
        },
        computed:{
                filtrado() {
                        return this.doencas.filter(doenca => {
                                return doenca.toLowerCase().includes(this.sintoma.toLowerCase())
                        })
                },
                sintomas(){
                        var id = localStorage.getItem('sintoma-id');
                        return lista_sintomas[id];
                },
                sintomaGeral(){
                        return localStorage.getItem('sintoma-sintoma')
                },
        },
        methods:{
                voltar(){
                        if (this.estadoAtual == 'vermelho'){
                                $('#cadastro-cor-paciente').val(this.estadoAtual)
                                window.history.back();
                        } else if (this.estadoAtual == "laranja") {
                                this.estadoAtual = 'vermelho'
                        } else if (this.estadoAtual == "amarelo") {
                                this.estadoAtual = 'laranja'
                        } else if (this.estadoAtual == "verde") {
                                this.estadoAtual = 'amarelo'
                        } else{
                                this.estadoAtual = 'verde'
                        }
                        $('#cadastro-cor-paciente').val(this.estadoAtual)
                },
                abrirModal(n) {
                        if (n){
                                this.fecharModal();
//                sexo, idade, cidade, data_inicio, data_fim, ubs = 

//                        adicionarConsulta(sexo, idade, cidade, data_inicio, data_fim, ubs);
$("#myModal" + n).modal('show');
}
else{
        $("#myModal1").modal('show');
}
},
possui(){
        if (this.estadoAtual == "vermelho") {
                this.gravidade = "Emergência"
                this.resumoGravidade = "Risco imediato de perder a vida."
        } else if (this.estadoAtual == "laranja") {
                this.gravidade = "Muito urgente"
                this.resumoGravidade = "Risco imediato de perda de função de órgãos ou membros."
        } else if (this.estadoAtual == "amarelo") {
                this.gravidade = "Urgente"
                this.resumoGravidade = "Condição pode se agravar sem atendimento."
        } else if (this.estadoAtual == "verde") {
                this.gravidade = "Pouco urgente"
                this.resumoGravidade = "Baixo risco de agravo imediato à saúde."
        }
        $('#collapseOne').collapse('hide');
        this.abrirModal();
},
naoPossui(){
        if (this.estadoAtual == 'vermelho'){
                this.estadoAtual = 'laranja';
        }
        else if (this.estadoAtual == 'laranja'){
                this.estadoAtual = 'amarelo';
        }
        else if (this.estadoAtual == 'amarelo'){
                this.estadoAtual = 'verde';
        }
        else {
                this.estadoAtual = 'azul';
        }
        $('#cadastro-cor-paciente').val(this.estadoAtual)        
},
onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
},
alterarLista(){
        if (!this.sintoma){
                this.minItem = 1;
                this.maxItem = 8;
        }
        else{
                this.minItem = 1;
                this.maxItem = 21;
        }
}
},
beforeUpdate(){
},
updated(){
        var s = $('.sintoma').length;
        setTimeout(function(){
                $('.doenca').css('height', 'auto')
                getMaiorAltura();
        }, 10);
        if (this.estadoAtual == "azul"){
                this.gravidade = 'Não Urgente'
                this.resumoGravidade = 'Sem risco de agravo imediato à saúde'
                this.abrirModal()
        }
}

});
function getMaiorAltura(){
        var s = document.getElementsByClassName('sintoma').length
        var maior = 0; ;
        for (var i = 0; i < s; i++) {
                var h = document.getElementsByClassName('sintoma')[i].clientHeight
                if (h > maior) maior = h;
        }
        $('.sintoma').css('height', maior * 0.95);
}
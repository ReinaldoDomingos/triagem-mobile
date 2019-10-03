var h_bts = parseInt(innerHeight * 0.69 / 100) * 100
var max = parseInt(h_bts / 50 * 1.9 / 2) * 2
console.log(max)
if (innerWidth >= 800) max = 12;
$('.bts').css('min-height', h_bts);
$('#sintomas_box').css('min-width', innerWidth * 0.9025);
var app = new Vue({
        el: '#classificacao',
        data: {
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
                sintoma: '',
                maxItem: max,
                minItem:1,
        },
        computed:{
                filtrado() {
                        return this.doencas.filter(doenca => {
                                return doenca.toLowerCase().includes(this.sintoma.toLowerCase())
                        })
                }
        },
        methods: {
                alterarLista(){
                        if (!this.sintoma){
                                this.minItem = 1;
                                this.maxItem = max;
                        }
                        else{
                                this.minItem = 1;
                                this.maxItem = 51;
                        }
                },
                prox(){
                        this.minItem = this.maxItem + 2;
                        this.maxItem += max;
                },
                prev(){
                        this.minItem = this.minItem - max;
                        if (this.minItem == 2) this.minItem = 1;
                        this.maxItem = (this.maxItem / max - 1) * max;
                },
                voltar(){
                        if (location.href.indexOf('cadastro.html') != - 1)
                                location.href = 'index.html'
                        else if (location.href.indexOf('classificacao.html') != - 1)
                                location.href = 'cadastro.html#review'
                        else
                                window.history.back();
                },
                selecionarSintoma(id, sintoma){
                        localStorage.setItem('sintoma-id', id)
                        localStorage.setItem('sintoma-sintoma', sintoma)
                        location.href = 'sintoma.html#review'
                },
                ajustarTamanhoBarraPesquisa(){
                        var s = document.getElementsByClassName('doenca').length
                        var maior = 0; ;
                        for (var i = 0; i < s; i++) {
                                var w = document.getElementsByClassName('doenca')[i].clientWidth
                                if (w > maior) maior = w;
                        }
                        $('.pesquisa input').css('min-width', maior * 1)
                }
        },
        mounted: function(){
                this.ajustarTamanhoBarraPesquisa()
                // $('#paciente').css('min-width', $('#sintomas_box').css('min-width'));

                var w    = $('#sintomas_box').css('min-width')
                w = w.substring(0,w.length-2)
                $('#paciente').css('min-width', (w * 0.98) + 'px')
        }
});
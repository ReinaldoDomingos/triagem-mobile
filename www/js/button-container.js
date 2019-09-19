var teste
Vue.component('button-container',{
	props:['pagina','titulo','icone','chave','filho','id','mess'],
	template: ` <div  class="row" style="width: -webkit-fill-available;">
	<div class="col-1">
	</div>
	<div class="col-10">
	<button id="btContainer"  style="width: -webkit-fill-available;" v-on:click="exportar()" class="btn btn-light doenca">{{titulo}}
	<span v-bind:class="{'oi': this.filho!='true', 'oi-share': this.filho!='true'}" style="float: right;" v-on:click="exportar()"></span>
	</button> 
	</div>
	<div class="col-1">
	</div>
	</div>`,
	data(){
		aberto: false
	},
	methods: {
		exportar(){
			if(location.href.indexOf('relatorio.html')!=-1){
				console.log(this.mess)
				localStorage.setItem('consulta-mes', this.mess)			
				localStorage.setItem('consulta-id', '')		
				console.log(consultas[this.mess].dias)	
				window.location.href = 'registros.html';
			}else if(location.href.indexOf('registros.html')!=-1){
				var doc = new jsPDF('landscape');
				doc.addHTML($('#registros'), function() {
					doc.save("relatorio_pesquisa.pdf");
				});
			}
		},
		ir: function(){
			if(this.pagina)
				window.location.href = this.pagina;
			else
				this.mostrarConteudo()
		},
		mostrarConteudo: function(){
			var qtd = document.getElementsByClassName('dias').length
			var	dias = document.getElementsByClassName('dias')
			var	dia = document.getElementsByClassName('dias')[(this.chave-1)%qtd]
			console.log(this.meses)
			console.log(this.chave)
			if(this.chave){
				console.log(this.chave)
				for (var i = 0; i < dias.length; i++) {
					dias[i].classList.remove('collapse');
					dias[i].classList.remove('show');
					dias[i].classList.add('collapsing');
				}
				if(dia.classList.contains('collapsing')){
					dia.classList.remove('collapsing');
					dia.classList.add('collapse');
					dia.classList.add('show');
				}else {
					dia.classList.remove('collapse');
					dia.classList.remove('show');
					dia.classList.add('collapsing');
				}
			}else{								
				localStorage.setItem('consulta-id', this.id)
				localStorage.setItem('consulta-mes', this.mess)
				location.href = "registros.html"						
			}
		}
	},
	mounted(){
	}
});

var cadastro = new Vue({
	el: '#button',
	data:{}
});
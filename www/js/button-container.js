Vue.component('button-container',{
	props:['pagina','titulo','icone','chave','filho'],
	template: ` <div  class="row" style="width: -webkit-fill-available;">
	<div class="col-1">
	</div>
	<div class="col-10">
	<button  style="width: -webkit-fill-available;" v-on:click="ir(pagina)" class="btn btn-light doenca">{{titulo}}
	<span v-bind:class="{'oi': this.filho!='true', 'oi-share': this.filho!='true'}" style="float: right;"></span>
	</button> 
	</div>
	<div class="col-1">
	</div>
	</div>`,
	methods: {
		ir: function(){
			if(this.pagina)
				window.location.href = this.pagina;
			else
				this.mostrarConteudo()
		},
		mostrarConteudo: function(){
			var qtd = document.getElementsByClassName('dias').length
			var	dia = document.getElementsByClassName('dias')[this.chave%qtd]
			if(this.chave){
				if(dia.classList.contains('collapsing')){
					$('.dias').collapse('hide');
					document.getElementsByClassName('dias')[this.chave%qtd].classList.remove('collapsing');
					document.getElementsByClassName('dias')[this.chave%qtd].classList.add('collapse');
					document.getElementsByClassName('dias')[this.chave%qtd].classList.add('show');
				}else {
					document.getElementsByClassName('dias')[this.chave%qtd].classList.remove('collapse');
					document.getElementsByClassName('dias')[this.chave%qtd].classList.remove('show');
					document.getElementsByClassName('dias')[this.chave%qtd].classList.add('collapsing');
				}
			}else{
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
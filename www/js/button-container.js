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
			console.log(this.chave)
			console.log(this.chave%qtd)
			var	dia = document.getElementsByClassName('dias')[this.chave%qtd]
			if(dia.classList.contains('collapsing')){
				$('.dias').collapse('hide');
				document.getElementsByClassName('dias')[this.chave%qtd].classList.remove('collapsing');
				document.getElementsByClassName('dias')[this.chave%qtd].classList.add('collapse');
				document.getElementsByClassName('dias')[this.chave%qtd].classList.add('show');
			}else{
				document.getElementsByClassName('dias')[this.chave%qtd].classList.remove('collapse');
				document.getElementsByClassName('dias')[this.chave%qtd].classList.remove('show');
				document.getElementsByClassName('dias')[this.chave%qtd].classList.add('collapsing');
			}			
		}
	},
	mounted(){
		// var meses = document.getElementsByClassName('icone')
		// for (var i = 0;i<meses.length; i++) {
		// 	if(this.icone && this.chave && !this.filho){
		// 		meses[i].classList.add('oi')
		// 		meses[i].classList.add('oi-share')
		// 	}
		// }
	}
});

var cadastro = new Vue({
	el: '#button',
	data:{}
});
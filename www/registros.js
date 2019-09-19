function listar_registro(qtd){
	var cadastro = new Vue({
		el: '#registros',
		data:{
			consulta: consulta,
			consultas: []
		},
		mounted(){
			console.log(typeof consulta)
			console.log(typeof consultas)

		},
		computed:{
			titulo(){
				console.log(this.consultas.length)
				if(!qtd)
					return consulta.dia + "/" + nome_mes[this.consulta.mes];
				else return nome_mes[this.consulta.mes]
			}
	}
});
	var imported = document.createElement('script');
	imported.src = 'titulo-container.js';
	document.head.appendChild(imported); 
}
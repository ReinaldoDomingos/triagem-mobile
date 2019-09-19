function listar_registro(mes){
	var cadastro = new Vue({
		el: '#registros',
		data:{
			consulta: consulta,
			consultas: []
		},
		mounted(){
			console.log(typeof consulta)
			console.log(typeof consultas)
			if(mes){
				this.consultas = mes.dias
			}else{
				this.consultas = [consulta]
			}
		},
		computed:{
			titulo(){
				console.log(this.consultas.length)
				console.log(mes)
				if(!mes)
					return consulta.dia + "/" + nome_mes[this.consulta.mes-1];
				else return nome_mes[mes.id]
			}
	},
	methods:{

	}
});
	var imported = document.createElement('script');
	imported.src = 'titulo-container.js';
	document.head.appendChild(imported); 
}
function exportar(){
	console.log('ok')
	var doc = new jsPDF('landscape');
	doc.addHTML($('#registros'), function() {
		doc.save("relatorio_pesquisa.pdf");
	});
}
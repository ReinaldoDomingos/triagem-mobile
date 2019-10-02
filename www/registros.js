var lista_mes
function listar_registro(mes){
	lista_mes = mes
	$('#main').css('max-height','90%')
	var cadastro = new Vue({
		el: '#registros',
		data:{
			consulta: consulta,
			consultas: []
		},
		mounted(){
			// console.log(typeof consulta)
			// console.log(typeof consultas)
			if(mes){
				this.consultas = mes.dias
			}else{
				this.consultas = [consulta]
			}
		},
		computed:{
			titulo(){
				// console.log(this.consultas.length)
				// console.log(mes)
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
	var s = '';
	s+='<h1>			Relatório Mensal de Classificação</h1> <br>';
	for(var i =0; i<lista_mes.dias.length;i++){
		s+='<h1>Data: '+lista_mes.dias[i].dia +'/'+lista_mes.dias[i].mes+'/'+lista_mes.dias[i].ano + '</h1>';
		var cor = lista_mes.dias[i].cor
		s+="<b>		Cor:</b> "+cor.replace(cor.charAt(0),cor.charAt(0).toUpperCase()) + '<br>';
		s+="<b>		Sexo:</b> "+lista_mes.dias[i].sexo + '<br>';
		s+="<b>		Idade:</b> "+lista_mes.dias[i].idade + ' anos' + '<br>';
		s+="<b>		Cidade:</b> "+lista_mes.dias[i].cidade + '<br>';
		s+="<b>		UBS:</b> "+lista_mes.dias[i].posto + '<br>';
		s+="<b>		PA:</b> "+lista_mes.dias[i].pa+ '<br>';
		s+="<b>		Temperatura:</b> "+lista_mes.dias[i].temp+'<br>';
		s+="<b>		Peso:</b> "+lista_mes.dias[i].peso + ' KG'+'<br>';
		s+="<b>		Altura:</b> "+lista_mes.dias[i].altura + ' metros'+'<br>';
		s+="<b>		Pulso:</b> "+lista_mes.dias[i].pulso+'<br>';
		s+="<b>		Glicemia:</b> "+lista_mes.dias[i].glicemia+ '<br>';
		s+="<b>		SalO²:</b> "+lista_mes.dias[i].salo2 + '<br>';
		s+="<b>		HAS:</b> "+((lista_mes.dias[i].has)?"Sim":"Não") + '<br>';
		s+="<b>		Diabetes:</b> "+((lista_mes.dias[i].diabetes)?"Sim":"Não")+'<br>';
		s+= "<b>		Cardiopata:</b> "+((lista_mes.dias[i].cardiopata)?"Sim":"Não")+ '<br>';
		s+= "<b>		Alergia a medicamentos:</b> "+((lista_mes.dias[i].alergia)?"Sim":"Não") + '<br>';
		s+="<b>		Medicamentos:</b> "+lista_mes.dias[i].medicamentos+ '<br>';		
		s += "<b>		Queixa:</b> "+lista_mes.dias[i].queixa + '<br><br>';		
	}

	let options = {
		documentSize: 'A4',
		type: 'share'
	}

	pdf.fromData( '<html>'+s+'</html>', options)
    .then((stats)=> console.log('status', stats) )   // ok..., ok if it was able to handle the file to the OS.  
    .catch((err)=>console.err(err))


}
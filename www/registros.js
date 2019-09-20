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
	console.log(lista_mes)
	console.log('ok')
	var doc = new jsPDF();
	var pos_l = 20;	
	var max = 290
	doc.text(pos_l,pos_l,"			Relatório Mensal de Classificação");
	pos_l += 30;
	for(var i =0; i<lista_mes.dias.length;i++){
		if(pos_l>260){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"Data: "+lista_mes.dias[i].dia +'/'+lista_mes.dias[i].mes+'/'+lista_mes.dias[i].ano);
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		var cor = lista_mes.dias[i].cor
		doc.text(20,pos_l,"		Cor: "+cor.replace(cor.charAt(0),cor.charAt(0).toUpperCase()));
		pos_l+=10

		doc.text(20,pos_l,"		Sexo: "+lista_mes.dias[i].sexo);
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Idade: "+lista_mes.dias[i].idade + ' anos');
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Cidade: "+lista_mes.dias[i].cidade);
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		UBS: "+lista_mes.dias[i].posto);
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		PA: "+lista_mes.dias[i].pa);
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Temperatura: "+lista_mes.dias[i].temp);
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Peso: "+lista_mes.dias[i].peso + ' KG');
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Altura: "+lista_mes.dias[i].altura + ' metros');
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Pulso: "+lista_mes.dias[i].pulso);
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Glicemia: "+lista_mes.dias[i].glicemia);
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		SalO²: "+lista_mes.dias[i].salo2);
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		HAS: "+((lista_mes.dias[i].has)?"Sim":"Não"));
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Diabetes: "+((lista_mes.dias[i].diabetes)?"Sim":"Não"));
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		
		doc.text(20,pos_l,"		Cardiopata: "+((lista_mes.dias[i].cardiopata)?"Sim":"Não"));
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Alergia a medicamentos: "+((lista_mes.dias[i].alergia)?"Sim":"Não"));
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Medicamentos: "+lista_mes.dias[i].medicamentos);		
		pos_l+=10
		if(pos_l>max){
			doc.addPage() 
			pos_l = 20;
		}
		doc.text(20,pos_l,"		Queixa: "+lista_mes.dias[i].queixa);		
		pos_l+=10
		pos_l+=10
	}
	doc.save('consultas.pdf')

	
}
function listar_registros(){
	var cadastro = new Vue({
		el: '#app',
		data:{
			meses: 
			{

				janeiro:{
					id:1,
					nome: 'Janeiro',
					dias: [
					10,20
					]
				},

			// form: {
			// 	data: '',
			// 	forms: [{nome:''}]
			// }
			
		},
		messes: {
			id: 1
		},
	},
	mounted(){
		$('.collapse').collapse('hide');
		// console.log(this.meses)
	},
	beforeCreate(){
		var db = window.openDatabase("triagem", "1.0", "Triagem DB", 1000000);
		console.log(db)

		db.transaction(queryConsultaDB, errorCB);

		Promise.resolve(consultas).then(function(value) {

			console.log(consultas); 
		}, function(value) {
			console.log("Erro")
		});


		var original = Promise.resolve(consultas_processadas);
		var cast = Promise.resolve(original);
		cast.then(function(v) {
			console.log(consultas); 
		});

		
	},
	methods: {
		abrirCollapse: function(){
			console.log("ok")
		},
		watch:{
			listar: function(){
				console.log(consultas)
			}

		}
	}
});
	var imported = document.createElement('script');
	imported.src = 'js/button-container.js';
	document.head.appendChild(imported); 
}

// // nome_mes: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]	
// 		meses: {
// 			// o: '',
// 		// 	janeiro: {"id": 0,
// 		// 	nome: "Janeiro",
// 		// 	dias:{

// 		// 		alergia: false,
// 		// 		altura: "",
// 		// 		cardiopata: false,
// 		// 		cidade: "Coxim"
// 		// 		datahora_inicio: "2019-09-17T13:46",
// 		// 		diabetes: false,
// 		// 		glicemia: "",
// 		// 		has: false,
// 		// 		idade: 20,
// 		// 		medicamentos: "",
// 		// 		nome: "Reinaldo",
// 		// 		pa: "",
// 		// 		peso: "",
// 		// 		posto: "Argemino Barbosa",
// 		// 		pulso: "",
// 		// 		queixa: "",
// 		// 		salo2: "",
// 		// 		sexo: "Masculino",
// 		// 		temp: ""
// 		// 	}			
// 		// }
// 	// },
// 	// fevereiro: {id: 1,nome: 'Fevereiro', dias:[]},
// 	"marco": {"id": 2,"nome": "Março", "dias":{
// 	// a:{
// 		alergia: false,
// 		altura: "",
// 		cardiopata: false,
// 		cidade: "Coxim"
// 		datahora_inicio: "2019-09-17T13:46",
// 		diabetes: false,
// 		glicemia: "",
// 		has: false,
// 		idade: 20,
// 		medicamentos: "",
// 		nome: "Reinaldo",
// 		pa: "",
// 		peso: "",
// 		posto: "Argemino Barbosa",
// 		pulso: "",
// 		queixa: "",
// 		salo2: "",
// 		sexo: "Masculino",
// 		temp: ""
// 	// }	
// 	}
// },
// "abril": {"id": 3,"nome": "Abril", "dias":[]},
// "maio": {"id": 4,"nome": "Maio", "dias":[]},
// "junho": {"id": 5,"nome": "Junho", "dias":[]},
// "julho": {"id": 6,"nome": "Julho", "dias":[]},
// "agosto": {"id": 7,"nome": "Agosto", "dias":[]},
// "setembro": {"id": 8,"nome": "Setembro", "dias":[10,20,30]},
// "outubro": {"id": 9,"nome": "Outubro", "dias":[31]},
// "novembro": {"id": 10,"nome": "Novembro", "dias":[22]},
// "dezembro": {"id": 11,"nome": "Dezembro", "dias":[9]}
// }
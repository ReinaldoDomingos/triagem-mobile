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
				}		
			},
			messes: {
				id: 1
			},
		},
		mounted(){
			this.meses = consultas;		
		},
		beforeCreate(){
			var db = window.openDatabase("triagem", "1.0", "Triagem DB", 1000000);
			// $('.collapse').collapse('hide');
		},
		methods: {
			abrirCollapse: function(){
				console.log("ok")
			}
		}
	});
	var imported = document.createElement('script');
	imported.src = 'components/button-container/button-container.js';
	document.head.appendChild(imported); 
	var imported = document.createElement('script');
	imported.src = 'components/titulo-container/titulo-container.js';
	document.head.appendChild(imported); 
}
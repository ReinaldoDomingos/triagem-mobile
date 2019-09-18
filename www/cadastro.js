Vue.component('cadastro',{
   props:{
   },
   template: 
   `<form id="form-cad" onsubmit="cadastrar()" action="classificacao.html" class="jumbotron formulario">
   <hr>
   <div class="input-group mb-3 col-lg-">
   <div class="input-group-prepend">
   <span class="input-group-text oi oi-person"></span>
   </div>
   <input id="cadastro-nome-paciente" type="text" class="form-control" required="true" placeholder="Nome completo">
   </div>

   <div class="row">
   <div class="col-md-6">
   <div class="input-group mb-3">
   <div class="input-group-prepend">
   <span class="input-group-text oi oi-person"></span>
   </div>
   <select id="cadastro-sexo-paciente" class="form-control" required>
   <option value="" disabled hidden>Sexo</option>
   <option value="Masculino">Masculino</option>
   <option value="Feminino">Feminino</option>
   </select>
   </div>
   </div>
   </div>

   <div class="row">

   <div class="col-md-6">
   <div class="input-group mb-3">
   <div class="input-group-prepend">
   <span class="input-group-text oi oi-home"></span>
   </div>
   <select class="form-control" required id="cadastro-cidade-paciente">
   <option value="" disabled='true' selected hidden>Cidade</option>
   <option v-for="cidade in cidades">
   {{cidade}}
   </option>
   </select>
   </div>
   </div>

   <div class="col-md-6">
   <div class="input-group mb-3">
   <div class="input-group-prepend">
   <span class="input-group-text oi oi-eyedropper"></span>
   </div>
   <select class="form-control" required id="cadastro-unidade-paciente">
   <option value="" disabled hidden>Unidade</option>
   <option v-for="ubs in ubss">{{ubs}}</option>
   </select>
   </div>  
   </div>

   </div>
   <div class="row">
   <div class='col col-sm'>
   <div class="form-group">
   <div class='input-group date' id='datahora-inicio'>
   <div class="input-group mb-2">
   <span class="input-group-prepend">
   <span class="input-group-text glyphicon glyphicon-calendar"></span>
   </span>
   <input type='datetime-local' class="form-control" />
   </div>
   </div>
   </div>
   </div>                
   </div>

   <div class="row">
   <div class="col-6 col-sm">
   <div class="input-group mb-2">
   <input id="cadastro-idade-paciente" type="number" min="0" class="form-control" placeholder="Idade" required>
   </div>
   </div>
   <div class='col-6 col-sm'>
   <div class="form-group mb-2">
   <div class='input-group'>
   <input id="cadastro-pa-paciente" type='text' class="form-control" placeholder="PA" />
   </div>
   </div>
   </div>
   </div>
   <div class="row ">
   <div class='col-6 col-sm'>
   <div class="form-group mb-2">
   <div class='input-group date'>
   <input id="cadastro-temperatura-paciente" type='number' class="form-control" placeholder="Temperatura" />
   </div>
   </div>
   </div>
   <div class='col-6 col-sm'>
   <div class="form-group mb-2">
   <div class='input-group date'>
   <input id='cadastro-peso-paciente' type='number' class="form-control" placeholder="Peso" />
   </div>
   </div>
   </div>
   </div>
   <div class="row">
   <div class='col-6 col-sm'>
   <div class="form-group mb-2">
   <div class='input-group date'>
   <input id='cadastro-altura-paciente' type='text' class="form-control" placeholder="Altura" />
   </div>
   </div>
   </div>
   <div class='col-6 col-sm'>
   <div class="form-group mb-2">
   <div class='input-group date'>
   <input id='cadastro-pulso-paciente' type='text' class="form-control" placeholder="Pulso" />
   </div>
   </div>
   </div>
   </div>
   <div class="row">
   <div class='col-6 col-sm'>                    
   <div class="form-group mb-2">
   <div class='input-group date'>
   <input id='cadastro-glicemia-paciente' type='text' class="form-control" placeholder="Glicemia" />
   </div>
   </div>
   </div>
   <div class='col-6 col-sm'>
   <div class="form-group mb-2">
   <div class='input-group date'>
   <input id='cadastro-saturacao-paciente' type='text' class="form-control" placeholder="SalO²" />
   </div>
   </div>
   </div>
   </div>
   <div class="row box">
   <div class='col-6 col-sm'>
   <div class="form-group mb-2">                                  
   <div class="form-check">
   <div class="custom-control custom-checkbox">
   <input type="checkbox" class="custom-control-input" id="cadastro-has-paciente">
   <label class="custom-control-label" for="cadastro-has-paciente">
   HAS</label>
   </div>
   </div>
   </div>
   </div>
   <div class='col-6 col-sm'>
   <div class="form-group mb-2">                                  
   <div class="form-check">
   <div class="custom-control custom-checkbox">
   <input type="checkbox" class="custom-control-input" id="cadastro-diabetes-paciente">
   <label class="custom-control-label" for="cadastro-diabetes-paciente">
   Diabetes</label>
   </div>
   </div>
   </div>
   </div>

   <div class='col-12 col-sm'>
   <div class="form-group mb-2">                                  
   <div class="form-check">
   <div class="custom-control custom-checkbox">
   <input type="checkbox" class="custom-control-input" id="cadastro-cardiopata-paciente">
   <label class="custom-control-label" for="cadastro-cardiopata-paciente">
   Cardiopata</label>
   </div>
   </div>
   </div>
   </div>
   <div class='col col-sm'>
   <div class="form-group mb-2">                                  
   <div class="form-check">
   <div class="custom-control custom-checkbox">
   <input type="checkbox" class="custom-control-input" id="cadastro-alergia-paciente">
   <label class="custom-control-label" for="cadastro-alergia-paciente">
   Alergia a Medicamento</label>
   </div>
   </div>
   </div>
   </div>
   <div class='col-6 col-sm'>
   <div class="form-group mb-2">
   <div class='input-group date'>
   <input id="cadastro-medicamento-paciente" type='text' class="form-control" placeholder="Medicamento(s)" disabled required />
   </div>
   </div>
   </div>
   </div>

   <div class="input-group mb-2">
   <textarea rows="3" class="form-control" id="cadastro-queixa-paciente"  placeholder="Queixa principal do paciente"
   aria-label="With textarea"></textarea>
   </div>
   <div class="botoes">              
   <button @click="voltar" type="button" routerLink="/home" class="btn btn-danger">Cancelar</button>
   <button onsubmit="cadastrar()" type="submit" class="btn btn-success">Próximo</button>
   </div>
   </form>`,
   data(){
      return {
         cidades: 
         ["Água Clara","Alcinópolis","Amambaí","Anastácio","Angélica","Antônio João",
         "Aparecida do Taboado","Aquidauana","Aral Moreira","Bandeirantes","Bataguassu","Bataiporã",
         "Bela Vista","Bodoquena","Bonito","Brasilândia","Caarapó","Camapuã","Campo Grande","Caracol",
         "Cassilândia","Chapadão do Sul","Corguinho","Coronel Sapucaia","Corumbá","Costa Rica","Coxim",
         "Deodápolis","Dois Irmãos do Buriti","Douradina","Dourados","Eldorado","Fátima do Sul",
         "Glória de Dourados","Guia Lopes da Laguna","Iguatemi","Inocência","Itaporã","Itaquiraí",
         "Ivinhema","Japorã","Jaraguari","Jardim","Jateí","Juti","Ladário","Laguna Carapã","Maracaju",
         "Miranda","Mundo Novo","Naviraí","Nioaque","Nova Alvorada do Sul","Nova Andradina",
         "Novo Horizonte do Sul","Paranaíba","Paranhos","Pedro Gomes","Ponta Porã","Porto Murtinho",
         "Ribas do Rio Pardo","Rio Brilhante","Rio Negro","Rio Verde de Mato Grosso","Rochedo",
         "Santa Rita do Pardo","São Gabriel do Oeste","Selvíria","Sete Quedas","Sidrolândia","Sonora",
         "Tacuru","Taquarussu","Terenos","Três Lagoas","Vicentina"],
         ubss: ["Argemino Barbosa","Ilda Kohl","Jorge Ritt","Marechal Rondon",
         "Policlínica/Lourdes Fontoura","Santa Maria","Senhor Divino","Totó Araujo"]
      }       
   },
   mounted: function() {      
      if(location.href.indexOf('#review')!=-1){
         var paciente = JSON.parse(localStorage.getItem('paciente-dados'))
         console.log(paciente.nome)
         $('#cadastro-nome-paciente').val(paciente.nome)
         $('#cadastro-sexo-paciente').val(paciente.sexo)
         $('#cadastro-idade-paciente').val(paciente.idade)
         $('#cadastro-unidade-paciente').val(paciente.posto)
         $('#cadastro-cidade-paciente').val(paciente.cidade)
         $('#cadastro-pa-paciente').val(paciente.pa)
         $('#cadastro-temperatura-paciente').val(paciente.temp)
         $('#cadastro-peso-paciente').val(paciente.peso)
         $('#cadastro-altura-paciente').val(paciente.altura)
         $('#cadastro-pulso-paciente').val(paciente.pulso)
         $('#cadastro-glicemia-paciente').val(paciente.glicemia)
         $('#cadastro-saturacao-paciente').val(paciente.salo2)
         $('#cadastro-has-paciente').prop('checked',paciente.has)
         $('#cadastro-diabetes-paciente').prop('checked',paciente.diabetes)
         $('#cadastro-cardiopata-paciente').prop('checked',paciente.cardiopata)
         $('#cadastro-alergia-paciente').prop('checked',paciente.alergia)
         if($("#cadastro-alergia-paciente").prop( "checked"))
            $('#cadastro-medicamento-paciente').attr("disabled",false)
         $('#cadastro-medicamento-paciente').val(paciente.medicamentos)
         $('#cadastro-queixa-paciente').val(paciente.queixa)
         $('input[type="datetime-local"]').val(paciente.datahora_inicio)
      }else{
         var data = this.getDataFormatada()
         var hora = this.getHoraFormatada()
         var dateControl = document.querySelector('input[type="datetime-local"]');
         dateControl.value =  data + 'T' + hora   
      }
      if(location.href.indexOf('cadastro.html')!=-1){
         $('#bts_modal').hide()
      }
      $("#cadastro-alergia-paciente").change( 
         function(){
            var v = $("#cadastro-alergia-paciente").prop( "checked");
            if(v)
               $('#cadastro-medicamento-paciente').attr("disabled",false);
            else
               $('#cadastro-medicamento-paciente').attr("disabled",true);
         });
   },
   computed:{},
   methods:{
      getDataFormatada: function(){
         var d = new Date()
         return d.toLocaleDateString().replace(/\//gi,'-').split('-').reverse().join('-')
      },
      getHoraFormatada: function(){
         var d = new Date()
         return d.toLocaleTimeString().substring(0,5)
      },
      voltar: function(){
         if(location.href.indexOf('cadastro.html')!=-1)
            location.href = 'index.html'
         else if(location.href.indexOf('classificacao.html')!=-1)
            location.href = 'cadastro.html#review'
         else
            window.history.back();
      },
      salvarAlteracoes: function(){
         $('#collapseOne').collapse('hide');
      }
   },
});

var cadastro = new Vue({
   el: '#cadastro',
   data:{}
});
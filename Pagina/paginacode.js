
function getEndereco() {
   // Se o campo CEP não estiver vazio
   if($.trim($("#cep").val()) != ""){
        /*
             Para conectar no serviço e executar o json, precisamos usar a função
             getScript do jQuery, o getScript e o dataType:"jsonp" conseguem fazer o cross-domain, os outros
             dataTypes não possibilitam esta interação entre domínios diferentes
             Estou chamando a url do serviço passando o parâmetro "formato=javascript" e o CEP digitado no formulário
             http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#cep").val()
        */
        $.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#cep").val(),
function(){
           // o getScript dá um eval no script, então é só ler!
           //Se o resultado for igual a 1
           if(resultadoCEP["resultado"] ){
              // troca o valor dos elementos
              $("#logradouro").val(unescape(resultadoCEP["tipo_logradouro"])+" "+unescape(resultadoCEP["logradouro"]));
              //$("#campoBairro").val(unescape(resultadoCEP["bairro"]));
              $("#cidade").val(unescape(resultadoCEP["cidade"]));
              $("#estado").val(unescape(resultadoCEP["uf"]));
              //$("#enderecoCompleto").show("slow");
              $("#numero").focus();
           }else{
              alert("Endereço não encontrado");
              return false;
           }
         });
      }
  else{
      alert('Antes, preencha o campo CEP!')
  };
}

function Hora(){
   const lugarquefalta = document.getElementById("regiaodahora")
   const pegar_data = new Date()
   const hora = pegar_data.getHours()
   const minutos = pegar_data.getMinutes()
   const local_da_hora = document.createElement("div")
   local_da_hora.id = "hora"
   local_da_hora.style.width = 100;
   local_da_hora.style.height = 100;
   local_da_hora.innerHTML = `${hora}:${minutos}`
   lugarquefalta.appendChild(local_da_hora)
}
function verificador(){

   if ($('input[name=clt]:checked').length > 0) {
      
      const criar_clt = document.getElementById("verificaclt")
      const numero_clt= document.createElement("input")
      numero_clt.labels = "Digite o número da Carteira"
      numero_clt.type = "number"
      numero_clt.name = "numeroclt"
      numero_clt.id = "numeroclt"
      criar_clt.appendChild(numero_clt)
   }
   
}

$(document).ready(function(){
	
	$("#pronto").click(function(){
		if($("#entry").val() === '03/06' || $("#entry").val() === '03/06/2019'){
			displayText = setInterval(function() {
  		  	var word = 'te amo ';
	  		$("#result").append(word);
  			}, 50);
  			scrollToBot = setInterval(function(){ 
  					window.scrollTo(0, document.body.scrollHeight);
  			}, 50);
  			$("#stop").css("opacity", "1");
		}else{
			Swal.fire({
			  title: 'Errou vida',
			  text: 'Que tristeza :(',
			  icon: 'error',
			  confirmButtonText: 'Tenta mais uma vez'
			})
		}
	})

	$("#stop").click(function(){
		clearInterval(displayText);
		clearInterval(scrollToBot);
		$("#pronto").html("Mentira, quero mais");
		$("#stop").css("opacity", "0");
	});

	$("#clique").click(function(){
		Swal.fire({
			  title: 'Tem certeza?',
			  text: 'O certo era saber sem dica :/ mas se quiser mesmo, clica em OK',
			  icon: 'warning',
			  confirmButtonText: 'OK (rrr)',
			  showCancelButton: true,
			  cancelButtonText:'Deixa quieto',
			}).then((result) => {
 				if(result['value'] !== undefined && result['value'] == true){
 					$("#clique").css('display','none');
 					$("#dica").css('opacity','1');
 				}
 			});
		})
});
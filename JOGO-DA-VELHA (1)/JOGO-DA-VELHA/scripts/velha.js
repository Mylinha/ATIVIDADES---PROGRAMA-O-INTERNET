
const casas = document.getElementsByTagName('input'); 

const b_reiniciar = document.getElementById('reiniciar'); 

const label_jogador = document.getElementById('jogador'); 


var jogador = '_';  
var vencedor = '_'; 
var finish;


for(var i=0;i<9;i++) {
	casas[i].addEventListener('click', (event) => {
		
		if( (event.target.value=='_') && (vencedor=='_')) {
			event.target.value=jogador;
			event.target.style.color='black'; 

			trocarJogador(); 

			vencedor = vitoria(); 

			
			
		}
	});
}


b_reiniciar.addEventListener('click', (event) => {
	for(var i=0;i<9;i++) {
		casas[i].value='_';
		casas[i].style.color='#2efee2'; 
		casas[i].style.backgroundColor='#2efee2'; 
	}

	vencedor = '_'; 

	sortearJogador(); 
});


var sortearJogador = function() {
	if(Math.floor(Math.random() * 2)==0) {
		jogador = "O"; 
		label_jogador.innerText="O"; 
		label_jogador.style.color='#ffffff'; 
	}else{
		jogador = "X";
		label_jogador.innerText="X"; 
		label_jogador.style.color='#000000'; 
	}
}

sortearJogador(); 


var trocarJogador = function() {
	if(jogador=='X') {
		jogador='O';
		label_jogador.innerText='O';
		label_jogador.style.color='#ffffff';
		
	}else{
		jogador='X';
		label_jogador.innerText='X';
		label_jogador.style.color='#000000';
	}
}

var vitoria = function() {
	if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#31e29e';
		casas[1].style.backgroundColor='#31e29e';
		casas[2].style.backgroundColor='#31e29e';

		return casas[0].value;

	}else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
		casas[3].style.backgroundColor='#31e29e';
		casas[4].style.backgroundColor='#31e29e';
		casas[5].style.backgroundColor='#31e29e';

		return casas[3].value;

	}else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
		casas[6].style.backgroundColor='#31e29e';
		casas[7].style.backgroundColor='#31e29e';
		casas[8].style.backgroundColor='#31e29e';

		return casas[6].value;

	}else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#31e29e';
		casas[3].style.backgroundColor='#31e29e';
		casas[6].style.backgroundColor='#31e29e';

		return casas[0].value;

	}else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
		casas[1].style.backgroundColor='#31e29e';
		casas[4].style.backgroundColor='#31e29e';
		casas[7].style.backgroundColor='#31e29e';

		return casas[1].value;

	}else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#31e29e';
		casas[5].style.backgroundColor='#31e29e';
		casas[8].style.backgroundColor='#31e29e';

		return casas[2].value;
	}else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#31e29e';
		casas[4].style.backgroundColor='#31e29e';
		casas[8].style.backgroundColor='#31e29e';

		return casas[0].value;

	}else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#31e29e';
		casas[4].style.backgroundColor='#31e29e';
		casas[6].style.backgroundColor='#31e29e';

		return casas[2].value;
	}
	
								
    return '_';
}

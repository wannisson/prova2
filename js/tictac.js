angular.module("tictac", []).
controller("game", function($scope,$timeout,$interval) {

	   $scope.mostrar = true;
	   
	   $scope.valor = null;
	   debugger;
	   
	   $scope.iniciarJogo = function(valor){ 
	
		var teste = valor;
		

        $scope.tabuleiro = [
        {nome: "imagens/1.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/2.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/3.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/4.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/5.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/6.jpg",escolhido: false,fundo: "imagens/fundo.jpg"}];	
    
        embaralharCartas();
		

    }


            function embaralharCartas() {
debugger;
                var i = $scope.tabuleiro.length, j, tempi, tempj;
                if(i == 0) return false;
                while( --i) {
                    j = Math.floor(Math.random() * (i + 1));
                    tempi = $scope.tabuleiro[i];
                    tempj = $scope.tabuleiro[j];
                    $scope.tabuleiro[i] = tempj;
                    $scope.tabuleiro[j] = tempi;
					tempj.escolhido = true;
					tempi.escolhido = true;
                } 
            }
			
			            
            });
angular.module("tictac", []).
controller("game", function($scope,$timeout,$interval) {

	   $scope.mostrar = true;
	   
	   $scope.valor = null;
	   $scope.mensagem = false;
       var prechidos = false;
       var cartas= [];


	   $scope.iniciarJogo = function(){ 

		prechidos = false;
        $scope.mensagem = false;
        $scope.tabuleiro = [];	
    

        cartas = [
        {nome: "imagens/1.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/2.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/3.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/4.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/5.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/6.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/1.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/2.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/3.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/4.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/5.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/6.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/1.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/2.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/3.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/4.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/5.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/6.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/1.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/2.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/3.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/4.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/5.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/6.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/1.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/2.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/3.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/4.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/5.jpg",escolhido: false,fundo: "imagens/fundo.jpg"},
        {nome: "imagens/6.jpg",escolhido: false,fundo: "imagens/fundo.jpg"}];


        if($scope.valor == null){
        $scope.mensagem = true;
        return;
        }else if(prechidos == true){
        embaralharCartas();
        }else if(prechidos == false){
        prencherDados();
    }
        		
        

    }

			
            function prencherDados(){
                prechidos = true;
            
            var i = $scope.valor, j, tempi, tempj;
            do{
                if(i == 0) return false;
                    j = Math.floor(Math.random() * (i + 1));
                    tempi = cartas[i];
                    tempj = cartas[j];
                    cartas[i] = tempj;
                    cartas[j] = tempi;
                    tempj.escolhido = true;
                    tempi.escolhido = true;

                    $scope.tabuleiro[i] = tempj;
                }while(--i); 

            }

            $scope.jogarDado = function(){
            embaralharCartas();
            prencherDados();    
            }

            function embaralharCartas() {
                
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
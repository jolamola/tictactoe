angular
	.module("myApp")
	.controller("GameController", GameController);

	GameController.$inject = ["$firebase"];


	function GameController($firebase){

		var gameCtrl = this;

		gameCtrl.stopsClickFunc = false;
		gameCtrl.firstClick = "x";
		gameCtrl.drawCounter = 0;
		gameCtrl.blueWinCounter = 0;
		gameCtrl.ojWinCounter = 0;
		gameCtrl.initGame = initGame;


		gameCtrl.rematchButton = rematchButton;
		gameCtrl.newMatchButton = newMatchButton;
		gameCtrl.buttonResetScore = buttonResetScore;

		gameCtrl.playerOneTurn = true;

		gameCtrl.winLogic = winLogic;
		
		function initGame(){
			var ref = new Firebase("https://molattt.firebaseio.com/games");
			var gameData = $firebase(ref).$asObject();	
			return gameData;
		}

		gameCtrl.gameData = initGame();
		var g = gameCtrl.gameData;

		g.gameBoard = [
			{value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, 
			{value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, 
			{value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}
		];
		g.$save();

		function winLogic(index) {  
			if (g.gameBoard[index].value === "empty" && gameCtrl.stopsClickFunc === false) {

// neeed to track player turn
//				if (gameCtrl.playerOneTurn === true) {
//					g.gameBoard[index].value = gameCtrl.firstClick;
//				} else {

//				}


				// sets color to blue
				if (g.gameBoard[index].value === "x") {
					g.gameBoard[index].setBlue = true;
					g.gameBoard[index].setOj = false;
					g.$save();

						// checks for win
						if (
							g.gameBoard[0].value=="x" && g.gameBoard[1].value=="x" && g.gameBoard[2].value=="x" || 
							g.gameBoard[3].value=="x" && g.gameBoard[4].value=="x" && g.gameBoard[5].value=="x" || 
							g.gameBoard[6].value=="x" && g.gameBoard[7].value=="x" && g.gameBoard[8].value=="x" ||
							g.gameBoard[0].value=="x" && g.gameBoard[3].value=="x" && g.gameBoard[6].value=="x" ||
							g.gameBoard[1].value=="x" && g.gameBoard[4].value=="x" && g.gameBoard[7].value=="x" ||
							g.gameBoard[2].value=="x" && g.gameBoard[5].value=="x" && g.gameBoard[8].value=="x" ||
							g.gameBoard[0].value=="x" && g.gameBoard[4].value=="x" && g.gameBoard[8].value=="x" ||
							g.gameBoard[2].value=="x" && g.gameBoard[4].value=="x" && g.gameBoard[6].value=="x"
							){
							gameCtrl.gameoverBox = true;
							gameCtrl.blueWin = "Blue Wins!";
							gameCtrl.stopsClickFunc = true;
							gameCtrl.blueWinCounter ++;
							g.$save();
							}
				} else {
					g.gameBoard[index].setBlue = false;
					g.gameBoard[index].setOj = true;
					g.$save();
						if (
							g.gameBoard[0].value=="o" && g.gameBoard[1].value=="o" && g.gameBoard[2].value=="o" || 
							g.gameBoard[3].value=="o" && g.gameBoard[4].value=="o" && g.gameBoard[5].value=="o" || 
							g.gameBoard[6].value=="o" && g.gameBoard[7].value=="o" && g.gameBoard[8].value=="o" ||
							g.gameBoard[0].value=="o" && g.gameBoard[3].value=="o" && g.gameBoard[6].value=="o" ||
							g.gameBoard[1].value=="o" && g.gameBoard[4].value=="o" && g.gameBoard[7].value=="o" ||
							g.gameBoard[2].value=="o" && g.gameBoard[5].value=="o" && g.gameBoard[8].value=="o" ||
							g.gameBoard[0].value=="o" && g.gameBoard[4].value=="o" && g.gameBoard[8].value=="o" ||
							g.gameBoard[2].value=="o" && g.gameBoard[4].value=="o" && g.gameBoard[6].value=="o" 	
							){
							gameCtrl.gameoverBox = true;
							gameCtrl.ojWin = "Orange Wins!";
							gameCtrl.stopsClickFunc = true;
							gameCtrl.ojWinCounter ++;
							g.$save();
							} 
				} 

				gameCtrl.firstClick = gameCtrl.firstClick == "x" ? "o" : "x";	
				gameCtrl.drawCounter++;
				g.$save();

				if (gameCtrl.drawCounter>=9 && gameCtrl.blueWin!="Blue Wins!" && gameCtrl.ojWin!="Orange Wins!"){
					gameCtrl.gameoverBox = true;
					gameCtrl.drawMsg = "Draw Game!";
					gameCtrl.stopsClickFunc = true;
					g.$save();
				}

			} else {}
		}


		/********************************************		
		* Game reset   
		********************************************/

		function rematchButton(){
			g.gameBoard = [
				{value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, 
				{value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, 
				{value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}, {value: "empty", setBlue: false, setOj: false}
			];
			gameCtrl.blueWin = "";
			gameCtrl.ojWin = "";
			gameCtrl.drawMsg = "";
			gameCtrl.gameoverBox = false;
			gameCtrl.firstClick = "x";
			gameCtrl.stopsClickFunc = false;
			gameCtrl.drawCounter = 0;
			g.$save();
		}

		function buttonResetScore(){
			gameCtrl.blueWinCounter = 0;
			gameCtrl.ojWinCounter = 0;
		}

		function newMatchButton() {
			rematchButton();
			buttonResetScore();
		}
	}

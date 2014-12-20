angular
	.module("myApp")
	.controller("GameController", GameController);

	function GameController(){
		var gameCtrl = this;
		gameCtrl.stopsClickFunc = false;
		gameCtrl.firstClick = "x";
		gameCtrl.drawCounter = 0;
		gameCtrl.blueWinCounter = 0;
		gameCtrl.ojWinCounter = 0;
		gameCtrl.clickBox = clickBox;
		gameCtrl.restartButton = restartButton;
		gameCtrl.setNewGameboard = setNewGameboard;
		gameCtrl.buttonResetScore = buttonResetScore;

		gameCtrl.setNewGameboard();
		
		function setNewGameboard() {
			gameCtrl.gameBoard = [
				{value:"empty",setBlue:false,setOj:false}, {value:"empty",setBlue:false, setOj:false}, {value:"empty",setBlue:false,setOj:false}, 
				{value:"empty",setBlue:false,setOj:false}, {value:"empty",  setBlue: false, setOj: false}, {value:"empty",  setBlue: false, setOj: false}, 
				{value:"empty",  setBlue: false, setOj: false}, {value:"empty",  setBlue: false, setOj: false}, {value:"empty",  setBlue: false, setOj: false}
				];
		}	

		function clickBox(index) {  
			if (gameCtrl.gameBoard[index].value === "empty" && gameCtrl.stopsClickFunc === false) {
				gameCtrl.gameBoard[index].value = gameCtrl.firstClick;
				if (gameCtrl.gameBoard[index].value === "x") {
					gameCtrl.gameBoard[index].setBlue = true;
					gameCtrl.gameBoard[index].setOj = false;
						if (
							gameCtrl.gameBoard[0].value=="x" && gameCtrl.gameBoard[1].value=="x" && gameCtrl.gameBoard[2].value=="x" || 
							gameCtrl.gameBoard[3].value=="x" && gameCtrl.gameBoard[4].value=="x" && gameCtrl.gameBoard[5].value=="x" || 
							gameCtrl.gameBoard[6].value=="x" && gameCtrl.gameBoard[7].value=="x" && gameCtrl.gameBoard[8].value=="x" ||
							gameCtrl.gameBoard[0].value=="x" && gameCtrl.gameBoard[3].value=="x" && gameCtrl.gameBoard[6].value=="x" ||
							gameCtrl.gameBoard[1].value=="x" && gameCtrl.gameBoard[4].value=="x" && gameCtrl.gameBoard[7].value=="x" ||
							gameCtrl.gameBoard[2].value=="x" && gameCtrl.gameBoard[5].value=="x" && gameCtrl.gameBoard[8].value=="x" ||
							gameCtrl.gameBoard[0].value=="x" && gameCtrl.gameBoard[4].value=="x" && gameCtrl.gameBoard[8].value=="x" ||
							gameCtrl.gameBoard[2].value=="x" && gameCtrl.gameBoard[4].value=="x" && gameCtrl.gameBoard[6].value=="x"
							){
							gameCtrl.blueWin=true;
							gameCtrl.stopsClickFunc = "true";
							gameCtrl.blueWinCounter ++;
							}
				} else {
					gameCtrl.gameBoard[index].setBlue = false;
					gameCtrl.gameBoard[index].setOj = true;
						if (
							gameCtrl.gameBoard[0].value=="o" && gameCtrl.gameBoard[1].value=="o" && gameCtrl.gameBoard[2].value=="o" || 
							gameCtrl.gameBoard[3].value=="o" && gameCtrl.gameBoard[4].value=="o" && gameCtrl.gameBoard[5].value=="o" || 
							gameCtrl.gameBoard[6].value=="o" && gameCtrl.gameBoard[7].value=="o" && gameCtrl.gameBoard[8].value=="o" ||
							gameCtrl.gameBoard[0].value=="o" && gameCtrl.gameBoard[3].value=="o" && gameCtrl.gameBoard[6].value=="o" ||
							gameCtrl.gameBoard[1].value=="o" && gameCtrl.gameBoard[4].value=="o" && gameCtrl.gameBoard[7].value=="o" ||
							gameCtrl.gameBoard[2].value=="o" && gameCtrl.gameBoard[5].value=="o" && gameCtrl.gameBoard[8].value=="o" ||
							gameCtrl.gameBoard[0].value=="o" && gameCtrl.gameBoard[4].value=="o" && gameCtrl.gameBoard[8].value=="o" ||
							gameCtrl.gameBoard[2].value=="o" && gameCtrl.gameBoard[4].value=="o" && gameCtrl.gameBoard[6].value=="o" 	
							){
							gameCtrl.ojWin=true;
							gameCtrl.stopsClickFunc = "true";
							gameCtrl.ojWinCounter ++;
							} 
				} 

				gameCtrl.firstClick = gameCtrl.firstClick == "x" ? "o" : "x";	
				gameCtrl.drawCounter++;

				if (gameCtrl.drawCounter >= 9){
					gameCtrl.tie = true;
				}

			} else {}
		}

		function restartButton(){
			gameCtrl.setNewGameboard();
			gameCtrl.blueWin=false;
			gameCtrl.ojWin=false;
			gameCtrl.tie=false;
			gameCtrl.firstClick= "x";
			gameCtrl.stopsClickFunc = false;
			gameCtrl.drawCounter = 0;
		}

		function buttonResetScore(){
			gameCtrl.blueWinCounter = 0;
			gameCtrl.ojWinCounter = 0;
		}
}






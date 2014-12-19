angular
	.module("myApp")
	.controller("GameController", GameController);

	function GameController(){
		var gameCtrl = this;
		var stopsClickFunc = "";
		var firstClick = "x";
		
		gameCtrl.clickBox = clickBox;
		gameCtrl.restartButton = restartButton;

		gameCtrl.gameBoard = [
			{value:"empty",setBlue:false,setOj:false}, {value:"empty",setBlue:false, setOj:false}, {value:"empty",setBlue:false,setOj:false}, 
			{value:"empty",setBlue:false,setOj:false}, {value:"empty",  setBlue: false, setOj: false}, {value:"empty",  setBlue: false, setOj: false}, 
			{value:"empty",  setBlue: false, setOj: false}, {value:"empty",  setBlue: false, setOj: false}, {value:"empty",  setBlue: false, setOj: false}
			];
		
		function clickBox(index) {  
			if (gameCtrl.gameBoard[index].value === "empty" && stopsClickFunc === "") {
				gameCtrl.gameBoard[index].value = firstClick;
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
							) 
							{
							gameCtrl.blueWin=true;
							stopsClickFunc = "this ends clickBox function at end of game :P";
							
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
							stopsClickFunc = "dirty code ftw";
							counter +=1;
							} 
				} 
				firstClick = firstClick == "x" ? "o" : "x";					
				console.log("assigned " + gameCtrl.gameBoard[index].value + " in square " + index);
				console.log(gameCtrl.gameBoard[index]);									
			} else {
				
			}
		}

}


// (gameCtrl.gameBoard[index].value !== "empty" && stopsClickFunc === "") 


		// function restartButton(){
		// 	gameCtrl.gameBoard = [
		// 		{value:"empty",setBlue:false,setOj:false}, {value:"empty",setBlue:false, setOj:false}, {value:"empty",setBlue:false,setOj:false}, 
		// 		{value:"empty",setBlue:false,setOj:false}, {value:"empty",  setBlue: false, setOj: false}, {value:"empty",  setBlue: false, setOj: false}, 
		// 		{value:"empty",  setBlue: false, setOj: false}, {value:"empty",  setBlue: false, setOj: false}, {value:"empty",  setBlue: false, setOj: false}
		// 		];
		// 	gameCtrl.blueWin=false;
		// 	gameCtrl.ojWin=false;
		// }




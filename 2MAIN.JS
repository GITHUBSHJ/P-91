player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name"); 

Player1_score = 0;
Player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("Player1_score").innerHTML = Player1_score;
document.getElementById("Player2_score").innerHTML = Player2_score;

document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name;


 


function send()
{
	number1 = document.getElementById("number_1").value;
	number2 = document.getElementById("number_2").value;
	actual_answer = parseInt(number1) * parseInt(number2);

	question_number = "<h4>" + number1 + "X"+ number2 +"</h4>";
	input_box = "<br>Answer: <input type = 'text' id = 'input_check_box'>";
	check_button = "<br><br><button class='btn btn-info' onClick='check()'>Check</button>";
	
	row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
	
	document.getElementById("number_1").value = "";
	document.getElementById("number_2").value = "";
}
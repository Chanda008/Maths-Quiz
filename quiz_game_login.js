function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "quiz_game_page.html";
}

function send() {
    number_one = document.getElementById("number1_input").value;
    number_two = document.getElementById("number2_input").value;
    actual_answer = parseInt(number_one)*parseInt(number_two);

    question_number = "<h4>" + number_one + "X" + number_two + "</h4>";
    input_box = "<br> Answer : <input id= 'input_check_box' type= 'text'> ";
    check_button = "<br><br> <button class= 'btn btn-info' onclick= 'check()'>Check</button>";

    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}
    
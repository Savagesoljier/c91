player1name = localStorage.getItem("p1isboss");
player2name = localStorage.getItem("p2isboss");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1name + " : ";
document.getElementById("player2_name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;

function send() {
    getWord = document.getElementById("word").value;
    getWord = getWord.toLowerCase();

    firstLetter = getWord.charAt(1);
    middle = Math.floor(getWord.length / 2);
    middleLetter = getWord.charAt(middle);
    last = getWord.length - 1;
    lastLetter = getWord.charAt(last);

    removefirstL = getWord.replace(firstLetter, "_");
    removemiddleL = removefirstL.replace(middleLetter, "_");
    removelastL = removemiddleL.replace(lastLetter, "_");

    questionWord = "<h4 id='word_display'>Q." + removelastL + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = questionWord + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = " ";
}
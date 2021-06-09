function addUser() {
    player1name = document.getElementById("player1NameInput").value;
    player2name = document.getElementById("player2NameInput").value;
    localStorage.setItem("p1isboss", player1name);
    localStorage.setItem("p2isboss", player2name);
    window.location = "game_page.html";
}

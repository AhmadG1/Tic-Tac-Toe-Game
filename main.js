//Game Settings
var p1 = true;
var p2 = false;

//Game players
function game(event) {
    console.log(event.target)
    $(event.target).off("click");
    $(event.target).hide().fadeIn(500);

    //Player 1 turns
    if (p1 === true) {
        $(event.target).html('<img src="images/x-symbol.svg">');
        $(event.target).addClass("filledX");
        $(event.target).addClass('T');
        checkWin()

        //When player 1 finish switch to player 2
        p1 = false;
        p2 = true;

    } else { //Player 2 turns
        $(event.target).html('<img src="images/Burmese_number_0.svg.png">')
        $(event.target).addClass("filledO");
        $(event.target).addClass('T');
        checkWin()

        //When player 2 finish switch back to player 1
        p2 = false;
        p1 = true;
    }
}
$(".box").on('click', game);
$(function() {
    $("#main").hide().fadeIn(1000);
  });
  

//Wining possibilities
function checkWin() { //1st possible win
    if ($('#box1').hasClass("filledX") && $('#box2').hasClass("filledX") && $('#box3').hasClass("filledX"))
        alert('Player X Wins!') ? "" : location.reload();
    else if ($('#box1').hasClass("filledO") && $('#box2').hasClass("filledO") && $('#box3').hasClass("filledO"))
        alert('Player O Wins!') ? "" : location.reload();
    //2nd possible win
    else if ($('#box4').hasClass("filledX") && $('#box5').hasClass("filledX") && $('#box6').hasClass("filledX"))
        alert('Player X Wins!') ? "" : location.reload();
    else if ($('#box4').hasClass("filledO") && $('#box5').hasClass("filledO") && $('#box6').hasClass("filledO"))
        alert('Player O Wins!') ? "" : location.reload();
    //3rd possible win
    else if ($('#box7').hasClass("filledX") && $('#box8').hasClass("filledX") && $('#box9').hasClass("filledX"))
        alert('Player X Wins!') ? "" : location.reload();
    else if ($('#box7').hasClass("filledO") && $('#box8').hasClass("filledO") && $('#box9').hasClass("filledO"))
        alert('Player O Wins!') ? "" : location.reload();
    //4th possible win
    else if ($('#box1').hasClass("filledX") && $('#box4').hasClass("filledX") && $('#box7').hasClass("filledX"))
        alert('Player X Wins!') ? "" : location.reload();
    else if ($('#box1').hasClass("filledO") && $('#box4').hasClass("filledO") && $('#box7').hasClass("filledO"))
        alert('Player O Wins!') ? "" : location.reload();
    //5th possible win
    else if ($('#box2').hasClass("filledX") && $('#box5').hasClass("filledX") && $('#box8').hasClass("filledX"))
        alert('Player X Wins!') ? "" : location.reload();
    else if ($('#box2').hasClass("filledO") && $('#box5').hasClass("filledO") && $('#box8').hasClass("filledO"))
        alert('Player O Wins!') ? "" : location.reload();
    //6th possible win
    else if ($('#box3').hasClass("filledX") && $('#box6').hasClass("filledX") && $('#box9').hasClass("filledX"))
        alert('Player X Wins!') ? "" : location.reload();
    else if ($('#box3').hasClass("filledO") && $('#box6').hasClass("filledO") && $('#box9').hasClass("filledO"))
        alert('Player O Wins!') ? "" : location.reload();
    //7th possible win
    else if ($('#box3').hasClass("filledX") && $('#box5').hasClass("filledX") && $('#box7').hasClass("filledX"))
        alert('Player X Wins!') ? "" : location.reload();
    else if ($('#box3').hasClass("filledO") && $('#box5').hasClass("filledO") && $('#box7').hasClass("filledO"))
        alert('Player O Wins!') ? "" : location.reload();
    //8th possible win
    else if ($('#box1').hasClass("filledX") && $('#box5').hasClass("filledX") && $('#box9').hasClass("filledX"))
        alert('Player X Wins!') ? "" : location.reload();
    else if ($('#box1').hasClass("filledO") && $('#box5').hasClass("filledO") && $('#box9').hasClass("filledO"))
        alert('Player O Wins!') ? "" : location.reload();
    //Its a tie
    else if ($('#box1').hasClass("T") && $('#box2').hasClass("T") && $('#box3').hasClass("T") && $('#box4').hasClass("T") && $('#box5').hasClass("T") && $('#box6').hasClass("T") && $('#box7').hasClass("T") && $('#box8').hasClass("T") && $('#box9').hasClass("T"))
        alert('Its a Tie!') ? "" : location.reload();

}

//Reset game button function
function makeTextWhite(event) {
    $(event.target).css("color", "white");
    $(event.target).hide().fadeIn(500);
}

function makeTextBlue(event) {
    $(event.target).css("color", "#075d77");
    $(event.target).hide().fadeIn(500);
    
}
$("p").on("mouseenter", makeTextWhite);
$("p").on("mouseleave", makeTextBlue);

$(document).on("click", "p", function () {
    location.reload(true);
});


var opp = 0;
var score = 0;
function rand() {

    var choice = ['rock', 'paper', 'scissors'];
    var num = Math.floor(Math.random() * 3);
    return choice[num];
}
function setup() {
    $('#rockbutton').click(function () {
        var opp = rand();
        if (opp === 'rock') {
            console.log('The Computer Picked ' + opp + ', Its a tie');
            $('#text').html('The Computer Picked ' + opp + ', Its a tie');
        }
        if (opp == 'paper') {
            console.log('The Computer Picked ' + opp + ', You lose');
            $('#text').html('The Computer Picked ' + opp + ', You lose');
            score--;
            $('#score').html('Score:  ' + score);
        }
        if (opp == 'scissors') {
            console.log('The Computer Picked ' + opp + ', You win');
            $('#text').html('The Computer Picked ' + opp + ', You win');
            score++;
            $('#score').html('Score:  ' + score);
        }
    })
    $('#battlepaper').click(function () {
        var opp = rand();
        if (opp == 'rock') {
            console.log('The Computer Picked ' + opp + ', You win');
            $('#text').html('The Computer Picked ' + opp + ', You win');
            score++;
            $('#score').html('Score:  ' + score);
        }
        if (opp == 'paper') {
            console.log('The Computer Picked ' + opp + ', Its a tie');
            $('#text').html('The Computer Picked ' + opp + ', Its a tie');
        }
        if (opp == 'scissors') {
            console.log('The Computer Picked ' + opp + ', You lose');
            $('#text').html('The Computer Picked ' + opp + ', You lose');
            score--;
            $('#score').html('Score:  ' + score);
        }
    })
    $('#battlescissors').click(function () {
        var opp = rand();
        if (opp == 'rock') {
            console.log(' The Computer Picked ' + opp + ', You lose');
            $('#text').html(' The Computer Picked ' + opp + ', You lose ');
            score--;
            $('#score').html('Score:  ' + score);
        }
        if (opp == 'paper') {
            console.log('The Computer Picked ' + opp + ', You win');
            $('#text').html('The Computer Picked ' + opp + ', You win');
            score++;
            $('#score').html('Score:  ' + score);
        }
        if (opp == 'scissors') {
            console.log('The Computer Picked ' + opp + ', Its a tie');
            $('#text').html('The Computer Picked ' + opp + ', Its a tie');
        }
    })
}
$(document).ready(setup);
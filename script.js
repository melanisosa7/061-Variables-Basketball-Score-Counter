// DECLARE YOUR VARIABLES HERE
var teamOne;
teamOne="Team One";

var scoreOne = 0;

var teamTwo;
teamTwo="Team Two";

var scoreTwo;
scoreTwo=0;

var twoPointShot;
twoPointShot=2;
 
var threePointShot;
threePointShot=3;
 
var freeThrow;
freeThrow=100; 
 
var arena;
arena="Madison Square Garden ";

$(".arena").text(arena);





























// DON'T MODIFY THIS CODE
updateTeams();
var scoreOne;
var scoreTwo;
var teamOneName;
var teamTwoName;
var threePointShot;
var twoPointShot;
var freeThrow;
$("button").click(function(){
    var team;
    team = $(this).attr("team");
    
    var points;
    points = $(this).attr("class");
    
    updateScore(team, points);
});

function updateScore(myTeam, myPoints){
    if(myTeam === "one"){
        if(myPoints === "twoPt"){
            scoreOne += twoPointShot;
        } else if(myPoints === "threePt"){
            scoreOne += threePointShot;
        } else if(myPoints === "freeThrow"){
            scoreOne += freeThrow;
        }
        $(".scoreOne").text(scoreOne);
    } else if (myTeam === "two"){
        if(myPoints === "twoPt"){
            scoreTwo += twoPointShot;
        } else if(myPoints === "threePt"){
            scoreTwo += threePointShot;
        } else if(myPoints === "freeThrow"){
            scoreTwo += freeThrow;
        }
        $(".scoreTwo").text(scoreTwo);
    }
}

function updateTeams(){
    $(".teamOne").text(teamOneName);
    $(".teamTwo").text(teamTwoName);
}


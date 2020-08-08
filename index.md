
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="RPS.css">
        <title>Play RPS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='https://fonts.googleapis.com/css?family=Merienda' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/css?family=Kalam' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/css?family=Gruppo' rel='stylesheet'>
    </head>
    <body>
        <div id="rulesetoverlay">
            <p id="gametype">SELECT GAME MODE</p>
            <div id="rulesetscont">
                <button id="closegametype" onclick="off()">X</button>
                <button class="rulesets single">Single Game</button>
                <button class="rulesets ft5">First to 5</button>
                <div class="customroundsdiv">
                    <button class="rulesets customrounds">Play # rounds</button>
                    <input type="number" id="inputrounds" placeholder="1" min="1" pattern="[0-9]*" />
                </div>
                <div class="customscorediv">
                    <button class="rulesets customscore">First to</button>
                    <input type="number" id="inputscore" placeholder="1" min="1" pattern="[0-9]*"/>
                </div>
            </div>
        </div>
        <div id="endofgameoverlay">
            <div id="endofgamecont">
                <h1 id="didyouwin"></h1>
                <h2 id="finalscore">FINAL SCORE <br>
                <span id="finalscoreresult">here is the score</span>  </h2>
                <button id="playagain">play again?</button>
                <button id="playsomethingelse">play something else</button>
            </div>
        </div>
        <div id="jankentime">
                <div id="header">
                    <h1>ROCK PAPER SCISSORS</h1>
                    <h3>Time to Play a Game</h3>
                </div>
            <div id="playarea">
                <div id="roundjanken">
                    <button id="rulesettype" class="jankenbuttons" onclick="onbox()">Ruleset Type
                    <br><span id="spanrule"></span></button>
                    <button id="navother">Other <br>Games</button>
                    <h3 id="roundnumber">Round #</h3>
                    <h3 id="playerScore" class="scores"><span id="playerspan">Player</span><br> 
                        <span id="scoreplayer"></span></h3>
                    <h3 id="computerScore" class="scores"><span id="computerspan">Computer</span><br> 
                        <span id="scorecomputer"></span></h3>
                </div>
                <div id="buttonsplayercontainer">
                    <button class="RPSbutton playerRock" ></button>
                    <button class="RPSbutton playerPaper"></button>
                    <button class="RPSbutton playerScissors"></button>
                </div>
                <div id="buttonscomputercontainer">
                    <img class="RPSbutton computerRock" src="https://i.ibb.co/Nn3fQHT/rock2.png"></img>
                    <img class="RPSbutton computerPaper" src="https://i.ibb.co/BrJyjr2/paper2.png"></img>
                    <img class="RPSbutton computerScissors" src="https://i.ibb.co/SKHnw9n/scissors2.png"></img>
                </div>
            </div>
        </div>
        <script src="RPS.js";></script>
    </body>
</html>

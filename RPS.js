    let computerPlay = () => {                      // randomize computer play
        let turnPlay = '';
        let a = Math.floor(Math.random()*3);
        switch(a) {
            case 0:
                turnPlay = 'rock';
                return turnPlay;
                break;
            case 1:
                turnPlay = 'paper';
                return turnPlay;
                break;
            case 2:
                turnPlay = 'scissors';
                return turnPlay;
                break;
        }
    }

    function on() {  
        document.getElementById("rulesetoverlay").style.display = "flex";
        document.getElementById('closegametype').style.display = 'none';
    }
    function onbox() {  
        document.getElementById("rulesetoverlay").style.display = "flex";
        document.getElementById('closegametype').style.display = 'block';
    }
    function off() {
    document.getElementById("rulesetoverlay").style.display = "none";
    }

    let whoWon = (playerPick, computerPick) => {        // who's next? YOU DECIDE
        let result = 0;
        switch(true) {
            case (playerPick == computerPick):          // tie = 0
                result = 0;
                return result;
            case (                                      // win = 1
                    (playerPick == 'rock' && computerPick == 'scissors') ||
                    (playerPick == 'paper' && computerPick == 'rock') ||
                    (playerPick == 'scissors' && computerPick == 'paper')
            ):
                result = 1;
                return result;
            case (                                      // lose = -1
                (playerPick == 'rock' && computerPick == 'paper') ||
                (playerPick == 'paper' && computerPick == 'scissors') ||
                (playerPick == 'scissors' && computerPick == 'rock')
            ):
                result = -1;
                return result;
        }
    }


    const computerRock = document.querySelector('.computerRock');               
    const computerPaper = document.querySelector('.computerPaper');
    const computerScissors = document.querySelector('.computerScissors');

    const rock = document.querySelector('.playerRock');
    const paper = document.querySelector('.playerPaper');
    const scissors = document.querySelector('.playerScissors');

    const buttonsArray = [rock, paper, scissors, computerRock, computerPaper, computerScissors];     //array with all buttons

    let modifyArray = (index1, index2) => {                                                          // return new array without two indexed elements
        let newArray = [...buttonsArray];
        newArray.splice(index2, 1);
        newArray.splice(index1, 1);
        return newArray;
    }
    let hideItems = array => {                                                                      // toggle class .hide to all items in the modified array (every button that's not player/computer pick)    
        array.forEach(item => item.classList.toggle('hide'));
    }
    let buttonColors = (playerPick, computerPick) => {                                              // takes care of all the colors on a case by case
        switch (playerPick) {
            case 'rock':
                switch(whoWon(playerPick, computerPick)) {
                    case 0:
                        rock.classList.toggle('tie');
                        computerRock.classList.toggle('tie');
                        hideItems(modifyArray(0,3))
                        break;
                    case 1:
                        rock.classList.toggle('win');
                        computerScissors.classList.toggle('lose');
                        hideItems(modifyArray(0,5))
                        break;
                    case -1:
                        rock.classList.toggle('lose');
                        computerPaper.classList.toggle('win');
                        hideItems(modifyArray(0,4))
                        break;
                }
                break;
            case 'paper':
                switch(whoWon(playerPick, computerPick)) {
                    case 0:
                        paper.classList.toggle('tie');
                        computerPaper.classList.toggle('tie');
                        hideItems(modifyArray(1,4))
                        break;
                    case 1:
                        paper.classList.toggle('win');
                        computerRock.classList.toggle('lose');
                        hideItems(modifyArray(1,3))
                        break;
                    case -1:
                        paper.classList.toggle('lose');
                        computerScissors.classList.toggle('win');
                        hideItems(modifyArray(1,5))
                        break;
                }
                break;
            case 'scissors':
                switch(whoWon(playerPick, computerPick)) {
                    case 0:
                        scissors.classList.toggle('tie');
                        computerScissors.classList.toggle('tie');
                        hideItems(modifyArray(2,5))
                        break;
                    case 1:
                        scissors.classList.toggle('win');
                        computerPaper.classList.toggle('lose');
                        hideItems(modifyArray(2,4))
                        break;
                    case -1:
                        scissors.classList.toggle('lose');
                        computerRock.classList.toggle('win');
                        hideItems(modifyArray(2,3))
                        break;
                }
                break;
        }
    }
    let classes = ['win', 'lose', 'tie','hide'];
    let removeClass = buttonClass => {                              // remove argument class from ALL buttons
        rock.classList.remove(buttonClass);
        paper.classList.remove(buttonClass);
        scissors.classList.remove(buttonClass);
        computerRock.classList.remove(buttonClass);
        computerPaper.classList.remove(buttonClass);
        computerScissors.classList.remove(buttonClass);
    }
    let resetColors = () => {                                       // uses array classes (with all desired classes to reset) to remove every class from ALL buttons
        classes.forEach(removeClass);
    }


    let computerScore = 0;
    let playerScore = 0;
    let round = 1;
    let rulesetRound = 0;
    let ruleset = 0;
    let finalResult = 0         // 1 for player win, -1 for computer win



    const single = document.querySelector('.single');
    const ft5 = document.querySelector('.ft5');
    const customrounds = document.querySelector('.customrounds');
    const customscore = document.querySelector('.customscore');
    const rulesetText = document.querySelector('#spanrule')

    const roundnumber = document.querySelector('#roundnumber');
    const scoreplayer = document.querySelector('#scoreplayer');
    const scorecomputer = document.querySelector('#scorecomputer');

    let setRuleset = (rulesetType, optValue = 0) => {
        switch(rulesetType) {
            case 'single':
                rulesetText.innerText = `Single`;
                ruleset = 1;
                break;
            case 'ft5':
                rulesetText.innerText = `First to 5`;
                ruleset = 5;
                break;
            case 'customrounds':
                rulesetText.innerText = `${optValue} rounds`
                rulesetRound = optValue;
                break;
            case 'customscore':
                rulesetText.innerText = `First to ${optValue}`
                ruleset = optValue;
                break;
        }          
        computerScore = 0;              // resets scores
        playerScore = 0;
        round = 1;
        finalResult = 0;
        roundnumber.textContent = `Round # ${round}`;
        scoreplayer.textContent = `${playerScore}`;
        scorecomputer.textContent = `${computerScore}`;
        off();
    }

    single.addEventListener('click',() => setRuleset('single'));
    ft5.addEventListener('click',() => setRuleset('ft5'));
    customrounds.addEventListener('click',() => {
        let inputrounds = document.getElementById('inputrounds').value;
        setRuleset('customrounds',+inputrounds);
    });
    customscore.addEventListener('click', () => {
        let inputscore = document.getElementById('inputscore').value;
        setRuleset('customscore', +inputscore);
    });

    let checkScores = (roundResult, ruleset) => {            // need to rewrite to include log
        round += 1;
        roundnumber.textContent = `Round #${round}`;
        switch(roundResult) {
            case 0:
                break;
            case 1:
                playerScore += 1;
                scoreplayer.textContent = `${playerScore}`;
                if (playerScore == ruleset) finalResult = 1;
                break;
            case -1:
                computerScore += 1;
                scorecomputer.textContent = `${computerScore}`;
                if (computerScore == ruleset) finalResult = -1;
                break;
        }
        if(rulesetRound == round - 1) {
            if(playerScore > computerScore) finalResult = 1;
            else if (computerScore > playerScore) finalResult = -1;
            else finalResult = 2;
        }
    }

    const endofgameoverlay = document.querySelector('#endofgameoverlay');
    let endgameon = () => {
        endofgameoverlay.style.display = 'flex';
    }
    let endgameoff = () => {
        endofgameoverlay.style.display = 'none';
    }
    const didyouwin = document.querySelector('#didyouwin');
    const finalscoreresult = document.querySelector('#finalscoreresult');
    const playagain = document.querySelector('#playagain')

    let gameEnd = resultValue => { 
        switch(resultValue) {
            case 2:
                didyouwin.textContent = `You tied!`;
                break;
            case 1:
                didyouwin.textContent = `You win!`;
                break;
            case -1:
                didyouwin.textContent = `You lose!`;
                break;
        }
        endgameon();
        finalscoreresult.textContent = `${playerScore} - ${computerScore}`;
    }

    playagain.addEventListener('click', () => {
        endgameoff();
        on();
    })

    function playRound(playerPick) {
        let computer = computerPlay();                              // stores computerPick (as a string) to a variable
        buttonColors(playerPick, computer);                         // assigns correct colors depending on picks
        checkScores(whoWon(playerPick, computer), ruleset);         // increments scores, checks for total (end of game)
        if(finalResult !== 0) setTimeout(() => gameEnd(finalResult), 1100);                 // checks for end of game
        setTimeout(() => resetColors(), 1100);                      // reset colors after 1s
    }
    rock.addEventListener('click', () => playRound('rock'));
    paper.addEventListener('click', () => playRound('paper'));
    scissors.addEventListener('click', () => playRound('scissors'));
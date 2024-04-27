let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".imgs img");
const message = document.querySelector("#btn");
const uscore = document.querySelector("#user");
const cscore = document.querySelector("#comp");

const genComputerChoice = ()=>{
    const list=["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return list[randIdx];
}

const showWinner = (userWin)=>{
    if(userWin){
        userscore++;
        uscore.innerText=userscore;
        message.innerText="you win";
        message.style.backgroundColor="lightgreen";
    }else{
        compscore++;
        cscore.innerText=compscore;
        message.innerText="you loose";
        message.style.backgroundColor="red";
    }
}

const draw = ()=>{
    message.innerText="draw";
    message.style.backgroundColor="rgb(4,4,59)"
}

const playGame = (userChoice)=>{
    const compChoice = genComputerChoice();

    if(userChoice===compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


//DATA COLLECTION FROM HTML

const butttons=document.getElementById("button")
const pick=document.getElementById("pick")
const computer=document.getElementById("computer")
const result=document.getElementById("result")
//const check=
//
let compchoice=['rock','paper','scissors']
let random;
function getcompchoice(){
    randomindex=Math.floor( Math.random()*compchoice.length)
    return compchoice[randomindex]


}
function play(playerchoice){
    const cmpchoice=getcompchoice();
    computer.textContent=`computer choice:${cmpchoice}`;
    pick.textContent=`Your choice:${playerchoice}`;
    if(playerchoice === cmpchoice){result.textContent= `Draw`;result.className="draw"}
    else if(playerchoice==='rock'&& cmpchoice==='scissors'||
            playerchoice==='paper'&& cmpchoice==='rock'||  
            playerchoice==='scissors'&& cmpchoice==='paper')
            { result.textContent=`You win`;
                result.className="win"
            }
            else{result.textContent=`You lose`;
                result.className="lose"
            }
}

    


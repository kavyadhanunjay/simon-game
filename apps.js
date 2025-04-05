let gameseq=[];
let userseq=[];
let highest=0;

let color=['yellow','red','purple','green'];

let started=false;
let level=0;

let h3=document.querySelector('h3');

//keypress game start
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelup();
    // console.log("game started");
});


//flash&levelup
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userbtnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    //random btn choose
    let x=Math.floor(Math.random()*4);
    let ranColor=color[x];
    let ranbtn=document.querySelector(`.${ranColor}`);
    gameseq.push(ranColor);
    console.log(gameseq);
    btnFlash(ranbtn);
}


//btn EventListener
function btnPress(){
    let btn=this;
    userbtnFlash(btn);
    
    let color=btn.getAttribute('id');
    userseq.push(color);
    // console.log(userseq);
    
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener('click',btnPress);
}

//matching sequence
function checkAns(i){
    // let idx=level-1;
    if(userseq[i]==gameseq[i]){
        console.log("same value");
        if(i==gameseq.length-1 && userseq[i]==gameseq[i])
        {
            setTimeout(levelup(),2000);
        }
    }
    else{
        let score=(level-1)*10;
        if(highest<score){
            highest=score;
        }
        h3.innerText=`Game Over!  
        Your score=${score}
        Highest score = ${highest}
        press any key to start`;
        let body=document.querySelector('body');
        body.classList.add('ree');
        setTimeout(function(){
            body.classList.remove('ree');
        },500);
        reset();
    }
}

//reset
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
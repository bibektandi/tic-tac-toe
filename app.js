let boxes=document.querySelectorAll(".box");
let reset_button=document.querySelector("#reset");//to access the buttons
let  newgamebtn=document.querySelector(".newbtn");
let mssgcontainer=document.querySelector(".msg_container");
let mssage=document.querySelector("#mssg");
let turn0=true; //if true then it will be player0 if false then player x
let draww=document.querySelector("#draw");
let count=0;
const win_=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,4,6],[2,5,8],
    [3,4,5],[6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    
    if(turn0){
        box.innerText="O";
        turn0=false;
    }else{
        box.innerText="X";
        turn0=true;
    }box.disabled=true;
    count++;
     check_winner();
     let iswinner=check_winner();
     if (count===9 && !iswinner){
     gamedraw();
}
    
    });   
});



   

const showWinner=(winner)=>{
      mssg.innerText=`congratulation , winner is ${winner}`;
      mssgcontainer.classList.remove("hide");
};
const boxenable=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
       
    }
};
const resetgame=()=>{
    turn0=true;
    boxenable();
    count=0;
    mssgcontainer.classList.add("hide");
}
 const boxdisabled=()=>{
    for(box of boxes){
       box.disabled=true;
    }
 };

const check_winner = () => {//arrow function
    for(let patterns of win_){
       let pos1=boxes[patterns[0]].innerText;
       let pos2=boxes[patterns[1]].innerText;
       let pos3=boxes[patterns[2]].innerText;
       if(pos1!=""&&pos1===pos2&&pos2===pos3){
        
       
        boxdisabled();
        showWinner(pos1);
        
        }
        
    }   
};
const gamedraw=()=>{
draww.innerText="MATCH DRAW";
mssgcontainer.classList.remove("hide");
boxdisabled();
mssg.innerText="";
}
newgamebtn.addEventListener("click",resetgame);
reset_button.addEventListener("click",resetgame);

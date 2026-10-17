let boxes = document.querySelectorAll(".cell");
let resetBtn = document.querySelector(".restart");

let scorex = document.querySelector("#score-x");
let scoreo = document.querySelector("#score-o");

let turnO = true;
let winningPattern = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],   
  [0, 3, 6], [1, 4, 7], [2, 5, 8],   
  [0, 4, 8], [2, 4, 6]               
];

boxes.forEach((box)=>{
        box.addEventListener("click", ()=>{            
            if (turnO){
              box.innerHTML="O";
              turnO=!turnO;
            } else{
              box.innerHTML="X";
              turnO=true;
            }
            box.disabled=true;
            checkWinner();

        });
});


const showWinner= (banana)=>{
      gamedisable();

      document.querySelector('.winner').innerHTML= `congratulation the winner is ${banana}`;

     scoreBoard(banana);
     scoreo.innerHTML = opoints;
     scorex.innerHTML = xpoints;
}





const checkWinner = ()=>{
        for (pattern of winningPattern){
          let pos1 = boxes[pattern[0]].innerHTML;
          let pos2 = boxes[pattern[1]].innerHTML;
          let pos3 = boxes[pattern[2]].innerHTML;

           if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1===pos2 && pos3===pos1){            
              showWinner(pos1); };
           } }
};



const gamedisable = ()=>{
  for(box of boxes){
    box.disabled = true;
  }
};



const newGame = ()=>{
          for(box of boxes)
            {box.innerHTML='';
             box.disabled=false;
          };

          turnO= true;
          
          document.querySelector('.winner').innerHTML='';


};

resetBtn.addEventListener('click',newGame);

let xpoints = 0;
let opoints = 0;

scoreo.innerHTML = opoints;
scorex.innerHTML = xpoints;


const scoreBoard = (banan)=>{
  if (banan === 'O'){
    opoints += 1
  }
  else{
    xpoints += 1
  }
    

  
};


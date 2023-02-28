const textInfo=document.querySelector('.info-jeu');
const allCellules=document.querySelectorAll('.case');


let verrouiller=true;
let joueur='X';

textInfo.innerText=`Au tour de ${joueur}`;
const jeuGagnant=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let partieEncours=["","","","","","","","",""];
allCellules.forEach(cell=>{
    cell.addEventListener('click',clicSurCase)
})

function clicSurCase(e){
  const caseClik=e.target
  const caseIndex=caseClik.getAttribute('data-index')
  if(partieEncours[caseIndex]!=='' || !verrouiller){
    return;
  }

  partieEncours[caseIndex]=joueur;
  caseClik.innerHTML=joueur;

  validationResultat()
}


function validationResultat(){
    let finPartie=false;

    for (let i = 0; i < jeuGagnant.length; i++) {
        const check=jeuGagnant[i];
        let a=partieEncours[check[0]];
        let b=partieEncours[check[1]];
        let c=partieEncours[check[2]]
        

        if(a==='' || b==='' || c===''){
            continue
        }
        if(a===b && b===c){
          finPartie=true;
          a.classList.style.backgroundColor='black';
          break
        }
        
    }
    if(finPartie){
       textInfo.innerText=`Le joueur ${joueur} a gagné`; 
       verrouiller=false;
       return;
    }
    let matchNull=!partieEncours.includes('');
    if(matchNull){
        textInfo.innerText=`il y a un match nul `;
        verrouiller=false;
        return;
    }
    changerJoueur()
}

function changerJoueur(){
    joueur = joueur === "X" ? "O" : "X";
    textInfo.innerText=`Au tour de ${joueur}`;

}
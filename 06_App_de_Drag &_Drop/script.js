let base=document.querySelector('.choose-picture');
let firstCase=document.querySelector('#first-case');
let boxCas=document.querySelector('.case')
let caseDestroy=document.querySelector('.check>button');
let cases=document.querySelectorAll('.content-selection');


let allCases=[]
let indexPhoto= 1 ;

let parcourPhoto=`url(https://loremflickr.com/320/240?random=${indexPhoto})`;
let choix=[]
base.style.backgroundImage=`url(https://loremflickr.com/320/240?random=${indexPhoto})`;

for (let index = 0; index < cases.length; index++) {
    allCases.push(cases[index]);   
}
allCases.push(caseDestroy)

for(let vide of allCases) {
    vide.addEventListener('dragover', dragOver)
    vide.addEventListener('dragenter', dragEnter)
    vide.addEventListener('drop', dragDrop)
}
function dragOver(e){
//  e.target.style.backgroundColor= 'black';
 e.preventDefault(); 
}
function dragEnter(e){
   e.preventDefault(); 
}
function dragDrop(e){
 e.target.appendChild(base)
 let divChild=this.appendChild(base);

if(this.id==='first-case'){
    return;
}
if(this.id==='destroy'){
    base.remove()
    newBase()
    return;
}
this.removeEventListener('drop',dragDrop)
this.removeEventListener('dragenter',dragEnter)
this.removeEventListener('drogover',dragDrop)


this.childNodes[0].setAttribute('draggable',false);
  divChild.classList.add('modif')
  newBase()
}

function newBase(){

    const newBase=document.createElement('div');
    newBase.setAttribute('classe','case');
    newBase.setAttribute('draggable','true');
    indexPhoto++;
    newBase.style.backgroundImage=`url(https://loremflickr.com/320/240?random=${indexPhoto})`;
    parcourPhoto=`url(https://loremflickr.com/320/240?random=${indexPhoto})`;
    boxCas.appendChild(newBase)
    newBase.classList.add('modif')
    base=newBase
    choix.push(parcourPhoto)
    if(choix.length===3){
        setTimeout(()=>{
          alert('Selection terminée')
        },2000)
    }
}


const form=document.querySelector('.cards')
let cadres=document.querySelectorAll('.card');
let titre=document.querySelector('.card2 h4');
let aide=document.querySelector('.aide');
let note=document.querySelector('.note');
// console.log(titre)

let vefTableau=[];
let res=[]
const reponse=['b','c','a']
const emojis=['✔️','🤔','👀','😭','👎🏻']

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    for (let i = 0; i < 3; i++) {
      res.push(document.querySelector(`input[name="q${i}"]:checked`).value)  
    }
    console.log(res)
    
    vef(vefTableau)
    afficheRes(vefTableau)
    ColorA(vefTableau)

    vefTableau=[]
    res=[]
    
    console.log('--------Mon quiz-------')
})

function vef(vefTableau){
    for (let a = 0; a < 3; a++) {
        
        if(res[a] === reponse[a]){
            vefTableau.push(true)
        }else{
            vefTableau.push(false)
        }
       console.log(res[a]) 
    }
    console.log(vefTableau,'coucou')
   
}
function afficheRes(x){
    const nbrFaute=x.filter(el => el!==true).length
    console.log(nbrFaute,'nbre-fautes')

   switch(nbrFaute){
    case 0 :
      titre.innerText=`✔️ Bravo, c'est un sans faute ! ✔️`  
      aide.innerText='';
      note.innerText='3/3';
      break;
    case 1 :
      titre.innerText=`🤔 Vous y etes presques ! 👀`  
      aide.innerText='retentez une autre reponse dans la case rouge, puis validez!';
      note.innerText='2/3';
      break;
    case 2 :
      titre.innerText=` 👀 Encore un effort ! 👎🏻`  
      aide.innerText='reprennez le quiz';
      note.innerText='0/3';
    break;
    default:
        console.log('erreur')
   }
   
}
function ColorA(data){
     for (let k = 0; k < data.length; k++) {
        if(data[k]==true){
            cadres[k].style.backgroundColor='#e6ee9c'
        }else{
            cadres[k].style.backgroundColor='red' 
            cadres[k].classList.add('echec')

            setTimeout(() => {
                cadres[k].classList.remove('echec')

            }, 5000);
        }
     }
   }


cadres.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.style.backgroundColor='white'  
    })
})
const form=document.querySelector('.cards')

let vefTableau=[];
let res=[]
const reponse=['b','c','b','c','a','c']
const emojis=['✔️','🤔','👀','😭','👎🏻']
let data=null
let keys=0

window.addEventListener('load',async () =>{
    data= await fetch('fichier.json')
    data=await data.json()
    // console.log(data)
    
    keys=Object.keys(data)
    // console.log(keys)

    let collect=[]

    for (let k = 0; k < 6; k++) {
        // const element = array[k];

        collect.push(document.createElement('div'))
        form.appendChild(collect[k])
        collect[k].classList.add('card')
        // console.log(collect[k], "add collect")
        
           collect[k].innerHTML=`<h3>${k+1}--${data[keys[k]].titre}</h3>
            <p><input type="radio" name="q${keys[k]}" value="a" checked>${data[keys[k]].question1}</p>
            <p><input type="radio" name="q${keys[k]}" value="b" checked>${data[keys[k]].question2}</p>
            <p><input type="radio" name="q${keys[k]}" value="c" checked>${data[keys[k]].question3}</p>
          </div>`   
    }
   let resultCheck=document.createElement('div')
   form.appendChild(resultCheck)
   resultCheck.innerHTML=`<button type="submit" class="card_send">Validez vos choix !</button>
   <div class="card2">
     <h4>Cliquez sur valider pour voir les resultats.</h4>
     <p class="aide"></p>
     <p class="note"></p>
   </div> `
     
   let titre=document.querySelector('.card2 h4');
   let aide=document.querySelector('.aide');
   let note=document.querySelector('.note');
   
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
    
    // console.log('--------Mon quiz-------')
})

function vef(vefTableau){
    for (let a = 0; a < 5; a++) {
        
        if(res[a] === reponse[a]){
            vefTableau.push(true)
        }else{
            vefTableau.push(false)
        }
    //    console.log(res[a],'reponse') 
    }
    // console.log(vefTableau,'vefTableau values')
   
}
function afficheRes(x){
    const nbrFaute=x.filter(el => el!==true).length
    console.log(nbrFaute,'nbre-fautes')

   switch(nbrFaute){
    case 0 :
      titre.innerText=`✔️ Bravo, c'est un sans faute ! ✔️`  
      aide.innerText='';
      note.innerText='6/6';
      break;
    case 1 :
      titre.innerText=` Vous y etes presques ! 👀`  
      aide.innerText='retentez une autre reponse dans la case rouge, puis validez!';
      note.innerText='5/6';
      break;
    case 2 :
      titre.innerText=` 👀 Encore un effort ! 👎🏻`  
      aide.innerText='reprennez le quiz, il vous reste trois reponses à trouvées .';
      note.innerText='4/6';
    break;
    case 3 :
      titre.innerText=` 👀 Encore un effort ! 🤔 `  
      aide.innerText='reprennez le quiz, il vous reste trois reponses à trouvées .';
      note.innerText='3/6';
    break;
    case 4 :
      titre.innerText=`  Encore un effort ! 👀 `  
      aide.innerText='reprennez le quiz, il vous reste deux reponses à trouvées ..';
      note.innerText='2/6';
    break;
    case 5 :
      titre.innerText=`  Encore un effort ! 👀👀 `  
      aide.innerText='reprennez le quiz, il vous reste un reponse à trouvée ..';
      note.innerText='1/6';
    break;
    case 6 :
      titre.innerText=` Encore un effort ! 👎🏻👎🏻 `  
      aide.innerText='reprennez le quiz';
      note.innerText='0/6';
    break;
    default:
        console.log('erreur')
   }
   
}
function ColorA(data){
     for (let a = 0; a < collect.length; a++) {
        if(data[a]==true){
            collect[a].style.backgroundColor='#e6ee9c'
        }else{
            collect[a].style.backgroundColor='red' 
            collect[a].classList.add('echec')

            setTimeout(() => {
                collect[a].classList.remove('echec')

            }, 5000);
        }
     }
   }


   collect.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.style.backgroundColor='white'  
    })
})
    })

    
   



































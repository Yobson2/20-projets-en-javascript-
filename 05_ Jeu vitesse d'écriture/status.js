const apiCall='https://api.quotable.io/random';
const afficheScore=document.querySelector('.score');
const afficheTemps=document.querySelector('.temps');

const affichePhrase=document.querySelector('.phrase');
const phraseTest=document.querySelector('.phrase-test');

let temps=60;
let score=0;
let lengthPhrase;


afficheTemps.innerHTML=`Temps :<span>${temps}</span> s`
afficheScore.innerHTML=`Score :<span>${score}</span>`

let timer=setInterval(time,1000)

function time(){
temps--;
afficheTemps.innerHTML=`Temps :<span>${temps}</span> s`
afficheScore.innerHTML=`Score :<span>${score}</span>`

 if(temps==0){
    clearInterval(timer);
 }
}

async function dataPhrases(){

    let resultats= await fetch(apiCall)
    resultats= await resultats.json()

    const phrase=resultats.content
    lengthPhrase=resultats.length
    printPhrase(phrase)
}
 dataPhrases()
 console.log(lengthPhrase)

function printPhrase(data){
   affichePhrase.innerHTML=''
   data.split('').forEach((el)=>{
      const caraSpan=document.createElement('span');
      caraSpan.innerHTML=el
      affichePhrase.appendChild(caraSpan)

   })
   phraseTest.value=null
   
}

phraseTest.addEventListener('input',(e)=>{
   e.preventDefault();
  const tableauEcrire=affichePhrase.querySelectorAll('span');
  const tableauTest=e.target.value.split('');
  let correct=true;

  tableauEcrire.forEach((caracSpan,index)=>{
   tableauEcrire.forEach((caracSpan, index)=>{
      const caractere=tableauTest[index]
      if(caractere===undefined){
          caracSpan.classList.remove('incorrect')
          correct=false
      }

      else if(caractere== caracSpan.innerHTML){
          caracSpan.classList.add('correct')
          caracSpan.classList.remove('incorrect')
              caracSpan.classList.remove('correct')
      
      }else{
          caracSpan.classList.remove('correct')
          caracSpan.classList.add('incorrect')
          correct=false
      }

      
   })
   if(correct){
      dataPhrases()
      score +=lengthPhrase
   }
   console.log(lengthPhrase)
   
  })
   

   

})
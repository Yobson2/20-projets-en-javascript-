const apiCall='https://api.quotable.io/random';
const afficheTemps=document.querySelector('.temps');
const afficheScore=document.querySelector('.score');

const phraseEcrire=document.querySelector('.phrase');
const phraseTest=document.querySelector('.phrase-test')

let temps=60;
let score=0;
let phrasePourScore;
afficheTemps.innerHTML=`Temps : <span>${temps}</span>s`
afficheScore.innerHTML=`Score : <span>${score}</span>s`

let timer=setInterval(time,1000)

function time(){
temps--;
afficheTemps.innerHTML=`Temps : <span>${temps}</span>s`
afficheScore.innerHTML=`Score : <span>${score}</span>s`

if(temps===0){
    clearInterval(timer)
}
}

async function dataCitations(){
    let response= await fetch(apiCall)
    response= await response.json()
    const phrase= response.content
    // console.log(phrase)
    phrasePourScore=response.length
    addPhrase(phrase)
}
dataCitations()

function addPhrase(text){
    phraseEcrire.innerHTML=''
    text.split('').forEach(element => {
        const caracSpan=document.createElement('span');
        caracSpan.innerHTML=element
        phraseEcrire.append(caracSpan)
    });
    phraseTest.value=null
      
}
phraseTest.addEventListener('input',()=>{
    const tableauEcrire=phraseEcrire.querySelectorAll('span');
    const tableauTest=phraseTest.value.split('');

    let correct=true;
    
    tableauEcrire.forEach((caracSpan, index)=>{
        const caractere=tableauTest[index]
        if(caractere===undefined){
            caracSpan.classList.remove('correct')
            caracSpan.classList.remove('incorrect')
            correct=false
        }

        else if(caractere== caracSpan.innerHTML){
            caracSpan.classList.add('correct')
            caracSpan.classList.remove('incorrect')
            
        }else{
            caracSpan.classList.remove('correct')
            caracSpan.classList.add('incorrect')
            correct=false
        }
        
    })
    if(correct){
        addPhrase();
        score +=phrasePourScore
    }
})
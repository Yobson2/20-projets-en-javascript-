const user=document.querySelector('#utilisateur');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const inpConf=document.querySelector('#conf');


const allIcon=document.querySelectorAll('img');
const allSpan=document.querySelectorAll('.ligne span');
const allSms=document.querySelectorAll('.message-alerte');

console.log(allSms)

user.addEventListener('input',(e)=>{

    if(e.target.value.length >= 3){
        allIcon[0].style.display='inline';
        allIcon[0].src="Logo/icons8-check-mark-button-48.png";
        allSms[0].style.display='none'
    }
    else{
        allIcon[0].style.display='inline';
        allIcon[0].src="Logo/icons8-red-circle-48.png";
        allSms[0].style.display='inline'
    }
    
})

email.addEventListener('input',(e)=>{
    const regexEmail=/\S+@\S+\.\S+/;

    if(e.target.value.search(regexEmail)===0){
        allIcon[1].style.display='inline';
        allIcon[1].src="Logo/icons8-check-mark-button-48.png";
        allSms[1].style.display='none'
    }else if(e.target.value.search(regexEmail)===-1){
        allIcon[1].style.display='inline';
        allIcon[1].src="Logo/icons8-red-circle-48.png";
        allSms[1].style.display='inline'
    }

})

//validation and create MDP

let valeurInp;
const specialCar=/[^a-zA-Z0-9]/
const alphabet=/[a-z]/i;
const chiffre=/[0-9]/i;

const objValidator = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

password.addEventListener('input',(e)=>{
valeurInp=e.target.value

if(valeurInp.search(specialCar)!==-1){
  objValidator.symbole=1;

}
if(valeurInp.search(alphabet)!==-1){
  objValidator.lettre=1;
}
if(valeurInp.search(chiffre)!==-1){
  objValidator.chiffre=1;
}
 console.log(objValidator)
deleteInp(e)

let testAll=0;
for(const i in objValidator){
    if(objValidator[i]>0){
        testAll++
        console.log(objValidator[i])
    }
}  //le caracteres necessaires
    if(testAll < 3){
        allIcon[2].style.display='inline';
        allIcon[2].src="Logo/icons8-red-circle-48.png";
        allSms[2].style.display='inline'
    }else{
        allSms[2].style.display='none'
        allIcon[2].style.display='inline';
        allIcon[2].src="Logo/icons8-check-mark-button-48.png";
    }

 
})

function deleteInp(e){
    if(e.inputType =='deleteContentBackward'){
        if(valeurInp.search(specialCar)===-1){
        objValidator.symbole=0;

        }
        if(valeurInp.search(alphabet)===-1){
        objValidator.lettre=0;
        }
        if(valeurInp.search(chiffre)===-1){
        objValidator.chiffre=0;
        }
 }


 ///password level

 if(valeurInp.length<=6 && valeurInp.length>0){
 allSpan[0].style.display='block';
 allSpan[1].style.display='none';
 allSpan[2].style.display='none';
 }
 if(valeurInp.length<=8 && valeurInp.length>6){
    allSpan[0].style.display='block';
    allSpan[1].style.display='block';
    allSpan[2].style.display='none';
 }
 if(valeurInp.length>9){
    allSpan[0].style.display='block';
    allSpan[1].style.display='block';
    allSpan[2].style.display='block';
 }else if(valeurInp.length===0){
     allSpan[0].style.display='none';
    allSpan[1].style.display='none';
    allSpan[2].style.display='none';
 }
}

//confirmation Password

inpConf.addEventListener('input',(e)=>{
    if(e.target.value== valeurInp){
        allIcon[3].style.display='inline';
        allIcon[3].src="Logo/icons8-check-mark-button-48.png"; 
    }
    else{
     allIcon[3].style.display='inline';
     allIcon[3].src="Logo/icons8-red-circle-48.png";
     allSms[3].style.display='inline'
    }
})


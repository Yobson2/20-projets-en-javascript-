const form=document.querySelector('.List-global');
const inpSearch=document.querySelector('#search');
const btn=document.querySelector('.send');
const allListes=[];
const card=document.querySelector('.card');
const item=document.querySelector('li');



btn.addEventListener('click',(e)=>{
 e.preventDefault()
 
 if(inpSearch.value.length>0){
    console.log(inpSearch.value.trim())
    addListe(inpSearch.value)
    inpSearch.value=''
 }
})


function addListe(txt){
    const liste=`
                    <input type="checkbox">
                    <span>${txt}</span>
                    <button><img src="logo/icons8-cancel-48.png" alt=""></button>
    `
    allListes.push(liste)
    console.log(allListes)
    allListes.forEach(element => {
        console.log(element)
        if(txt!==item.innerHTML){
            item.innerHTML=liste
        }
        
    })
   
}
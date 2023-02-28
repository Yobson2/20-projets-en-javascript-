const form=document.querySelector('.List-global');
const inpSearch=document.querySelector('#search');
const liste=document.querySelector('ul')
const btn=document.querySelector('.send');
const allListes=[];
const card=document.querySelector('.check-list')




btn.addEventListener('click',(e)=>{
 e.preventDefault()
 const text=inpSearch.value.trim()
 if(text !==''){
    addTaches(text)
 }
})

function addTaches(text) {
    const todo={
        text,
        id:new Date()
    }

    afficherListe(todo)
}

function afficherListe(todo){
    const item=document.createElement('li');
    item.setAttribute('data-key',todo.id);

    const inp=document.createElement('input');
    inp.setAttribute('type','checkbox');
    inp.addEventListener('click',tacheFaite)
    item.appendChild(inp);

    const txt=document.createElement('span');
    txt.innerHTML=todo.text
    item.appendChild(txt);

    const button=document.createElement('button');
    button.addEventListener('click',deleteTaches);

    const img=document.createElement('img');
    img.setAttribute('src',"logo/icons8-cancel-48.png")
    button.appendChild(img)
    item.appendChild(button);

    liste.appendChild(item);
    allListes.push(item);
    console.log(allListes)
    card.style.backgroundColor='white';
}

function tacheFaite(e){
    e.target.parentNode.classList.toggle('fin-taches')
}
function deleteTaches(e){
  allListes.forEach(el=>
    {
        if(e.target.parentNode.getAttribute('data-key')===el.getAttribute('data-key')){
            el.remove()
            allListes=allListes.filter(li=>{li.dataset.key!==el.dataset.key})
        }
    }
    
    )
}


let start=document.querySelector('.commande-demarer');
let sauter=document.querySelector('.commande-sauter');

let person=document.querySelector('.row-bonhomme');
let car=document.querySelector('.row-obstacle');


start.addEventListener('click', ()=>{
    car.classList.toggle('moved-car');
})
sauter.addEventListener('click', ()=>{
    if(person.classList!="moved-person"){
        person.classList.add('moved-person');
    }

    setTimeout(()=>{
        person.classList.remove('moved-person');
    },500)
})

// let test=setInterval(function(){
//    let personTop=window.getComputedStyle(person).getPropertyValue('top');
//    let obstaclesLeft=window.getComputedStyle(car).getPropertyValue('left');

//    if(obstaclesLeft<20 && obstaclesLeft>0 &&  personTop>= -1600){
//     car.style.animation="none"; 
//     alert('vous avez perdu')
//    }
// },1)

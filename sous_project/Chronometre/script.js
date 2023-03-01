
let btnCommande=document.querySelectorAll('.commande');
let allSpan=document.querySelectorAll('span');

let h=0,m=0,s=0,ms=0;
let t;
window.addEventListener('load',()=>{
    allSpan[0].innerText=`${h}`;
    allSpan[1].innerText=`${m}`;
    allSpan[2].innerText=`${s}`;
    allSpan[3].innerText=`${ms}`;

});


function updateChrono(){
    ms +=1;
    if(ms==10){
        ms=1;
        s+=1;
    }
    if(s==60){
        s=1;
        m += 1;
    }
    if(m==60){
        min=1;
        h+=1;
    }
    allSpan[0].innerText=`${h}`;
    allSpan[0].style.color="orange";

    allSpan[1].innerText=`${m}`;
    allSpan[1].style.color="white";
    allSpan[2].innerText=`${s}`;
    allSpan[2].style.color="white";

    allSpan[3].innerText=`${ms}`;
    allSpan[3].style.color="green";
}

function startChrono(){
     t=setInterval(updateChrono,100);
    btnCommande[0].disabled=true;
}

function stopChrono(){
    clearInterval(t);
    btnCommande[0].disabled=false;
}

function resetChrono(){
    clearInterval(t);
    btnCommande[0].disabled=false;
    h=0,m=0,s=0,ms=0;
    allSpan[0].innerText=`${h}`;
    allSpan[1].innerText=`${m}`;
    allSpan[2].innerText=`${s}`;
    allSpan[3].innerText=`${ms}`;
    
};





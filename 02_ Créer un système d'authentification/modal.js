const insc=document.querySelector('.box-login');
const con=document.querySelector('.box-login2');



const btnConn=document.querySelector('#inscr');
const btnLogin=document.querySelector('#conn');
const btnDeconn=document.querySelector('#deconn');


btnConn.addEventListener('click',(e)=>{
    e.preventDefault()
    insc.classList.toggle('apparution')
    con.classList.remove('apparution')
})
btnLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    insc.classList.remove('apparution')
    con.classList.toggle('apparution')
})
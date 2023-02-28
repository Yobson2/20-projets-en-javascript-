const apiKey="https://api.github.com/users/";
const affichage=document.querySelector('.git-user-section');
const inpSearch=document.querySelector('#search');
const formTest=document.querySelector('.git-user-input');


async function dataGithub(user){
 
let res= await fetch(`${apiKey}${user}`)
res= await res.json()

console.log(res)
createCarte(res)

}
dataGithub('ziratsu')

function createCarte(user){
    const carteHtml=`

                <div class="user1">
                   <div class="picture"><img src="${user.avatar_url}" alt=""></div>
                   <h3>${user.name}</h3>
                </div>
                <div class="user1">
                    <hr>
                    <ul>
                        <li>Followers: <span>${user.followers}</span></li>
                        <li>Repos: <span>${user.public_repos}</span></li>
                        <li>${user.bio}</li>
                    </ul>
                </div>  
        
   
    `
    affichage.innerHTML=carteHtml;
}

formTest.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(inpSearch.value.length>0){
        dataGithub(inpSearch.value)
        inpSearch.value="";
    }
})

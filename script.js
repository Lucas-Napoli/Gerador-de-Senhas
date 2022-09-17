let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#Button");
let sizePassword = document.querySelector("#Valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!";
let NovaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
} 

function GeradorSenha(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() *n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    NovaSenha = pass;
    
    
}

/*  Estava copiando apenas 1 senha gerada, as outras estava dando erro, mudado para função abaixo
function copiarSenha(){
    alert("Senha Copiada!");
    navigator.clipboard.writeText(NovaSenha);
    
}
*/

async function copiarSenha(){

    await navigator.clipboard.writeText(NovaSenha)
    alert('Copiado com Sucesso!')

setTimeout(() => { copiarSenha(NovaSenha) }, 3000);

}
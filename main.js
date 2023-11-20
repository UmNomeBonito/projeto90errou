function addNames() 
{
userName = document.getElementById("caixa-de-texto1", "caixa-de-texto2").value;

if(userName){

    localStorage.setItem("userName", userName);

window.location = "gamePage.html";
}
}
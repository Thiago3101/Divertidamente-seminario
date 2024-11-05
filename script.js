const imagemAlegria = "./imagens/bob-esponja.jpg";
const imagemAnsiedade = "./imagens/ansiedade-enem.jpg";
const imagemInveja = "./imagens/henry-cavill.jpg";
const imagemMedo = "./imagens/TELA-AZUL.jpg";
const imagemNojinho = "./imagens/she-hulk.jpeg";
const imagemRaiva = "./imagens/aliexpress-taxas.jpg";
const imagemTedio = "./imagens/casa-sitio.jpeg";
const imagemTristeza = "./imagens/bart-triste.jpg";
const imagemVergonha = "./imagens/professora-aluno.jpg";

let p = document.querySelector("#paragrafo")



function TrocarAlegria(){
    document.getElementById("image-principal").src = imagemAlegria;
    p.innerHTML = "Alegria = sonegar impostos"
}
function TrocarAnsiedade(){
    document.getElementById("image-principal").src = imagemAnsiedade;
    p.innerHTML = "Ansiedade = Enem"
}
function TrocarInveja(){
    document.getElementById("image-principal").src = imagemInveja;
    p.innerHTML = "Inveja = oque sentimos toda vez que lembra-mos que o Henry Cavill existe"
}
function TrocarMedo(){
    document.getElementById("image-principal").src = imagemMedo;
    p.innerHTML = "Medo = O diacho da tela azul do windows "
}
function TrocarNojinho(){
    document.getElementById("image-principal").src = imagemNojinho;
    p.innerHTML = "Nojo = A série da She-hulk (é auto-explicativo)"
}
function TrocarRaiva(){
    document.getElementById("image-principal").src = imagemRaiva;
    p.innerHTML = "Raiva = Taxa nas compras internacionais"
}
function TrocarTedio(){
    document.getElementById("image-principal").src = imagemTedio;
    p.innerHTML = "Tédio = casa em zona rural sem internet"
}
function TrocarTristeza(){
    document.getElementById("image-principal").src = imagemTristeza;
    p.innerHTML = "Tristeza = Bart triste(melhor metódo de demonstração de tristeza)"
}
function TrocarVergonha(){
    document.getElementById("image-principal").src = imagemVergonha;
    p.innerHTML = "Vergonha = chamar professor(a) de pai ou mãe"
}

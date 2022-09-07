
function whatsapp(){

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var instrument = document.getElementById("instrument").value;
    var experience = document.getElementById("experience").value;
    var comment1 = document.getElementById("comment1").value;
    var comment2 = document.getElementById("comment2").value;   
    
    
    var url = "https://wa.me/+5561993328118?text="
    
    + "Olá, aqui tenho algumas informações sobre mim!" + "%0a"
    + "Nome: " + name + "%0a"
    + "Idade: " + age + "%0a"
    + "Sexo: " + sex + "%0a"
    + "Instrumento: " + instrument + "%0a"
    + "Experiência: " + experience + "%0a"
    + "Feedback: " + comment1 + "%0a"
    + "Sobre mim: " + comment2 + "%0a"

    window.open(url, '_blank').focus();

}
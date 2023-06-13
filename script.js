botaozinho = document.getElementById('butao')
async function getQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    frase = data.response
    autorzinho = data.author
    console.log("Frase: " + data.content + "\n" + "Autor: " + data.author)
    document.getElementById("frase").innerHTML = '"' + data.content + '"' + "<br><br>" + "– " + "<b>" + data.author + "</b>";
}

botaozinho.addEventListener('click', getQuote);

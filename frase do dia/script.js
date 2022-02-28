const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('frase');
const authorText = document.getElementById('autor');
const twitterButton = document.getElementById('twitter');
const novaFraseButton = document.getElementById('nova-frase');
const loader = document.getElementById('loader');

let apiQuotes = [];

//show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//hide loading
function completo() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}


//Mostrar nova frase
function novaFrase(){
  loading();
  //pega uma frase random no API
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //chec se autor esta em branco, caso esteja subistitui por 'Desconhecido'
  if(!quote.author){
    authorText.textContent = 'Desconhecido';
  }else{
  authorText.textContent = quote.author;
  }
  if(quote.text.length>120){
    quoteText.classList.add('frase-longa')
  }else{
    quoteText.classList.remove('frase-longa')
  }
  //set frase hide loader
  quoteText.textContent = quote.text;
  completo();
}

//pegar frases da API//
async function getQuotes(){
  loading();
  const apiUrl ='https://type.fit/api/quotes';
  try{
    const resoponse = await fetch(apiUrl);
    apiQuotes = await resoponse.json();
    novaFrase();
  } catch (error){

    //Pega o erro aqui
  }
}

//tweet 
function tweetFrase() {
  const twitterUrl =  `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blanck');
}

novaFraseButton.addEventListener('click', novaFrase);
twitterButton.addEventListener('click', tweetFrase);


//On load
getQuotes();

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('frase');
const authorText = document.getElementById('autor');
const twitterButton = document.getElementById('twitter');
const novaFraseButton = document.getElementById('nova-frase');
const loader = document.getElementById('loader');

let apiQuotes = [];

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function novaFrase(){
  showLoadingSpinner();
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
  removeLoadingSpinner();
}

//pegar frases da API//
async function getQuotes(){
  showLoadingSpinner();
  const apiUrl ='https://type.fit/api/quotes';
  try{
    const resoponse = await fetch(apiUrl);
    apiQuotes = await resoponse.json();
    novaFrase();
  } catch (error){
    getQuotes();
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

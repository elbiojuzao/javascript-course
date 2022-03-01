const videoElemento = document.getElementById('video');
const button = document.getElementById('button');

//seleciona midia stram, passa para o videoElemento, depois play...
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElemento.srcObject = mediaStream;
    videoElemento.onloadedmetadata = () =>{
      videoElemento.play();
    };
  }catch (error){
    //pega o erro aqui
  }
}

button.addEventListener('click', async () => {
  //display botao
  button.disabled = true;
  //começa o picture in picture
  await videoElement.requestPictureInPicture();
  //reinicia botao
  button.disabled = false;
});

//execuçao
selectMediaStream();
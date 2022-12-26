/*Vai pegar qualquer tecla que foi clicada na tela inteira e passa para a função playSound */
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLocaleLowerCase())
})

/**Vai pegar o botão, e quando o botão for clicado,  vai disparar um função */
document.querySelector('.composer button').addEventListener('click', ()=> {
    //vai pegar o conteudo que está dentro do input e colocar na variavel 
    let song = document.querySelector('#input').value;

    /**Vai verificar se o campo do input da vazio */
    if(song !== '') {

        /**vai criar um array com as letras que foi digitado
         * no campo, e vai passar para variavel songArray
         */
        let songArray = song.split('')
        playComposition(songArray)
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);


    if(audioElement) {
        /**Esse currentTime = 0 , ele vai reiniciar o audio toda
         * vez que a tleca for apertada. Entao ele nao 
         * vai espera o audio termina de troca para tocar 
         * novamente
         */
        audioElement.currentTime = 0
        audioElement.play();
    }

    if(keyElement) {
        /**Vai adicionar uma classe que ja esta pronta no css, active */
        keyElement.classList.add('active')

        /**Depois de adicionar a classe, ele vai remover depois de 300 milissegundo */
        setTimeout(()=>{
           keyElement.classList.remove('active') 
    },300)
    }
}

function playComposition(songArray) {
    /**vai executar imediatamente no setTimeout */
    let wait = 0;

    /**Vai fazer um loop  */
    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait)

        /*A cada letra vai ser adicionada 250 milissegundo. assim nao vai tocar tudo de uma so vez */
        wait += 250
    }
}
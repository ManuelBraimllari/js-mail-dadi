const eleNumPlayer = document.querySelector('#num-player')
const eleNumComputer = document.querySelector('#num-computer')
const eleOutput = document.querySelector('#output')
const eleButton = document.querySelector('.btn')


eleButton.addEventListener('click',function(){
    const NumPlayer = Math.floor(Math.random()*6)+1;
    const NumComputer = Math.floor(Math.random()*6)+1;

    eleNumPlayer.innerHTML = NumPlayer
    eleNumComputer.innerHTML = NumComputer

    let message;

    if (NumPlayer > NumComputer){
        message = 'Bravo hai vinto'
    }else if (NumPlayer < NumComputer){
        message ='Hai perso, prova di nuovo'
    }else {
        message = 'Avete pareggiato, prova di nuovo'
    }

    eleOutput.innerHTML = message
})


       


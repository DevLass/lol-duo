
var first_img = document.querySelector('#first-img');
var second_img = document.querySelector('#second-img');
var first_text = document.querySelector('#first-text');
var second_text = document.querySelector('#second-text');
var duo_title = document.querySelector('#duo-title');
var button_random = document.querySelector('#random-button')
var flip_song = new Audio('audio/flip-song.mp3'); 



function flip_animation(){
    flip_song.play();
    button_random.classList.add('rotate-center');

    setTimeout(() => {
        button_random.classList.remove('rotate-center');
    }, 700);
}

function random_duo(){
    var number = [Math.floor(Math.random() * 30)]
    console.log(number) 
    if (number == 0){
        duo_title.innerText = "WOOD DIVISION!"
        first_img.src="img/maokai.png"
        first_text.innerText = "ADC"
        second_img.src="img/ivern.png"
        second_text.innerText = "SUP"
    }
    if (number == 1){
        duo_title.innerText = "HIDE ON BUSH!"
        first_img.src="img/rengar.png"
        first_text.innerText = "ADC"
        second_img.src="img/ivern.png"
        second_text.innerText = "SUP"
    }
    if (number == 2){
        duo_title.innerText = "SCRIPT??!"
        first_img.src="img/thresh.png"
        first_text.innerText = "ADC"
        second_img.src="img/blitz.png"
        second_text.innerText = "SUP"
    }
    if (number == 3){
        duo_title.innerText = "TRYING TO RECONNECT..."
        first_img.src="img/lux.png"
        first_text.innerText = "ADC"
        second_img.src="img/morgana.png"
        second_text.innerText = "SUP"
    }
    if (number == 4){
        duo_title.innerText = "FVCK THIS WALL!"
        first_img.src="img/anivia.png"
        first_text.innerText = "ADC"
        second_img.src="img/poppy.png"
        second_text.innerText = "SUP"
    }
    if (number == 23){
        duo_title.innerText = "DIABOLIC YORDLES"
        first_img.src="img/veigar.png"
        first_text.innerText = "ADC"
        second_img.src="img/ziggs.png"
        second_text.innerText = "SUP"
    }
    if (number == 5){
        duo_title.innerText = "NEVER RECALL"
        first_img.src="img/vlad.png"
        first_text.innerText = "ADC"
        second_img.src="img/yuumi.png"
        second_text.innerText = "SUP"
    }
    if (number == 6){
        duo_title.innerText = "LEGENDS NEVER DIE!"
        first_img.src="img/zilean.png"
        first_text.innerText = "ADC"
        second_img.src="img/sion.png"
        second_text.innerText = "SUP"
    }
    if (number == 7){
        duo_title.innerText = "TO WALK??"
        first_img.src="img/nautilus.png"
        first_text.innerText = "ADC"
        second_img.src="img/leona.png"
        second_text.innerText = "SUP"
    }
    if (number == 8){
        duo_title.innerText = "POISON FANG!"
        first_img.src="img/cassiopeia.png"
        first_text.innerText = "ADC"
        second_img.src="img/twich.png"
        second_text.innerText = "SUP"
    }
    if (number == 9){
        duo_title.innerText = "KATRINA?"
        first_img.src="img/yasuo.png"
        first_text.innerText = "ADC"
        second_img.src="img/janna.png"
        second_text.innerText = "SUP"
    }
    if (number == 10){
        duo_title.innerText = "SUBMARINE 2.0"
        first_img.src="img/noc.png"
        first_text.innerText = "ADC"
        second_img.src="img/shen.png"
        second_text.innerText = "SUP"
    }
    if (number == 11){
        duo_title.innerText = "POINT N CLICK 1.0"
        first_img.src="img/tf.png"
        first_text.innerText = "ADC"
        second_img.src="img/pant.png"
        second_text.innerText = "SUP"
    }
    if (number == 12){
        duo_title.innerText = "R BITCH!"
        first_img.src="img/oriana.png"
        first_text.innerText = "ADC"
        second_img.src="img/maphite.png"
        second_text.innerText = "SUP"
    }
    if (number == 13){
        duo_title.innerText = "SUBMARINE 1.0"
        first_img.src="img/twich.png"
        first_text.innerText = "ADC"
        second_img.src="img/shen.png"
        second_text.innerText = "SUP"
    }
    if (number == 14){
        duo_title.innerText = "YEAH, IT'S NOT WRONG"
        first_img.src="img/lulu.png"
        first_text.innerText = "ADC"
        second_img.src="img/twich.png"
        second_text.innerText = "SUP"
    }
    if (number == 15){
        duo_title.innerText = "FAST & FURIOUS!"
        first_img.src="img/heca.png"
        first_text.innerText = "ADC"
        second_img.src="img/zilean.png"
        second_text.innerText = "SUP"
    }
    if (number == 16){
        duo_title.innerText = "IMMORTAN JOE!"
        first_img.src="img/kayle.png"
        first_text.innerText = "ADC"
        second_img.src="img/taric.png"
        second_text.innerText = "SUP"
    }
    if (number == 17){
        duo_title.innerText = "HEAL AND RUN!"
        first_img.src="img/garen.png"
        first_text.innerText = "ADC"
        second_img.src="img/yuumi.png"
        second_text.innerText = "SUP"
    }
    if (number == 18){
        duo_title.innerText = "R + E"
        first_img.src="img/mf.png"
        first_text.innerText = "ADC"
        second_img.src="img/veigar.png"
        second_text.innerText = "SUP"
    }
    if (number == 19){
        duo_title.innerText = "NUKE!"
        first_img.src="img/ryze.png"
        first_text.innerText = "ADC"
        second_img.src="img/nunu.png"
        second_text.innerText = "SUP"
    }
    if (number == 20){
        duo_title.innerText = "ONE PUNCH DUO!"
        first_img.src="img/sett.png"
        first_text.innerText = "ADC"
        second_img.src="img/vi.png"
        second_text.innerText = "SUP"
    }
    if (number == 21){
        duo_title.innerText = "I NEED TO EXPLAIN?!"
        first_img.src="img/yi.png"
        first_text.innerText = "ADC"
        second_img.src="img/taric.png"
        second_text.innerText = "SUP"
    }
    if (number == 22){
        duo_title.innerText = "BROTHERS 1.0"
        first_img.src="img/draven.png"
        first_text.innerText = "ADC"
        second_img.src="img/darius.png"
        second_text.innerText = "SUP"
    }
    if (number == 24){
        duo_title.innerText = "BROTHERS 2.0"
        first_img.src="img/kayle.png"
        first_text.innerText = "ADC"
        second_img.src="img/morgana.png"
        second_text.innerText = "SUP"
    }
    if (number == 25){
        duo_title.innerText = "BROTHERS 3.0"
        first_img.src="img/cassiopeia.png"
        first_text.innerText = "ADC"
        second_img.src="img/kat.png"
        second_text.innerText = "SUP"
    }
    if (number == 26){
        duo_title.innerText = "BROTHERS 4.0"
        first_img.src="img/renekton.png"
        first_text.innerText = "ADC"
        second_img.src="img/nasus.png"
        second_text.innerText = "SUP"
    }
    if (number == 27){
        duo_title.innerText = "ROPE DASH!"
        first_img.src="img/akshan.png"
        first_text.innerText = "ADC"
        second_img.src="img/camille.png"
        second_text.innerText = "SUP"
    }
    if (number == 28){
        duo_title.innerText = "20MIN = BARON!!"
        first_img.src="img/heimer.png"
        first_text.innerText = "ADC"
        second_img.src="img/zyra.png"
        second_text.innerText = "SUP"
    }
    if (number == 29){
        duo_title.innerText = "SAD SONGS PLS!"
        first_img.src="img/vex.png"
        first_text.innerText = "ADC"
        second_img.src="img/amumu.png"
        second_text.innerText = "SUP"
    }
}
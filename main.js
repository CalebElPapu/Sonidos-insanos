
function InicioInsano()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
      classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xT0AbR9GQ/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label1").innerHTML = 'Escuho🤑: ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisión insana: ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label1").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        Cheems = document.getElementById('Cheems')
        Gato = document.getElementById('Gato')
        Maxwell = document.getElementById('Maxwell')
        Pingüino = document.getElementById('Pingüino')
        PoP = document.getElementById('PoP')

        if(results[0].label == "Aros") {
        Cheems.src = 'Cheems-meme-Festival-CDMX copy.gif';
        Gato.src = 'Gato xd.PNG';
        Maxwell.src = 'Maxwell.PNG';
        Pingüino.src = 'Pingüino xd.png';
        PoP.src = 'Pop.png';
        }

        if(results[0].label == "Ruido de fondo") {
        Cheems.src = 'Cheems.png';
        Gato.src = 'fast-cat-cat-excited.gif';
        Maxwell.src = 'Maxwell.PNG';
        Pingüino.src = 'Pingüino xd.png';
        PoP.src = 'Pop.png';
        }
            
        if(results[0].label == "Teclado") {
        Cheems.src = 'Cheems.png';
        Gato.src = 'Gato xd.PNG';
        Maxwell.src = 'Maxwell.gif';
        Pingüino.src = 'Pingüino xd.png';
        PoP.src = 'Pop.png';
        }

        if(results[0].label == "carton") {
        Cheems.src = 'Cheems.png';
        Gato.src = 'Gato xd.PNG';
        Maxwell.src = 'Maxwell.PNG';
        Pingüino.src = 'Pingüino insano.gif';
        PoP.src = 'Pop.png';
        }

        if(results[0].label == "pop") {
        Cheems.src = 'Cheems.png';
        Gato.src = 'Gato xd.PNG';
        Maxwell.src = 'Maxwell.PNG';
        Pingüino.src = 'Pingüino xd.png';
        PoP.src = 'Pop cat.gif';
        }

    }
}
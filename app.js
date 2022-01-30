// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

var url = 'https://dog.ceo/api/breeds/image/random'
var img = document.getElementById('dogsAPI');

function imageDogs() {
    fetch(url)
        .then((res) => (res.json()))
        .then(data => {
            img.src = data.message

        });

}

document.addEventListener('click', imageDogs)
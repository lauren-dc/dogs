const DOGS_URL = "https://dog.ceo/api/breeds/image/random";
let breed_URL = "https://dog.ceo/api/breeds/image/random";
const BREED_LIST_URL = "https://dog.ceo/api/breeds/list/all";
const breedSelect = document.querySelector(".breed-select");

function newDog () {
    document.querySelector(".dog").src="https://media.giphy.com/media/DWAMPLJjsjedq/giphy.gif";
    const addBtn = document.querySelector(".btn-add");
    addBtn.classList.remove("glow");
    if (breedSelect.value === "default") {
        fetch(DOGS_URL)
            .then(function(response) {
                return response.json();    
            })
            .then(function(data) {
                dogImage = document.querySelector(".dog")
                dogImage.src=data.message;
            });
    } else {
        fetch(breed_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            dogImage = document.querySelector(".dog")
            dogImage.src=data.message;
        })
    }
}

function setBreedList() {
    fetch(BREED_LIST_URL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            const breeds = Object.keys(data.message)
            for (let i=0; i < breeds.length; i++) {
                const option = document.createElement("option");
                option.value = breeds[i];
                option.innerText = breeds[i];
                breedSelect.appendChild(option);
            }
        })
}

function choose() {
    const breed = breedSelect.value;
    breed_URL = `https://dog.ceo/api/breed/${breed}/images/random`;
    const addBtn = document.querySelector(".btn-add");
    addBtn.classList.add("glow");
    return breed_URL;
}

setBreedList()

document.querySelector(".breed-select").addEventListener("change", choose);

document.querySelector(".btn-add").addEventListener("click", newDog);


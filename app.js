const baseURL ="https://pokeapi.co/api/v2/move/";
let url;

let cardImg = document.querySelector("body > div > div > div.card-img > img")
console.log(cardImg)

let name =document.querySelector(".name");
console.log(name)

let move = document.querySelector(".move");
console.log(move)

const generateBtn = document.querySelector(".submit-btn");
console.log(generateBtn);

let fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`; 
    const res = await fetch(url); 
    const data = await res.json(); 
    console.log("hello")
    console.log(data);
  };

let id = document.querySelector(".search-input");

generateBtn.addEventListener("submit", fetchPokemon);


function fetchResults(e) {
    e.preventDefault();
    

url=baseURL + id.value;
    fetch(url)
    .then(function(result) {
        return result.json();
    
    }) .then(function(json) {
        displayResults(json)
    })
    // .then(response => response.json()
    // .then(data => {
    //     name.innerText = data.name
    //     cardImg.src = data.sprites.front_shiny
    //     move.innerText = data.moves[1].move.name;
    }
    function displayResults(json) {
        console.log("displayResults", json)
    }  

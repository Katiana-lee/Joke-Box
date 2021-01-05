let programSetup = document.querySelector('.program-setup')
let programPunchLine = document.querySelector('.program-punchline')
let jokeType = document.querySelector('.joke-type')
let giphy = document.querySelector('.joke-giphy')

//Accessing Programmer jokes from API
let getProgramJoke = async () => {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/programming/random`)
    jokeType.textContent = "Programmer"
    programSetup.textContent = response.data[0].setup 
    programPunchLine.textContent = response.data[0].punchline
  } catch (error){
    console.log(error)
  }
}
//Getting Random jokes from the API
let getRandomJoke = async () => {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/random`)
    jokeType.textContent = "Random"
    programSetup.textContent = response.data.setup 
    programPunchLine.textContent = response.data.punchline
  } catch (error){
    console.log(error)
  }
}
let getKnockJoke = async () => {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/knock-knock/random`)
    console.log(response.data)
    jokeType.textContent = "Knock-Knock"
    programSetup.textContent = response.data[0].setup
    programPunchLine.textContent = response.data[0].punchline
  } catch (error){
    console.log(error)
  }
}
 //This is where I use the second API
 let getProgramGiphy = async () => {
   try {
let counter = Math.floor(Math.random() * 1000)
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=6hcoep97hU9v6cEou7WlVp5UNs3OwIuW&q=laughing&limit=1&offset=${counter}&rating=g&lang=en`)
    giphy.src = response.data.data[0].images.original.url 

  } catch (error){
    console.log(error)
  }
}
 
//event listeners for the buttons "jokes"
let programmerBtn = document.querySelector('.programmer')
programmerBtn.addEventListener('click', getProgramJoke)
programmerBtn.addEventListener('click', getProgramGiphy)

let randomBtn = document.querySelector('.random')
randomBtn.addEventListener('click', getRandomJoke)
randomBtn.addEventListener('click', getProgramGiphy)

let knockBtn = document.querySelector('.knock-knock')
knockBtn.addEventListener('click', getKnockJoke)
knockBtn.addEventListener('click', getProgramGiphy)


let programSetup = document.querySelector('.program-setup')
let programPunchLine = document.querySelector('.program-punchline')
let jokeType = document.querySelector('.joke-type')

let getProgramJoke = async () => {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/programming/random`)
    // console.log(response.data)
    jokeType.textContent = "Programmer"
    programSetup.textContent = response.data[0].setup
    programPunchLine.textContent = response.data[0].punchline
  } catch (error){
    console.log(error)
  }
}
let getRandomJoke = async () => {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/random`)
    // console.log(response.data)
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

// getData()
 
let programmerBtn = document.querySelector('.programmer')
programmerBtn.addEventListener('click', getProgramJoke)
let randomBtn = document.querySelector('.random')
randomBtn.addEventListener('click', getRandomJoke)
let knockBtn = document.querySelector('.knock-knock')
knockBtn.addEventListener('click', getKnockJoke)


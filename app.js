let getProgramJoke = async () => {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/programming/random`)
    console.log(response.data)
  } catch (error){
    console.log(error)
  }
}
let getRandomJoke = async () => {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/random`)
    console.log(response.data)
  } catch (error){
    console.log(error)
  }
}
let getKnockJoke = async () => {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/knock-knock/random`)
    console.log(response.data)
  } catch (error){
    console.log(error)
  }
 }

// getData()
 
let programmerBtn = document.querySelector('.programmer')
programmerBtn.addEventListener('click', getProgramJoke)
let randomBtn = document.querySelector('.general')
randomBtn.addEventListener('click', getRandomJoke)
let knockBtn = document.querySelector('.knock-knock')
knockBtn.addEventListener('click', getKnockJoke)

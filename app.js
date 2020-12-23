let getData = async () => {
  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/jokes/programming/random`)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
 }
 getData()
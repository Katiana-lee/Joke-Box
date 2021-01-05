
## Joke Box

A desktop and mobile friendly app that will provide three different categories. The user will have the option of choosing which catergory they prefer, and the joke will render, as well as a giphy image, to the page. Think of it as wheel of fourtune, but switch out the words and potentially winning money with a joke intened to put a smile on your face. Im sure that's needed after a long day of coding or debugging.

## API and Data Sample

The API's I am using are from [official_joke_api](https://github.com/15Dkatz/official_joke_api) and [Giphy](https://developers.giphy.com/explorer)

```JSON
[
    {
        "id": 27,
        "type": "programming",
        "setup": "['hip', 'hip']",
        "punchline": "(hip hip array)"
    }
]
```

## Wireframes

[Joke Box Wireframe](https://wireframe.cc/2GeUe4)

#### MVP 
- Click a button and render a joke and giphy to the screen
- Using flexbox and CSS to create more authenticity of how the data will be rendered on the page
- Responsive background

#### PostMVP  
- Imbed a like button
- Add animation to make the app fun/engaging 
 
## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Dec 22| Project Approval / API call/ HTML| Complete
|Dec 23| Flexbox/ CSS | Complete
|Dec 24| Second API/ Rendering Images/ Debugging | Complete
|Jan 4| MVP | Complete
|Jan 5| Presentations | Incomplete

## Priority Matrix

[Importance Matrix](https://app.moqups.com/52gSDJn7jw/view/page/aa9df7b72?ui=0)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Retrieving data from API | H | 4hrs| 3hrs | 3hrs |
| Complete structure of brolierplate/HTML | M | 6hrs| 3hrs | 3hrs|
| Javascript & DOM Munipulation | H | 8hrs| 8hrs | 7hrs |
| CSS | H | 8hrs| 8hrs | 8hrs |
| Add effects, event listeners| H | 4hrs| 4hrs | 5hrs |
| Render images| H | 6hrs| 8hrs | 8hrs |
| Post MVP / Debugging | M | 8hrs| 2hrs | 2hrs |
| Total | 44 | 36| 44 |

## Code Snippet


```
The code below was how I was able to access data from my second API which was getting giphy images after a joke was clicked. I first had to specify the endpoint, so that I was getting a laghing giphy instead of random giphys. 
let counter = Math.floor(Math.random() * 1000)
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=6hcoep97hU9v6cEou7WlVp5UNs3OwIuW&q=laughing&limit=1&offset=${counter}&rating=g&lang=en`)
    giphy.src = response.data.data[0].images.original.url 
}
```



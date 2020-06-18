const { createStore } = Redux;

const initialState = {
  pups: [
    {
      rating: '5',
      url: 'https://media.giphy.com/media/O3iWjzootMuQw/giphy.gif'
    }
  ]
}

// Reducer

const gifReducer = (state = initialState, action) => {
  // ...fill in your Reducer code here
  switch(action.type){
    case ADD_PUP:
      const newPupArray = state.pups.concat(action.newPup)
      return Object.assign({},state, {
        pups: newPupArray
      })
      default:
        return state;
  }
}

// JS to access new pup form
const newPupForm = document.getElementById('new-pup-form')

// Declare action type
const ADD_PUP = 'ADD_PUP'

// Submits form and dispatches add action
newPupForm.addEventListener('submit', () => {
  event.preventDefault();
  const gifUrl = document.getElementById('gif-url').value
  const gifRating = document.getElementById('gif-rating').value
  document.getElementById('gif-url').value = ''
  document.getElementById('gif-rating').value = ''
  const newPup = { url: gifUrl, rating: gifRating }
  store.dispatch(
    {
      type: ADD_PUP,
      newPup: newPup
    }
  )
})

// Sets up store
const store = createStore(gifReducer);

// Renders list of gifs to page
const gifList = document.getElementById('gif-list')



const render = () => {
  let newPupsList = ''
  store.getState().pups.forEach(function(pup) {
    newPupsList += `<li> Rating:${pup.rating} | GIF URL:${pup.url}</li>`
  })
  gifList.innerHTML=newPupsList
}

render();
store.subscribe(render);

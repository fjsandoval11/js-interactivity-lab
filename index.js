const message = document.querySelector('#message')




const addMovie = (event) => {
    event.preventDefault()

    const inputField = document.querySelector('input').value
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    addEventListener('click', crossOffMovie)

    movieTitle.textContent = inputField
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click' , deleteMovie)
    movie.appendChild(deleteBtn)

   document.querySelector('ul').appendChild(movie)
     document.querySelector('input').value = ""
}

const deleteMovie = (event) => {
event.target.parentNode.remove()
message.textContent = 'Movie Deleted!'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie Watched'
    } else {
        message.textContent = 'Movie added back!'
    }
}



document.querySelector('form').addEventListener('submit', addMovie)


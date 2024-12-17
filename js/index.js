let home_link = document.getElementById("home_link")
let news_link = document.getElementById("news_link")
let liveCameras_link = document.getElementById("liveCameras_link")
let photos_link = document.getElementById("photos_link")
let content_link = document.getElementById("content_link")

home_link.addEventListener('click', () => {
    home_link.classList.add('selected')
    news_link.classList.remove('selected')
    liveCameras_link.classList.remove('selected')
    photos_link.classList.remove('selected')
    content_link.classList.remove('selected')
})

news_link.addEventListener('click', () => {
    news_link.classList.add('selected')
    home_link.classList.remove('selected')
    liveCameras_link.classList.remove('selected')
    photos_link.classList.remove('selected')
    content_link.classList.remove('selected')
})

liveCameras_link.addEventListener('click', () => {
    liveCameras_link.classList.add('selected')
    news_link.classList.remove('selected')
    home_link.classList.remove('selected')
    photos_link.classList.remove('selected')
    content_link.classList.remove('selected')
})

photos_link.addEventListener('click', () => {
    photos_link.classList.add('selected')
    news_link.classList.remove('selected')
    liveCameras_link.classList.remove('selected')
    home_link.classList.remove('selected')
    content_link.classList.remove('selected')
})

content_link.addEventListener('click', () => {
    content_link.classList.add('selected')
    news_link.classList.remove('selected')
    liveCameras_link.classList.remove('selected')
    photos_link.classList.remove('selected')
    home_link.classList.remove('selected')
})


const $ = document

let body = $.body

let navbar = $.getElementById('fix')
let main = $.querySelector('main')
let footer = $.querySelector('footer')


let loadElem = $.getElementById('loading-wrapper')
window.addEventListener('load' , function () {
    setTimeout(function () {
    loadElem.style.display = 'none'
    navbar.style.display = 'block'
    main.style.display = 'inline'
    footer.style.display = 'inline'
    body.style.animationName = 'change_theme'
    body.style.animationDuration = '700ms'
    body.style.animationFillMode = 'forwards'
    } , 1700)
})


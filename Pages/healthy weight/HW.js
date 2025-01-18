let $ = document

let loading = $.getElementById('loading-wrapper')
let body = $.body
let container = $.querySelector('.container')

window.addEventListener('load' , function () {
    setInterval(function () {
        loading.style.display = 'none'
        container.style.display = 'inline'
        body.style.animation = 'change-theme 1s forwards'
        $.querySelector('h1').style.display = 'block'
    } , 1900)
})


let changing_height = $.getElementById('height-val')
let my_input = $.getElementById('height')
let result = $.getElementById('result')

my_input.addEventListener('change' , function(params) {
    changing_height.innerHTML = params.target.value + ' ' + 'cm'
    let value = params.target.value
    value = value/100
    let min = ((value**2) * 18.5).toFixed(1)
    let max = ((value**2) * 24.9).toFixed(1)
    result.innerHTML = min + 'kg' + ' ' + '-' + ' ' + max + 'kg'
})
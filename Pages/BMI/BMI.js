function Bmi_calculator () {
    let weight = W_input.value
    let height = H_input.value

    w_span.innerHTML = weight + ' ' + 'kg'
    h_span.innerHTML = height + ' ' + 'cm'
    
    let bmi = (weight / ((height/100)**2)).toFixed(1)

    result.innerHTML = bmi

    if (bmi < 18.5) {
        result.style.color = 'rgb(255 , 196 , 77)'
        category.innerHTML = 'Underweight'
    }else if (18.5 <= bmi && bmi <= 24.9) {
        result.style.color = 'rgb(11 , 232 , 129)'
        category.innerHTML = 'Normal weight'
    }else if (25 <= bmi && bmi <= 29.9) {
        result.style.color = 'rgb(255 , 136 , 77)'
        category.innerHTML = 'Overweight'
    }else if (29.9 < bmi) {
        result.style.color = 'rgb(255 , 94 , 87)'
        category.innerHTML = 'Obese'
    }
}

const $ = document

let W_input = $.getElementById('weight')
let H_input = $.getElementById('height')

let w_span = $.getElementById('weight-val')
let h_span = $.getElementById('height-val')


let result = $.getElementById('result')

let category = $.getElementById('category')

let main_c = $.querySelector('.container')

W_input.addEventListener('change' , Bmi_calculator)
H_input.addEventListener('change' , Bmi_calculator)

let my_body = $.body

let loadElem = $.getElementById('loading-wrapper') 
window.onload = function () {
    W_input.value = 20
    H_input.value = 100

    setInterval(function () {
        loadElem.style.display = 'none'
        main_c.style.display = 'inline'
        my_body.style.animationName = 'change-theme'
        my_body.style.animationDuration = '1s'
        my_body.style.animationFillMode = 'forwards'
    } , 2000)
}


// Dom elements
let btnContainer = document.querySelector('.btn-container')
let input = document.querySelector('input[type="text"]')
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')


// general styles 
color1.value = '#7a7fba'
color2.value = '#11c37c'

// events
btnContainer.addEventListener('click',calculate)
color1.addEventListener('input',changeColor)
color2.addEventListener('input',changeColor)


// actions - functions
function calculate(e){
    btn = e.target ;
    if(btn.getAttribute('class') == 'btn'){
        btnContent = btn.innerText.trim()
        if(btnContent == 'del'){
            input.value = input.value.substring(0,input.value.length-1)
        }else if(btnContent != '='){
            let cond = "-*/+".includes(input.value.charAt(input.value.length-1))  
            if(cond && "*+/-".includes(btnContent)){
                alert('Check your input')
            }else if("1234567890-/*+".includes(btnContent)){
                input.value += btnContent
            }
        }else if(btnContent == '='){
            if(input.value != ""){
                input.value = eval(input.value)
            }
        }
    }
}

function changeColor(){
    document.querySelector('body').style.background = `linear-gradient(to bottom right ,${color1.value},${color2.value})`
}




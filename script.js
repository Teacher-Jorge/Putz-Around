let btnPlay = document.getElementById('btnPlay')
let btnReset = document.getElementById('btnReset')
let btnTranslate = document.getElementById('btnTranslate')
btnTranslate.style.visibility = 'hidden'
let question = document.querySelector('h1')

btnReset.addEventListener('click', function() {
    window.location.reload()
})

btnPlay.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    let video = document.getElementById('video')
    video.play()
})

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    question.innerHTML = 'Ela tá afim de não fazer nada.'
    question.style.color = 'lawngreen'
    setTimeout(function() {
        question.innerHTML = 'She feels like just putzing around.'
        question.style.color = 'yellow'
    }, 3000)
})

//Drag and Drop Events

let dragger = ["", "", "", "", ""]

function allowDrop(ev) {
    ev.preventDefault()
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev) {
    if (dragger[parseInt(ev.target.id)] == "") {
        var data = ev.dataTransfer.getData("text")
        dragger[parseInt(ev.target.id)] = data
        ev.target.appendChild(document.getElementById(data))
    }


if (dragger[0] != "" && dragger[1] != "" && dragger[2] != "" && dragger[3] != "" && dragger[4] != "") {

    if (dragger[0] == "1" && dragger[1] == "2" && dragger[2] == "3" && dragger[3] == "4" && dragger[4] == "5") {
        let audio = document.getElementById('confirm')
        audio.play()
        let question = document.querySelector('h1')
        question.innerHTML = "Excellent!"
        question.style.color = 'lime'
        let img = document.querySelector('img')
        img.style.visibility = 'hidden'

        setTimeout(function() {
            question.innerHTML = 'She feels like just putzing around.'
            question.style.color = 'yellow'
            let audio = document.getElementById('putzing')
            audio.play()
            btnTranslate.style.visibility = 'visible'
        }, 2000)
    } else {
        let audio = document.getElementById('boing')
        audio.play()
        let question = document.querySelector('h1')
        question.innerHTML = 'Try again!'
        question.style.color = 'red'
        let img = document.querySelector('img')
        img.style.visibility = 'hidden'
    }
  }
}
// let div = document.querySelector('div')
// let box_by_id = document.querySelector('#imposter')
// let boxes = document.querySelectorAll('.box')

// let box = document.querySelector('.box')
// let h1 = document.querySelector('h1')
// let body = document.body

// box.className += "  active"

// if(box.classList.contains('active')) {
//     box.classList.remove('active')
// } else {
//     box.classList.add('active')
// }
// box.addEventListener('click', function() {
//     console.log('click');
// })

// box.onclick = () => {

//     box.classList.toggle('active')
//     // h1.innerText = "Bye bye world"
//     if(h1.innerText === "Bye bye world") {
//         h1.innerText = "Hello world"
//     } else {
//         h1.innerHTML = "Bye <b>bye</b> world"
//     }
// }
// box.ondblclick = () => {
//     console.log('double click');
// }
// box.onmouseenter = () => {
//     console.log('entered');
// }
// box.onmouseleave = () => {
//     console.log('left');
// }
// box.onmousemove = () => {
//     console.log('moving...');
// }
// body.onscroll = () => {
//     console.log('scrolling...');
// }
// let one = document.querySelector('button')
// let two = document.querySelector('.two')

// one.onclick = () => {
//     two.classList.toggle('active')
// }
// two.onclick = () => {
//     one.classList.toggle('active')
// }
// let box = document.querySelector('button')
// let inp = document.querySelector('input')

// // inp.getAttribute('placeholder')

// box.onclick = () => {

//     if(inp.getAttribute('type') === 'password') {
//         inp.setAttribute('type', 'text')
//         box.innerHTML = "🐵"
//         inp.style.background = "blue"
//         box.style.borderRadius = "100%"
//         box.style.padding = "20px"
//     } else {
//         inp.setAttribute('type', 'password')
//         box.innerHTML = "🙈"
//         inp.style.background = "red"
//         box.style.borderRadius = "0%"
//         box.style.padding = "0px"
//     }

// }

const boxes = document.querySelectorAll('.box')
const h1 = document.querySelector('h1')

let score = 0



function createFood() {
    let rnd = Math.floor(Math.random() * boxes.length)

    boxes[rnd].classList.add('food')
}
createFood()

boxes.forEach((box, idx) => {
    box.id = idx
    if(idx>=0 && idx < 3) {
        box.classList.add('active')
    }


    // box.onmouseenter = () => {
    //     box.classList.add('active')
    //     if(box.classList.contains('food')) {
    //         box.classList.remove('food')
    //         score++
    //         h1.innerHTML = `SCORE: ${score}`
    //         createFood()
    //     }
    // }
    // box.onmouseleave = () => {
    //     // setTimeout(() => {
    //     //     box.classList.remove('active')
    //     // }, 600);
    // }
})


window.onkeydown = (e) => {
    let snake = document.querySelectorAll('.active')

    if(e.keyCode === 37) {
        let last = snake[snake.length - 1]

        boxes[+last.id - 1].classList.add('active')
        snake[0].classList.remove('active')
    }
    if(e.keyCode === 38) {
        let last = snake[snake.length - 1]
        boxes[+last.id - 10].classList.add('active')
        snake[0].classList.remove('active')
    }
    if(e.keyCode === 39) {
        let last = snake[snake.length - 1]
        
        boxes[+last.id + 1].classList.add('active')
        snake[0].classList.remove('active')
    }
    if(e.keyCode === 40) {
        let last = snake[snake.length - 1]

        boxes[+last.id + 10].classList.add('active')
        snake[0].classList.remove('active')
    }
}
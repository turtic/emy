import {htmlPages, htmlSmallPages} from './pages.js'

let slide = 0;
let pages = [];

function inputLogic () {
    if (document.getElementById('reserve-btn')) {
        document.getElementById("reserve-btn").addEventListener("click", function(){
            console.log('button pressed');
            let nickName = document.getElementById('handleReserve').value
            localStorage.setItem("userHandle", nickName);
            window.location.pathname = '/signup.html'
          });
        
        var input = document.getElementById("handleReserve");
        input.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
           event.preventDefault();
           document.getElementById("reserve-btn").click();
          }
        });
        console.log('Helloooo!? Input!?')
      }
}

function screenWidthCheck(x) {
    if (x.matches) { // If media query matches
        pages = htmlSmallPages;
        
    } else {
        pages = htmlPages;
    }
    console.log('render')
    render();
}

var x = window.matchMedia("(max-width: 768px)")
screenWidthCheck(x) // Call listener function at run time
x.addListener(screenWidthCheck) // Attach listener function on state changes

function render () {

    switch (slide) {
        case 0:
            changeScreen(pages[0])
            inputLogic()
            break;
        case 1:
            changeScreen(pages[1])
            break;
        case 2:
            changeScreen(pages[2])
            break;
        case 3:
            changeScreen(pages[3])
            break;
        case 4:
            window.location.pathname = '/main.html'
            break;
        default:
            changeScreen(pages[0])
    }

}

function changeScreen(page) {
    document.getElementById('app').innerHTML = page;
}

function debounce(callback, wait, immediate = false) {
    let timeout = null

    return function () {
        const callNow = immediate && !timeout
        const next = () => callback.apply(this, arguments)

        clearTimeout(timeout)
        timeout = setTimeout(next, wait)

        if (callNow) {
            next()
        }
    }
}

const handleScroll = debounce((event) => {
    if (event.deltaY < 0) {
        console.log('scrolling up');
        // on scroll up
        if (slide > 0) {
            slide = slide - 1;
            render();
        }

    }
    if (event.deltaY > 0) {
        console.log('scrolling down');
        //on scroll down
        if (slide < 4) {
            slide = slide + 1;
            render();
        }
    }
}, 500, true)

window.addEventListener('wheel', (event) => {
    handleScroll(event)
})

//  ???????????
$(document).on('touchmove', function () {
    $(document).trigger('mousewheel');
});

// #########################################################

// get handle name to signup page


console.log('hello');
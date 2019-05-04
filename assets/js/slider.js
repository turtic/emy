import {htmlPages, htmlSmallPages} from './pages.js'

let slide = 0;
let pages = [];

function changeLink (oldHtml, newHTML) {
    var oldPath = window.location.pathname 
    var newPath = oldPath.replace(oldHtml, newHTML);
    return newPath
}

function inputLogic () {
    if (document.getElementById('reserve-btn')) {
        document.getElementById("reserve-btn").addEventListener("click", function(){
            console.log('button pressed');
            let nickName = document.getElementById('handleReserve').value;
            localStorage.setItem("userHandle", nickName);
            window.location.pathname = changeLink('/index.html', '/signup.html');
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
            window.location.pathname = changeLink('/index.html', '/main.html');
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
document.addEventListener("touchstart", startTouch, false);
document.addEventListener("touchmove", moveTouch, false);
 
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      alert.log("swiped left");
    } else {
      // swiped right
      alert.log("swiped right");
    }  
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
    //   alert.log("swiped up");
    if (slide > 0) {
        slide = slide - 1;
        render();
    }
    } else {
      // swiped down
    //   alert.log("swiped down");
    if (slide < 4) {
        slide = slide + 1;
        render();
    }
    }  
  }
 
  initialX = null;
  initialY = null;
   
  e.preventDefault();
};


console.log('hello');
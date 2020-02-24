const video = document.getElementById('culfest-intro-video');

console.log("screen height: " + screen.height + "px");

const playVideo = () => {
    video.muted = false;
    video.play();
    

}

const pauseVideo = () => {
    video.muted = false;
    video.pause();
   
}

const muteBtn = $('#mute-button');

muteBtn.click(()=>{
    if(video.muted){
        console.log('unmuted')
        video.muted = false;
        muteBtn.html('mute');
    }else{
        console.log('muted')
        video.muted = true;
        muteBtn.html('unmute');
    }
})

// window.onscroll = () => {
//     var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
//     if(scrollTop < screen.height/2){
//         if(video.currentTime === video.duration){
//             playVideo();
//         }
        
//     }else{
//         if(video.currentTime === video.duration){
//             pauseVideo();
//         }
       
//     }
// }

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }
  
  function preventDefaultForScrollKeys(e) {
    var keys = {37: true, 38: true, 39: true, 40: true};

      if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
      }
  }
  
function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

disableScroll()


//rotating carousel
let carousel = $(".carousel");
let  currDegree  = 0;

const forwardButton = $("#slider-forward-btn");
const backButton = $("#slider-back-btn");


const knowMoreButton = $('#know-more-btn');
knowMoreButton.css({
    "dispaly": 'none',
})
knowMoreButton.click(() => {
    
    video.muted = true;
    muteBtn.html('unmute');
    window.scrollTo(0, screen.height);
})

if(document.readyState === 'ready' || document.readyState === 'complete') {
     knowMoreButton.css({
         "display": "flex",
     })
  } else {
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        knowMoreButton.css({
            "display": "flex",
        })
      }
    }
  }

const goBackUpButton = $('#go-back-up');
goBackUpButton.click(() => {
   
    video.muted = false;
    video.currentTime = 0;
    muteBtn.html('mute');
    window.scrollTo(0, 0);
})

//navbar
const navbar = $('#navbar');
const navbarButton = $('#navbar-btn');
const navbarButtonIcon = $('#navbar-btn>img');
const closeNavbarButton = $('#close-navbar-btn');


let currentState = 'closed';
const toggleNavbar = (pixel) => {
     
    if(pixel === -50){
        currentState = 'open';
        navbarButton.css({
            "animation": "runRotate 0.7s ease-in-out",
            "transform": `translateX(44vw)`,
        });
        setTimeout(()=> {
            navbarButtonIcon.attr("src","assets/close.svg");
        },350);
       
    }else{
        currentState = 'closed';
        navbarButton.css({
            "animation": "runRotateReverse 0.7s ease-in-out",
            "transform": `translateX(0)`,
        });
        setTimeout(()=> {
            navbarButtonIcon.attr("src","assets/menu.svg");
        },350);
      
    } 


    navbar.css({
        "transform": `translateY(${pixel}vw) translateX(-50vw)`,
    });

   
}

navbarButton.click(() => {
    if(currentState === 'closed'){
        toggleNavbar(-50);
    }else{
        toggleNavbar(-240);
    }
});
// closeNavbarButton.click(() => toggleNavbar(-500));

 
const carouselText = [
    {
        title: 1,
        detail:"1960's"
    },
    {
        title: 2,
        detail:"1970's"
    },
    {
        title: 3,
        detail:"1990's"
    },
    {
        title: 4,
        detail:"2000's"
    },
    {
        title: 5,
        detail:"2010's"
    },

];

//carousel-content
const carouselContent = document.getElementById("carousel-content");
console.log(carouselContent)

// reset the transition by...

const rotateForward = () => {
 
    currDegree = currDegree + 60;

    // $("#carousel-content .title").html(`${carouselText[(currDegree%360)/60].title}`);
    // $("#carousel-content .detail").html(`${carouselText[(currDegree%360)/60].detail}`);
  
    carousel.css({
        "-webkit-transform": `rotateZ(${currDegree}deg)`,
        "-moz-transform": `rotateZ(${currDegree}deg)`,
        "-o-transform": `rotateZ(${currDegree}deg)`,
        "transform": `rotateZ(${currDegree}deg)`,
    });

        // -> removing the class
    // carouselContent.classList.remove("run-animation");
    
    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    // void carouselContent.offsetWidth;
    
    // -> and re-adding the class
    // carouselContent.classList.add("run-animation");
}

const rotateBackrward = () => {
 
    currDegree = currDegree - 60;

    // $("#carousel-content .title").html(`${carouselText[((currDegree%360 + 360)%360)/60].title}`);
    // $("#carousel-content .detail").html(`${carouselText[((currDegree%360 + 360)%360)/60].detail}`);
    
    carousel.css({
        "-webkit-transform": `rotateZ(${currDegree}deg)`,
        "-moz-transform": `rotateZ(${currDegree}deg)`,
        "-o-transform": `rotateZ(${currDegree}deg)`,
        "transform": `rotateZ(${currDegree}deg)`,
    });

        // -> removing the class
    // carouselContent.classList.remove("run-animation");
    
    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    // void carouselContent.offsetWidth;
    
    // -> and re-adding the class
    // carouselContent.classList.add("run-animation");
}

// let myTimer = window.setInterval(rotateForward, 30000);

forwardButton.click(() => {
    // clearInterval(myTimer);
    rotateForward();
    // myTimer = window.setInterval(rotateForward, 30000);

});
backButton.click(() => {
    // clearInterval(myTimer);
    rotateBackrward();
    // myTimer = window.setInterval(rotateForward, 30000);

});
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        preventDefault(e);
        return false;
    }
    else if (e.keyCode == '40') {
        // down arrow
        preventDefault(e);
        return false;
    }
    else if (e.keyCode == '37') {
       // left arrow
    //    clearInterval(myTimer);
       rotateBackrward();
    //    myTimer = window.setInterval(rotateBackrward, 30000);
    }
    else if (e.keyCode == '39') {
       // right arrow
    //    clearInterval(myTimer);
       rotateForward();
    //    myTimer = window.setInterval(rotateForward, 30000);
   
    }

}



 
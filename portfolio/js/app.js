window.onload = function() {
    console.log("WOW");
    animate();
};

function animateItem(id){
    console.log(id);
    var animation = anime({
        targets: '#proj'+id,
        translateY: 0,
        opacity: 1,
        duration: 600,
        easing: 'easeInOutSine',
        autoplay: false
      });
    return animation;
}

var portfolioItems = [];

function animate(){
    console.log("checkpoint 1...");
    for (let i = 1; i <= 6; i++) {
        portfolioItems.push(animateItem(i));
        console.log(i + ": " + animateItem(i));
        easeIn(i, animateItem(i));
    }
}

function easeIn(id, animation){
    window.addEventListener('scroll', function() {
        let H = window.innerHeight;
        let client = (document.querySelector("#proj"+id).getBoundingClientRect());
        let h = client.height;
        let y = client.y;
        console.log("H: " + H);
        console.log("h: " + h);
        console.log("y: " + y);
        if (y + h > H){
            console.log("first");
            animation.seek(0);
        }
        else{
            console.log("second");
            // animation.seek(((-2/h)*y + ((2*H)/h-2))*1000);
            animation.seek(((-1/h)*y + (H/h-1))*1000);
        }
    });
}

function JamShow(element){
    console.log("hello");
    console.log(element);
    var jamjelly = element.querySelector(".jamjelly");
    jamjelly.classList.add("show");
    };
function JamHide(){
    console.log("bye");
    var element = document.getElementById("jamjelly");
    element.classList.remove("show");
    };
    




// let title = document.querySelector(".title");
// let subtitle = document.querySelector(".subtitle");

// const animations = [
//   // slide in
//   {
//     targets: '#proj1',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   },
//   // slide up
//   {
//     targets: '#proj2',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   },
//   // slide slowly to the right
//   {
//     targets: '#proj3',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   },
//   // slide left in
//   {
//     targets: '#proj4',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   },
//   // slide slowly to the right
//   {
//     targets: '#proj5',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   }
// ];

// /*
//  Player Logic
//  ***********************************************************/
// let timeline = anime.timeline({
//     easing: 'easeInOutSine',
//     autoplay: false
// });

// animations.forEach(animation => {
// let H = window.innerHeight;
//         let client = (document.querySelector(this.targets).getBoundingClientRect());
//         let h = client.height;
//         let y = client.y;
//         console.log("H: " + H);;
//         console.log("h: " + h);
//         console.log("y: " + y);
//         if (thisy + h > H){
//             console.log("first");
//             this.seek(0);

//         }
//         else{
//             console.log("second");
//             this.seek(((-1/h)*y + (H/h-1))*1000);
//     }
// });







// s = window.pageYOffset


// start

// var animation = anime({
    // targets: '#proj1',
    // translateY: 50,
    // opacity: 1,
    // duration: 1000,
    // easing: 'easeInOutSine',
    // autoplay: false
//   });


// var animation = anime({
//     targets: '#proj1',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   },
//   {
//     targets: '#proj2',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   });

  

// window.onscroll=function(e){
//     for (let i = 0; i < 2; i++){
//         let H = window.innerHeight;
//         let client = (document.querySelector("#proj1 #proj2").getBoundingClientRect());
//         let h = client.height;
//         let y = client.y;
//         console.log("H: " + H);
//         console.log("h: " + h);
//         console.log("y: " + y);
//         if (y + h > H){
//             console.log("first");
//             animation.seek(0);

//         }
//         else{
//             console.log("second");
//             animation.seek(((-1/h)*y + (H/h-1))*1000);
//     }
//     }
// };






// var animation = anime({
//     targets: '#proj2',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   });

// window.onscroll=function(e){
//     let H = window.innerHeight;
//     let client = (document.querySelector("#proj2").getBoundingClientRect());
//     let h = client.height;
//     let y = client.y;
//     console.log("H: " + H);
//     console.log("h: " + h);
//     console.log("y: " + y);
//     if (y + h > H){
//         console.log("first");
//         animation.seek(0);

//     }
//     else{
//         console.log("second");
//         animation.seek(((-1/h)*y + (H/h-1))*1000);
//     }
// };

// var animation = anime({
//     targets: '#proj3',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   });

// window.onscroll=function(e){
//     let H = window.innerHeight;
//     let client = (document.querySelector("#proj3").getBoundingClientRect());
//     let h = client.height;
//     let y = client.y;
//     console.log("H: " + H);
//     console.log("h: " + h);
//     console.log("y: " + y);
//     if (y + h > H){
//         console.log("first");
//         animation.seek(0);

//     }
//     else{
//         console.log("second");
//         animation.seek(((-1/h)*y + (H/h-1))*1000);
//     }
// };

// var animation = anime({
//     targets: '#proj4',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   });

// window.onscroll=function(e){
//     let H = window.innerHeight;
//     let client = (document.querySelector("#proj4").getBoundingClientRect());
//     let h = client.height;
//     let y = client.y;
//     console.log("H: " + H);
//     console.log("h: " + h);
//     console.log("y: " + y);
//     if (y + h > H){
//         console.log("first");
//         animation.seek(0);

//     }
//     else{
//         console.log("second");
//         animation.seek(((-1/h)*y + (H/h-1))*1000);
//     }
// };
// var animation = anime({
//     targets: '#proj5',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   });

// window.onscroll=function(e){
//     let H = window.innerHeight;
//     let client = (document.querySelector("#proj5").getBoundingClientRect());
//     let h = client.height;
//     let y = client.y;
//     console.log("H: " + H);
//     console.log("h: " + h);
//     console.log("y: " + y);
//     if (y + h > H){
//         console.log("first");
//         animation.seek(0);

//     }
//     else{
//         console.log("second");
//         animation.seek(((-1/h)*y + (H/h-1))*1000);
//     }
// };

// var animation = anime({
//     targets: '#proj6',
//     translateY: 50,
//     opacity: 1,
//     duration: 1000,
//     easing: 'easeInOutSine',
//     autoplay: false
//   });

// window.onscroll=function(e){
//     let H = window.innerHeight;
//     let client = (document.querySelector("#proj6").getBoundingClientRect());
//     let h = client.height;
//     let y = client.y;
//     console.log("H: " + H);
//     console.log("h: " + h);
//     console.log("y: " + y);
//     if (y + h > H){
//         console.log("first");
//         animation.seek(0);

//     }
//     else{
//         console.log("second");
//         animation.seek(((-1/h)*y + (H/h-1))*1000);
//     }
// };
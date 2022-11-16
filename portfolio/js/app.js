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
        handleScroll(i, animateItem(i))
    }
}

function handleScroll(id, animation) {
    let H = window.innerHeight;
    let client = (document.querySelector("#proj"+id).getBoundingClientRect());
    let h = client.height;
    let y = client.y;
    if (y + h > H){
        animation.seek(0);
    }
    else{
        // animation.seek(((-1/h)*y + (H*1.0/h+0.5))*1800);
        // animation.seek(((-2/h)*y + ((2*H)/h-2))*1000);
        animation.seek(((-1/h)*y + (H/h-1))*1000);
    }
}

function easeIn(id, animation){
    window.addEventListener('scroll', () => handleScroll(id, animation))
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
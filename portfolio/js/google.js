window.onload = function() {
    console.log("WOWzers");
    animate();
};

function animateItem(id){
    console.log(id);
    var animation = anime({
        targets: '#img'+id,
        translateY: 0,
        opacity: 1,
        duration: 600,
        easing: 'easeInOutSine',
        autoplay: false
      });
    return animation;
}

var imgItems = [];

function animate(){
    console.log("checkpoint 1...");
    for (let i = 1; i <= 6; i++) {
        imgItems.push(animateItem(i));
        console.log(i + ": " + animateItem(i));
        easeIn(i, animateItem(i));
        handleScroll(i, animateItem(i))
    }
}

function handleScroll(id, animation) {
    let H = window.innerHeight;
    let client = (document.querySelector("#img"+id).getBoundingClientRect());
    let h = client.height;
    let y = client.y;
    console.log(H);
    console.log(h);
    console.log(y);

    let a = 0.25;
    let b = 0.90;
    let scrollFormula = (1/(h*(a-b)) * y - (H-a*h)/(h*(a-b)));
    animation.seek(scrollFormula*500);
}

function easeIn(id, animation){
    window.addEventListener('scroll', () => handleScroll(id, animation));
}
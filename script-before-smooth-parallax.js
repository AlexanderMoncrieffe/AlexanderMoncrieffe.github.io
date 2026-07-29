document.addEventListener("DOMContentLoaded", function(){

    const hero = document.querySelector(".hero");
    const image = document.querySelector(".hero-image");

    if(!hero || !image) return;

    hero.addEventListener("mousemove", function(e){

        if(window.innerWidth < 769) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        image.style.transform =
        "scale(1.08) translate(" + (-x) + "px," + (-y) + "px)";

    });


    hero.addEventListener("mouseleave", function(){

        image.style.transform =
        "scale(1) translate(0,0)";

    });

});

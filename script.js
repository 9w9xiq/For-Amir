document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = "1";
    },100);

    const title = document.querySelector("h1");

    if(title){
        title.animate(
            [
                {opacity:0, transform:"translateY(-20px)"},
                {opacity:1, transform:"translateY(0px)"}
            ],
            {
                duration:1500,
                fill:"forwards"
            }
        );
    }

});

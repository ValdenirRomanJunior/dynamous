    document.querySelector(".hamburguer").addEventListener("click", ()=>
        document.querySelector(".container").classList.toggle("show-menu")
    );


    document.querySelector(".menu").addEventListener("click", ()=>
        document.querySelector(".container").classList.remove("show-menu"),
        document.querySelector(".container").classList.toggle("close-menu")
    );
let menubar = document.querySelector("#menubar");
let menu    = document.querySelector(".menu");

menubar.addEventListener("click", ()=> {
    if(menubar.className == "bi bi-list") {
        menubar.className = "bi bi-x-lg";
        menu.classList.add("show");
    }else{
        menubar.className = "bi bi-list";
        menu.classList.remove("show");
    }
})
// print year in footer
    const d = new Date();
    let year = d.getFullYear();
    document.querySelector(".print_year").innerHTML = year;

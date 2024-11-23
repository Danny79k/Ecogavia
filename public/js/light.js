let bulb = document.querySelector("#lightmode")


bulb.addEventListener('click', ()=>{
    // document.querySelector("body").classList.toggle("dark:bg-slate-800")
    console.log("clicked");
    let modo = localStorage.getItem('modo')
    if (modo && modo === "light" ){
        localStorage.setItem('modo', 'dark')
        bulb.src = "assets/dark_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
        document.querySelector("body").classList.add("dark:bg-slate-800")
    } else {
        localStorage.setItem('modo', 'light')
        bulb.src = "assets/light_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
        document.querySelector("body").classList.remove("dark:bg-slate-800")
    }
})
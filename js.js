const burger = document.querySelector("nav svg");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {    
    if(links.classList.contains("links-active"))
    {
        links.classList.remove("links-active");            
    }
    else{
        links.classList.add("links-active");            
    }    
});

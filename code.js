const yearEl = document.getElementById("year")
const imageMenu = document.getElementById("ham-menu")
const imageMenuClose = document.getElementById("ham-close")
const checkbox = document.getElementById('input__ham-menu');
const linksEl = document.querySelectorAll(".links");

// año
const date = new Date();
year = date.getFullYear();
yearEl.innerText = `© Copyright${year}.`

// activar o desactivar imagen

imageMenu.addEventListener("click",()=>{
    imageMenu.style.display = "none";
    imageMenuClose.style.display = "block";
})
imageMenuClose.addEventListener("click",()=>{
    imageMenu.style.display = "block";
    imageMenuClose.style.display = "none";
})

// para los li 

linksEl.forEach(links =>{
    links.addEventListener("click", ()=>{
        checkbox.checked = false;
        imageMenu.style.display = "block";
        imageMenuClose.style.display = "none";
    })
})

// para que el valor del checkbox sea falso ya que estoy trabajando con el en el ham menu

window.addEventListener('resize', function() {
    if (window.innerWidth >= 649) {
      checkbox.checked = false; 
      imageMenu.style.display = "block";
      imageMenuClose.style.display = "none";
    }
  });

 
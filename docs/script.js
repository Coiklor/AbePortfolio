//Function Responsive//
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//funtion Hover menu//
function selected(link){
    var options = document.querySelectorAll ('#links a');
    options [0].className = "";
    options [1].className = "";
    options [2].className = "";
    options [3].className = "";
    options [4].className = "";
    link.className = "selectioned"
    
    //Menu inactive when you are "selecting" an option//
    var x =document.getElementById("nav");
    x.className = "";
    
}

// scroll (skills)//
window.onscroll = function(){
    skillsAnimation()
};
//animation scroll (skills)//
function skillsAnimation(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("css").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
        document.getElementById("ill").classList.add("barra-progreso5");

    }
}


let on =(id) =>{
    let overlay = document.getElementById(id);
    overlay.style.display = "flex";
}
let off=(id)=>{
    let overlay = document.getElementById(id);
    overlay.style.display = "none";
}


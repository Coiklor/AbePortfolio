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


let on =(id) =>{
    let overlay = document.getElementById(id);
    overlay.style.display = "flex";
}
let off=(id)=>{
    let overlay = document.getElementById(id);
    overlay.style.display = "none";
}
/* For te resuelvo, debo agregar un modal global */
function openImageModal(imageSrc) {
    const modal = document.getElementById('image-modal');
    const enlargedImage = document.getElementById('enlarged-image');
    
    enlargedImage.src = imageSrc;
    modal.style.display = 'flex';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}
 /* Provicional for Nescafe */
function openImageModal1(imageSrc) {
    const modal = document.getElementById('image-modal1');
    const enlargedImage = document.getElementById('enlarged-image1');
    
    enlargedImage.src = imageSrc;
    modal.style.display = 'flex';
}

function closeImageModal1() {
    const modal = document.getElementById('image-modal1');
    modal.style.display = 'none';
}

/* Provicional for Nescafe */
function openImageModal2(imageSrc) {
    const modal = document.getElementById('image-modal2');
    const enlargedImage = document.getElementById('enlarged-image2');
    
    enlargedImage.src = imageSrc;
    modal.style.display = 'flex';
}

function closeImageModal2() {
    const modal = document.getElementById('image-modal2');
    modal.style.display = 'none';
}

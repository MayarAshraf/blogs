//select landing page element
let landingPage = document.querySelector(".landing-page");
//get array of images
let imgsArray = ["img1.JPEG", "img2.JPEG", "img3.JPEG"]; 
setInterval(() => {
    //Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    //Changer Background Image URL
    landingPage.style.backgroundImage = 'URL("' + imgsArray[randomNumber] + '")';
    
},2000);
var i=0;
let introductionText = document.querySelectorAll(".cont"); 
setInterval(() => {
    
    introductionText[i].classList.toggle ("visible-true");    
    if (i==1) {
        introductionText[i-1].classList.toggle ("visible-true"); 
    }
    if (i==2) {
        introductionText[i-1].classList.toggle ("visible-true");
    }
    if (i==3) {
        introductionText[i-1].classList.toggle ("visible-true");
        i=-1;
    }
    i++;
},2000);
/*setInterval(() => {
    
    introductionText[i].classList.toggle ("visible");
    introductionText[i+1].classList.toggle ("visible");
    introductionText[i+2].classList.toggle ("visible");
    if (i==2) {
        introductionText[i-1].classList.toggle ("visible");
        i=0;
    }
},1000); */


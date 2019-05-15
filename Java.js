var slideIndex = 0; //Var for which slide the site should start on
showSlides(); //Calls function without any condition being needed

//This function makes the slideshow of the sponsors run automatically.
//To change the length that each slide is displayed for, change the number 
//on the 'setTimeout' line (line 36)
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);  // <---   <---   <---   CHANGE THIS LINE FOR A DIFFERENT INTERVAL (1000 = 1 SECOND)
}

//This function is used to open up the navigation menu when the navbar is in 
//"hamburger" form
function navToggle() {
  var x = document.getElementById("navbarId");
  if (x.className === "navbar sticky") {
    x.className += " responsive";
  } else {
    x.className = "navbar sticky";
  }
}
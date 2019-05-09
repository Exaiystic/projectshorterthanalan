//Made + Commented by Thomas Broughton

window.onscroll = function() {stickyNavbar()}; //Calls function whenever the window is scrolled

var navbar = document.getElementById("navbarId"); //Gets elements based on it's Id and stores in variable
var sticky = navbar.offsetTop; //Stores how offset the navbar is from top of viewport in a variable

//Function keeps the navigation bar at the top of the browser viewport, even if the user scrolls on the website. This is 
//known as a 'sticky' navigation bar.
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky") 
    } else {
      navbar.classList.remove("sticky");
    }
}

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
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
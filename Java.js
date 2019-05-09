//Made + Commented by Thomas Broughton

window.onscroll = function() {stickyNavbar()}; //Calls function whenever the window is scrolled
window.onresize = function() {(navReset)} //Calls function whenever the window is resized
 
let y = window.innerWidth; //Gets info about window size 
let x = document.getElementsByClassName("navLink"); //Gets info about navbar 
let navbar = document.getElementById("navbar"); //Gets elements based on it's Id and stores in letiable
let sticky = navbar.offsetTop; //Stores how offset the navbar is from top of viewport in a letiable

//Function keeps the navigation bar at the top of the browser viewport, even if the user scrolls on the website. This is 
//known as a 'sticky' navigation bar.
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky") 
    } else {
      navbar.classList.remove("sticky");
    }
}

let slideIndex = 0; //let for which slide the site should start on
showSlides(); //Calls function without any condition being needed

//This function makes the slideshow of the sponsors run automatically.
//To change the length that each slide is displayed for, change the number 
//on the 'setTimeout' line (line 36)
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("dot");
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
  for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
      x[i].style.display = "none";
    } else {
	  x[i].style.display = "block";
	}	  
  }
}
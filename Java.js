//Parallax with the background moving.
//This form of parallax has not been inputted because:
//        The scroll is jittery/inperfect
//        Can hurt website performance
//        Image sizing is disoriented
//This parallax may be revised at a later date
const parallax = document.querySelectorAll(".parallax-java");
 window.addEventListener("scroll", function() {
     let offset = window.pageYOffset;
     parallax.forEach(function(prllx, i) {
         prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
     })
 })﻿

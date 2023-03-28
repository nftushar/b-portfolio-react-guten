var $ = jQuery.noConflict();

$(document).ready(function () {
    // Initialize variables
    var slides = $('.slider').children();
    var thumbs = $('.thumbs').children();
    var currentSlide = 0;

    // Show the first slide and thumbnail
    slides.eq(currentSlide).addClass('active');
    thumbs.eq(currentSlide).addClass('active');

    // Change slide on thumbnail click
    thumbs.click(function () {
        // Remove active class from current slide and thumbnail
        slides.eq(currentSlide).removeClass('active');
        thumbs.eq(currentSlide).removeClass('active');

        // Set current slide to clicked thumbnail index
        currentSlide = $(this).index();

        // Add active class to new slide and thumbnail
        slides.eq(currentSlide).addClass('active');
        thumbs.eq(currentSlide).addClass('active');
    });
});



// Get the modal
var modal = document.getElementById("portfolio-modal");
const modalOpenBtns = document.querySelectorAll(
    ".portfolio-items .portfolio-view-details-btn",

    console.log('Hello')
);

// console.log(modalOpenBtns);

modalOpenBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        modal.style.display = "block";
    });
});

// Get the <span> element that closes the modal
var span = document.querySelector("#portfolio-modal .close");

// When the user clicks on <span> (x), close the modal
// span?.onclick = function () {
//     modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

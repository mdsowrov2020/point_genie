
// $(document).ready(function () {
//   $.scrollify({
//     section: '.scrollyfy_section',
//   });


// });

$('.hide_nav').on('click', function () {
  window.$('.navbar-collapse').collapse('hide');
  console.log('test');
});

window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 200) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}





  
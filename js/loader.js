 //loader
 window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

//youtube-video
function toggleVideo() {
  var videoContainer = document.getElementById('youtube-video-container');
  // Toggle the display property of the video container
  if (videoContainer.style.display === 'none') {
      videoContainer.style.display = 'block';
  } else {
      videoContainer.style.display = 'none';
  }
}

//owl carousel2
$(document).ready(function(){
  $('#owl-one').owlCarousel({
    center:true,
    items:2,
    loop:false,
    margin:10,
    autoWidth:true,
        margin: 30,
        autoHeight : true,
    // dots: true, 
    dotsEach: true,
    responsive:{
          0:{
              items:2
          },
      }
});

$('#owl-two').owlCarousel({
      loop:true,
      margin:10,
      pullDrag:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });
});
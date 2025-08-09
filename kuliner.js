let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    header.classList.remove("sticky", "hide");
    header.classList.add("at-top");
  } else {
    header.classList.add("sticky");
    header.classList.remove("at-top");

    if (scrollTop > lastScrollTop) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  }

  lastScrollTop = scrollTop;
});




// Carousel
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const slides = document.querySelectorAll('.carousel-track img');

let index = 0;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});


// *** After your manual handlers ***

// Autoplay for the “Gallery” carousel
setInterval(() => {
  nextBtn.click();
}, 4000); // ganti 4000 jadi milidetik yang kamu inginkan

// Autoplay untuk About-carousel
setInterval(() => {
  document.querySelector('.about-carousel .next').click();
}, 5000); // setiap 5 detik



 // About Carousel - scoped variables to avoid conflicts
    (function() {
      const aboutSlides = document.querySelector('.about-carousel .slides');
      const aboutCount = document.querySelectorAll('.about-carousel .slide').length;
      let aboutIndex = 0;

      document.querySelector('.about-carousel .next').addEventListener('click', () => {
        aboutIndex = (aboutIndex + 1) % aboutCount;
        updateAbout();
      });
      document.querySelector('.about-carousel .prev').addEventListener('click', () => {
        aboutIndex = (aboutIndex - 1 + aboutCount) % aboutCount;
        updateAbout();
      });

      function updateAbout() {
        aboutSlides.style.transform = `translateX(-${aboutIndex * 100}%)`;
      }
    })();
    


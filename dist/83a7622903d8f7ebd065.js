/* Your JS here. */
console.log('Hello World!'); // smooth scroll + animation for scrolling

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href').substring(1); // rem '#' character

    var targetSection = document.getElementById(targetId);
    var navbarHeight = document.getElementById("navbar").offsetHeight; // get height of navbar

    if (targetSection) {
      // animate scroll
      var step = function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, easeInOut(progress, startY, diff, duration)); // easeInOut function to animate scroll

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };

      var easeInOut = function easeInOut(time, start, change, duration) {
        time /= duration / 2;

        if (time < 1) {
          return change / 2 * time * time + start;
        }

        time--;
        return -change / 2 * (time * (time - 2) - 1) + start;
      };

      var targetOffset = targetSection.getBoundingClientRect().top + window.scrollY;
      var duration = 600;
      var startY = window.pageYOffset; // curr scroll position

      var diff = targetOffset - startY - navbarHeight; // account for navbar height

      var start = null;
      window.scrollTo({
        top: targetOffset - navbarHeight,
        // top: targetOffset,
        behavior: 'smooth'
      });
      requestAnimationFrame(step);
    }
  });
}); // shrink navbar on scroll

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.style.padding = "1.5% .5%"; // responsive padding

    navbar.style.fontSize = ".8em"; // responsive font size
  } else {
    navbar.style.padding = "2% .5%";
    navbar.style.fontSize = "1em";
  }
} // detect section and highlight corresponding link in navbar
// update active link based on section visibility


function setActiveLink() {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.nav-sects a');
  sections.forEach(function (section, index) {
    var sectionId = section.getAttribute('id');
    var options = {
      rootMargin: '0px',
      threshold: 0.5
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // remove active class from links
          navLinks.forEach(function (link) {
            link.classList.remove('active');
          }); // add active class to corresponding link if it exists

          var activeLink = document.querySelector(".nav-sects a[href=\"#".concat(sectionId, "\"]"));

          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, options);
    observer.observe(section);
  });
}

window.addEventListener('load', setActiveLink);
window.addEventListener('scroll', setActiveLink); // carousel

var slideIndex = 0;
showSlides(slideIndex); // next/prev controls

function plusSlides(n) {
  showSlides(slideIndex += n);
} // thumbnail image controls


function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides(n) {
  var i = 0;
  var slides = document.getElementsByClassName("carousel-item");

  if (n >= slides.length) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
} // modal images


document.addEventListener("DOMContentLoaded", function () {
  // open specific modal
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  } // close specific modal


  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  } // click event listeners -- images to open its respective modal


  document.getElementById("img1").addEventListener("click", function () {
    openModal("modal1");
  }); // click event listeners -- close buttons to close their respective modals

  document.getElementById("close1").addEventListener("click", function () {
    closeModal("modal1");
  }); // click event listeners -- images to open its respective modal

  document.getElementById("img2").addEventListener("click", function () {
    openModal("modal2");
  }); // click event listeners -- close buttons to close their respective modals

  document.getElementById("close2").addEventListener("click", function () {
    closeModal("modal2");
  }); // click event listeners -- images to open its respective modal

  document.getElementById("img3").addEventListener("click", function () {
    openModal("modal3");
  }); // click event listeners -- close buttons to close their respective modals

  document.getElementById("close3").addEventListener("click", function () {
    closeModal("modal3");
  });
}); //Get the button

var mybutton = document.getElementById("backToTop"); // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
} // When the user clicks on the button, scroll to the top of the document


mybutton.onclick = function () {
  //   document.body.scrollTop = 0;
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  }); //   document.documentElement.scrollTop = 0;
};
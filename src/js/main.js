/* Your JS here. */
console.log('Hello World!')

 // smooth scroll + animation for scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // rem '#' character
        const targetSection = document.getElementById(targetId);
        const navbarHeight = document.getElementById("navbar").offsetHeight; // get height of navbar

        if (targetSection) {
            const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY;
            const duration = 600;
            const startY = window.pageYOffset; // curr scroll position
            const diff = targetOffset - startY - navbarHeight; // account for navbar height
            let start = null;

            // animate scroll
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOut(progress, startY, diff, duration)); // easeInOut function to animate scroll
                if (progress < duration) {
                    requestAnimationFrame(step);
                }
            }

            function easeInOut(time, start, change, duration) {
                time /= duration / 2;
                if (time < 1) {
                    return change / 2 * time * time + start;
                }
                time--;
                return (-change / 2 * (time * (time-2) - 1) + start);
            }

            window.scrollTo({
                top: targetOffset - navbarHeight,
                // top: targetOffset,
                behavior: 'smooth',
                
            });
            requestAnimationFrame(step);
        }
    });
});


 // shrink navbar on scroll
window.onscroll = function() { scrollFunction() };
function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navbar.style.padding = "1.5% .5%"; // responsive padding
        navbar.style.fontSize = ".8em"; // responsive font size
    } else {
        navbar.style.padding = "2% .5%";
        navbar.style.fontSize = "1em";
    }
}


// detect section and highlight corresponding link in navbar
// update active link based on section visibility
function setActiveLink() {
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-sects a');

    sections.forEach((section, index) => {
        const sectionId = section.getAttribute('id');
        const options = {
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // remove active class from links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // add active class to corresponding link if it exists
                    const activeLink = document.querySelector(`.nav-sects a[href="#${sectionId}"]`);
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
window.addEventListener('scroll', setActiveLink);


// carousel

// let slideIndex = 0;
// showSlides(slideIndex);

// // next/prev controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n - 1);
// }

// function showSlides(n) {
//     let i = 0;
//     let slides = document.getElementsByClassName("carousel-item");

//     if (n >= slides.length) {
//         slideIndex = 0
//     }

//     if (n < 0) {
//         slideIndex = slides.length - 1
//     }

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
                  
//     slides[slideIndex].style.display = "block";
// }

// modal images
document.addEventListener("DOMContentLoaded", function () {
    // open specific modal
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    // close specific modal
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // click event listeners -- images to open its respective modal
    document.getElementById("img1").addEventListener("click", function () {
        openModal("modal1");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close1").addEventListener("click", function () {
        closeModal("modal1");
    });

    // click event listeners -- images to open its respective modal
    document.getElementById("img2").addEventListener("click", function () {
        openModal("modal2");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close2").addEventListener("click", function () {
        closeModal("modal2");
    });

    // click event listeners -- images to open its respective modal
    document.getElementById("img3").addEventListener("click", function () {
        openModal("modal3");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close3").addEventListener("click", function () {
        closeModal("modal3");
    });

    document.getElementById("img4").addEventListener("click", function () {
        openModal("modal4");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close4").addEventListener("click", function () {
        closeModal("modal4");
    });

    // click event listeners -- images to open its respective modal
    document.getElementById("img5").addEventListener("click", function () {
        openModal("modal5");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close5").addEventListener("click", function () {
        closeModal("modal5");
    });

    // click event listeners -- images to open its respective modal
    document.getElementById("img6").addEventListener("click", function () {
        openModal("modal6");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close6").addEventListener("click", function () {
        closeModal("modal6");
    });

    // click event listeners -- images to open its respective modal
    document.getElementById("img7").addEventListener("click", function () {
        openModal("modal7");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close7").addEventListener("click", function () {
        closeModal("modal7");
    });

    document.getElementById("img8").addEventListener("click", function () {
        openModal("modal8");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close8").addEventListener("click", function () {
        closeModal("modal8");
    });

    document.getElementById("img9").addEventListener("click", function () {
        openModal("modal9");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close9").addEventListener("click", function () {
        closeModal("modal9");
    });

    document.getElementById("img10").addEventListener("click", function () {
        openModal("modal10");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close10").addEventListener("click", function () {
        closeModal("modal10");
    });
});



//Get the button
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
//   document.body.scrollTop = 0;
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
//   document.documentElement.scrollTop = 0;
}

const waveText = document.getElementById('wave-text');
if (waveText) {
    waveText.addEventListener('mouseenter', () => {
        waveText.classList.add('rise');
    });
    waveText.addEventListener('mouseleave', () => {
        waveText.classList.remove('rise');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const text = "PERSONAL \xa0PROJECTS";
    const typedText = document.getElementById('typed-text');
    const cursor = document.getElementById('cursor');

    if (typedText && cursor) {
        let i = 0;
        let speed = 100;

        function type() {
            if (i <= text.length) {
                typedText.textContent = text.substring(0, i);
                i++;
                setTimeout(type, speed);
            } else {
                setTimeout( () => {
                    i = 0;
                    typedText.textContent = "";
                    setTimeout(type, speed);
                }, 2000)
            }
        }

        type();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const footerHeader = document.querySelector('.dropDown');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerHeader.classList.add('animate');
                // observer.unobserve(entry.target);
            } else {
                footerHeader.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(footerHeader);
});

document.addEventListener('DOMContentLoaded', function() {
    const background = document.getElementById('img-background');
    const bgImg = background.querySelector('.bg-img');
    const height = background.offsetHeight;
    const zoom = 2.5;

    window.addEventListener('scroll', function() {
        const scroll = window.scrollY || document.documentElement.scrollTop;
        const top = background.offsetTop;
        const dist = scroll - top;

        if (dist >= 0 && dist <= height) {
            const percent = dist / height;
            // const zoom = 1.2;
            const scale = 1 + (zoom - 1) * percent;
            bgImg.style.transform = `scale(${scale})`;
        } else if (dist < 0) {
            bgImg.style.transform = 'scale(1)';
        } else if (dist > height) {
            bgImg.style.transform = `scale(${zoom})`;
        }
    });
});
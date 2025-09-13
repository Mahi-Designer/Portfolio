// $(window).load(function () {
//             // Preloader
//             $('.loader').fadeOut();
//             $('.loader-mask').delay(150).fadeOut('slow');
//         });


     // Wait for page (and assets) to load
    window.addEventListener("load", () => {
      const preloader = document.getElementById("preloader");
      const content = document.querySelector(".content");

      preloader.classList.add("hidden");
      setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "flex";
      }, 600); // match transition duration
    });

    document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    // 1. Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    // Optional: Close nav when a link is clicked (for better UX)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                navToggle.classList.remove('open');
            }
        });
    });
});

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);


    // const words = [
    //   "Frontend Developer",
    //   "UI/UX Designer",
    //   "React Specialist",
    //   "Problem Solver"
    // ];

    // let i = 0;
    // let j = 0;
    // let isDeleting = false;
    // const speed = 120; // typing speed
    // const box = document.getElementById("typewriter");

    // function typeEffect() {
    //   const currentWord = words[i];

    //   if (!isDeleting) {
    //     // typing forward
    //     box.textContent = currentWord.substring(0, j + 1);
    //     j++;

    //     if (j === currentWord.length) {
    //       isDeleting = true;
    //       setTimeout(typeEffect, 1200); // pause before deleting
    //       return;
    //     }
    //   } else {
    //     // deleting
    //     box.textContent = currentWord.substring(0, j - 1);
    //     j--;

    //     if (j === 0) {
    //       isDeleting = false;
    //       i = (i + 1) % words.length; // next word
    //     }
    //   }

    //   setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    // }

    // typeEffect();
     // ✅ Bootstrap 5 JS API
    document.getElementById("modalOpen").addEventListener("click", function () {
      var myModal = new bootstrap.Modal(document.getElementById("theModal"));
      myModal.show();
    });

    document.getElementById("modalClose").addEventListener("click", function () {
      var myModalEl = document.getElementById("theModal");
      var modal = bootstrap.Modal.getInstance(myModalEl);
      modal.hide();
    });
    
// fadein


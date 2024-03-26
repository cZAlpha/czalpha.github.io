// START - Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});
// STOP  - Smooth scroll functionality

// START - 'hidden' (fade in) smooth animation section
const defaultObserver = new IntersectionObserver( (entries) => { // This function makes things become invisible after they are not on the screen and animates them when they are on the screen
   entries.forEach( (entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
         entry.target.classList.add('show')
      } 
      // else { // THIS MAKES THINGS RE-DISAPPEAR (REMOVED FOR ANNOYING NATURE OF THIS)
      //    entry.target.classList.remove('show')
      // }
   });
});
// STOP  - 'hidden' (fade in) smooth animation section

// START - 'fadeInFromBottom' smooth animation section
const topObserver = new IntersectionObserver( (entries) => { // This function makes things become invisible after they are not on the screen and animates them when they are on the screen
   entries.forEach( (entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
         entry.target.classList.add('showFromTop')
      } else {
         entry.target.classList.remove('showFromTop')
      }
   });
});
// STOP  - 'fadeInFromBottom' smooth animation section


// START - 'hidden' (fade in) call
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach( (el) => defaultObserver.observe(el) );
// STOP  - 'hidden' (fade in) call

// START - 'fadeInFromBottom' call
const hiddenFromTopElements = document.querySelectorAll('.fadeInFromBottom');
hiddenFromTopElements.forEach( (el) => topObserver.observe(el) );
// STOP  - 'fadeInFromBottom' call
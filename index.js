

//THE PRELOADER SECTION

load = () => {
  var loader = document.getElementById("preloader");

  window.addEventListener("load", vanish);

  function vanish () {
    loader.classList.add("disappear");
    loader.classList.add("arrow-land");
  }
};



//SCROLLER SECTION

upwards = () => {
  window.addEventListener('scroll', function(){
      var scroll = document.querySelector('.scrollTop');
      scroll.classList.toggle("active", window.scrollY > 500 )
  })

  scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
  }
}


let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');


menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});





// this is the code for the slider that displays the different packages 

var swiper = new Swiper(".packages-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
})






// this is the slider for the different food offered by the restaurant 

var swiper = new Swiper(".food-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});


let previewContainer = document.querySelector('.food-preview-container');
let previewBox = document.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
  food.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = food.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if(name == target) {
        preview.classList.add('active')
      }
    })
  }
});


previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display = 'none';
  previewBox.forEach(close => {
    close.classList.remove('active');
  });
}


// this code is for the light gallery funtionality 
lightGallery(document.querySelector('.gallery .gallery-container'));



// this code is for the menu slider 
var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop:true,
  autoHeight: true,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// this code is for the slide for the blog posts 
var swiper = new Swiper(".blogs-slider", {
  grabCursor:true,
  loop:true,
  autoHeight: true,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});




// this code is for the reviews swipper 

var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});






//THE CARDS SECTION

const cards = document.querySelectorAll('.card');

//Cards callback function
const cardObserverCallback = (cardsToWatch, cardObserver) => {
    cardsToWatch.forEach(cardToWatch => {
        if(cardToWatch.isIntersecting) {
            cardToWatch.target.classList.remove('card');
            cardObserver.unobserve(cardToWatch.target);
        }
    });
}

//card option
const cardObserverOptions = {
    threshod: .1
}

//card oberver
const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);

//card observer on card
cards.forEach(card => {
    cardObserver.observe(card)
})





load();
upwards();
swiper();



















//FOR PETER'S WEBSITE

// <script src="https://apps.elfsight.com/p/platform.js" defer></script>
// <div class="elfsight-app-7866ebf4-00c2-4e84-8783-05e169e6c498"></div>
















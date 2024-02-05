let hamburger = document.querySelector(".icon");
let ul = document.querySelector(".nav-links");

let icon = document.querySelector(".icon");
let navBox = document.querySelector("#navBox");

let slideIcon = document.querySelector(".slide");

const hireMe = document.querySelector('.hire');
const header = document.querySelector(".header");
const reviewsContainer = document.querySelector(".reviewsContainer");
const reviews = document.querySelectorAll(".review");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
const workImages = document.querySelectorAll(".portfolioImage");
const countingNumbs = document.querySelectorAll(".counter");
//const certificate = document.querySelectorAll(".x");
const maxSlide = reviews.length;
let currentSlide = 0;
let ulOpen = false;
let clicked = false;

//...... opening the menu
const openNav = () => {
  if (!ulOpen) {
    ul.classList.toggle("open");
    icon.classList.toggle("trans");
    ulOpen = true;
  } else {
    //...... calling the close menu func
    closeNavFunc();
  }
}


//..... close menu function 
const closeNavFunc = () => {
  ul.classList.toggle("open");
  icon.classList.toggle("trans")
  ulOpen = false;
}

//..... close menu
const closeNav = e => {
  if (e.target.classList.contains('link')) {

    closeNavFunc();
  }
}

hamburger.addEventListener("click", openNav);
ul.addEventListener("click", closeNav);

//observe and animate the menu bar

const observeMenuFunc = (entries) => {
  const [entry] = entries;


  if (!entry.isIntersecting) {
    navBox.classList.add("color");
    slideIcon.style.display = 'none';
    hireMe.style.backgroundColor = '#f8a840';
  }
  else {
    navBox.classList.remove("color");
    slideIcon.style.display = "block";
    hireMe.style.backgroundColor = "transparent";
  }
}
const observeMenuOpt = {
  root: null,
  threshold: 0.8,
}
const menuObserver = new IntersectionObserver(observeMenuFunc, observeMenuOpt);

menuObserver.observe(header);



//.... Reveal my portfolio on scroll

const portfolioFunc = entries => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-work-image")
    }
  })
}

const portfolioOpt = {
  root: null,
  threshold: 0.3,
}

const portfolioObserver = new IntersectionObserver(portfolioFunc, portfolioOpt);


workImages.forEach(workImage => {
  portfolioObserver.observe(workImage)
});

//..... counting numbers


const countNumb = entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      setTimeout(function() {
        entry.target.style.color = "red";
        const targetNumb = entry.target.dataset.target;
        entry.target.textContent = targetNumb;
      }, 500);
    }

  })
}

const countOpt = {
  root: null,
  threshold: 0.5,
}

const observeNumbs = new IntersectionObserver(countNumb, countOpt);

countingNumbs.forEach(countingNumb => {
  observeNumbs.observe(countingNumb);
});

const sliding = () => {

  reviews.forEach((review, i) => {
    review.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
}
sliding();

const nextSlide = () => {

  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  }
  else {
    currentSlide++;
  }
  sliding();

}

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  sliding();
}

let theInterv;

const slideFunc = entries => {

  let [entry] = entries;
  //console.log(entry);
  if (entry.isIntersecting) {
    setTimeout(() => {
      theInterv = setInterval(() => {
        nextSlide();
      }, 5000)
    }, 300);
  }
}

const slideOpt = {
  root: null,
  threshold: 1,
}

const slideObserver = new IntersectionObserver(slideFunc, slideOpt);

slideObserver.observe(reviewsContainer);

nextBtn.addEventListener("click", () => {
  slideObserver.unobserve(reviewsContainer);
  clearInterval(theInterv);
  nextSlide();
});

prevBtn.addEventListener("click", () => {
  slideObserver.unobserve(reviewsContainer);
  clearInterval(theInterv);
  prevSlide();
});


//elements sliding in from left and right
const certificate = document.querySelectorAll(".certificates");

const certificateOpt = {
  root: null,
  threshold: 0.3,
}

const certificateFunc = entries => {

  entries.forEach(entry => {
    
    if(entry.isIntersecting) {

      
      entry.target.classList.add("show-certificate")
    }
  })
}

const certificateObs = new IntersectionObserver(certificateFunc, certificateOpt);

certificate.forEach(certificateImg => {
  certificateObs.observe(certificateImg)
});



const textToType = "Developer";

const type = document.querySelector(".typeText");
let text = "";
const speed = 300;
let i = 0;

const typeText = ()=>{
if (i < textToType.length) {
  text += textToType.substring(0, textToType.length + i);
  i++;
} else{
  text += textToType.substring(0, textToType.length - i)
}
//console.log(text);
//setTimeout(typeText,speed);
}
typeText();

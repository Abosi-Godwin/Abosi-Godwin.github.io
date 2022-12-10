
let hamburger = document.querySelector(".icon");
let ul = document.querySelector(".nav-links");
let icon = document.querySelector(".icon");
let slideIcon = document.querySelector(".slide");

let ulOpen = false;
let clicked = false;
hamburger.addEventListener("click", () => {
  if (!ulOpen) {
    ul.classList.add("open");
    icon.classList.add("trans");
    
    ulOpen = true;
  } else{
    ul.classList.remove("open");
    icon.classList.remove("trans");
    ulOpen = false;
}});

let links = document.querySelectorAll(" ul li");
links.forEach((el)=>{
  el.addEventListener("click", ()=>{
   ul.classList.remove("open");
    icon.classList.remove("trans");
    ulOpen = false;

  })
})

window.addEventListener("scroll",() => {
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navBox").style.backgroundColor = "#000140";
slideIcon.style.display = "none";
  } else {
    document.getElementById("navBox").style.backgroundColor = "transparent";
    slideIcon.style.display = "block"
  }
});

let reviews = [
  {
    img: "./Images/Assets/Food1.jpg",
    name : " Brain nack",
    job: "farmer",
    qoute: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do suspendisse potenti nullam ac tortor. "
  },
  {
    img: "./Images/Assets/Food2.png",
    name : " Arto morgan",
    job: " Actress",
    qoute: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d pellentesque. "
  },
  {
    img: "./Images/Assets/Food3.png",
    name : "Ben peter",
    job: "Chef",
    qoute: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Porttitor eget dolor morbi non arcu risus.. "
  },
  {
    img: "./Images/Assets/Foods.png",
    name : "Mather Nicholas",
    job: "Entrepreneur",
    qoute: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu Porttitor eget dolor mo. "
  },
  {
    img: "./Images/Review1.jpg",
    name : "Bob Martin",
    job: "Activist",
    qoute: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ale. "
  },
  ];
  let reviewerImg = document.querySelector(".reviewImg");
  let reviewer = document.querySelector(".name");
  let reviewersJob = document.querySelector(".job");
  let reviewQuote = document.querySelector(".reviewQuote");
  let nextBtn = document.querySelector("#next");
  let prevBtn = document.querySelector("#prev");
  let current = 0;
  
  window.addEventListener("load",() => {
    updateReview();
  });

  
  function updateReview(){
    reviewerImg.src = reviews[current].img;
    reviewer.innerHTML = reviews[current].name;
    reviewersJob.innerHTML = reviews[current].job;
    reviewQuote.innerHTML = reviews[current].qoute;
  }
  nextBtn.addEventListener("click", ()=>{
    current++;
    if (current > reviews.length - 1) {
      current = 0;
    }
    updateReview();
  })
  
  prevBtn.addEventListener("click", ()=>{
    current--;
    if (current < 0) {
      current = reviews.length - 1;;
    }
    updateReview();
  });
  const modalBox = document.querySelector(".more-info");
  modalBox.style.display = "none";
  
const openModals = document.querySelectorAll(".openModal");
/**/
openModals.forEach(openModal =>{
  openModal.addEventListener("click", () => {
    modalBox.style.display = "block";
  })
})
const closeModals = document.querySelectorAll(".cancel");
closeModals.forEach(closeModal =>{
  closeModal.addEventListener("click", () => {
    modalBox.style.display = "none";
  })
})


let date = new Date();
let thisYear = date.getFullYear();
let year = document.querySelector(".year");
year.innerHTML = thisYear;

const workImages = document.querySelectorAll(".image");
const countContainer = document.querySelector("#countingBox");

//console.log(countContainer)


  const fadeOptions = {threshold: 0.6};
  const fader = new IntersectionObserver(fadeIn, fadeOptions);
  function fadeIn(entries,observer) {
    
    entries.forEach(entry =>{
  
      if (entry.isIntersecting) {
        entry.target.classList.add("show-work-image");
        observer.unobserve(entry.target)
      }
     else{
        entry.target.classList.remove("show-work-image")
      }

    })
  }
  workImages.forEach(workImage => {
    fader.observe(workImage);
  })
  


const countChecker = new IntersectionObserver(countNow, fadeOptions);

let counters = document.querySelectorAll("#numbers");
let Speed = 200;
    
function countNow(entries, observer) {

entries.forEach(entry => {
 if(entry.isIntersecting) {
/* =================================*/
 counters.forEach(counter => {
  const letsCount = function() {
    
  let targetNumer = +counter.getAttribute("data-target");

  let toCount = +counter.innerHTML;
  
  let countSpeed = Math.ceil(targetNumer / Speed);
  
  if(toCount < targetNumer) {
 counter.innerHTML = toCount + countSpeed;
 setTimeout(letsCount,10)
  } else {
    counter.innerHTML = targetNumer;
  }
      }
      
 letsCount();
      })
      
/* =================================*/
 
      //observer.unobserve(entry.target)
    }

  })
}

countChecker.observe(countContainer);

class Typewriter {
  constructor(textElement, textDelay, textToType){
      this.textElement = textElement;
      this.textToType = textToType;
      this.wait = parseInt(textDelay, 10);
      this.txt = " ";
      this.wordIndex = 0;
      this.type();
      this.isDeleting = false;
  }
  type(){
      let currentWord = this.wordIndex % this.textToType.length;
  let oneWord = this.textToType[currentWord];
// console.log(this.wordIndex++);
  if (this.isDeleting) {
 
    this.txt = oneWord.substring(0, this.txt.length - 1);
    
  } else {
this.txt = oneWord.substring(0, this.txt.length + 1);
  };
  
  this.textElement.innerHTML = ` <span class="spanned"> ${this.txt} </span>`;
  
  let typeSpeed = 300;
  if (this.isDeleting) {
    typeSpeed /= 2;
  };
  if(!this.isDeleting && this.txt === oneWord) {
    
    typeSpeed = this.wait;
    this.isDeleting = true;
  }else if(this.isDeleting && this.txt === ""){
    this.isDeleting = false;
    this.wordIndex++;
    
    typeSpeed = 500;
  }
setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", startTyping());

function startTyping() {
let textElement = document.querySelector(".typeText");

const loader = document.querySelector(".loadCan");
loader.style.display = "none";
let typeDelay = textElement.getAttribute("data-wait");

let textToType = JSON.parse(textElement.getAttribute("data-words"));

new Typewriter(textElement, typeDelay, textToType)
}
//console.log(this.wordIndex);

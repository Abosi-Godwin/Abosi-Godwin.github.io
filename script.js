let hamburger = document.querySelector(".icon");
let ul = document.querySelector(".nav-links");
let icon = document.querySelector(".icon");
let navBox = document.querySelector("#navBox");

let slideIcon = document.querySelector(".slide");

const hireMe = document.querySelector('.hire');

let ulOpen = false;
let clicked = false;
hamburger.addEventListener("click", () => {
  if (!ulOpen) {
    ul.classList.toggle('open');
    icon.classList.toggle('trans')
    ulOpen = true;
  } else{
    ul.classList.toggle("open");
    icon.classList.toggle("trans");
    ulOpen = false;
}
  
});

let links = document.querySelectorAll(" ul li");
links.forEach((el)=>{
  el.addEventListener("click", ()=>{
   ul.classList.remove("open");
    icon.classList.remove("trans");
    ulOpen = false;

  })
});

window.addEventListener("scroll",() => {
  
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navBox.classList.add('color');
slideIcon.style.display = "none";
hireMe.style.backgroundColor = '#f8a840';
  } else {
    navBox.classList.remove('color');
    hireMe.style.backgroundColor='transparent';
    slideIcon.style.display = "block";
  }
});

let reviews = [
  {
    name : " - Katie",
    job: "Owner of Katie's Kakes",
    qoute: "I recently hired Abosi Godwin to revamp my Shopify store and I am blown away by the results. The team was professional, efficient, and delivered exactly what I was looking for. As a small business owner, it's crucial to have a strong online presence and Abos Godwin has definitely helped me achieve that. Highly recommend it! "
  },

  {
    name : " - Michael",
    job: " Owner of The Artisanal Market",
    qoute: "I can't say enough good things about Abosi Godwin and his work on my Shopify store. From start to finish, he was a pleasure to work with and truly understood my vision. The end result was a sleek, user-friendly store that has already seen a significant increase in sales. Thank you, Abosi Godwin!. "
  },
  {
    name : " -Sara",
    job: "Owner of Sara's Soaps",
    qoute: "As a busy entrepreneur, I don't have a lot of time to devote to my online store. That's why I was so grateful to find Abosi Godwin. He handled everything from design to marketing and made the process so easy for me. The results have been fantastic and I've already recommended them to several colleagues. Thank you, Abosi Godwin!"
  },
  {
    name : " - John",
    job: "Owner of John's Jerky",
    qoute: "I've worked with a lot of different freelancers on my Shopify store, but none have been as fantastic as Abosi Godwin. From the initial consultation to the final product, he was professional, efficient, and a pleasure to work with. My store looks amazing and I've already seen a huge increase in traffic and sales. Thank you, Abosi Godwin!"
  },
  {
    name : "- Rachel",
    job: "Owner of Rachel's Boutique",
    qoute: "I was hesitant to invest in a Shopify store development and marketing company, but Abosi Godwin completely exceeded my expectations. Not only did he design a beautiful store, but he also provided valuable insights and strategies for marketing and growing my business. I can't recommend them enough!" 

  },
  ];
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
 

let date = new Date();
let thisYear = date.getFullYear();
let year = document.querySelector(".year");
year.innerHTML = thisYear;

const workImages = document.querySelectorAll(".image");
const countContainer = document.querySelector("#countingBox");



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
const counters = document.querySelectorAll('.counter');

function updateCounter() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const isVisible = isInViewport(counter);

    if (isVisible) {
      const inc = target / 200;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCounter, 25);
      } else {
        counter.innerText = target;
      }
    }
  });
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  return (
    rect.top >= 0 &&
    rect.bottom <= windowHeight
  );
}

window.addEventListener('scroll', updateCounter);

updateCounter();

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
  if (this.isDeleting) {
 
    this.txt = oneWord.substring(0, this.txt.length - 1);
    
  } else {
this.txt = oneWord.substring(0, this.txt.length + 1);
  };
  
  this.textElement.innerHTML = this.txt;
  
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

let typeDelay = textElement.getAttribute("data-wait");

let textToType = JSON.parse(textElement.getAttribute("data-words"));

new Typewriter(textElement, typeDelay, textToType)
}
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

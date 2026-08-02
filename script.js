/* ==========================================
   FRIENDSHIP DAY WEBSITE
   PART 1
========================================== */

// ===============================
// DOM Elements
// ===============================

const loader = document.getElementById("loader");
const body = document.body;

const themeToggle = document.getElementById("themeToggle");
const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

const timer = document.getElementById("timer");

// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2000);

});

// ===============================
// Theme
// ===============================

// Default theme is Dark
body.classList.add("dark");
themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

// If user previously chose light mode, restore it
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
    body.classList.remove("dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

themeToggle.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeToggle.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

// ===============================
// Music
// ===============================

let playing=false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        bgMusic.play();

        musicBtn.innerHTML='<i class="fa-solid fa-pause"></i> Pause Music';

        playing=true;

    }

    else{

        bgMusic.pause();

        musicBtn.innerHTML='<i class="fa-solid fa-play"></i> Play Music';

        playing=false;

    }

});

// ===============================
// Countdown
// ===============================

// Change this date if needed

const friendshipDate = new Date("2024-09-09");

function updateTimer(){

    const now = new Date();

    const diff = now - friendshipDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor(diff/(1000*60*60)%24);

    const mins = Math.floor(diff/(1000*60)%60);

    timer.innerHTML=

    `${days} Days ${hours} Hours ${mins} Minutes`;

}

updateTimer();

setInterval(updateTimer,60000);

// ===============================
// Smooth Scroll
// ===============================

const startBtn=document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

    document.querySelector(".gift-section")

    .scrollIntoView({

        behavior:"smooth"

    });

});

// ===============================
// Hero Fade Animation
// ===============================

const hero=document.querySelector(".hero");

hero.classList.add("fadeUp");

// ===============================
// End of Part 1
// ===============================

/* ==========================================
   FRIENDSHIP DAY WEBSITE
   PART 2
   Gift • Letter • Secret • Gallery
========================================== */

// ===============================
// Elements
// ===============================

const giftBox = document.getElementById("giftBox");
const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

// ===============================
// Friendship Letter
// ===============================

const message = `Dear Udhaya,

Happy Friendship Day! 🌸

I just wanted to say thank you for being such an amazing friend.

Your kindness, laughter and positive energy make every conversation special.

No matter where life takes us, I hope our friendship continues to grow stronger.

May your life always be filled with happiness, success, peace and beautiful memories.

Thank you for being YOU.

Happy Friendship Day once again ❤️

— Naresh`;

let index = 0;
let typingStarted = false;

function typeLetter(){

    if(index < message.length){

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}

// ===============================
// Gift Animation
// ===============================

giftBox.addEventListener("click",()=>{

    giftBox.classList.add("open");

    setTimeout(()=>{

        giftBox.style.display="none";

        letter.classList.remove("hidden");

        letter.classList.add("show");

        if(!typingStarted){

            typingStarted=true;

            typeLetter();

        }

    },900);

});

// ===============================
// Secret Button
// ===============================

secretBtn.addEventListener("click",()=>{

    secretMessage.classList.toggle("show");

    if(secretMessage.classList.contains("show")){

        secretBtn.innerHTML="Hide Secret ❤️";

    }else{

        secretBtn.innerHTML="Click For Secret";

    }

});

// ===============================
// Gallery Lightbox
// ===============================

// Create Lightbox

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`

<span id="closeLightbox">&times;</span>

<img id="lightboxImage">

`;

document.body.appendChild(lightbox);

const lightboxImg=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

// Gallery Images

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src=img.src;

    });

});

// Close

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});

// ESC Key

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

    }

});

// ===============================
// Image Hover Effect
// ===============================

galleryImages.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

// ===============================
// End of Part 2
// ===============================

/* ==========================================
   FRIENDSHIP DAY WEBSITE
   PART 3
   Hearts • Flowers • Sparkles • Bubbles
========================================== */

const heartsContainer = document.getElementById("floating-hearts");
const flowersContainer = document.getElementById("flowers");
const sparklesContainer = document.getElementById("sparkles");

// ===============================
// Floating Hearts
// ===============================

const heartIcons = ["❤️","💖","💕","💗","💝"];

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        heartIcons[Math.floor(Math.random()*heartIcons.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        (18 + Math.random()*24) + "px";

    heart.style.animationDuration =
        (6 + Math.random()*6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,600);

// ===============================
// Floating Flowers
// ===============================

const flowers = ["🌸","🌺","🌼","🌷","💮"];

function createFlower(){

    const flower = document.createElement("div");

    flower.className="flower";

    flower.innerHTML =
        flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left =
        Math.random()*100+"vw";

    flower.style.fontSize =
        (18+Math.random()*25)+"px";

    flower.style.animationDuration =
        (8+Math.random()*5)+"s";

    flowersContainer.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },13000);

}

setInterval(createFlower,900);

// ===============================
// Sparkles
// ===============================

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left =
        Math.random()*100+"vw";

    sparkle.style.top =
        Math.random()*100+"vh";

    sparkle.style.animationDuration =
        (1+Math.random()*2)+"s";

    sparklesContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,250);

// ===============================
// Floating Bubbles
// ===============================

function createBubble(){

    const bubble=document.createElement("div");

    bubble.className="bubble";

    const size=20+Math.random()*60;

    bubble.style.width=size+"px";

    bubble.style.height=size+"px";

    bubble.style.left=
        Math.random()*100+"vw";

    bubble.style.animationDuration=
        (8+Math.random()*6)+"s";

    document.body.appendChild(bubble);

    setTimeout(()=>{

        bubble.remove();

    },14000);

}

setInterval(createBubble,1200);

// ===============================
// Mouse Glow Effect
// ===============================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="rgba(255,255,255,.7)";
glow.style.boxShadow="0 0 25px white";
glow.style.zIndex="99999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-9+"px";
    glow.style.top=e.clientY-9+"px";

});

// ===============================
// Random Card Animation
// ===============================

const cards=document.querySelectorAll(".glass");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fadeUp");

}

});

},{threshold:.2});

cards.forEach(card=>observer.observe(card));

// ===============================
// End of Part 3
// ===============================

/* ==========================================
   FRIENDSHIP DAY WEBSITE
   PART 4
   Fireworks • Confetti • Slideshow
========================================== */

// ===============================
// Gift Celebration
// ===============================

giftBox.addEventListener("click", () => {

    startConfetti();

    createFireworks();

});

// ===============================
// Auto Slideshow
// ===============================

const images = document.querySelectorAll(".gallery-grid img");

let current = 0;

function slideshow() {

    images.forEach(img => {

        img.style.opacity = ".4";

        img.style.transform = "scale(.95)";

    });

    images[current].style.opacity = "1";

    images[current].style.transform = "scale(1.08)";

    current++;

    if(current >= images.length){

        current = 0;

    }

}

slideshow();

setInterval(slideshow,2500);

// ===============================
// Confetti
// ===============================

function startConfetti(){

    for(let i=0;i<150;i++){

        let confetti=document.createElement("div");

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.width="10px";

        confetti.style.height="16px";

        confetti.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        confetti.style.pointerEvents="none";

        confetti.style.zIndex="99999";

        confetti.style.borderRadius="3px";

        document.body.appendChild(confetti);

        let x=(Math.random()*200)-100;

        let y=window.innerHeight+100;

        confetti.animate([

            {

                transform:"translate(0,0) rotate(0deg)"

            },

            {

                transform:`translate(${x}px,${y}px) rotate(720deg)`

            }

        ],{

            duration:3500+Math.random()*2000,

            easing:"ease-out"

        });

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}

// ===============================
// Fireworks
// ===============================

function createFireworks(){

    for(let i=0;i<30;i++){

        const star=document.createElement("div");

        star.innerHTML="✨";

        star.style.position="fixed";

        star.style.left="50%";

        star.style.top="50%";

        star.style.fontSize="26px";

        star.style.pointerEvents="none";

        star.style.zIndex="99999";

        document.body.appendChild(star);

        const angle=Math.random()*360;

        const distance=150+Math.random()*250;

        const x=Math.cos(angle*Math.PI/180)*distance;

        const y=Math.sin(angle*Math.PI/180)*distance;

        star.animate([

            {

                transform:"translate(0,0) scale(.3)",

                opacity:1

            },

            {

                transform:`translate(${x}px,${y}px) scale(2)`,

                opacity:0

            }

        ],{

            duration:1800,

            easing:"ease-out"

        });

        setTimeout(()=>{

            star.remove();

        },1800);

    }

}

// ===============================
// Auto Music after first click
// ===============================

document.addEventListener("click",()=>{

    if(!playing){

        bgMusic.play().catch(()=>{});

        playing=true;

        musicBtn.innerHTML=
        '<i class="fa-solid fa-pause"></i> Pause Music';

    }

},{once:true});

// ===============================
// Welcome Animation
// ===============================

setTimeout(()=>{

    document.querySelector(".hero").classList.add("zoomIn");

},800);

// ===============================
// Console Message
// ===============================

console.log(`
❤️ Happy Friendship Day ❤️

Made with love by Naresh

For Udhaya 🌸
`);

// ===============================
// Finished
// ===============================
/*
  PANNI KUTTYYYY — GOOD HOURS
  Plain HTML + CSS + JavaScript.
  No npm, no React, no build step.
  Open index.html directly in your browser.
*/

const memories = [
  { src: "images/memory1.jpg", caption: "Look how happy we were here. 🥹" },
  { src: "images/memory2.jpg", caption: "This day >>> today's entire day 😂❤️" },
  { src: "images/memory3.jpg", caption: "One of my favorite memories." },
  { src: "images/memory4.jpg", caption: "Proof that we know how to have fun. 😂" },
  { src: "images/memory5.jpg", caption: "Please look at that smile. 🥺❤️" }
];

const things = [
  ["🥭", "Mango", "Instant Panni Kutty thought."],
  ["🍫", "Chocolate", "Somehow this tastes better when it comes from you."],
  ["🧸", "Your gifts", "Small object. Huge memory."],
  ["📞", "Morning calls", "Still one of my favorite routines."],
  ["🚌", "Your college bus", "One random bus and suddenly... you."],
  ["😂", "Our fights", "Unfortunately, we have plenty of these too."]
];

const happiness = [
  ["Give me a compliment ❤️", "Emergency report: you are cute, funny, unnecessarily lovable, and somehow still putting up with me. Respect. 🫡❤️"],
  ["Make me laugh 😂", "Why did the overthinking brain cross the road? To overthink why it crossed the road. 😭😂"],
  ["Give me a virtual hug 🫂", "Come here da 🫂\nNo talking.\nJust one very tight hug.\nOkay, now breathe."],
  ["Remind me I'm special 🥺", "You don't need a perfect day to be special. You already are. ❤️"],
  ["One stupid joke please 😭", "Doctor: “You need rest.”\nMe: “Can I prescribe that to Panni Kutty?”\nDoctor: “Absolutely. Also stop annoying her.” 😂"]
];

const promises = [
  "No more overthinking. 🫵",
  "Go eat something nice. 🍫",
  "Don't let today's nonsense win. 😤",
  "Smile at least once for me. 🥺",
  "And please remember... I'm still here. ❤️"
];

const pages = [
  landingPage,
  sorryPage,
  resetPage,
  reminderPage,
  galleryPage,
  thingsPage,
  happinessPage,
  promisePage,
  finalPage
];

let page = 0;
let resetDone = false;
let activeThing = null;
let happinessMessage = "";
let finalOpen = false;
let hugDone = false;
let musicOn = false;

const app = document.getElementById("app");
const topbar = document.getElementById("topbar");
const progressFill = document.getElementById("progressFill");
const pageCount = document.getElementById("pageCount");
const ambient = document.getElementById("ambient");

function render() {
  app.innerHTML = pages[page]();
  topbar.hidden = page === 0;
  if (page > 0) {
    const pct = (page / 8) * 100;
    progressFill.style.width = pct + "%";
    pageCount.textContent = `${page}/8`;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  bindPageEvents();
}

function go(next) {
  page = Math.max(0, Math.min(8, next));
  render();
}

function landingPage() {
  return `
    <section class="hero">
      <div class="tiny-note">a tiny corner of the internet, just for you</div>
      <h1>Hey Panni Kuttyyyy 🥺❤️</h1>
      <p class="lead">Okay... today's day was already bad enough.<br>
      So I'm officially taking responsibility for making the remaining hours better. 😤😂❤️</p>

      <div class="envelope" id="envelope" aria-hidden="true">
        <div class="envelope-paper">For my angry baby 💌</div>
        <div class="envelope-flap"></div>
        <div class="envelope-body"></div>
      </div>

      <button class="primary" id="openEnvelope">Open this, angry baby 😭👉👈</button>
    </section>
  `;
}

function sorryPage() {
  return section(`
    <div class="eyebrow">PAGE 1</div>
    <h2>Before anything else... I'm sorry. 🥺</h2>
    <div class="sorry-orbit">🌷</div>
    <p>Macha, first of all, I'm really sorry for today's small fight and for making your mind even more tired when your day was already going terribly.</p>
    <p>I know everything wasn't going right from morning, and instead of making things easier, I added one more thing for you to think about.</p>
    <p>I really didn't want that.</p>
    <p>I'm not here to explain myself again or make you feel guilty. I just want to say sorry and make the rest of your day a little lighter. ❤️</p>
    ${nextButton()}
  `);
}

function resetPage() {
  if (!resetDone) {
    return section(`
      <div class="eyebrow">PAGE 2</div>
      <h2>Let's do something scientifically important.</h2>
      <p>Today's nonsense has officially exceeded its daily limit.</p>
      <button class="reset-btn" id="resetToday">RESET TODAY 🔄</button>
    `);
  }

  return section(`
    <div class="eyebrow">PAGE 2</div>
    <h2>Today's nonsense has been deleted. 🧹</h2>
    <div class="reset-result">
      <p>Okay.</p>
      <div class="bad-list">
        <span>Bad morning ❌</span>
        <span>Bad afternoon ❌</span>
        <span>Small fight ❌</span>
        <span>Overthinking ❌</span>
      </div>
      <div class="starting">Starting now...</div>
      <h3>GOOD HOURS ONLY. ✅❤️</h3>
      ${nextButton()}
    </div>
  `);
}

function reminderPage() {
  return section(`
    <div class="eyebrow">PAGE 3</div>
    <h2>One thing I don't want you to forget ❤️</h2>
    <p>One bad day doesn't mean you had a bad life.<br>
    One bad moment doesn't change all the beautiful moments we've had.<br>
    And one small fight definitely doesn't change what you mean to me.</p>
    <div class="quote-box">
      You're still my Panni Kuttyyyy.<br>
      I'm still your annoying Macha.<br>
      And we're still us. 🫂❤️
    </div>
    ${nextButton()}
  `);
}

function galleryPage() {
  return section(`
    <div class="eyebrow">PAGE 4</div>
    <h2>Our beautiful days 📸</h2>
    <p class="muted">Put your photos in the <code>images</code> folder using the names
    <b>memory1.jpg</b> through <b>memory5.jpg</b>. Change captions at the top of <code>script.js</code>.</p>

    <div class="gallery">
      ${memories.map((m, i) => `
        <figure class="polaroid" style="--tilt:${[-3,2,-1,3,-2][i]}deg">
          <div class="photo-wrap">
            <img src="${m.src}" alt="Memory ${i + 1}">
            <span>📷</span>
          </div>
          <figcaption>${m.caption}</figcaption>
        </figure>
      `).join("")}
    </div>

    ${nextButton()}
  `);
}

function thingsPage() {
  return section(`
    <div class="eyebrow">PAGE 5</div>
    <h2>Things that always make me think of you</h2>
    <div class="things-grid">
      ${things.map((item, i) => `
        <button class="thing ${activeThing === i ? "active" : ""}" data-thing="${i}">
          <span class="thing-icon">${item[0]}</span>
          <b>${item[1]}</b>
          ${activeThing === i ? `<span class="reveal">${item[2]}</span>` : ""}
        </button>
      `).join("")}
    </div>
    ${nextButton()}
  `);
}

function happinessPage() {
  return section(`
    <div class="eyebrow">PAGE 6</div>
    <h2>Emergency Happiness Department 🚨😂</h2>
    <p>Since your day has been attacking you from morning, I'm officially taking over for the remaining hours.</p>

    <div class="happy-list">
      ${happiness.map((item, i) => `
        <button class="happy-btn" data-happy="${i}">${item[0]}</button>
      `).join("")}
    </div>

    ${happinessMessage ? `
      <div class="message-pop">
        ${happinessMessage.split("\n").map(line => `<div>${line || "&nbsp;"}</div>`).join("")}
      </div>
    ` : ""}

    ${nextButton()}
  `);
}

function promisePage() {
  return section(`
    <div class="eyebrow">PAGE 7</div>
    <h2>For the rest of today...</h2>
    <div class="promise-list">
      ${promises.map((p, i) => `<div class="promise" style="animation-delay:${i * .15}s">${p}</div>`).join("")}
    </div>
    ${nextButton()}
  `);
}

function finalPage() {
  if (!finalOpen) {
    return section(`
      <div class="eyebrow">PAGE 8</div>
      <h2>There's one last thing...</h2>
      <div class="lock-area">
        <div class="lock-heart">🔒❤️</div>
        <p>Okay, okay. One last tiny surprise. No emotional ambush, promise.</p>
        <button class="primary" id="openFinal">Open it ❤️</button>
      </div>
    `);
  }

  return section(`
    <div class="eyebrow">THE LAST THING ❤️</div>
    <h2>For tonight...</h2>
    <div class="final-message">
      <p>I can't fix everything that went wrong today.</p>
      <p>But I can remind you that one bad day doesn't erase all the good days waiting for you.</p>
      <p>And if today wasn't kind to you,<br>let me at least be a little kind to you.</p>
      <p>Forget today's small fight.<br>Forget the things that went wrong.<br>
      For the next few hours, just be my happy Panni Kuttyyyy again. 🥺❤️</p>
      <p>Tomorrow can be better.</p>
      <p><b>For tonight...</b></p>
      <p>Eat well.<br>Smile.<br>Relax.<br>
      And know that someone is genuinely hoping to see you happy. 🫂❤️</p>

      <h3>Good night, angry baby. 😂❤️</h3>
      <p><b>Tomorrow we start fresh. 🤝❤️</b></p>

      <button class="hug-btn ${hugDone ? "hugged" : ""}" id="lastHug">One last hug 🫂</button>

      ${hugDone ? `
        <div class="big-hug">
          🫂
          <span>Okay. Now go smile. 😤❤️</span>
        </div>
      ` : ""}

      <button class="replay" id="replay">↻ Replay from the beginning</button>
    </div>
  `);
}

function section(content, extraClass = "") {
  return `<section class="card-section ${extraClass}">${content}</section>`;
}

function nextButton() {
  return `<button class="primary next" id="nextBtn">Continue →</button>`;
}

function bindPageEvents() {
  const next = document.getElementById("nextBtn");
  if (next) next.addEventListener("click", () => go(page + 1));

  const openEnvelope = document.getElementById("openEnvelope");
  if (openEnvelope) {
    openEnvelope.addEventListener("click", () => {
      const envelope = document.getElementById("envelope");
      envelope.classList.add("is-open");
      openEnvelope.disabled = true;
      setTimeout(() => go(1), 850);
    });
  }

  const reset = document.getElementById("resetToday");
  if (reset) {
    reset.addEventListener("click", () => {
      document.body.classList.add("day-resetting");
      setTimeout(() => {
        resetDone = true;
        document.body.classList.remove("day-resetting");
        render();
      }, 650);
    });
  }

  document.querySelectorAll("[data-thing]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeThing = Number(btn.dataset.thing);
      render();
    });
  });

  document.querySelectorAll("[data-happy]").forEach(btn => {
    btn.addEventListener("click", () => {
      happinessMessage = happiness[Number(btn.dataset.happy)][1];
      render();
    });
  });

  const openFinal = document.getElementById("openFinal");
  if (openFinal) {
    openFinal.addEventListener("click", () => {
      finalOpen = true;
      render();
    });
  }

  const lastHug = document.getElementById("lastHug");
  if (lastHug) {
    lastHug.addEventListener("click", () => {
      hugDone = true;
      render();
    });
  }

  const replay = document.getElementById("replay");
  if (replay) {
    replay.addEventListener("click", () => {
      page = 0;
      resetDone = false;
      activeThing = null;
      happinessMessage = "";
      finalOpen = false;
      hugDone = false;
      render();
    });
  }

  document.querySelectorAll(".photo-wrap img").forEach(img => {
    img.addEventListener("error", () => {
      img.style.opacity = "0.08";
    });
  });
}

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.volume = 0.25;

musicBtn.addEventListener("click", () => {
  musicOn = !musicOn;

  if (musicOn) {
    music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🔇";
  }
});

function addFloatingSymbol() {
  const el = document.createElement("span");
  el.textContent = Math.random() > 0.45 ? "♡" : "✦";
  el.style.left = Math.random() * 100 + "%";
  el.style.animationDelay = Math.random() * 2 + "s";
  ambient.appendChild(el);
  setTimeout(() => el.remove(), 8500);
}

setInterval(addFloatingSymbol, 900);
for (let i = 0; i < 6; i++) setTimeout(addFloatingSymbol, i * 250);

render();

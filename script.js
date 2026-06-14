/* ============================================================
   CineTolly — Tollywood movie booking (demo)
   Data, hero carousel, scroll animations & booking flow
   ============================================================ */

// Poster URLs point at TMDB image CDN. If any fail to load we fall
// back to a colourful gradient card so the UI never looks broken.
const MOVIES = [
  {
    id: "og",
    title: "They Call Him OG",
    lang: "Telugu",
    genre: "Action / Thriller",
    year: 2025,
    rating: 8.6,
    duration: "2h 35m",
    cert: "U/A",
    desc: "A retired gangster returns to the bloodstained streets of Bombay for one final reckoning. Pawan Kalyan unleashes raw, stylized mayhem.",
    poster: "https://image.tmdb.org/t/p/w500/8Zh8Yt5fXq9b3pH3wQ9bqYJ1dN.jpg",
    backdrop: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1600&auto=format&fit=crop",
    c1: "#ff3d5a", c2: "#7a1020", status: "now"
  },
  {
    id: "pushpa2",
    title: "Pushpa 2: The Rule",
    lang: "Telugu",
    genre: "Action / Drama",
    year: 2024,
    rating: 8.2,
    duration: "3h 21m",
    cert: "U/A",
    desc: "Pushpa Raj rises from a red-sandalwood smuggler to an empire's ruler, clashing with the law in a battle of ego and survival.",
    poster: "https://image.tmdb.org/t/p/w500/jS5BFhYj8gp8rW3xR6X4Xl8RZB7.jpg",
    backdrop: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1600&auto=format&fit=crop",
    c1: "#ff8a3d", c2: "#5a2a00", status: "now"
  },
  {
    id: "kalki",
    title: "Kalki 2898 AD",
    lang: "Telugu",
    genre: "Sci-Fi / Epic",
    year: 2024,
    rating: 8.4,
    duration: "3h 01m",
    cert: "U/A",
    desc: "In a dystopian future, the last bastion of hope awaits the prophesied avatar. A mythological sci-fi spectacle of staggering scale.",
    poster: "https://image.tmdb.org/t/p/w500/8H6JZqYZ8sT8h0Cw1k0Yk9k9Yk9.jpg",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    c1: "#5b8cff", c2: "#0a1840", status: "now"
  },
  {
    id: "devara",
    title: "Devara: Part 1",
    lang: "Telugu",
    genre: "Action / Period",
    year: 2024,
    rating: 7.9,
    duration: "2h 56m",
    cert: "U/A",
    desc: "Along a lawless coastline, a fearless warrior protects his people while a son must rise to fill his shadow. NTR Jr. roars.",
    poster: "https://image.tmdb.org/t/p/w500/1k0Yk9k9Yk9k9Yk9k9Yk9k9Yk9.jpg",
    backdrop: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1600&auto=format&fit=crop",
    c1: "#16c6a0", c2: "#05352b", status: "now"
  },
  {
    id: "hanuman",
    title: "HanuMan",
    lang: "Telugu",
    genre: "Superhero / Fantasy",
    year: 2024,
    rating: 8.0,
    duration: "2h 38m",
    cert: "U",
    desc: "In the mystical village of Anjanadri, an ordinary man gains the powers of Lord Hanuman to defend his land from evil.",
    poster: "https://image.tmdb.org/t/p/w500/2k0Yk9k9Yk9k9Yk9k9Yk9k9Yk9.jpg",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
    c1: "#ffb347", c2: "#7a3b00", status: "now"
  },
  {
    id: "gamechanger",
    title: "Game Changer",
    lang: "Telugu",
    genre: "Political / Action",
    year: 2025,
    rating: 7.4,
    duration: "2h 45m",
    cert: "U/A",
    desc: "An honest IAS officer takes on a corrupt political dynasty in a high-voltage battle for systemic change. Ram Charan electrifies.",
    poster: "https://image.tmdb.org/t/p/w500/3k0Yk9k9Yk9k9Yk9k9Yk9k9Yk9.jpg",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    c1: "#c44dff", c2: "#2a0a40", status: "now"
  },
  {
    id: "kuberaa",
    title: "Kuberaa",
    lang: "Telugu",
    genre: "Crime / Drama",
    year: 2025,
    rating: 8.1,
    duration: "2h 52m",
    cert: "U/A",
    desc: "A beggar's life is upturned when he is pulled into a web of greed and power. Dhanush and Nagarjuna lead Sekhar Kammula's gripping drama.",
    poster: "https://image.tmdb.org/t/p/w500/4k0Yk9k9Yk9k9Yk9k9Yk9k9Yk9.jpg",
    backdrop: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=1600&auto=format&fit=crop",
    c1: "#ffd166", c2: "#5a4500", status: "coming"
  },
  {
    id: "salaar2",
    title: "Salaar: Part 2 — Shouryanga Parvam",
    lang: "Telugu",
    genre: "Action / Thriller",
    year: 2026,
    rating: 0,
    duration: "TBA",
    cert: "U/A",
    desc: "The blood feud of Khansaar reignites. Deva returns to honour a promise in the most violent chapter yet. Prabhas unleashed.",
    poster: "https://image.tmdb.org/t/p/w500/5k0Yk9k9Yk9k9Yk9k9Yk9k9Yk9.jpg",
    backdrop: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1600&auto=format&fit=crop",
    c1: "#8a8f98", c2: "#1a1d22", status: "coming"
  },
  {
    id: "rrr2",
    title: "RRR: Rise Once More",
    lang: "Telugu",
    genre: "Period / Action",
    year: 2026,
    rating: 0,
    duration: "TBA",
    cert: "U/A",
    desc: "The legend continues. Two revolutionary friends reunite against a new tide of tyranny in S.S. Rajamouli's awaited follow-up.",
    poster: "https://image.tmdb.org/t/p/w500/6k0Yk9k9Yk9k9Yk9k9Yk9k9Yk9.jpg",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1600&auto=format&fit=crop",
    c1: "#ff6a3d", c2: "#3a1000", status: "coming"
  },
  {
    id: "guntur",
    title: "Guntur Kaaram",
    lang: "Telugu",
    genre: "Action / Family",
    year: 2024,
    rating: 6.8,
    duration: "2h 39m",
    cert: "U/A",
    desc: "A spice-trader with a fiery past confronts old family wounds and political enemies. Mahesh Babu brings the mass.",
    poster: "https://image.tmdb.org/t/p/w500/7k0Yk9k9Yk9k9Yk9k9Yk9k9Yk9.jpg",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop",
    c1: "#ff3d5a", c2: "#4a0010", status: "coming"
  }
];

const THEATRES = ["PVR ICON, Banjara Hills", "AMB Cinemas, Gachibowli", "INOX, GVK One", "Asian Svera, Kukatpally"];
const TIMES = ["10:15 AM", "1:30 PM", "4:45 PM", "7:00 PM", "10:30 PM"];
const PRICE = 220;

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

function stars(r) { return r ? `★ ${r.toFixed(1)}` : "Coming soon"; }

// Build a poster element with graceful gradient fallback
function posterMarkup(m) {
  return `
    <div class="poster">
      ${m.cert ? `<span class="badge">${m.cert} · ${m.lang}</span>` : ""}
      <div class="poster-fallback" style="background:linear-gradient(150deg, ${m.c1}, ${m.c2})">${m.title}</div>
      <img src="${m.poster}" alt="${m.title} poster" loading="lazy"
           onload="this.style.opacity=1" style="opacity:0;transition:opacity .5s"
           onerror="this.remove()" />
      <div class="poster-shade"></div>
      <div class="poster-info">
        <h3>${m.title}</h3>
        <div class="sub"><span class="lang">${m.genre}</span><span>${m.year}</span></div>
      </div>
    </div>`;
}

/* ---------- render grids ---------- */
function renderNowShowing() {
  const grid = $("#nowShowingGrid");
  grid.innerHTML = MOVIES.filter(m => m.status === "now").map(m => `
    <article class="movie-card" data-id="${m.id}">
      ${posterMarkup(m)}
      <div class="card-actions">
        <span class="rating-pill">${stars(m.rating)}</span>
        <button class="book-btn" data-book="${m.id}">Book</button>
      </div>
    </article>`).join("");
}

function renderComingSoon() {
  const rail = $("#comingSoonRail");
  rail.innerHTML = MOVIES.filter(m => m.status === "coming").map(m => `
    <article class="movie-card" data-id="${m.id}">
      ${posterMarkup(m)}
      <div class="card-actions">
        <span class="rating-pill">${m.year}</span>
        <button class="book-btn" data-book="${m.id}">${m.rating ? "Book" : "Notify Me"}</button>
      </div>
    </article>`).join("");
}

/* ---------- hero carousel ---------- */
let heroIndex = 0;
let heroTimer;
const HERO = MOVIES.filter(m => m.status === "now").slice(0, 4);

function buildHero() {
  const slides = $("#heroSlides");
  const dots = $("#heroDots");
  slides.innerHTML = HERO.map(m => `<div class="hero-slide" style="background-image:url('${m.backdrop}')"></div>`).join("");
  dots.innerHTML = HERO.map((_, i) => `<button data-dot="${i}" aria-label="Slide ${i + 1}"></button>`).join("");
  setHero(0);
  startHeroAuto();
}

function setHero(i) {
  heroIndex = (i + HERO.length) % HERO.length;
  const m = HERO[heroIndex];
  $$(".hero-slide").forEach((s, idx) => s.classList.toggle("active", idx === heroIndex));
  $$("#heroDots button").forEach((d, idx) => d.classList.toggle("active", idx === heroIndex));
  const c = $("#heroContent");
  c.classList.remove("swap"); void c.offsetWidth; c.classList.add("swap");
  c.innerHTML = `
    <span class="hero-tag">🔥 Trending in Tollywood</span>
    <h1 class="hero-title">${m.title}</h1>
    <div class="hero-meta">
      <span class="rating">★ ${m.rating.toFixed(1)}</span>
      <span>${m.genre}</span><span>${m.duration}</span><span>${m.cert}</span><span>${m.year}</span>
    </div>
    <p class="hero-desc">${m.desc}</p>
    <div class="hero-actions">
      <button class="btn btn-primary" data-book="${m.id}">🎟️ Book Tickets</button>
      <a class="btn btn-ghost" href="#now-showing">Explore All</a>
    </div>`;
}

function startHeroAuto() { clearInterval(heroTimer); heroTimer = setInterval(() => setHero(heroIndex + 1), 6000); }

/* ---------- booking flow ---------- */
const modal = $("#bookingModal");
const state = { movie: null, theatre: null, time: null, seats: [] };

function openBooking(id) {
  const m = MOVIES.find(x => x.id === id);
  if (!m) return;
  if (!m.rating) { toast(`🔔 We'll notify you when "${m.title}" opens for booking!`); return; }
  state.movie = m; state.theatre = null; state.time = null; state.seats = [];
  renderBookingStep();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeBooking() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// random-but-stable "taken" seats per session
const takenCache = {};
function takenSeats(key) {
  if (!takenCache[key]) {
    const set = new Set();
    while (set.size < 14) set.add(Math.floor(Math.random() * 48));
    takenCache[key] = set;
  }
  return takenCache[key];
}

function renderBookingStep() {
  const m = state.movie;
  const taken = takenSeats(m.id + state.time);
  const rows = "ABCDEF";
  let seatHtml = "";
  for (let i = 0; i < 48; i++) {
    const r = rows[Math.floor(i / 8)], n = (i % 8) + 1;
    const isTaken = taken.has(i);
    const sel = state.seats.includes(i);
    seatHtml += `<button class="seat ${isTaken ? "taken" : ""} ${sel ? "selected" : ""}" data-seat="${i}" ${isTaken ? "disabled" : ""}>${r}${n}</button>`;
  }
  const total = state.seats.length * PRICE;
  const fee = state.seats.length ? Math.round(total * 0.05) : 0;
  const ready = state.theatre && state.time && state.seats.length;

  $("#modalBody").innerHTML = `
    <div class="modal-hero" style="background-image:url('${m.backdrop}')"></div>
    <h2 class="modal-title">${m.title}</h2>
    <div class="modal-sub"><span>★ ${m.rating.toFixed(1)}</span><span>${m.genre}</span><span>${m.duration}</span><span>${m.cert}</span></div>

    <div class="modal-pad">
      <div class="field-label">📍 Select Theatre</div>
      <div class="chip-row" id="theatreRow">
        ${THEATRES.map(t => `<button class="chip ${state.theatre === t ? "selected" : ""}" data-theatre="${t}">${t}</button>`).join("")}
      </div>

      <div class="field-label">🕐 Showtime</div>
      <div class="chip-row" id="timeRow">
        ${TIMES.map(t => `<button class="chip ${state.time === t ? "selected" : ""}" data-time="${t}">${t}</button>`).join("")}
      </div>
    </div>

    <div class="screen"><div class="screen-bar"></div><small>SCREEN THIS WAY</small></div>
    <div class="seat-map">${seatHtml}</div>
    <div class="legend">
      <span><i style="background:rgba(255,255,255,.1)"></i>Available</span>
      <span><i style="background:var(--accent)"></i>Selected</span>
      <span><i style="background:rgba(255,255,255,.06)"></i>Sold</span>
    </div>

    <div class="summary">
      <div class="summary-row"><span>Seats (${state.seats.length} × ₹${PRICE})</span><span>₹${total}</span></div>
      <div class="summary-row"><span>Convenience fee</span><span>₹${fee}</span></div>
      <div class="summary-row total"><span>Total</span><span>₹${total + fee}</span></div>
    </div>

    <button class="btn btn-primary confirm-btn" id="confirmBtn" ${ready ? "" : "disabled"}>
      ${ready ? `Pay ₹${total + fee} & Confirm` : "Select theatre, time & seats"}
    </button>`;
}

function renderSuccess() {
  const m = state.movie;
  const seatLabels = state.seats.map(i => "ABCDEF"[Math.floor(i / 8)] + ((i % 8) + 1)).join(", ");
  const total = state.seats.length * PRICE;
  const fee = Math.round(total * 0.05);
  $("#modalBody").innerHTML = `
    <div class="success">
      <div class="check">✅</div>
      <h3>Booking Confirmed!</h3>
      <p>Your seats are reserved. Enjoy the show 🍿</p>
      <div class="ticket">
        <h4>${m.title}</h4>
        <div class="trow"><span>${state.theatre}</span></div>
        <div class="trow"><span>🕐 ${state.time}</span><span>${m.cert} · ${m.lang}</span></div>
        <div class="trow"><span>💺 ${seatLabels}</span></div>
        <div class="trow"><span>Booking ID</span><span>CT${Math.floor(100000 + Math.random() * 899999)}</span></div>
        <div class="trow"><span>Total Paid</span><span>₹${total + fee}</span></div>
      </div>
      <button class="btn btn-ghost" style="margin-top:22px" data-close>Done</button>
    </div>`;
  toast("🎉 Tickets booked successfully!");
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
}

/* ---------- global events (delegation) ---------- */
document.addEventListener("click", e => {
  const book = e.target.closest("[data-book]");
  if (book) { openBooking(book.dataset.book); return; }

  if (e.target.closest("[data-close]")) { closeBooking(); return; }

  const dot = e.target.closest("[data-dot]");
  if (dot) { setHero(+dot.dataset.dot); startHeroAuto(); return; }

  const th = e.target.closest("[data-theatre]");
  if (th) { state.theatre = th.dataset.theatre; renderBookingStep(); return; }

  const tm = e.target.closest("[data-time]");
  if (tm) { state.time = tm.dataset.time; state.seats = []; renderBookingStep(); return; }

  const seat = e.target.closest("[data-seat]");
  if (seat && !seat.disabled) {
    const i = +seat.dataset.seat;
    const idx = state.seats.indexOf(i);
    if (idx >= 0) state.seats.splice(idx, 1);
    else if (state.seats.length < 10) state.seats.push(i);
    else toast("You can book up to 10 seats at a time");
    renderBookingStep();
    return;
  }

  if (e.target.id === "confirmBtn") renderSuccess();
});

document.addEventListener("keydown", e => { if (e.key === "Escape") closeBooking(); });

/* ---------- navbar + scroll progress ---------- */
const navbar = $("#navbar");
function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  const h = document.documentElement;
  const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  $("#scrollProgress").style.width = pct + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });

/* mobile menu */
const hamburger = $("#hamburger"), navLinks = $("#navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.addEventListener("click", e => {
  if (e.target.tagName === "A") { hamburger.classList.remove("open"); navLinks.classList.remove("open"); }
});

/* ---------- reveal-on-scroll (IntersectionObserver) ---------- */
function initObservers() {
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); secObs.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => secObs.observe(el));

  const cardObs = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        setTimeout(() => en.target.classList.add("in"), (Array.prototype.indexOf.call(en.target.parentNode.children, en.target) % 5) * 90);
        cardObs.unobserve(en.target);
      }
    });
  }, { threshold: 0.1 });
  $$(".movie-grid .movie-card").forEach(el => cardObs.observe(el));
}

/* ---------- init ---------- */
renderNowShowing();
renderComingSoon();
buildHero();
initObservers();
onScroll();

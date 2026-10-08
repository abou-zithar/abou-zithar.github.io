/* ============================================================
   Mahmoud Zithar — personal site
   ============================================================ */

const CONTACT = {
  name: "Mahmoud Zithar",
  email: "mahmoudabouzit@gmail.com",
  phone: "+201002557288",
  phonePretty: "+20 100 255 7288",
  linkedin: "https://www.linkedin.com/in/abou-zithar",
  github: "https://github.com/abou-zithar",
  githubUser: "abou-zithar",
  whatsapp: "https://wa.me/201002557288",
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Data (from CV) ---------- */
const JOURNEY = [
  {
    type: "eng", current: true,
    title: "Nera (by Al Rajhi Bank)", role: "T24 Developer · L2 Production Support", org: "Ejada Systems",
    place: "Riyadh, KSA", start: "2026-06", end: null,
    tags: ["T24 Accounting", "Payments", "SIMAH", "COB", "DR"],
    points: [
      "Provide L2 production support for the T24 Accounting module — payments, SIMAH blocks, and accounting/book entries.",
      "Investigate system issues and customer-specific cases, identify root causes, and escalate complex defects to L3.",
      "Support L3 investigations by analysing system bugs, malfunctions and transaction-related issues.",
      "Investigate unique customer cases and prepare findings for team leaders.",
      "Process approved failed payments, run weekly deployments and COB cycles, and support disaster-recovery exercises.",
    ],
  },
  {
    type: "eng",
    title: "Go Telecom — Go-Money LMS", role: "Software Engineer", org: "Ejada Systems",
    place: "Riyadh, KSA", start: "2026-03", end: "2026-06",
    tags: ["TDH", "Keycloak", "EDS", "SIMAH", "SAMA"],
    points: [
      "Resolved TDH stream and FCM/SNC integration issues using Keycloak, EDS and historical TDH data — saving two weeks of effort.",
      "Developed and hot-fixed the SIMAH regulatory report and resolved CRM/DW Export defects.",
      "Managed Temenos support tickets, client communication, SAMA meetings and Transact system presentations.",
      "Managed T24 user privileges and performed root-cause analysis of production issues.",
    ],
  },
  {
    type: "eng",
    title: "Emkan Finance — SME", role: "Software Engineer", org: "Ejada Systems",
    place: "Riyadh, KSA", start: "2025-11", end: "2026-02",
    tags: ["T24 Routines", "Java", "Kafka", "SADAD", "APIs"],
    points: [
      "Developed T24 products, Java routines, APIs and Kafka integrations for SME banking solutions.",
      "Built the Simulation and Get Simulation Schedule APIs end to end — from T24 routines through SIT deployment.",
      "Implemented master/child arrangements and integrated Kafka and SADAD queues during the SME Revamp.",
      "Developed and enhanced SIMAH and Fleet enquiries across DEV, SIT and Pre-Production.",
      "Implemented API validation routines and supported T24 multithreading and TDH reporting scenarios.",
      "Resolved ISD security vulnerabilities together with Security and project teams.",
      "Created a Spring Boot/JPA microservices onboarding roadmap for new developers.",
    ],
  },
  {
    type: "eng",
    title: "Ejada HR Systems (Internal)", role: "Software Engineer", org: "Ejada Systems",
    place: "Alexandria, Egypt", start: "2025-03", end: "2025-11",
    tags: ["Oracle APEX", "PL/SQL", "Workflows"],
    points: [
      "Designed the KSA_Allowance_Request workflow: document upload, manager approval and gated access to the KSA Salary Request.",
      "Built the attachment and border-number modules and surfaced them in HR reports.",
      "Built enterprise applications in Oracle APEX (SQL / PL-SQL).",
    ],
  },
  {
    type: "teach",
    title: "AIU University", role: "Teaching Assistant", org: "Alamein International University",
    place: "Alamein, Egypt", start: "2023-10", end: "2025-03",
    tags: ["Python", "Java", "Machine Learning", "Deep Learning", "GANs", "Computer Vision"],
    points: [
      "Supported courses in AI, Computer Networks, Cybersecurity, Software Engineering, Machine Learning, Data Mining, Knowledge Base Systems, GANs, OOP, Computer Vision and Deep Learning.",
      "Taught Structured Programming, Intro to AI, Java, RESTful API design and Agile practices.",
      "Ran labs and guided student projects in Python, ML and Deep Learning.",
    ],
  },
  {
    type: "eng",
    title: "PC-Link", role: "Flutter Developer", org: "PC-Link",
    place: "Alexandria, Egypt", start: "2022-10", end: "2023-09",
    tags: ["Flutter", "Python", "Data validation"],
    points: [
      "Built and maintained Flutter apps and Python tools for business use.",
      "Validated data to keep software outputs accurate.",
    ],
  },
  {
    type: "teach",
    title: "Arab Academy for Science & Technology", role: "Teaching Assistant (Part-time)", org: "AASTMT",
    place: "Alexandria, Egypt", start: "2023-02", end: "2023-06",
    tags: ["AWS", "Student projects"],
    points: ["Supported student projects built on AWS services."],
  },
];

const SKILLS = [
  { icon: "🏦", title: "Core Banking", items: ["Temenos Transact (T24)", "T24 Routines", "Enquiries (NOFILE)", "TDH", "SIMAH Reporting", "COB", "SADAD"] },
  { icon: "⌨️", title: "Languages", items: ["Java", "Python", "SQL", "PL/SQL", "R", "Dart"] },
  { icon: "🔌", title: "Backend & Integration", items: ["Spring Boot", "JPA", "Microservices", "Apache Kafka", "RESTful APIs", "Keycloak", "Oracle APEX"] },
  { icon: "🛠️", title: "Tools & DevOps", items: ["Git", "GitLab", "Docker", "Kubernetes", "DEV / SIT / Pre-Prod pipelines"] },
  { icon: "🧠", title: "AI / Data", items: ["YOLOv8", "ResNet50 / CNNs", "Streamlit", "Deep Learning", "Data Science"] },
  { icon: "🤝", title: "Soft Skills", items: ["Client communication", "Stakeholder management", "Problem solving", "Teaching & mentoring", "Team collaboration"] },
];

const COURSES = [
  { group: "AI & Data", cls: "ai", items: ["Intro to AI", "Machine Learning", "Deep Learning", "GANs", "Computer Vision", "Data Mining", "Knowledge Base Systems"] },
  { group: "Software", cls: "sw", items: ["Structured Programming", "OOP", "Java", "Python", "Software Engineering", "RESTful API Design", "Agile"] },
  { group: "Systems & Cloud", cls: "sys", items: ["Computer Networks", "Cybersecurity", "AWS (student projects)"] },
];

const RECOMMENDATIONS = [
  {
    type: "coworker", name: "Esraa Tantawy", title: "Consultant",
    relation: "Worked with Mahmoud on the same team", date: "Jul 2026",
    text: "Mahmoud is one of the most genuinely dedicated people I've had the pleasure of working with. During the toughest delivery periods he has shown true commitment. His approach to solving problems has inspired me in many ways. It was a real pleasure working alongside him.",
  },
  {
    type: "student", name: "Gamal Abouelhamd Hussein", title: "AI Team Leader @ M.I.A Robotics · Published Researcher · AI mentor at AIU-IEEE",
    relation: "Former student — Mahmoud was his TA", date: "Mar 2025",
    text: "I had the privilege of learning from Mahmoud, he taught me Structured Programming, Intro to AI, and Machine Learning. He has deep understanding of AI topics and dedication to helping students. A truly decent and helpful TA.",
  },
  {
    type: "classmate", name: "Raheem Amer", title: "GCP Technical Support Specialist @ Flairstech",
    relation: "Studied together", date: "Feb 2022",
    text: "Mahmoud is really one of the best self-taught developers I've met in my life. His work, his passion and dedication were a fundamental asset to my career. He helped me a lot when we were studying together, whether it was technical or soft skills — he helped me to pick up the pace. I hope the best for him.",
  },
];

const PROJECTS = [
  { icon: "🦷", title: "Dental Clinic Management — Backend API", metric: "JWT", metricLabel: "role-based access",
    desc: "Production-ready Spring Boot REST API for patients, appointments, medical records and scan uploads, with role-based access for doctors and receptionists." },
  { icon: "⚽", title: "Football Analysis System", metric: "85%", metricLabel: "precision",
    desc: "Real-time player-movement tracking with YOLOv8." },
  { icon: "🔬", title: "Teeth Classification with ResNet50", metric: "92%", metricLabel: "accuracy",
    desc: "ResNet50 CNN trained on 1000+ images and deployed with Streamlit." },
  { icon: "🚚", title: "Truck Trip Analysis & Prediction", metric: "−20%", metricLabel: "downtime",
    desc: "Predicted trip delays from historical data to cut fleet downtime." },
];

/* ---------- Date helpers ---------- */
const monthsBetween = (a, b) => (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
const parseYM = (s) => { const [y, m] = s.split("-").map(Number); return new Date(y, m - 1, 1); };
const fmtYM = (s) => s ? parseYM(s).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Present";
const fmtDuration = (m) => {
  m = Math.max(1, m);
  const y = Math.floor(m / 12), r = m % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, r && `${r} mo${r > 1 ? "s" : ""}`].filter(Boolean).join(" ");
};
const NOW = new Date();

/* ---------- Stats ---------- */
const teachMonths = JOURNEY.filter(j => j.type === "teach")
  .reduce((s, j) => s + monthsBetween(parseYM(j.start), j.end ? parseYM(j.end) : NOW), 0);
const STATS = {
  engYears: monthsBetween(parseYM("2022-10"), NOW) / 12,
  t24Months: monthsBetween(parseYM("2025-03"), NOW),
  teachYears: teachMonths / 12,
  clients: 3,
  courses: COURSES.reduce((n, g) => n + g.items.length, 0),
  universities: 2,
};

/* ---------- Theme ---------- */
(function theme() {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch {}
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  document.documentElement.dataset.theme = saved || (prefersLight ? "light" : "dark");
})();
function toggleTheme() {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch {}
}
$("#themeBtn").addEventListener("click", toggleTheme);

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ---------- Typing effect ---------- */
(function typing() {
  const words = ["T24 Developer.", "Core Banking Engineer.", "Java & Spring Boot dev.", "former Teaching Assistant.", "problem solver."];
  const el = $("#typed");
  let w = 0, i = 0, del = false;
  (function tick() {
    const word = words[w];
    el.textContent = word.slice(0, i);
    if (!del && i === word.length) { del = true; return setTimeout(tick, 1600); }
    if (del && i === 0) { del = false; w = (w + 1) % words.length; }
    i += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 75);
  })();
})();

/* ---------- Riyadh clock ---------- */
function riyadhParts() {
  const p = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Riyadh", hour: "numeric", minute: "numeric", second: "numeric", weekday: "short", hour12: false,
  }).formatToParts(new Date());
  const get = (t) => p.find(x => x.type === t)?.value;
  return { h: +get("hour") % 24, m: +get("minute"), s: +get("second"), wd: get("weekday") };
}
function updateClock() {
  const { h, m, s, wd } = riyadhParts();
  $("#riyadhTime").textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  $("#hH").style.transform = `rotate(${(h % 12) * 30 + m * 0.5}deg)`;
  $("#hM").style.transform = `rotate(${m * 6}deg)`;
  $("#hS").style.transform = `rotate(${s * 6}deg)`;
  const workday = !["Fri", "Sat"].includes(wd);
  const working = workday && h >= 8 && h < 17;
  $("#workState").textContent = working ? "🏦 At work · Riyadh" : (h >= 23 || h < 7) ? "🌙 Sleeping · Riyadh" : "☕ Off hours · Riyadh";
}
updateClock();
setInterval(updateClock, 1000);

/* ---------- Journey timeline ---------- */
(function renderTimeline() {
  const ol = $("#timeline");
  ol.innerHTML = JOURNEY.map((j, idx) => {
    const dur = monthsBetween(parseYM(j.start), j.end ? parseYM(j.end) : NOW);
    return `
    <li class="tl-item ${j.type} ${j.current ? "current open" : ""} reveal" data-type="${j.type}">
      <div class="tl-card" tabindex="0" role="button" aria-expanded="${!!j.current}">
        <div class="tl-head">
          <h3>${j.title}${j.current ? '<span class="badge-now">NOW</span>' : ""}</h3>
          <span class="tl-date">${fmtYM(j.start)} – ${fmtYM(j.end)} <span class="tl-duration">· ${fmtDuration(dur)}</span></span>
        </div>
        <div class="tl-org"><span class="role">${j.role}</span> · ${j.org} · ${j.place}</div>
        <div class="tl-tags">${j.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="tl-details"><div><ul>${j.points.map(p => `<li>${p}</li>`).join("")}</ul></div></div>
        <div class="tl-toggle"><span class="t-more">+ show details</span><span class="t-less">− hide details</span></div>
      </div>
    </li>`;
  }).join("");

  $$(".tl-card", ol).forEach(card => {
    const toggle = () => {
      const li = card.parentElement;
      li.classList.toggle("open");
      card.setAttribute("aria-expanded", li.classList.contains("open"));
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
  });

  $$("#filters .chip").forEach(btn => btn.addEventListener("click", () => {
    $$("#filters .chip").forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".tl-item", ol).forEach(li => li.classList.toggle("hide", f !== "all" && li.dataset.type !== f));
  }));
})();

/* ---------- Teaching: course groups ---------- */
$("#courseGroups").innerHTML = COURSES.map(g => `
  <div class="course-group ${g.cls}">
    <h4>${g.group}</h4>
    <div class="course-list">${g.items.map(c => `<span>${c}</span>`).join("")}</div>
  </div>`).join("");

/* ---------- Recommendations ---------- */
(function renderRecs() {
  const label = { coworker: "Coworker", student: "Student", classmate: "Classmate" };
  const initials = n => n.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("");
  $("#recs").innerHTML = RECOMMENDATIONS.map(r => `
    <figure class="rec ${r.type} reveal" data-type="${r.type}">
      <span class="rec-badge">${label[r.type]}</span>
      <blockquote>“${r.text}”</blockquote>
      <figcaption>
        <span class="q-avatar">${initials(r.name)}</span>
        <span><strong>${r.name}</strong><small>${r.title}</small><em>${r.relation} · ${r.date}</em></span>
      </figcaption>
    </figure>`).join("");
  $$("#recFilters .chip").forEach(btn => btn.addEventListener("click", () => {
    $$("#recFilters .chip").forEach(b => b.classList.toggle("active", b === btn));
    $$("#recs .rec").forEach(el => el.classList.toggle("hide", btn.dataset.filter !== "all" && el.dataset.type !== btn.dataset.filter));
  }));
})();

/* ---------- Skills ---------- */
$("#skillsGrid").innerHTML = SKILLS.map(s => `
  <div class="skill-card reveal">
    <h3><span class="ico">${s.icon}</span>${s.title}</h3>
    <div class="skill-list">${s.items.map(i => `<span>${i}</span>`).join("")}</div>
  </div>`).join("");
$$(".skill-card").forEach(c => c.addEventListener("pointermove", e => {
  const r = c.getBoundingClientRect();
  c.style.setProperty("--mx", `${e.clientX - r.left}px`);
  c.style.setProperty("--my", `${e.clientY - r.top}px`);
}));

/* ---------- Projects ---------- */
$("#projectsGrid").innerHTML = PROJECTS.map(p => `
  <article class="project reveal">
    <div class="p-icon">${p.icon}</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="metric">${p.metric}<small>${p.metricLabel}</small></div>
  </article>`).join("");
$$(".project").forEach(card => {
  card.addEventListener("pointermove", e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  });
  card.addEventListener("pointerleave", () => (card.style.transform = ""));
});

/* ---------- GitHub repos (live) ---------- */
const LANG_COLORS = {
  Java: "#b07219", Python: "#3572A5", "Jupyter Notebook": "#DA5B0B", JavaScript: "#f1e05a", TypeScript: "#3178c6",
  Dart: "#00B4AB", HTML: "#e34c26", CSS: "#563d7c", R: "#198CE7", "C++": "#f34b7d", C: "#555555", PLSQL: "#dad8d8", Kotlin: "#A97BFF",
};
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
(async function loadRepos() {
  const box = $("#repos");
  try {
    let repos;
    try { repos = JSON.parse(sessionStorage.getItem("gh-repos")); } catch {}
    if (!repos) {
      const res = await fetch(`https://api.github.com/users/${CONTACT.githubUser}/repos?per_page=100&sort=updated`);
      if (!res.ok) throw new Error(res.status);
      repos = await res.json();
      try { sessionStorage.setItem("gh-repos", JSON.stringify(repos)); } catch {}
    }
    const list = repos.filter(r => !r.fork)
      .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)))
      .slice(0, 6);
    $("#ghMeta").textContent = `· ${repos.filter(r => !r.fork).length} public repos`;
    if (!list.length) throw new Error("empty");
    box.innerHTML = list.map(r => `
      <a class="repo" href="${esc(r.html_url)}" target="_blank" rel="noopener">
        <h4>${esc(r.name)}</h4>
        <p>${esc(r.description) || "No description provided."}</p>
        <div class="repo-meta">
          ${r.language ? `<span><span class="lang-dot" style="background:${LANG_COLORS[r.language] || "#8b9ab3"}"></span>${esc(r.language)}</span>` : ""}
          <span>★ ${r.stargazers_count}</span>
          <span>⑂ ${r.forks_count}</span>
          <span>${new Date(r.pushed_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
        </div>
      </a>`).join("");
  } catch {
    box.innerHTML = `<a class="repo" href="${CONTACT.github}" target="_blank" rel="noopener">
      <h4>github.com/${CONTACT.githubUser}</h4>
      <p>Couldn't load repositories right now — click to browse them on GitHub.</p></a>`;
  }
})();

/* ---------- Counters ---------- */
function animateCount(el) {
  const target = STATS[el.dataset.count];
  const dec = +(el.dataset.decimals || 0);
  const t0 = performance.now(), dur = 1600;
  (function frame(t) {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * e).toFixed(dec);
    if (p < 1) requestAnimationFrame(frame);
  })(t0);
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  $$("[data-count]", e.target).forEach(animateCount);
  io.unobserve(e.target);
}), { threshold: 0.12 });
$$(".reveal").forEach(el => io.observe(el));

/* ---------- Nav: scroll state, active link, progress, mobile menu ---------- */
const sections = $$("main section[id]");
function onScroll() {
  const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
  $("#progress").style.width = `${(y / h) * 100}%`;
  $("#nav").classList.toggle("scrolled", y > 10);
  let current = "";
  sections.forEach(s => { if (y >= s.offsetTop - 140) current = s.id; });
  $$(".nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();
$("#menuBtn").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
$$("#navLinks a").forEach(a => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));

/* ---------- Cursor glow ---------- */
addEventListener("pointermove", e => {
  const g = $("#glow");
  g.style.left = `${e.clientX}px`;
  g.style.top = `${e.clientY}px`;
});

/* ---------- Background: network of nodes ---------- */
(function bg() {
  const c = $("#bg"), ctx = c.getContext("2d");
  let W, H, nodes = [];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function resize() {
    W = c.width = innerWidth * devicePixelRatio;
    H = c.height = innerHeight * devicePixelRatio;
    const n = Math.min(80, Math.floor((innerWidth * innerHeight) / 18000));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio, vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const light = document.documentElement.dataset.theme === "light";
    const rgb = light ? "5,150,105" : "52,211,153";
    const max = 140 * devicePixelRatio;
    for (const a of nodes) {
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > W) a.vx *= -1;
      if (a.y < 0 || a.y > H) a.vy *= -1;
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < max) {
          ctx.strokeStyle = `rgba(${rgb},${(1 - d / max) * (light ? 0.18 : 0.14)})`;
          ctx.lineWidth = devicePixelRatio;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      ctx.fillStyle = `rgba(${rgb},${light ? 0.35 : 0.45})`;
      ctx.beginPath(); ctx.arc(nodes[i].x, nodes[i].y, 1.6 * devicePixelRatio, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }
  resize(); draw();
  addEventListener("resize", resize);
})();

/* ---------- vCard ---------- */
function downloadVCard() {
  const v = [
    "BEGIN:VCARD", "VERSION:3.0",
    "N:Zithar;Mahmoud;;;", `FN:${CONTACT.name}`,
    "ORG:Ejada Systems", "TITLE:Software Engineer — T24 Developer",
    `TEL;TYPE=CELL:${CONTACT.phone}`, `EMAIL;TYPE=INTERNET:${CONTACT.email}`,
    `URL:${CONTACT.linkedin}`, `X-SOCIALPROFILE;TYPE=github:${CONTACT.github}`,
    "ADR;TYPE=WORK:;;;Riyadh;;;Saudi Arabia", "END:VCARD",
  ].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([v], { type: "text/vcard" }));
  a.download = "Mahmoud-Zithar.vcf";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast("📇 Contact card downloaded");
}
$("#vcardBtn").addEventListener("click", downloadVCard);

/* ---------- Copy email ---------- */
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(CONTACT.email);
    toast("✉️ Email copied to clipboard");
    const lbl = $("#copyEmail .copy-label");
    lbl.textContent = "Copied ✓";
    setTimeout(() => (lbl.textContent = "Copy"), 2000);
  } catch {
    location.href = `mailto:${CONTACT.email}`;
  }
}
$("#copyEmail").addEventListener("click", copyEmail);

/* ---------- Contact form ---------- */
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const via = e.submitter?.dataset.via || "email";
  const name = f.get("name"), subject = f.get("subject"), msg = f.get("message");
  if (via === "whatsapp") {
    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi Mahmoud, I'm ${name}.\n*${subject}*\n\n${msg}`)}`, "_blank");
  } else {
    location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${msg}\n\n— ${name}`)}`;
  }
  toast("🚀 Opening your " + (via === "whatsapp" ? "WhatsApp" : "email app") + "…");
});

/* ---------- Interactive terminal ---------- */
const term = $("#termBody");
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
function tprint(html = "") { term.innerHTML += html + "\n"; term.scrollTop = term.scrollHeight; }
async function typeLine(text, cls = "") {
  const span = document.createElement("span");
  if (cls) span.className = cls;
  term.appendChild(span);
  for (const ch of text) { span.textContent += ch; term.scrollTop = term.scrollHeight; await sleep(18); }
  term.appendChild(document.createTextNode("\n"));
}

const COMMANDS = {
  help: () => tprint(
`<span class="y">Available commands:</span>
  <span class="c">whoami</span>      who is Mahmoud?
  <span class="c">now</span>         what I'm working on today
  <span class="c">journey</span>     career timeline
  <span class="c">skills</span>      tech stack
  <span class="c">teach</span>       my teaching years
  <span class="c">recs</span>        what people say about me
  <span class="c">cob</span>         run a (fake) T24 Close-Of-Business
  <span class="c">contact</span>     ways to reach me
  <span class="c">linkedin</span>    open LinkedIn
  <span class="c">github</span>      open GitHub
  <span class="c">vcard</span>       download my contact card
  <span class="c">theme</span>       toggle light / dark
  <span class="c">clear</span>       clear the screen`),
  whoami: () => tprint(`<span class="b">Mahmoud Zithar</span> — Software Engineer @ Ejada Systems.
T24 (Temenos Transact) developer for Saudi financial clients, onsite in Riyadh since Nov 2025.
Ex-Teaching Assistant · B.S. Computer Science (CGPA 3.73).`),
  now: () => tprint(`<span class="c">●</span> L2 production support · T24 Accounting module · <span class="y">Nera (by Al Rajhi Bank)</span>
  payments · SIMAH blocks · book entries · COB · weekly deployments · DR drills`),
  journey: () => tprint(JOURNEY.map(j =>
    `<span class="d">${fmtYM(j.start).padEnd(9)} → ${fmtYM(j.end).padEnd(9)}</span> <span class="${j.type === "teach" ? "y" : "c"}">${j.role}</span> · ${j.title}`).join("\n")),
  skills: () => tprint(SKILLS.slice(0, 4).map(s => `<span class="y">${s.title}:</span> ${s.items.join(", ")}`).join("\n")),
  teach: () => tprint(`<span class="y">${fmtDuration(teachMonths)}</span> in the classroom · <span class="y">${STATS.courses}</span> courses supported:
  · AIU University        — AI, ML, Deep Learning, GANs, CV, OOP, Networks, Cybersecurity… (Oct 2023 – Mar 2025)
  · Arab Academy (AASTMT) — AWS student projects (Feb 2023 – Jun 2023)
Teaching made me a better engineer: if you can explain it, you understand it.`),
  contact: () => tprint(`<span class="y">email</span>    <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
<span class="y">phone</span>    <a href="tel:${CONTACT.phone}">${CONTACT.phonePretty}</a>
<span class="y">whatsapp</span> <a href="${CONTACT.whatsapp}" target="_blank">wa.me/201002557288</a>
<span class="y">linkedin</span> <a href="${CONTACT.linkedin}" target="_blank">linkedin.com/in/abou-zithar</a>
<span class="y">github</span>   <a href="${CONTACT.github}" target="_blank">github.com/abou-zithar</a>`),
  recs: () => tprint(RECOMMENDATIONS.map(r => `<span class="y">${r.name}</span> <span class="d">(${r.type})</span>
  “${r.text.split(". ")[0]}.”`).join("\n")),
  linkedin: () => { tprint("Opening LinkedIn…"); window.open(CONTACT.linkedin, "_blank"); },
  github: () => { tprint("Opening GitHub…"); window.open(CONTACT.github, "_blank"); },
  vcard: () => { tprint("Generating contact card…"); downloadVCard(); },
  theme: () => { toggleTheme(); tprint(`Theme → ${document.documentElement.dataset.theme}`); },
  clear: () => { term.innerHTML = ""; },
  cob: async () => {
    const stages = ["APPLICATION", "SYSTEM.WIDE", "REPORTING", "START.OF.DAY", "ONLINE"];
    tprint(`<span class="y">TSA.SERVICE COB → START</span>`);
    for (const st of stages) {
      for (let p = 0; p <= 100; p += 20) {
        const bar = "█".repeat(p / 10) + "░".repeat(10 - p / 10);
        const lines = term.innerHTML.split("\n");
        if (p > 0) lines.splice(-2, 1);
        term.innerHTML = lines.join("\n");
        tprint(`  ${st.padEnd(13)} <span class="c">${bar}</span> ${p}%`);
        await sleep(90);
      }
    }
    tprint(`<span class="c">✔ COB completed.</span> Date rolled. No errors in EB.EOD.ERROR 🎉`);
  },
  sudo: (args) => args.join(" ").includes("hire")
    ? tprint(`<span class="c">[sudo] access granted.</span> Great choice! → <a href="${CONTACT.linkedin}" target="_blank">message me on LinkedIn</a>`)
    : tprint(`<span class="r">sudo: permission denied</span> (hint: try <span class="c">sudo hire mahmoud</span>)`),
};

let busy = false;
const cmdHistory = []; let hIdx = 0;
$("#termForm").addEventListener("submit", async e => {
  e.preventDefault();
  if (busy) return;
  const input = $("#termInput");
  const raw = input.value.trim();
  input.value = "";
  if (!raw) return;
  cmdHistory.push(raw); hIdx = cmdHistory.length;
  tprint(`<span class="c">❯</span> ${esc(raw)}`);
  const [cmd, ...args] = raw.toLowerCase().split(/\s+/);
  const fn = COMMANDS[cmd];
  busy = true;
  if (fn) await fn(args);
  else tprint(`<span class="r">command not found:</span> ${esc(cmd)} — type <span class="c">help</span>`);
  busy = false;
});
$("#termInput").addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && hIdx > 0) { e.preventDefault(); e.target.value = cmdHistory[--hIdx]; }
  if (e.key === "ArrowDown") { e.preventDefault(); hIdx = Math.min(cmdHistory.length, hIdx + 1); e.target.value = cmdHistory[hIdx] || ""; }
  if (e.key === "Tab") {
    e.preventDefault();
    const m = Object.keys(COMMANDS).find(c => c.startsWith(e.target.value.toLowerCase()));
    if (m) e.target.value = m;
  }
});

(async function boot() {
  busy = true;
  await typeLine("$ ssh mahmoud@t24-riyadh", "d");
  tprint(`<span class="c">✔</span> Connected to <span class="b">Temenos Transact</span> · Asia/Riyadh`);
  await sleep(250);
  await typeLine("$ whoami", "d");
  COMMANDS.whoami();
  await sleep(250);
  await typeLine("$ cat status.txt", "d");
  COMMANDS.now();
  tprint(`\nType <span class="c">help</span> to explore · try <span class="c">cob</span> 👀`);
  busy = false;
})();

/* ---------- Command palette ---------- */
const PALETTE = [
  { icon: "🧭", label: "Go to Journey", hint: "section", run: () => location.hash = "#journey" },
  { icon: "🎓", label: "Go to Teaching", hint: "section", run: () => location.hash = "#teaching" },
  { icon: "🛠️", label: "Go to Skills", hint: "section", run: () => location.hash = "#skills" },
  { icon: "🚀", label: "Go to Projects", hint: "section", run: () => location.hash = "#projects" },
  { icon: "💬", label: "Go to Recommendations", hint: "section", run: () => location.hash = "#recommendations" },
  { icon: "📜", label: "Go to Education", hint: "section", run: () => location.hash = "#education" },
  { icon: "✉️", label: "Go to Contact", hint: "section", run: () => location.hash = "#contact" },
  { icon: "💼", label: "Open LinkedIn", hint: "link", run: () => window.open(CONTACT.linkedin, "_blank") },
  { icon: "🐙", label: "Open GitHub", hint: "link", run: () => window.open(CONTACT.github, "_blank") },
  { icon: "💬", label: "Message on WhatsApp", hint: "link", run: () => window.open(CONTACT.whatsapp, "_blank") },
  { icon: "📞", label: "Call Mahmoud", hint: CONTACT.phonePretty, run: () => location.href = `tel:${CONTACT.phone}` },
  { icon: "📋", label: "Copy email address", hint: "action", run: copyEmail },
  { icon: "📇", label: "Download contact card (vCard)", hint: "action", run: downloadVCard },
  { icon: "🌓", label: "Toggle theme", hint: "action", run: toggleTheme },
];
const pal = $("#palette"), palIn = $("#paletteInput"), palList = $("#paletteList");
let palItems = [], palSel = 0;
function renderPalette() {
  const q = palIn.value.toLowerCase();
  palItems = PALETTE.filter(p => p.label.toLowerCase().includes(q));
  palSel = Math.min(palSel, Math.max(0, palItems.length - 1));
  palList.innerHTML = palItems.map((p, i) =>
    `<li class="${i === palSel ? "sel" : ""}" data-i="${i}"><span class="pi">${p.icon}</span>${p.label}<small>${p.hint}</small></li>`).join("")
    || `<li class="muted">No results</li>`;
}
function openPalette() { pal.hidden = false; palIn.value = ""; palSel = 0; renderPalette(); palIn.focus(); }
function closePalette() { pal.hidden = true; }
function runPalette(i) { const p = palItems[i]; if (!p) return; closePalette(); p.run(); }
$("#paletteBtn").addEventListener("click", openPalette);
palIn.addEventListener("input", () => { palSel = 0; renderPalette(); });
palList.addEventListener("click", e => { const li = e.target.closest("li[data-i]"); if (li) runPalette(+li.dataset.i); });
pal.addEventListener("click", e => { if (e.target === pal) closePalette(); });
addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.hidden ? openPalette() : closePalette(); return; }
  if (pal.hidden) return;
  if (e.key === "Escape") closePalette();
  if (e.key === "ArrowDown") { e.preventDefault(); palSel = (palSel + 1) % palItems.length; renderPalette(); }
  if (e.key === "ArrowUp") { e.preventDefault(); palSel = (palSel - 1 + palItems.length) % palItems.length; renderPalette(); }
  if (e.key === "Enter") { e.preventDefault(); runPalette(palSel); }
});

/* ---------- Footer year ---------- */
$("#year").textContent = NOW.getFullYear();

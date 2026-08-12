const characters = [
  {
    id: "mellow-mimi",
    name: "멜로우미미",
    enName: "Mellow Mimi",
    species: "사막여우",
    birthday: "3월 3일",
    personality: "차분하고 나른함",
    description: "평소에는 케모마일 티를 마시며 느긋하게 쉬지만, 아이돌 음악이 나오면 누구보다 신나게 리듬을 타는 사막여우.",
    image: null,
    keywords: ["아이돌 덕후", "티타임", "카메라", "반짝임", "보라", "별"],
    detailUrl: "characters/mellow-mimi.html"
  }
  // 새 캐릭터는 다음처럼 추가:
  // ,{
  //   id: "new-character",
  //   name: "새 캐릭터",
  //   enName: "New Character",
  //   species: "동물",
  //   birthday: "0월 0일",
  //   personality: "성격",
  //   description: "소개",
  //   image: null,
  //   keywords: ["키워드1", "키워드2"],
  //   detailUrl: "characters/new-character.html"
  // }
];

const series = [
  { number: "SERIES 01", icon: "☕", title: "Mellow Tea Time", description: "느긋한 티타임과 작은 일상 이야기." },
  { number: "SERIES 02", icon: "♫", title: "Idol Night", description: "좋아하는 음악이 시작되면 달라지는 미미." },
  { number: "SERIES 03", icon: "✦", title: "Sparkle Camera", description: "반짝이는 순간을 담아두는 미미의 기록." }
];

const goods = [
  { category: "plush", label: "PLUSH", title: "첫 번째 인형", description: "실제 이미지가 준비되면 등록하세요.", image: null },
  { category: "stationery", label: "STATIONERY", title: "첫 번째 문구", description: "실제 이미지가 준비되면 등록하세요.", image: null },
  { category: "fashion", label: "FASHION", title: "첫 번째 패션 아이템", description: "실제 이미지가 준비되면 등록하세요.", image: null },
  { category: "etc", label: "ETC", title: "첫 번째 굿즈", description: "실제 이미지가 준비되면 등록하세요.", image: null }
];

function placeholder(label) {
  return `<div class="art-placeholder"><span>${label}<br />추후 이미지 추가</span></div>`;
}

function renderCharacters() {
  const root = document.querySelector("#character-list");
  if (!root) return;

  root.innerHTML = characters.map((c) => `
    <a class="character-list-card" href="${c.detailUrl}">
      ${c.image ? `<img src="${c.image}" alt="${c.name}" />` : placeholder("CHARACTER ART")}
      <div class="character-list-copy">
        <p class="mini-label">${c.enName}</p>
        <h2>${c.name}</h2>
        <p>${c.description}</p>
        <div class="tag-row">${c.keywords.map(k => `<span>${k}</span>`).join("")}</div>
        <span class="text-link">프로필 보기 →</span>
      </div>
    </a>
  `).join("");
}

function renderSeries() {
  const root = document.querySelector("#series-list");
  if (!root) return;

  root.innerHTML = series.map((s) => `
    <article class="series-full-card">
      <div class="series-icon-big">${s.icon}</div>
      <div>
        <span class="card-number">${s.number}</span>
        <h2>${s.title}</h2>
        <p>${s.description}</p>
      </div>
    </article>
  `).join("");
}

function renderGoods() {
  const root = document.querySelector("#goods-list");
  if (!root) return;

  root.innerHTML = goods.map((g) => `
    <article class="goods-page-card">
      ${g.image ? `<img src="${g.image}" alt="${g.title}" />` : placeholder("GOODS IMAGE")}
      <div class="goods-page-copy">
        <span class="mini-label">${g.label}</span>
        <h3>${g.title}</h3>
        <p>${g.description}</p>
      </div>
    </article>
  `).join("");
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  });
}

function setupNewsletter() {
  const form = document.querySelector("#newsletter-form");
  const message = document.querySelector("#form-message");
  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(form).get("email");
    message.textContent = `${email} 주소로 구독 신청 데모가 완료되었습니다. 실제 발송 기능은 추후 연결하세요.`;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCharacters();
  renderSeries();
  renderGoods();
  setupMenu();
  setupNewsletter();
});

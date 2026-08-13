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
  { id: "acrylic-stand", label: "ACRYLIC STAND", title: "멜로우미미 아크릴스탠드", description: "아이돌 덕질룸 콘셉트의 입체 아크릴스탠드.", image: "assets/acrylic-stand.png", status: "판매 준비 중" },
  { id: "grip-talk", label: "GRIP TOK", title: "멜로우미미 스마트톡", description: "휴대폰에 붙여 사용하는 입체형 스마트톡.", image: "assets/grip-talk.png", status: "판매 준비 중" },
  { id: "keyring", label: "KEYRING", title: "멜로우미미 키링", description: "가방이나 파우치에 달기 좋은 캐릭터 키링.", image: "assets/keyring.png", status: "판매 준비 중" },
  { id: "pouch", label: "POUCH", title: "멜로우미미 파우치", description: "보라색 무드의 데일리 캐릭터 파우치.", image: "assets/pouch.png", status: "판매 준비 중" },
  { id: "plush", label: "PLUSH", title: "멜로우미미 봉제인형", description: "멜로우미미의 포근한 봉제인형.", image: "assets/plush.png", status: "판매 준비 중" }
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
      <a class="goods-card-link" href="goods.html#${g.id}" aria-label="${g.title} 상세 보기">
        <div class="goods-image-wrap">
          <img src="${g.image}" alt="${g.title}" />
          <span class="goods-badge">${g.status}</span>
        </div>
        <div class="goods-page-copy">
          <span class="mini-label">${g.label}</span>
          <h3>${g.title}</h3>
          <p>${g.description}</p>
        </div>
      </a>
      <button class="buy-button" type="button" data-product-id="${g.id}">구매하기</button>
    </article>
  `).join("");
}


function renderMellowGoods() {
  const root = document.querySelector("#mellow-goods");
  if (!root) return;
  root.innerHTML = goods.map((g) => `
    <article class="goods-page-card">
      <a class="goods-card-link" href="../goods.html#${g.id}" aria-label="${g.title} 상세 보기">
        <div class="goods-image-wrap">
          <img src="../${g.image}" alt="${g.title}" />
          <span class="goods-badge">${g.status}</span>
        </div>
        <div class="goods-page-copy">
          <span class="mini-label">${g.label}</span>
          <h3>${g.title}</h3>
        </div>
      </a>
      <button class="buy-button" type="button" data-product-id="${g.id}">구매하기</button>
    </article>
  `).join("");
}



function getProductById(id) {
  return goods.find((item) => item.id === id);
}

function openPurchaseModal(product) {
  const modal = document.querySelector("#purchase-modal");
  const title = document.querySelector("#purchase-title");
  const image = document.querySelector("#purchase-image");
  const status = document.querySelector("#purchase-status");
  const message = document.querySelector("#purchase-message");
  if (!modal || !product) return;

  title.textContent = product.title;
  image.src = product.image;
  image.alt = product.title;
  status.textContent = product.status;
  message.textContent = "현재는 구매 연결 전 데모 버튼입니다. 스마트스토어 주소를 준비하면 이 버튼을 바로 구매 링크로 연결할 수 있습니다.";

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePurchaseModal() {
  const modal = document.querySelector("#purchase-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}


function renderHomeGoods() {
  const root = document.querySelector("#home-goods");
  if (!root) return;
  root.innerHTML = goods.map((g) => `
    <article class="goods-page-card">
      <a class="goods-card-link" href="goods.html#${g.id}" aria-label="${g.title} 상세 보기">
        <div class="goods-image-wrap">
          <img src="${g.image}" alt="${g.title}" />
          <span class="goods-badge">${g.status}</span>
        </div>
        <div class="goods-page-copy">
          <span class="mini-label">${g.label}</span>
          <h3>${g.title}</h3>
        </div>
      </a>
      <button class="buy-button" type="button" data-product-id="${g.id}">구매하기</button>
    </article>
  `).join("");
}

function setupPurchaseModal() {
  const modal = document.querySelector("#purchase-modal");
  if (!modal) return;

  document.addEventListener("click", (event) => {
    const buy = event.target.closest(".buy-button");
    if (buy) {
      openPurchaseModal(getProductById(buy.dataset.productId));
      return;
    }
    if (event.target.closest("[data-modal-close]")) closePurchaseModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePurchaseModal();
  });
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
  renderMellowGoods();
  renderHomeGoods();
  setupMenu();
  setupNewsletter();
  setupPurchaseModal();
});

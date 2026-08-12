/*
  Mellow Mimi website
  ------------------------------------
  핵심 아이디어:
  1) 캐릭터/시리즈/굿즈 정보는 아래 데이터 객체에서 관리
  2) HTML은 "틀"만 담당
  3) 실제 카드 생성은 JS가 담당
  4) 앞으로 캐릭터를 추가할 때 characters 배열에 객체 하나를 추가하면 됨
*/

const characters = [
  {
    id: "mellow-mimi",
    name: "멜로우미미",
    enName: "Mellow Mimi",
    species: "사막여우",
    birthday: "3월 3일",
    personality: "차분하고 나른함",
    description:
      "평소에는 케모마일 티를 마시며 느긋하게 쉬지만, 아이돌 음악이 나오면 누구보다 신나게 리듬을 타는 사막여우.",
    image: "assets/mellow-mimi-sheet.png",
    keywords: ["아이돌 덕후", "티타임", "카메라", "반짝임", "보라", "별"]
  }

  /*
    두 번째 캐릭터가 추가되면 이런 식으로 계속 넣으면 됩니다.

    ,{
      id: "new-character",
      name: "새 캐릭터",
      enName: "New Character",
      species: "동물 종족",
      birthday: "0월 0일",
      personality: "성격",
      description: "소개 문장",
      image: "assets/new-character.png",
      keywords: ["키워드1", "키워드2"]
    }
  */
];

const series = [
  {
    icon: "☕",
    number: "SERIES 01",
    title: "Mellow Tea Time",
    description: "미미가 조용히 차를 마시며 쉬는 느긋한 일상."
  },
  {
    icon: "♫",
    number: "SERIES 02",
    title: "Idol Night",
    description: "좋아하는 아이돌 음악이 시작되면 갑자기 텐션이 올라가는 밤."
  },
  {
    icon: "✦",
    number: "SERIES 03",
    title: "Sparkle Camera",
    description: "반짝이는 것과 귀여운 순간을 카메라에 담는 미미의 기록."
  }
];

const goods = [
  {
    category: "plush",
    label: "PLUSH",
    title: "Mellow Mimi Plush",
    description: "멜로우미미 기본 인형 · 샘플",
    image: "assets/mellow-mimi-sheet.png"
  },
  {
    category: "stationery",
    label: "STATIONERY",
    title: "Mellow Sticker Set",
    description: "미미의 표정과 아이돌 감성 스티커 · 샘플",
    image: "assets/mellow-mimi-sheet.png"
  },
  {
    category: "fashion",
    label: "FASHION",
    title: "Mimi Ribbon Cape",
    description: "보라색 리본과 케이프를 활용한 패션 아이템 · 샘플",
    image: "assets/mellow-mimi-sheet.png"
  },
  {
    category: "stationery",
    label: "STATIONERY",
    title: "Tea Time Memo",
    description: "케모마일 티타임 콘셉트 메모지 · 샘플",
    image: "assets/mellow-mimi-sheet.png"
  }
];

const characterGrid = document.querySelector("#character-grid");
const seriesGrid = document.querySelector("#series-grid");
const goodsGrid = document.querySelector("#goods-grid");

function renderCharacters() {
  characterGrid.innerHTML = characters
    .map(
      (character) => `
        <article class="character-card">
          <div class="character-card-media">
            <img src="${character.image}" alt="${character.name} character sheet" />
          </div>

          <div class="character-card-content">
            <p class="en-name">${character.enName}</p>
            <h3>${character.name}</h3>

            <dl>
              <dt>종족</dt>
              <dd>${character.species}</dd>

              <dt>생일</dt>
              <dd>${character.birthday}</dd>

              <dt>성격</dt>
              <dd>${character.personality}</dd>
            </dl>

            <p style="margin: 14px 0 0; color: var(--muted); font-size: 12px;">
              ${character.description}
            </p>

            <div class="keyword-wrap">
              ${character.keywords
                .map((keyword) => `<span>${keyword}</span>`)
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSeries() {
  seriesGrid.innerHTML = series
    .map(
      (item) => `
        <article class="series-card">
          <span class="series-number">${item.number}</span>
          <span class="series-icon" aria-hidden="true">${item.icon}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderGoods(filter = "all") {
  const visibleGoods =
    filter === "all"
      ? goods
      : goods.filter((item) => item.category === filter);

  goodsGrid.innerHTML = visibleGoods
    .map(
      (item) => `
        <article class="goods-card">
          <div class="goods-art">
            <img src="${item.image}" alt="${item.title}" />
          </div>

          <div class="goods-content">
            <span class="goods-category">${item.label}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });
}

function setupGoodsFilters() {
  document.querySelectorAll(".filter-pill").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-pill")
        .forEach((item) => item.classList.remove("is-active"));

      button.classList.add("is-active");
      renderGoods(button.dataset.filter);
    });
  });
}

function setupNewsletter() {
  const form = document.querySelector("#newsletter-form");
  const message = document.querySelector("#form-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = new FormData(form).get("email");
    message.textContent = `${email} 로 구독 신청을 받았습니다. 실제 발송 기능은 이메일 서비스와 연결하세요.`;
    form.reset();
  });
}

function init() {
  renderCharacters();
  renderSeries();
  renderGoods();
  setupMobileMenu();
  setupGoodsFilters();
  setupNewsletter();
}

document.addEventListener("DOMContentLoaded", init);

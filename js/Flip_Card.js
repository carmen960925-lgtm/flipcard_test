const CARDS = [
  {
    title: "祷告 / 礼拜",
    def: "向神明表达心意。",
    ex: "感谢神明、祈求平安。"
  },
  {
    title: "行善",
    def: "用行动帮助别人。",
    ex: "帮忙、分享或捐助。"
  },
  {
    title: "节日",
    def: "一起庆祝重要的日子。",
    ex: "团聚、祝福、分享故事。"
  },
  {
    title: "守教规",
    def: "按规定把事做好。",
    ex: "有礼貌、守时间、守规则。"
  }
];

const grid = document.getElementById("grid");
const btnBack = document.getElementById("btnBack");
const btnRestart = document.getElementById("btnRestart");

function makeCard(c){
  const el = document.createElement("article");
  el.className = "card";
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", `${c.title}：点击翻面`);

  el.innerHTML = `
    <div class="inner">
      <section class="face front">
        <div class="frontCenter">
          <div class="titleFrame" aria-hidden="true">
            <h2 class="frontTitle">${c.title}</h2>
          </div>
        </div>
      </section>

      <section class="face back">
        <div class="backCenter">
          <div class="backBox">
            <h2 class="backTitle">${c.title}</h2>
            <p class="kv"><b>定义：</b>${c.def}</p>
            <p class="kv"><b>例子：</b>${c.ex}</p>
          </div>
        </div>
      </section>
    </div>
  `;

  const toggle = () => el.classList.toggle("flip");

  el.addEventListener("click", toggle);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  return el;
}

function render(){
  grid.innerHTML = "";
  CARDS.forEach(c => grid.appendChild(makeCard(c)));
}

function reset(){
  document.querySelectorAll(".card").forEach(x => x.classList.remove("flip"));
}

render();

/* 返回按钮：先留空（以后有 menu link 再改） */
btnBack?.addEventListener("click", (e) => {
  e.preventDefault();
});

/* 重开：全部翻回正面 */
btnRestart?.addEventListener("click", (e) => {
  e.preventDefault();
  reset();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const electronicDisplay = document.querySelector(".container");
const rankingDisplay = document.querySelector(".rankingBox");
const title = document.querySelector(".title");
const titleDisplay = document.querySelector(".titleBox");
const containerImg = document.querySelector(".containerImg");
const rankingItem = document.querySelectorAll(".rankingItem");
const rankingItemWrapper = document.querySelectorAll(".rankingItemWrapper");
const wrapperLank = document.querySelectorAll(".wrapperLank");

const defaultDisplay = "container";
const defaultTitleDisplay = "titleBox";
const defaultRankingItem = "rankingItem";
const defaultRankingItemWrapper = "rankingItemWrapper";
const fadeIn =
  "container animate__animated animate__fadeInLeft animate__delay-01s animate__fast";
const fadeOut =
  "container animate__animated animate__fadeOutRight animate__delay-01s animate__fast";
const titleFadeIn =
  "container animate__animated animate__fadeIn animate__delay-01s animate__fast";
const titleFadeOut =
  "container animate__animated animate__fadeOut animate__delay-01s animate__fast";
const fadeInUp =
  "rankingItemWrapper animate__animated animate__fadeInUp animate__delay-01s animate__faster";
const fadeOutUp =
  "rankingItemWrapper animate__animated animate__fadeOutUp animate__delay-01s animate__faster";
const fadeInUp2 =
  "rankingItem animate__animated animate__fadeInUp animate__delay-01s animate__faster";
const fadeOutUp2 =
  "rankingItem animate__animated animate__fadeOutUp animate__delay-01s animate__faster";

let j = 0;
const MAX_LENGTH = rankingItem.length;
const widthMargin = document.body.clientWidth - 1890;
const heightMargin = document.body.clientHeight - containerImg.clientHeight;
electronicDisplay.style.transform = `translate(${widthMargin / 2}px, 0)`;
document.querySelector(".title").style.fontSize = "80px";

titleSizeSetting(document.querySelector(".titleArea").clientWidth);

function titleSizeSetting(width) {
  console.log(width);
  if (width < 1280) {
    setTimeout(() => {
      document.querySelector(".title").style.lineHeight = "65px";
      document.querySelector(".titleArea").style.visibility = "visible";
      document.querySelector(".titleArea").style.visibility = "visible";
    }, 10);
    return;
  }

  const titleAreaElementNode = document.querySelector(".titleArea");
  titleAreaElementNode.style.visibility = "hidden";

  setTimeout(() => {
    if (width > 1280) {
      document.querySelector(".title").style.lineHeight = "65px";
      document.querySelector(".title").style.fontSize =
        parseInt(
          document.querySelector(".title").style.fontSize.split("px")[0]
        ) -
        1 +
        "px";
      document.querySelector(".titleArea").style.visibility = "visible";
    }
    document.querySelector(".titleArea").style.visibility = "visible";
    titleSizeSetting(document.querySelector(".titleArea").clientWidth);
  }, 10);
}

class RankingTable {
  static responsiveTitleSize() {
    if (title.clientWidth > 890) {
      title.style.fontSize = "68px";
      title.style.lineHeight = "1em";
      titleSizeSetting();
    }
  }

  static animationShowDisplay(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        electronicDisplay.className = fadeIn;
        electronicDisplay.style.display = "block";
      }
      this.responsiveTitleSize();
      titleSizeSetting();
    });
  }

  static animationHideDisplay(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        electronicDisplay.className = fadeOut;
        electronicDisplay.style.display = "block";
      }
      this.responsiveTitleSize();
    });
    titleSizeSetting();
  }

  static nonAnimationShowDisplay(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        electronicDisplay.className = defaultDisplay;
        electronicDisplay.style.display = "block";
      }
      this.responsiveTitleSize();
      titleSizeSetting();
    });
  }

  static nonAnimationHideDisplay(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        electronicDisplay.className = defaultDisplay;
        electronicDisplay.style.display = "none";
      }
      this.responsiveTitleSize();
      titleSizeSetting();
    });
  }

  static animationShowAllRank(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        for (let i = 0; i < rankingItemWrapper.length; i++) {
          rankingItem[i].className = fadeInUp2;
          rankingItem[i].style.display = "block";
          rankingItemWrapper[i].className = fadeInUp;
          rankingItemWrapper[i].style.display = "flex";
          titleSizeSetting();
        }
      }
    });
  }

  static nonAnimationShowAllRank(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        for (let i = 0; i < rankingItemWrapper.length; i++) {
          rankingItem[i].className = defaultRankingItem;
          rankingItem[i].style.display = "block";
          rankingItemWrapper[i].className = defaultRankingItemWrapper;
          rankingItemWrapper[i].style.display = "flex";
          titleSizeSetting();
        }
      }
    });
  }

  static animationHideAllRank(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        for (let i = 0; i < rankingItemWrapper.length; i++) {
          rankingItem[i].className = fadeOutUp2;
          rankingItemWrapper[i].className = fadeOutUp;
        }
        for (let i = 0; i < rankingItemWrapper.length; i++) {
          setTimeout(() => {
            rankingItem[i].style.display = "none";
            rankingItemWrapper[i].style.display = "none";
          }, 400);
          titleSizeSetting();
        }
      }
    });
  }

  static nonAnimationHideAllRank(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        for (let i = 0; i < rankingItemWrapper.length; i++) {
          rankingItem[i].className = defaultRankingItem;
          rankingItemWrapper[i].className = defaultRankingItemWrapper;
          rankingItem[i].style.display = "none";
          rankingItemWrapper[i].style.display = "none";
        }
        titleSizeSetting();
      }
    });
  }

  static animationShowPrevRank(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        for (let i = 0; i < rankingItemWrapper.length; i++) {
          rankingItem[i].className = defaultRankingItem;
          rankingItem[i].style.display = "none";
          rankingItemWrapper[i].className = defaultRankingItemWrapper;
          rankingItemWrapper[i].style.display = "none";
        }
        j < 8 ? (j = 0) : (j = j - 8);
        let NUM = j;
        let count = 0;
        function print() {
          rankingItem[NUM].className = fadeInUp2;
          rankingItem[NUM].style.display = "block";
          rankingItemWrapper[NUM].style.display = "flex";
          NUM++;
          count++;
        }
        let interval = setInterval(() => {
          document.addEventListener("keydown", () => {
            count = 8;
          });
          if (count === 8) {
            clearInterval(interval);
          } else {
            print(j);
          }
        }, 600);
      }
      titleSizeSetting();
    });
  }

  static animationShowNextRank(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        for (let i = 0; i < rankingItemWrapper.length; i++) {
          rankingItem[i].className = defaultRankingItem;
          rankingItem[i].style.display = "none";
          rankingItemWrapper[i].className = defaultRankingItemWrapper;
          rankingItemWrapper[i].style.display = "none";
        }
        j + 8 < MAX_LENGTH ? (j = j + 8) : (j = j);
        let NUM = j;
        let count = 0;
        function print() {
          rankingItem[NUM].className = fadeInUp2;
          rankingItem[NUM].style.display = "block";
          rankingItemWrapper[NUM].style.display = "flex";
          NUM++;
          count++;
        }
        let interval = setInterval(() => {
          document.addEventListener("keydown", () => {
            count = 8;
          });
          if (count === 8 || NUM === MAX_LENGTH) {
            clearInterval(interval);
          } else {
            print();
          }
        }, 600);
      }
      titleSizeSetting();
    });
  }

  static nonAnimationShowNextRank(key) {
    document.addEventListener("keydown", (e) => {
      console.log(e.code);
      if (e.code === `Key${key.toUpperCase()}`) {
        for (let i = 0; i < rankingItemWrapper.length; i++) {
          rankingItem[i].className = defaultRankingItem;
          rankingItem[i].style.display = "none";
          rankingItemWrapper[i].className = defaultRankingItemWrapper;
          rankingItemWrapper[i].style.display = "none";
        }
        j + 8 < MAX_LENGTH ? (j = j + 8) : (j = j);
        let NUM = j;
        let count = 0;
        function print() {
          rankingItem[NUM].className = defaultRankingItem;
          rankingItem[NUM].style.display = "block";
          rankingItemWrapper[NUM].style.display = "flex";
          NUM++;
          count++;
        }
        let interval = setInterval(() => {
          document.addEventListener("keydown", () => {
            count = 8;
          });
          if (count === 8 || NUM === MAX_LENGTH) {
            clearInterval(interval);
          } else {
            print();
          }
        }, 0);
        if (
          total_page.innerText > document.querySelector("#now_page").innerText
        ) {
          document.querySelector("#now_page").innerText =
            parseInt(document.querySelector("#now_page").innerText) + 1;
        } else {
          document.querySelector("#now_page").innerText = total_page.innerText;
        }
        titleSizeSetting();
      }
    });
  }

  static nonAnimationShowPrevRank(key) {
    document.addEventListener("keydown", (e) => {
      console.log(e.code);
      if (e.code === `Key${key.toUpperCase()}`) {
        for (let i = 0; i < rankingItemWrapper.length; i++) {
          rankingItem[i].className = defaultRankingItem;
          rankingItem[i].style.display = "none";
          rankingItemWrapper[i].className = defaultRankingItemWrapper;
          rankingItemWrapper[i].style.display = "none";
        }
        j < 8 ? (j = 0) : (j = j - 8);
        let NUM = j;
        let count = 0;
        function print() {
          rankingItem[NUM].className = defaultRankingItem;
          rankingItem[NUM].style.display = "block";
          rankingItemWrapper[NUM].style.display = "flex";
          NUM++;
          count++;
        }
        let interval = setInterval(() => {
          document.addEventListener("keydown", () => {
            count = 8;
          });
          if (count === 8) {
            clearInterval(interval);
          } else {
            print(j);
          }
        }, 0);
        if (document.querySelector("#now_page").innerText > 1) {
          document.querySelector("#now_page").innerText =
            parseInt(document.querySelector("#now_page").innerText) - 1;
        } else {
          document.querySelector("#now_page").innerText = 1;
        }
        titleSizeSetting();
      }
    });
  }
}

function animation() {
  RankingTable.animationShowDisplay("q");
  RankingTable.animationHideDisplay("w");
  RankingTable.animationShowAllRank("a");
  RankingTable.animationHideAllRank("s");
  RankingTable.animationShowPrevRank("c");
  RankingTable.animationShowNextRank("v");
}
function nonAnimation() {
  RankingTable.nonAnimationShowDisplay("q");
  RankingTable.nonAnimationHideDisplay("w");
  RankingTable.nonAnimationShowAllRank("a");
  RankingTable.nonAnimationHideAllRank("s");
  RankingTable.nonAnimationShowPrevRank("c");
  RankingTable.nonAnimationShowNextRank("v");
}

RankingTable.responsiveTitleSize();

rightMouseClickLock();
mouseDragLock();
function rightMouseClickLock() {
  window.oncontextmenu = (e) => e.preventDefault();
}
function mouseDragLock() {
  window.onselectstart = () => false;
}

// animation();
nonAnimation();

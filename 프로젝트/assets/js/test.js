const electronicDisplay = document.querySelector(".board_List");
const rankingDisplay = document.querySelector(".boardListItem ul");
const containerImg = document.querySelector(".boardList_container");
const rankingItem = document.querySelectorAll(".boardListDesc");
const rankingItemWrapper = document.querySelectorAll(".boardItemWrapper");
const wrapperLank = document.querySelectorAll(".number");

const defaultDisplay = "board_List";
const defaultRankingItem = "boardListDesc";
const defaultRankingItemWrapper = "boardItemWrapper";
const fadeIn =
  "board_List animate__animated animate__fadeInLeft animate__delay-01s animate__fast";
const fadeOut =
  "board_List animate__animated animate__fadeOutRight animate__delay-01s animate__fast";
const titleFadeIn =
  "board_List animate__animated animate__fadeIn animate__delay-01s animate__fast";
const titleFadeOut =
  "board_List animate__animated animate__fadeOut animate__delay-01s animate__fast";
const fadeInUp =
  "boardItemWrapper animate__animated animate__fadeInUp animate__delay-01s animate__faster";
const fadeOutUp =
  "boardItemWrapper animate__animated animate__fadeOutUp animate__delay-01s animate__faster";
const fadeInUp2 =
  "boardListDesc animate__animated animate__fadeInUp animate__delay-01s animate__faster";
const fadeOutUp2 =
  "boardListDesc animate__animated animate__fadeOutUp animate__delay-01s animate__faster";

let j = 0;
const MAX_LENGTH = rankingItem.length;
const widthMargin = document.body.clientWidth - 1890;
const heightMargin = document.body.clientHeight - containerImg.clientHeight;

class RankingTable {
  static animationShowDisplay(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        electronicDisplay.className = fadeIn;
        electronicDisplay.style.display = "block";
      }
    });
  }

  static animationHideDisplay(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        electronicDisplay.className = fadeOut;
        electronicDisplay.style.display = "block";
      }
    });
  }

  static nonAnimationShowDisplay(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        electronicDisplay.className = defaultDisplay;
        electronicDisplay.style.display = "block";
      }
    });
  }

  static nonAnimationHideDisplay(key) {
    document.addEventListener("keydown", (e) => {
      if (e.code === `Key${key.toUpperCase()}`) {
        electronicDisplay.className = defaultDisplay;
        electronicDisplay.style.display = "none";
      }
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

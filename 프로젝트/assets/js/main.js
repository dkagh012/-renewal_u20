/**
 * DOM 요소에 클래스를 토글(추가 또는 제거)하는 함수
 * @param {Element} target 클래스를 변경하고자 하는 DOM 요소
 * @param {string} className 변경하고자 하는 클래스명
 */
function toggleClassList(target, className) {
  target.classList.toggle(className);
}

/**
 * DOM 요소에 클래스를 추가하는 함수
 * @param {Element} target 클래스를 변경하고자 하는 DOM 요소
 * @param {string} className 추가하고자 하는 클래스명
 */
function addClassList(target, className) {
  target.classList.add(className);
}

/**
 * DOM 요소에서 클래스를 제거하는 함수
 * @param {Element} target 클래스를 변경하고자 하는 DOM 요소
 * @param {string} className 제거하고자 하는 클래스명
 */
function removeClassList(target, className) {
  target.classList.remove(className);
}

/**
 * Word 파일 다운로드 함수
 * @param {string} linkHref 파일명
 */
function generateWordDownload(linkHref) {
  const link = document.createElement("a");
  link.href = `${linkHref}.html`;
  link.download = `${linkHref}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function createHiddenIdForm(method, action, name, value) {
  let form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", action);
  let id = document.createElement("input");
  id.setAttribute("type", "hidden");
  id.setAttribute("name", name);
  id.setAttribute("value", value);
  form.appendChild(id);
  return form;
}

function changeTableSize(pageSize) {
  let form = createHiddenIdForm("get", "", "page_size", pageSize.value);
  const searchParams = new URLSearchParams(location.search);
  for (const param of searchParams) {
    if (param[0] != "page_size") {
      let selectSize = document.createElement("input");
      selectSize.setAttribute("type", "hidden");
      selectSize.setAttribute("name", param[0]);
      selectSize.setAttribute("value", param[1]);
      form.appendChild(selectSize);
    }
  }
  document.body.appendChild(form);
  form.submit();
}

/**
 * 값 교환 함수
 * @param {Element} inputValue 값 교환할 DOM 요소
 * @param {Element} swapValue 값 교환할 대상 DOM 요소
 * @param {string} attributeName 설정할 속성 이름
 * @param {string} value 설정할 값
 */
function swapValues(inputValue, swapValue, attributeName, value) {
  const tempValue = inputValue[value];
  inputValue[value] = swapValue[value];
  inputValue.setAttribute(attributeName, inputValue[value]);
  swapValue.setAttribute(attributeName, swapValue[value]);
  swapValue[value] = tempValue;
}

/**
 * Select2 초기화 함수
 * @param {Element} selectElement 초기화할 Select 요소
 * @param {string} value 선택할 옵션 값
 */
function changeSelect2Option(selectElement, value) {
  // select2를 초기화합니다.
  $(selectElement).select2("destroy");
  // 선택된 option을 변경합니다.
  $(selectElement).val(value);
  // 변경된 option을 적용합니다.
  $(selectElement).select2();
}

/**
 * 선택한 종목이 필드 종목인지 확인하는 함수
 * @param {string} sport 선택한 종목
 * @returns {boolean} 필드 종목 여부
 */
function isFieldSport(sport) {
  const fieldSports = [
    "discusthrow",
    "hammerthrow",
    "highjump",
    "javelinthrow",
    "longjump",
    "polevault",
    "shotput",
    "triplejump",
    "heptathlon",
    "decathlon",
  ];
  return fieldSports.includes(sport);
}

/**
 * 종목 선택 값에 따라 Input 상자를 표시/숨기는 함수
 * @param {string} value 선택한 종목 값
 */
function SportInputBox(value) {
  input_decathlon.forEach((element) => element.classList.add("hidden"));
  input_heptathlon.forEach((element) => element.classList.add("hidden"));
  input_field.forEach((element) => element.classList.add("hidden"));
  input_track.forEach((element) => element.classList.add("hidden"));
  if (value === "decathlon") {
    input_decathlon.forEach((element) => element.classList.remove("hidden"));
  } else if (value === "heptathlon") {
    input_heptathlon.forEach((element) => element.classList.remove("hidden"));
  } else if (isFieldSport(value)) {
    input_field.forEach((element) => element.classList.remove("hidden"));
  } else {
    input_track.forEach((element) => element.classList.remove("hidden"));
  }
}

/**
 * 모든 체크박스 선택/해제 함수
 * @param {Element} box 전체 선택/해제할 체크박스
 */
function toggle(box) {
  const checkboxes = document.querySelectorAll("input.entry_check");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = box.checked;
  }
}

/**
 * 일정 체크박스 이벤트 처리 함수
 * @param {Element} target hidden 클래스를 추가/제거할 대상 요소
 * @param {string} event 추가, 제거, 토글 이벤트
 * @param {NodeList} eventTarget required 속성을 설정할 요소들의 리스트
 * @param {boolean} required required 속성 값
 */
function ScheduleCheckBoxEvent(target, event, eventTarget, required) {
  target.classList[event]("hidden");
  if (required === true) {
    eventTarget.forEach((input) => {
      input.setAttribute("required", required);
    });
  } else {
    eventTarget.forEach((input) => {
      input.removeAttribute("required");
    });
  }
}

// 클릭 이벤트 핸들러 추가
const menuTitles = document.querySelectorAll(".MobileMenuTitle");
const MobileTabMenuBtn = document.querySelector(".MobileTabMenuBtn");
const MobileTabMenu = document.querySelector(".MobileTabMenu");
const MobileBackground = document.querySelector(".MobileBackground");
let activeMenuList = null;

// 조편성 체크박스
const ScheduleCheckBox = document.querySelectorAll(".schedule_checkBox");
const ScheduleBox = document.querySelectorAll(".schedule_Box");
const sportSelect = document.querySelector("#sportsKey");
const schedule_Q = [];

// 일정 관리 추가 CheckBox
const input_track = document.querySelectorAll(".input_track");
const input_decathlon = document.querySelectorAll(".input_decathlon");
const input_heptathlon = document.querySelectorAll(".input_heptathlon");
const input_field = document.querySelectorAll(".input_field");

// 10종 7종 교체 버튼
const changeTable = document.querySelectorAll(".changeTableBtn");
const TableList = document.querySelectorAll(".TableList");

// 조편성 생성 Swap 버튼
let clickedInput = null;
const deleteBtn = document.querySelectorAll("#deleteBtn1");
const inputs = document.querySelectorAll('input[name="name[]"]');
const athlete = document.querySelectorAll(
  "#Relay_Tbody td:nth-child(2) input:first-child"
);
const pb = document.querySelectorAll("#pb");

// popup
const popup = document.querySelectorAll(".popup");
const popupItem = document.querySelectorAll(".popupItem");

// 클릭 이벤트 핸들러 추가
document.addEventListener("click", (event) => {
  const target = event.target;
  const isMenuTitle = target.matches(".MobileMenuTitle");
  const isMenuList = target.closest(".MenuList");

  if (!isMenuTitle && !isMenuList && activeMenuList) {
    // 다른 영역을 클릭하고 활성화된 메뉴가 있을 때
    activeMenuList.style.display = "none";
    activeMenuList = null;
  }
});

// 모바일 메뉴 클릭 및 다른 곳 클릭 시 숨김
if (menuTitles) {
  menuTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const menuList = title.nextElementSibling;
      if (menuList === activeMenuList) {
        menuList.style.display = "none";
        activeMenuList = null;
      } else {
        if (activeMenuList) {
          activeMenuList.style.display = "none";
        }
        menuList.style.display = "block";
        activeMenuList = menuList;
      }

      const otherMenuLists = document.querySelectorAll(
        ".MenuList:not(.MobileMenuItem ul.MenuList)"
      );
      otherMenuLists.forEach((otherList) => {
        if (otherList !== menuList) {
          otherList.style.display = "none";
        }
      });
    });
  });

  if (MobileTabMenuBtn) {
    MobileTabMenuBtn.addEventListener("click", () => {
      if (MobileTabMenu.classList.contains("hidden")) {
        removeClassList(MobileTabMenu, "hidden");
        removeClassList(MobileBackground, "hidden");
      } else {
        addClassList(MobileTabMenu, "hidden");
        addClassList(MobileBackground, "hidden");
      }
    });

    MobileBackground.addEventListener("click", () => {
      addClassList(MobileTabMenu, "hidden");
      addClassList(MobileBackground, "hidden");
    });
  }
}

// 메뉴 마우스 over
if (document.querySelector("#sh_adm_nav")) {
  $("#sh_adm_nav > li").hover(
    function () {
      $(".nav_smn", this).slideDown(10);
      $(this).addClass("active");
    },
    function () {
      $(".nav_smn", this).slideUp(10);
      $(this).removeClass("active");
    }
  );
}

// 사진 촬영 기능
if (document.getElementById("video")) {
  const video = document.getElementById("video");
  const captureButton = document.getElementById("capture-btn");

  // Request access to the camera
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      // Set the video element source to the camera stream
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error("Error accessing camera:", error);
    });

  // Add click event listener to the capture button
  captureButton.addEventListener("click", async () => {
    // Create a canvas element with the same dimensions as the video stream
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    const context = canvas.getContext("2d");

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to a Blob object
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/jpeg")
    );

    // Use the file picker to select a save location and file name
    const opts = {
      types: [
        {
          description: "JPEG image",
          accept: { "image/jpeg": [".jpg"] },
        },
      ],
      suggestedName: "jung.jpg",
    };

    const handle = await window.showSaveFilePicker(opts);
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
  });
}
// AD카드 부분
if (document.querySelector(".AD_card_Box") !== null) {
  const AD_card_Boxes = document.querySelectorAll(".AD_card_Box");
  AD_card_Boxes.forEach((AD_card_Box) => {
    const adFrontName = AD_card_Box.querySelector(".AD_front_name p");
    const AD_front_name = AD_card_Box.querySelector(".AD_form");
    const AD_back_name = AD_card_Box.querySelector(".AD_back_name");
    const adBackName = AD_card_Box.querySelector(".AD_back_name p");
    const frontNameLength = adFrontName.textContent.length;
    const backNameLength = adBackName.textContent.length;
    adFrontName.style.lineHeight =
      frontNameLength >= 55
        ? "22px"
        : frontNameLength >= 38
        ? "22px"
        : frontNameLength >= 28
        ? "30px"
        : frontNameLength >= 15
        ? "28px"
        : "";
    adFrontName.style.fontSize =
      frontNameLength >= 55
        ? "17px"
        : frontNameLength >= 38
        ? "22px"
        : frontNameLength >= 28
        ? "26px"
        : frontNameLength >= 15
        ? "28px"
        : "";
    AD_front_name.style.bottom = frontNameLength >= 28 ? "37%" : "";
    AD_back_name.style.top =
      backNameLength >= 55
        ? "6%"
        : backNameLength >= 38
        ? "6%"
        : backNameLength >= 16
        ? "6%"
        : "";
    adBackName.style.fontSize =
      backNameLength >= 55
        ? "10px"
        : backNameLength >= 38
        ? "10px"
        : backNameLength >= 16
        ? "10px"
        : backNameLength >= 12
        ? "12px"
        : "";
    adBackName.style.zoom =
      backNameLength >= 55 ? "0.7" : backNameLength >= 38 ? "0.8" : "";
  });
}

// Top 버튼
if (document.querySelector("#js-scroll")) {
  document.querySelector("#js-scroll").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}

// 일정관리 생성
if (document.querySelector("#sportsKey")) {
  // 조편성 체크박스
  input_track.forEach((element) => {
    const scheduleQElements = element.querySelectorAll(".schedule_Q");
    schedule_Q.push(...scheduleQElements);
  });

  for (let i = 0; i < ScheduleBox.length; i++) {
    ScheduleCheckBox[i].addEventListener("click", () => {
      const inputs = ScheduleBox[i].querySelectorAll("input, select");
      if (ScheduleCheckBox[i].checked) {
        ScheduleCheckBoxEvent(ScheduleBox[i], "remove", inputs, true);
      } else {
        ScheduleCheckBoxEvent(ScheduleBox[i], "add", inputs, false);
      }
    });
  }

  sportSelect.addEventListener("change", () => {
    // Select가 변경될 때마다 초기화
    for (let i = 0; i < ScheduleCheckBox.length; i++) {
      const inputs = ScheduleBox[i].querySelectorAll("input, select");
      ScheduleCheckBox[i].checked = false;
      ScheduleCheckBoxEvent(ScheduleBox[i], "add", inputs, false);
    }
    SportInputBox(sportSelect.value);
  });
}

// 조편성 등록 페이지
const groupNumber = document.querySelectorAll(".groupNumber");
for (let i = 0; i < groupNumber.length; i++) {
  if (groupNumber.length >= 2) {
    addClassList(groupNumber[i], "groupTableThree");
    removeClassList(groupNumber[i], "groupTable");
  }
}

// 10종 7종 교체 버튼
for (let i = 0; i < changeTable.length; i++) {
  changeTable[i].addEventListener("click", () => {
    for (let j = 0; j < changeTable.length; j++) {
      addClassList(TableList[j], "hidden");
      removeClassList(changeTable[j], "changeBtn_color");
    }
    removeClassList(TableList[i], "hidden");
    addClassList(changeTable[i], "changeBtn_color");
  });
}

// 워드 파일 다운로드
function KO_RunWord() {
  generateWordDownload("wordRun_KO");
}

function EN_RunWord() {
  generateWordDownload("wordRun_EN");
}

function KO_throwWord() {
  generateWordDownload("wordThrow_KO");
}

function EN_throwWord() {
  generateWordDownload("wordThrow_EN");
}

function KO_verticalWord() {
  generateWordDownload("word_vertical_KO");
}

function EN_verticalWord() {
  generateWordDownload("word_vertical_EN");
}

function KO_horizontalWord() {
  generateWordDownload("word_horizontality_KO");
}

function EN_horizontalWord() {
  generateWordDownload("word_horizontality_EN");
}

function KO_RelayWord() {
  generateWordDownload("wordRelay_KO");
}

function EN_RelayWord() {
  generateWordDownload("wordRelay_EN");
}

function KO_Mixed() {
  generateWordDownload("word_Mixed_KO");
}

function EN_Mixed() {
  generateWordDownload("word_Mixed_EN");
}

// // 조편성 생성 SWap 버튼
if (document.querySelectorAll(".filed2_swap")) {
  for (let i = 0; i < inputs.length; i++) {
    let cnt = 0; // cnt 값 초기화
    inputs[i].addEventListener("click", () => {
      cnt++;
      if (cnt == 2) {
        if (!clickedInput) {
          pbInput = pb[i];
          clickedInput = inputs[i];
          athleteInput = athlete[i];
          addClassList(inputs[i], "input_click");
        } else {
          console.log(clickedInput);
          console.log(athleteInput);
          // 선수 이름 저장
          swapValues(clickedInput, inputs[i], "value", "value");
          // 선수BIB
          swapValues(athleteInput, athlete[i], "value", "value");
          // pb 아이디값 저장
          swapValues(pbInput, pb[i], "value", "value");
          removeClassList(clickedInput, "input_click");
          clickedInput = null;
          athleteInput = null;
          pbInput = null;
        }
        cnt = 0; // 클릭 횟수 초기화
      }
      document.addEventListener("click", (event) => {
        if (event.target.name !== "name[]") {
          pbInput = null;
          clickedInput = null;
          athleteInput = null;
          removeClassList(inputs[i], "input_click");
          cnt = 0; // 클릭 횟수 초기화
        }
        if (event.target !== inputs[i]) {
          cnt = 0;
        }
      });
    });
  }
  // 선수삭제
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", function () {
      const row = this.closest("tr");
      if (row) {
        row.remove();
      }
    });
  }
}

// 팝업
for (let i = 0; i < popup.length; i++) {
  popup[i].addEventListener("click", (event) => {
    event.stopPropagation();
    for (let j = 0; j < popupItem.length; j++) {
      if (j !== i) {
        popupItem[j].classList.add("hidden");
      }
    }
    toggleClassList(popupItem[i], "hidden");
  });
}

// 테이블 색 넣는 부분
const TwoBackground = document.querySelectorAll(".Two_tr");
const desiredColor = "#eff3f9";

for (let i = 0; i < TwoBackground.length; i++) {
  const Two_tr = TwoBackground[i].querySelectorAll("tr");
  for (let j = 0; j < Two_tr.length; j++) {
    if (j % 4 === 2 || j % 4 === 3) {
      Two_tr[j].style.backgroundColor = desiredColor;
    }
  }
}
for (let i = 0; i < TwoBackground.length; i++) {
  const Two_tr = TwoBackground[i].querySelectorAll("tr");
  for (let j = 0; j < Two_tr.length; j++) {
    Two_tr[j].addEventListener("mouseover", function () {
      if (j % 2 === 0) {
        Two_tr[j].style.backgroundColor = "#f9d8e6";
        Two_tr[j + 1].style.backgroundColor = "#f9d8e6";
      } else {
        Two_tr[j].style.backgroundColor = "#f9d8e6";
        Two_tr[j - 1].style.backgroundColor = "#f9d8e6";
      }
    });
    Two_tr[j].addEventListener("mouseout", function () {
      if (j % 2 === 0) {
        if (j % 4 === 2 || j % 4 === 3) {
          Two_tr[j].style.backgroundColor = desiredColor;
          Two_tr[j + 1].style.backgroundColor = desiredColor;
        } else {
          Two_tr[j].style.backgroundColor = "";
          Two_tr[j + 1].style.backgroundColor = "";
        }
      } else {
        if (j % 4 === 2 || j % 4 === 3) {
          Two_tr[j].style.backgroundColor = desiredColor;
          Two_tr[j - 1].style.backgroundColor = desiredColor;
        } else {
          Two_tr[j].style.backgroundColor = "";
          Two_tr[j - 1].style.backgroundColor = "";
        }
      }
    });
  }
}
const GroupTableNumber = document.querySelectorAll(".groupTableThree");

if (GroupTableNumber.length >= 3) {
  for (let i = 0; i < GroupTableNumber.length; i++) {
    GroupTableNumber[i].style.width = "calc(100% / 3.1)";
  }
} else if (GroupTableNumber.length >= 2) {
  for (let i = 0; i < GroupTableNumber.length; i++) {
    GroupTableNumber[i].style.width = "calc(49% - 3px)";
  }
} else {
  for (let i = 0; i < GroupTableNumber.length; i++) {
    GroupTableNumber[i].style.width = "100%";
  }
}
const groupCheck = document.querySelectorAll(
  '.grouptSelectList input[type="checkbox"]'
);
const grouptSelectList = document.querySelectorAll(".grouptSelectList > div");

groupCheck.forEach((checkbox, i) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      grouptSelectList[i].classList.add("check");
    } else {
      grouptSelectList[i].classList.remove("check");
    }
  });
});

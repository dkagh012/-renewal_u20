/*---------------------- 삼면보드  ------------------------- */
function horizontal_boardValue(button) {
  const parentParentElement = button.parentElement.parentElement;
  const participants_information = [];
  const participant_information = {};
  if (document.querySelector("#period").value === "") {
    document.querySelector("#period").value = prompt(
      "현재 시기를 입력하세요" + ""
    );
  }
  // participant_information["Title"] = document.querySelector("#title").value;
  participant_information["Bib"] =
    parentParentElement.children[2].children[0].value;
  participant_information["PlayerName"] =
    parentParentElement.children[3].children[0].value;
  participant_information["period"] = document.querySelector("#period").value;
  participant_information["title"] = document.querySelector("#title").innerHTML;
  let sports = document.querySelector("#sport").value;
  if (document.querySelector("#gender").value === "M") {
    if (sports === "longjump") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/male/longjump.png";
    } else if (sports === "triplejump") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/male/triplejump.png";
    }
  } else if (document.querySelector("#gender").value === "F") {
    if (sports === "longjump") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/female/longjump.png";
    } else if (sports === "triplejump") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/female/triplejump.png";
    }
  }

  const periodInputs = parentParentElement.querySelectorAll(
    'input[name="game_trial_result[]"]'
  );
  const periods = [];

  for (let j = 0; j < periodInputs.length; j++) {
    periods.push(periodInputs[j].value);
  }

  participant_information["record"] = periods;
  participants_information.push(participant_information);

  let periodInput = document.querySelector("#period");

  if (periodInput) {
    let periodValue = parseInt(periodInput.value) - 1;
    for (let i = 0; i < participants_information.length; i++) {
      let participant = participants_information[i];

      if (participant["record"].length > periodValue) {
        participant["period_value"] = participant["record"][periodValue];
      }
    }
  }
  const jsonData = boardJSON(participants_information);
  AjaxData(jsonData);
}
function Throw_boardValue(button) {
  const parentParentElement = button.parentElement.parentElement;
  const participants_information = [];
  const participant_information = {};
  if (document.querySelector("#period").value === "") {
    document.querySelector("#period").value = prompt(
      "현재 시기를 입력하세요" + ""
    );
  }
  // participant_information["Title"] = document.querySelector("#title").value;
  participant_information["Bib"] =
    parentParentElement.children[2].children[0].value;
  participant_information["PlayerName"] =
    parentParentElement.children[3].children[0].value;
  participant_information["period"] = document.querySelector("#period").value;
  participant_information["title"] = document.querySelector("#title").innerHTML;
  let sports = document.querySelector("#sport").value;
  if (document.querySelector("#gender").value === "M") {
    if (sports === "longjump") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/male/shot_put.png";
    } else if (sports === "javelinthrow") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/male/javelin.png";
    } else if (sports === "discusthrow") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/male/discus.png";
    } else if (sports === "hammerthrow") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/male/hammer_throwing.png";
    }
  } else if (document.querySelector("#gender").value === "F") {
    if (sports === "shotput") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/female/shot_put.png";
    } else if (sports === "javelinthrow") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/female/javelin.png";
    } else if (sports === "discusthrow") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/female/discus.png";
    } else if (sports === "hammerthrow") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/female/hammer_throwing.png";
    }
  }

  const periodInputs = parentParentElement.querySelectorAll(
    'input[name="game_trial_result[]"]'
  );
  const periods = [];

  for (let j = 0; j < periodInputs.length; j++) {
    periods.push(periodInputs[j].value);
  }

  participant_information["record"] = periods;
  participants_information.push(participant_information);

  let periodInput = document.querySelector("#period");

  if (periodInput) {
    let periodValue = parseInt(periodInput.value) - 1;
    for (let i = 0; i < participants_information.length; i++) {
      let participant = participants_information[i];

      if (participant["record"].length > periodValue) {
        participant["period_value"] = participant["record"][periodValue];
      }
    }
  }
  const jsonData = boardJSON(participants_information);
  AjaxData(jsonData);
}
function Vertical_boardValue(button) {
  const buttonThead = button;
  const tableElement = buttonThead.closest("table");
  const theadElement = tableElement.querySelector("thead");
  if (document.querySelector("#vertical_height").value === "") {
    document.querySelector("#vertical_height").value = prompt(
      "현재 높이의 순서를 입력하세요" + ""
    );
  }
  if (document.querySelector("#period").value === "") {
    document.querySelector("#period").value = prompt(
      "현재 시기를 입력하세요" + ""
    );
  }
  let periodInput = document.querySelector("#vertical_height");
  const participants_information = [];
  const participant_information = {};
  // 클릭된 버튼의 부모 tr 요소 찾기
  const parentTrElement = button.parentElement.parentElement;
  participant_information["Bib"] =
    parentTrElement.children[2].children[0].value;
  participant_information["PlayerName"] =
    parentTrElement.children[3].children[0].value;
  participant_information["title"] = document.querySelector("#title").innerHTML;

  let sports = document.querySelector("#sport").value;
  if (document.querySelector("#gender").value === "M") {
    if (sports === "highjump") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/male/highjump.png";
    } else if (sports === "polevault") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/male/polevault.png";
    }
  } else if (document.querySelector("#gender").value === "F") {
    if (sports === "highjump") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/female/highjump.png";
    } else if (sports === "polevault") {
      participant_information["sports"] =
        "assets/images/U20_pictogram/female/polevault.png";
    }
  }
  // 부모 tr 요소의 클래스 이름에서 colNumber 찾기
  const classList = [...parentTrElement.classList];
  const colClass = classList.find(
    (className) =>
      className.startsWith("col1_") || className.startsWith("col2_")
  );
  const colNumber = colClass.split("_")[1];

  // colNumber를 사용하여 firstTr와 secondTr 찾기
  const firstTr = document.querySelector(`.col1_${colNumber}`);
  const secondTr = document.querySelector(`.col2_${colNumber}`);

  // 모든 game_result 값 가져오기
  const gameResults1 = firstTr.querySelectorAll('[id^="gameresult"]');
  const gameResults2 = secondTr.querySelectorAll('[id^="gameresult"]');

  // periodInput 값에 따라 해당 인덱스의 gameresult 값을 찾아 로깅
  const periodValue = parseInt(periodInput.value, 10);
  let originalValue;
  let resultValue;
  let cnt = document.querySelector("#period").value;

  if (periodValue >= 1 && periodValue <= 12) {
    originalValue = gameResults1[periodValue - 1].value;
  } else if (periodValue >= 13 && periodValue <= 24) {
    originalValue = gameResults2[periodValue - 13].value;
  }

  resultValue = originalValue.charAt(cnt - 1);

  let heightValue;
  if (periodValue >= 1 && periodValue <= 24) {
    const gamerHeightElement = theadElement.querySelector(
      `.gamerheight${periodValue}`
    );
    heightValue = gamerHeightElement ? gamerHeightElement.value : null;
  }
  participant_information["vertical_height"] = heightValue;
  participant_information["period_value"] = resultValue;
  participants_information.push(participant_information);
  const jsonData = boardJSON(participants_information);
  AjaxData(jsonData);
}
function boardList() {
  const participants_data = document.getElementsByTagName("tbody")[0].children;
  threeRank_List = [];
  const participants_information = [];
  for (let i = 0; i < participants_data.length; i += 2) {
    const participant = participants_data[i];
    const participant_information = {};

    participant_information["round"] = document.querySelector("#round").value;
    participant_information["gender"] = document.querySelector("#gender").value;
    participant_information["sports"] = document.querySelector("#sport").value;
    participant_information["PlayerName"] =
      participant.children[3].children[0].value;
    participant_information["Bib"] = participant.children[2].children[0].value;
    participant_information["Rank"] = participant.children[0].children[0].value;
    participant_information["newrecord"] =
      participant.querySelector("#Newrecord").value;
    participant_information["highest"] =
      participant.querySelector("#result").value;
    participant_information["title"] =
      document.querySelector("#title").innerHTML;
    participants_information.push(participant_information);
  }
  const jsonData = boardJSON(participants_information);
  AjaxData(jsonData);
}

function boardJSON(participants) {
  let participantsJSON = {};
  participants.forEach((participant) => {
    let record = participant.period_value;
    if (record === "X") {
      record = "FOUL";
    }
    if (record === "-") {
      record = "PASS";
    }
    let gender = participant.gender;
    if (gender === "M") {
      gender = "남자";
    } else if (gender === "F") {
      gender = "여자";
    }
    let round = participant.round;
    if (round === "1") {
      round = "자격라운드";
    } else if (round === "2") {
      round = "예선전";
    } else if (round === "3") {
      round = "준준결승전";
    } else if (round === "4") {
      round = "준결승전";
    } else if (round === "5") {
      round = "결승전";
    }
    let sport = participant.sport;

    if (sport === "discusthrow") {
      sport = "원반던지기";
    } else if (sport === "hammerthrow") {
      sport = "해머던지기";
    } else if (sport === "highjump") {
      sport = "높이뛰기";
    } else if (sport === "javelinthrow") {
      sport = "창던지기";
    } else if (sport === "longjump") {
      sport = "멀리뛰기";
    } else if (sport === "polevault") {
      sport = "장대높이뛰기";
    } else if (sport === "shotput") {
      sport = "포환던지기";
    } else if (sport === "triplejump") {
      sport = "삼단뛰기";
    }

    const bibJSON = {
      title: participant.title,
      round: round,
      gender: gender,
      sport: sport,
      name: participant.PlayerName,
      record: record,
      height: participant.vertical_height,
      newrecord: participant.newrecord,
      period: participant.period,
      sports: participant.sports,
      highest: participant.highest,
    };
    participantsJSON[participant.Bib] = bibJSON;
  });
  return JSON.stringify(participantsJSON, null, 2);
}
/*---------------------- 시간 업데이트  ------------------------- */

function input_time(boolean) {
  if (boolean) {
    var today = new Date();
    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    var dateString = year + "-" + month + "-" + day;
    var hours = ("0" + today.getHours()).slice(-2);
    var minutes = ("0" + today.getMinutes()).slice(-2);
    var seconds = ("0" + today.getSeconds()).slice(-2);
    var timeString = hours + ":" + minutes + ":" + seconds;
    let total = dateString + " " + timeString;
    let intime = document.querySelector("input[name='starttime']");
    intime.value = total;
  }
}
/*---------------------- 데이터 보내기  ------------------------- */
// fetch 함수를 사용하여 백엔드에 데이터를 전송합니다.
// your_backend_endpoint_url은 백엔드의 엔드포인트 URL로 대체해야 합니다.

function AjaxData(jsonData, url) {
  $.ajax({
    type: "post",
    url: url,
    data: { record: jsonData },
    success: function (data) {
      if (data) alert(data);
    },
  });
}
// function AjaxData(jsonData) {
//   console.log(jsonData);
//   fetch("your_backend_endpoint_url", {
//     method: "POST", // POST 메서드를 사용하여 데이터를 전송합니다.
//     headers: {
//       "Content-Type": "application/json", // 요청의 헤더에 'application/json'을 명시하여 JSON 데이터를 전송합니다.
//     },
//     body: jsonData, // JSON.stringify()를 사용하여 데이터를 JSON 형태로 변환하여 전송합니다.
//   })
//     .then((response) => response.json()) // 백엔드로부터 받은 응답을 JSON 형태로 파싱합니다.
//     .then((data) => {
//       // AJAX 요청 성공 후 수행할 동작을 여기에 추가할 수 있습니다.
//     })
//     .catch((error) => {
//       console.error("백엔드 요청 실패:", error);
//       // AJAX 요청 실패 시 수행할 동작을 여기에 추가할 수 있습니다.
//     });
// }
/*---------------------- 중간 배열 담고 있는 배열    ------------------------- */
let threeRank_List = [];

/*---------------------- 입력 한 높이뛰기 업데이트 함수    ------------------------- */

// 높이 업데이트 함수
function updateHeight(highElements, i, calculatedHeight, indexElements, rain) {
  if (
    calculatedHeight < parseFloat(highElements[i - 1].value) ||
    isNaN(parseFloat(indexElements[rain - 1].value))
  ) {
    return highElements[i - 1].value;
  }
  return calculatedHeight;
}

// 결과 확인 함수
function checkResult(currentResult) {
  if (
    ["XXX", "X--", "-X-", "--X", "XX-", "X-X", "-XX"].includes(currentResult)
  ) {
    return "NM";
  } else if (currentResult === "---") {
    return "DNS";
  }
  return 0.0;
}
/*----------------------선수들의 정보를 JSON으로 변경    ------------------------- */
/*
 * 주어진 participants 배열을 JSON 형식으로 변환하는 함수입니다.
 *
 * @param {Array} participants - 참가자들의 정보를 담고 있는 배열입니다.
 * @returns {string} - JSON 형식으로 변환된 문자열을 반환합니다.
 */

function boardJSON(participants) {
  let participantsJSON = {};
  participants.forEach((participant) => {
    let recordData = {};
    if (participant.period) {
      participant.period.forEach((item) => {
        const keyValue = item.replace(/"/g, "").split(":");
        recordData[keyValue[0]] = keyValue[1];
      });
    }
    const bibJSON = {
      name: participant.PlayerName,
      gender: participant.Gender,
    };

    if (Object.keys(recordData).length > 0) {
      bibJSON.record = recordData;
    }
    participantsJSON[participant.Bib || participant.name] = bibJSON;
  });
  return JSON.stringify(participantsJSON, null, 2);
}
function convertParticipantsToJSON(participants) {
  let participantsJSON = {};
  participants.forEach((participant) => {
    let recordData = {};
    let windData = {};
    if (participant.period) {
      participant.period.forEach((item) => {
        const keyValue = item.replace(/"/g, "").split(":");
        recordData[keyValue[0]] = keyValue[1];
      });
    }
    if (participant.wind) {
      participant.wind.forEach((item) => {
        const keyValue = item.replace(/"/g, "").split(":");
        windData[keyValue[0]] = keyValue[1];
      });
    }
    let highest = participant.highest;
    if (highest === "-2") {
      highest = "NM";
    } else if (highest === "-3") {
      highest = "DQ";
    } else if (highest === "-4") {
      highest = "DNF";
    } else if (highest === "-5") {
      highest = "DNS";
    }
    if (highest === -2) {
      highest = "NM";
    } else if (highest === -3) {
      highest = "DQ";
    } else if (highest === -4) {
      highest = "DNF";
    } else if (highest === -5) {
      highest = "DNS";
    } else if (highest === -1) {
      highest = " ";
    }
    const bibJSON = {
      title: participant.Title,
      group: participant.Group,
      state: participant.State,
      order: participant.Order,
      rank: participant.rank,
      round: participant.Round,
      sport: participant.Sport,
      state: participant.State,
      lastwind: participant.lastwind,
      country: participant.Country,
      name: participant.PlayerName,
      gender: participant.Gender,
      pass: participant.Qq,
      rr: participant.RR,
      time: participant.Time,
      record: recordData,
      wind: participant.Wind,
      reaction: participant.Reaction,
      // highest: `${participant.highest}`,
      highest: highest,
      medal: participant.Medal,
      bigo: participant.Bigo,
      newrecord: participant.Newrecord,
    };
    if (Object.keys(windData).length > 0) {
      bibJSON.wind = windData;
    }
    if (Object.keys(recordData).length > 0) {
      bibJSON.record = recordData;
    }
    participantsJSON[participant.Bib || participant.name] = bibJSON;
  });
  return JSON.stringify(participantsJSON, null, 2);
}
function TrackJson(participants) {
  let participantsJSON = {};
  participants.forEach((participant) => {
    const bibJSON = {
      title: participant.Title,
      group: participant.Group,
      state: participant.State,
      order: participant.Order,
      rank: participant.rank,
      round: participant.Round,
      sport: participant.Sport,
      state: participant.State,
      country: participant.Country,
      name: participant.PlayerName,
      gender: participant.Gender,
      pass: participant.Qq,
      rr: participant.RR,
      time: participant.Time,
      record: participant.record,
      wind: participant.Wind,
      reaction: participant.Reaction,
      highest: participant.highest,
      medal: participant.Medal,
      bigo: participant.Bigo,
      newrecord: participant.Newrecord,
    };
    participantsJSON[participant.Bib || participant.name] = bibJSON;
  });
  return JSON.stringify(participantsJSON, null, 2);
}
function RelayJSON(participants) {
  let participantsJSON = {};
  participants.forEach((participant) => {
    const bibJSON = {
      title: participant.Title,
      group: participant.Group,
      state: participant.State,
      order: participant.Order,
      rank: participant.rank,
      round: participant.Round,
      sport: participant.Sport,
      state: participant.State,
      country: participant.Country,
      name: participant.PlayerName,
      gender: participant.Gender,
      pass: participant.Qq,
      time: participant.Time,
      rr: participant.RR,
      wind: participant.wind,
      reaction: participant.Reaction,
      record: participant.record,
      highest: participant.highest,
      medal: participant.Medal,
      bigo: participant.Bigo,
      newrecord: participant.Newrecord,
    };
    participantsJSON[participant.Bib || participant.name] = bibJSON;
  });

  return JSON.stringify(participantsJSON, null, 2);
}

/*----------------------  수직 경기 로직  ------------------------- */

// 높이뛰기 윗 부분 입력 부분
function heightFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

// 높이뛰기 입력 처리 함수
function highFormat(obj) {
  obj.value = tftf(obj.value);

  const rain = obj.parentElement.parentElement.className.split("_")[1];
  const highElements = document.querySelectorAll('[name="trial[]"]');
  const indexElements = document.querySelectorAll("#result");

  let highestHeight = 0.0;
  let calculatedHeight = 0.0;

  for (let i = 1; i <= highElements.length; i++) {
    const gameresultId = '[id="gameresult' + i + '"]';
    const currentResult =
      document.querySelectorAll(gameresultId)[rain - 1].value;

    if (currentResult.includes("O")) {
      calculatedHeight = updateHeight(
        highElements,
        i,
        calculatedHeight,
        indexElements,
        rain
      );
      highestHeight = calculatedHeight;
    } else if (["DNS", "DNF", "DQ"].includes(currentResult)) {
      calculatedHeight = currentResult;
      highestHeight = calculatedHeight;
    } else if (calculatedHeight === 0.0) {
      calculatedHeight = checkResult(currentResult);
      highestHeight = calculatedHeight;
    }

    indexElements[rain - 1].value = calculatedHeight;
    rankcal2();
  }
}
/**
 * 사용자가 입력한 값을 룰에 적용하는 함수입니다.
 * 참가자의 점수를 검사하여 특정 패턴이 발견되면 참가자의 최고 점수를 특정 값으로 설정합니다.
 *
 * @param {Object} value - 참가자 정보가 담긴 객체입니다. (participants[i])
 *
 * 이 함수는 참가자의 점수 배열(value.rule)를 검사하여 특정 패턴("DNS", "DNF", "DQ", "XXX")이 발견되면,
 * 해당 패턴에 따라 참가자의 최고 점수(value.highest)를 특정 값("-5", "-4", "-3", "-2")으로 설정합니다.
 * 이는 특정 점수 패턴이 발견될 경우 참가자의 점수를 특별하게 처리하기 위한 로직입니다.
 */
function VerticalUserInput(value) {
  // "DNS" 패턴이 발견되면 최고 점수를 "-5"로 설정
  if (value.rule.indexOf("DNS") !== -1) {
    value.highest = "-5";
  }
  // "DNF" 패턴이 발견되면 최고 점수를 "-4"로 설정
  else if (value.rule.indexOf("DNF") !== -1) {
    value.highest = "-4";
  }
  // "DQ" 패턴이 발견되면 최고 점수를 "-3"로 설정
  else if (value.rule.indexOf("DQ") !== -1) {
    value.highest = "-3";
  }
  // "XXX" 패턴이 발견되면 최고 점수를 "-2"로 설정
  else if (value.rule[0].indexOf("XXX") !== -1) {
    value.highest = "-2";
  }
}
/** 수직 경기 MM처리
 * 참가자의 점수를 검사하여 특정 패턴이 발견되면 참가자의 최고 점수를 "-2"로 설정하는 함수
 *
 * @param {Array} value - 참가자 정보가 담긴 객체 (participants.ruls)
 * @param {Object} participant - 참가자의 점수가 담긴 배열 (participants[i])
 *
 * 이 함수는 참가자의 점수 배열(value)를 검사하여 특정 패턴("XXX", "--X", "-X-", "X--", "XX-", "X-X", "-XX")이 발견되면,
 * 그리고 그 패턴이 "O"를 포함하지 않는 경우, 참가자의 최고 점수(participant.highest)를 "-2"로 설정합니다.
 * 이는 특정 점수 패턴이 발견될 경우 참가자의 점수를 특별하게 처리하기 위한 로직입니다.
 */
function VerticalNM(value, participant) {
  if (
    (value.indexOf("XXX") !== -1 && !value.toString().includes("O")) ||
    (value.indexOf("--X") !== -1 && !value.toString().includes("O")) ||
    (value.indexOf("-X-") !== -1 && !value.toString().includes("O")) ||
    (value.indexOf("X--") !== -1 && !value.toString().includes("O")) ||
    (value.indexOf("XX-") !== -1 && !value.toString().includes("O")) ||
    (value.indexOf("X-X") !== -1 && !value.toString().includes("O")) ||
    (value.indexOf("-XX") !== -1 && !value.toString().includes("O"))
  ) {
    participant.highest = "-2";
  }
}
/**
 * 참가자들에게 순위를 부여하는 함수
 *
 * @param {Array} element - 참가자들의 정보가 담긴 배열
 *
 * 필드경기 투척 수평경기 1~3차 및 수직경기 랭크부여
 * 이 함수는 참가자들의 정보가 담긴 배열(element)을 순회하면서 각 참가자에게 순위를 부여합니다.
 * 만약 참가자가 동순위인 다른 참가자들과 같은 점수를 가지고 있다면, 그들 모두에게 동일한 순위를 부여합니다.
 * 이 함수는 참가자 배열을 직접 수정하여 순위를 업데이트합니다.
 */
function participant_Rank(element) {
  let rank = 0;
  for (let i = 0; i < element.length; i) {
    rank += 1;
    if (element[i].same.length === 0) {
      const rank_field = getParticipantRankByName(
        element,
        element[i].name,
        "rank"
      );
      rank_field.value = rank;
    } else {
      element[i].same.forEach(function (same_participant_data) {
        const rank_field = getParticipantRankByName(
          element,
          same_participant_data.name,
          "rank"
        );
        rank_field.value = rank;
      });
      rank += element[i].same.length - 1;
    }
    i = rank;
  }
}
function highJumpData(element, Array) {
  element.forEach(function (elementValue) {
    Array.push(elementValue.value);
  });
}
// (높이뛰기) 모든 참가자를 배열로 만들어 기록을 하는 부분
function get_participants_information() {
  const Play_Title = document.querySelector("#title").value;
  const Play_Group = document.querySelector("#group").value;
  const Play_Round = document.querySelector("#Round").value;
  const Player_Time = document.querySelector("#Time").value;
  const Play_Event = document.querySelector("#Sport").value;
  const Player_Gender = document.querySelector("#Gender").value;
  const Player_rank = document.querySelectorAll("#rank");
  const participant_BIB_data = document.querySelectorAll("#bib");
  const participant_Qq_data = document.querySelectorAll("#Qq");
  const participant_bigo_data = document.querySelectorAll("#Bigo");
  const participant_newrecord_data = document.querySelectorAll("#Newrecord");
  const PlayerName_Data = document.querySelectorAll("#name");
  const participant_RR_data = document.querySelectorAll("#RR");
  const height_data = document.querySelectorAll("#trial");
  const participant_BIB = [];
  const participant_RR = [];
  const participant_Qq = [];
  const participant_newrecord = [];
  const participant_bigo = [];
  const participant_rank = [];
  const participant_Medal = [];
  const PlayerName = [];
  const height = [];
  const participants_information = [];
  const fail_trial = [];
  const rule = [];
  const period_Array = [];

  if (document.querySelectorAll("#Medal")) {
    const Player_Medal = document.querySelectorAll("#Medal");
    highJumpData(Player_Medal, participant_Medal);
  }
  highJumpData(participant_newrecord_data, participant_newrecord);
  highJumpData(Player_rank, participant_rank);
  highJumpData(participant_bigo_data, participant_bigo);
  participant_RR_data.forEach(function (participant_RR_data) {
    participant_RR.push(participant_RR_data);
  });
  highJumpData(participant_BIB_data, participant_BIB);
  highJumpData(participant_Qq_data, participant_Qq);
  highJumpData(PlayerName_Data, PlayerName);
  height_data.forEach(function (height_data) {
    if (height_data.value != "") height.push(height_data.value);
  });
  const limit = height.length;
  for (let i = 1; i <= participant_BIB.length; i++) {
    const failed_trials = [];
    const rule_test = [];
    const trial1 = document.querySelectorAll(".col1_" + i)[0].children;
    const trial2 = document.querySelectorAll(".col2_" + i)[0].children;
    let count = 0;
    if (trial1.length > 19) {
      let endIndex = trial1.length - 5;
      if (document.querySelector("#Qq") !== null) {
        endIndex = trial1.length - 6;
      }
      for (let j = 5; j < endIndex; j++) {
        let trial_result = trial1[j].children[0].value;
        const failed_regx = new RegExp("X", "g");
        trial_result = trial_result.toUpperCase();
        rule_test.push(trial_result);
        failed_trials.push((trial_result.match(failed_regx) || []).length);
        count += 1;
        if (count == limit) {
          rule.push(rule_test);
          const periodData = height.map((h, index) => {
            if (index < rule_test.length) {
              return `${h}:${rule_test[index]}`;
            }
          });
          period_Array.push(periodData);

          fail_trial.push(failed_trials);
          break;
        }
      }
    }
    if (count == limit) continue;
    for (let j = 0; j < trial2.length - 1 && j != limit - 12; j++) {
      let trial_result = trial2[j].children[0].value;
      const failed_regx = new RegExp("X", "g");
      trial_result = trial_result.toUpperCase();
      rule_test.push(trial_result);
      failed_trials.push((trial_result.match(failed_regx) || []).length);
      count += 1;

      if (count == limit) {
        const periodData = height.map((h, index) => {
          return `${h}:${rule_test[index]}`;
        });
        period_Array.push(periodData);

        rule.push(rule_test);
        fail_trial.push(failed_trials);
        break;
      }
    }
  }

  for (let i = 0; i < participant_BIB.length; i++) {
    const participant_dictionary = {};
    participant_dictionary["Round"] = Play_Round;
    participant_dictionary["Title"] = Play_Title;
    participant_dictionary["Group"] = Play_Group;
    participant_dictionary["rank"] = participant_rank[i];
    participant_dictionary["Gender"] = Player_Gender;
    participant_dictionary["Time"] = Player_Time;
    participant_dictionary["Sport"] = Play_Event;
    participant_dictionary["PlayerName"] = PlayerName[i];
    participant_dictionary["Qq"] = participant_Qq[i];
    participant_dictionary["Newrecord"] = participant_newrecord[i];
    participant_dictionary["Bigo"] = participant_bigo[i];
    participant_dictionary["height"] = height;
    participant_dictionary["failed_attempts"] = fail_trial[i];
    participant_dictionary["period"] = period_Array[i];
    participant_dictionary["rule"] = rule[i];
    if (
      document.querySelector("#State").value === "Start List" ||
      document.querySelector("#State").value === "Live Result" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      participant_dictionary["State"] = "l";
    }
    let shouldRunInputTime = false;
    if (document.querySelector("#State").value === "Start List") {
      shouldRunInputTime = true;
      input_time(shouldRunInputTime);
    } else if (
      document.querySelector("#State").value === "Live Result" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      input_time(shouldRunInputTime);
    }

    if (participant_RR[i].checked) {
      participant_dictionary["RR"] = "y";
    } else {
      participant_dictionary["RR"] = "";
    }
    participant_dictionary["name"] = participant_BIB[i];
    if (document.querySelectorAll("#Medal")) {
      participant_dictionary["Medal"] = participant_Medal[i];
    }

    participant_dictionary["same"] = [];
    participants_information.push(participant_dictionary);
  }
  return participants_information;
}
// 시도를 했는데 떨어진 경우
// 높이뛰기 랭크 함수 수정 필요
function rankcal2() {
  // 참가자들의 정보가 들어 있는 배열
  let participants = [];
  participants = get_participants_information();
  // 참가자별 최대 높이를 구함
  for (let i = 0; i < participants.length; i++) {
    const height_index = participants[i].rule;
    if (height_index !== undefined) {
      VerticalUserInput(participants[i]);
      let x = 0;
      for (let j = 0; j < height_index.length; j++) {
        const UserAllTrue = height_index.toString().includes("O");
        const UserTrue = height_index[j].toString().includes("O");
        const UserFalse = height_index[j].toString().includes("X");
        const UserPass = height_index[j].includes("-");
        if (UserTrue && UserPass === true) {
          participants[i].highest = participants[i].height[x];
          x++;
        } else if (UserTrue) {
          participants[i].highest = participants[i].height[x];
          x++;
        }
        if (UserAllTrue === false) {
          if (UserPass || UserFalse) {
            participants[i].highest = "0";
            x++;
          }
        }
        if (UserAllTrue === true) {
          if (UserPass && height_index[j].includes("O") === false) {
            x++;
          }
        }
        //NM
        VerticalNM(height_index, participants[i]);
      }
      // 입력칸에 아무것도 입력이 안되어있을때.
      if (x == 0 && height_index[0] === "") {
        participants[i].highest = "0";
      }
    }
  }
  // 참가자별 높이별 내림차순
  participantList(participants, "highest");

  // 동순위 발생 시 성공한 경기 무효 시기를 보고 결정 (1회 시기부터 적용)

  for (let i = 0; i < participants.length; i) {
    let highest_duplicate_count = 1;
    // 동순위가 있는지 확인
    for (let j = i + 1; j < participants.length; j++) {
      if (participants[j].rule !== undefined) {
        if (participants[i].highest == participants[j].highest)
          highest_duplicate_count += 1;
      }
    }
    // 만약 동순위가 있으면 해당 길이 만큼 배열을 자르고 시기 순으로 정렬
    if (highest_duplicate_count !== 1) {
      const highest_duplicate = participants.splice(i, highest_duplicate_count);
      // 시기 순으로 오름차순
      highest_duplicate.sort(function (participant1, participant2) {
        const height_index1 = participant1.height.lastIndexOf(
          participant1.highest
        );
        const height_index2 = participant2.height.lastIndexOf(
          participant2.highest
        );

        if (
          participant1.failed_attempts[height_index1] <
          participant2.failed_attempts[height_index2]
        )
          return -1;
        else if (
          participant1.failed_attempts[height_index1] ===
          participant2.failed_attempts[height_index2]
        )
          return 0;
        else return 1;
      });
      // 시기도 같은지 확인
      for (let j = 0; j < highest_duplicate.length; j) {
        let trial_duplicate_count = 1;
        // 동시기가 있는지 확인
        for (let k = j + 1; k < highest_duplicate.length; k++) {
          const height_index1 = highest_duplicate[j].height.lastIndexOf(
            highest_duplicate[j].highest
          );
          const height_index2 = highest_duplicate[k].height.lastIndexOf(
            highest_duplicate[k].highest
          );
          if (
            highest_duplicate[j].failed_attempts[height_index1] ===
            highest_duplicate[k].failed_attempts[height_index2]
          )
            trial_duplicate_count += 1;
        }
        // 만약 동시기가 있으면 해당 길이 만큼 배열을 자르고 전체 시도 순으로 정렬
        if (trial_duplicate_count !== 1) {
          const trial_duplicate = highest_duplicate.splice(
            j,
            trial_duplicate_count
          );
          // 전체 시기 순으로 오름차순
          trial_duplicate.sort(function (participant1, participant2) {
            const participant1_total_failed =
              participant1.failed_attempts.reduce(
                (sum, value) => sum + value,
                0
              );
            const participant2_total_failed =
              participant2.failed_attempts.reduce(
                (sum, value) => sum + value,
                0
              );

            if (participant1_total_failed < participant2_total_failed)
              return -1;
            else if (participant1_total_failed === participant2_total_failed)
              return 0;
            else return 1;
          });
          // 그래도 같은 동시기가 있다면 동점 처리
          for (let k = 0; k < trial_duplicate.length; k) {
            let again_duplicate_count = 1;
            for (let l = k + 1; l < trial_duplicate.length; l++) {
              const participant1_total_failed = trial_duplicate[
                k
              ].failed_attempts.reduce((sum, value) => sum + value, 0);
              const participant2_total_failed = trial_duplicate[
                l
              ].failed_attempts.reduce((sum, value) => sum + value, 0);
              if (participant1_total_failed === participant2_total_failed)
                again_duplicate_count += 1;
            }
            // 전체 무효시기도 같다면 무효 마킹 처리
            if (again_duplicate_count !== 1) {
              const same_marked = trial_duplicate.splice(
                k,
                again_duplicate_count
              );
              for (let l = 0; l < same_marked.length; l++) {
                same_marked[l].same = same_marked;
              }
              trial_duplicate.splice(k, 0, ...same_marked);
            }
            k += again_duplicate_count;
          }
          highest_duplicate.splice(j, 0, ...trial_duplicate);
        }
        j += trial_duplicate_count;
      }
      participants.splice(i, 0, ...highest_duplicate);
    }
    i += highest_duplicate_count;
  }
  // 랭크 부여
  participant_Rank(participants);
  let SendParticipants = participants;
  return SendParticipants;
}

function SendVerticalData(url) {
  const jsonData = convertParticipantsToJSON(rankcal2());
  AjaxData(jsonData, url);
}
/*---------------------- 기록 관련 순위 매기는 로직  ------------------------- */

/**
 * 참가 선수들을 최고 점수를 기준으로 내림차순 정렬하는 함수
 *
 * @param {Array} participant - 참가 선수들의 정보가 담긴 배열
 * @param {string} highest - 참가 선수들의 최고 점수 속성 이름
 *
 * 이 함수는 JavaScript의 내장 sort 함수를 사용하여 참가자 배열을 정렬합니다.
 * sort 함수는 두 참가자의 'highest' 속성을 비교하여 순서를 결정합니다.
 * parseFloat 함수를 사용하여 속성 값을 부동 소수점 숫자로 변환한 후 비교합니다.
 * 이는 속성 값이 문자열로 저장되어 있을 경우, 문자열 비교로 인한 예기치 않은 결과를 방지하기 위함입니다.
 */
function participantList(participant, highest) {
  participant.sort(function (participant1, participant2) {
    if (parseFloat(participant1[highest]) < parseFloat(participant2[highest]))
      return 1;
    else if (
      parseFloat(participant1[highest]) === parseFloat(participant2[highest])
    )
      return 0;
    else return -1;
  });
}

/*---------------------- 투척 수평 경기 기록 등록 부분   ------------------------- */
/**
 * 던지기종목(창,투포환,원반,해머) 등수 관련 함수
 */
function rankcal() {
  const participants_data =
    get_horizontal_field_exclude_wind_game_information();
  print_horizontal_field_game_rank(participants_data);

  return participants_data;
}

/**
 * 필드경기
 * 던지기 종목 포맷
 */
function field1Format(obj) {
  obj.value = field_comma(field_uncomma(obj.value));
  fieldFinal(obj);
  rankcal();
}

/** 투척 수평 경기 기록 등록 부분
 * 참가자들의 기록을 분석하여 각 참가자의 최고 점수를 설정하는 함수
 *
 * @param {Array} value - 참가자들의 정보가 담긴 배열 (participants_data)
 * @param {string} record - 참가자의 기록을 나타내는 속성 이름 ("record")
 * @param {string} highest - 참가자의 최고 점수를 나타내는 속성 이름 ("highest")
 *
 * 이 함수는 참가자들의 정보가 담긴 배열(value)을 순회하면서 각 참가자의 기록(record)을 분석합니다.
 * 각 참가자의 기록 중에서 최고 점수를 찾아 해당 참가자의 최고 점수(highest)를 설정합니다.
 * 만약 참가자의 기록이 없어 최고 점수를 계산할 수 없는 경우, 최고 점수를 -1로 설정합니다.
 */
function participant_RecordValue(value, record, highest) {
  for (let i = 0; i < value.length; i++) {
    const high = Math.max(...value[i][record]);
    if (high === Number.NEGATIVE_INFINITY) value[i][highest] = -1;
    else value[i][highest] = high;
  }
}

//(던지기) 모든 참가자를 배열로 만들어 등수를 매기는 부분 수정 필요
function get_horizontal_field_exclude_wind_game_information() {
  const participants_data = document.getElementsByTagName("tbody")[1].children;
  threeRank_List = [];
  const participants_information = [];
  for (let i = 0; i < participants_data.length; i++) {
    const participant_information = {};
    const threeRank_item = {};
    const participant = participants_data[i];
    let participant_record = [];
    let three_record = [];
    let period_record = [];
    const Reference = participant.querySelector("#RR").checked;
    if (Reference) {
      participant_information["RR"] = "y";
    } else {
      participant_information["RR"] = "";
    }

    participant_information["Sport"] = document.querySelector("#Sport").value;
    participant_information["Round"] = document.querySelector("#Round").value;
    if (document.querySelector("#Qq") !== null) {
      participant_information["Pass"] = participant.querySelector("#Qq").value;
    }
    if (
      document.querySelector("#State").value === "Start List" ||
      document.querySelector("#State").value === "Live Result" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      participant_information["State"] = "l";
    }
    let shouldRunInputTime = false;
    if (document.querySelector("#State").value === "Start List") {
      shouldRunInputTime = true;
      input_time(shouldRunInputTime);
    } else if (
      document.querySelector("#State").value === "Live Result" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      shouldRunInputTime = false;
      input_time(shouldRunInputTime);
    }
    participant_information["Title"] = document.querySelector("#title").value;
    participant_information["Group"] = document.querySelector("#group").value;
    participant_information["Time"] = document.querySelector("#Time").value;
    participant_information["Gender"] = document.querySelector("#Gender").value;
    participant_information["Bigo"] = participant.querySelector("#Bigo").value;
    participant_information["rank"] = participant.querySelector("#rank").value;
    participant_information["Newrecord"] =
      participant.querySelector("#Newrecord").value;
    if (participant.querySelector("#Medal")) {
      participant_information["Medal"] =
        participant.querySelector("#Medal").value;
    }
    participant_information["name"] = participant.children[2].children[0].value;
    participant_information["PlayerName"] =
      participant.children[3].children[0].value;
    threeRank_item["name"] = participant.children[2].children[0].value;
    let endIndex = participant.children.length - 5;
    for (let j = 5; j < endIndex; j++) {
      const record = participant.children[j].children[0].value;

      if (participant.children.length > 16) {
        participant_information["sportName"] = "s";
        let UserCnt = document.querySelectorAll("#bib").length;
        for (let i = 0; i < participants_data.length; i++) {
          if (participants_data[i].children[4].children[0].value === "DNS") {
            UserCnt--;
          }
        }
        if (j == 8 || j == 9 || j == 10 || j == 14 || j == 15) {
          continue;
        }
        if (
          record !== "" &&
          record !== "X" &&
          record != "-" &&
          record != "DNS" &&
          record != "DNF" &&
          record != "DQ"
        ) {
          participant_record.push(record);
          if (j < 8) {
            period_record.push(`"${j - 4}":"${record}"`);
          } else {
            period_record.push(`"${j - 7}":"${record}"`);
          }
        } else if (record === "X" || record === "-") {
          participant_record.push("0");
          if (j < 8) {
            period_record.push(`"${j - 4}":"${record}"`);
          } else {
            period_record.push(`"${j - 7}":"${record}"`);
          }
        }
        if (j <= 7) {
          if (
            record !== "" &&
            record !== "X" &&
            record != "-" &&
            record != "DNS" &&
            record != "DNF" &&
            record != "DQ"
          ) {
            three_record.push(record);
          } else if (record === "X" || record === "-") {
            three_record.push("0");
          }
        }
        if (record === "DQ") {
          participant_record = ["-2"];
          period_record.push(`"${j - 4}":"${record}"`);
          UserCnt--;
        } else if (record === "DNF") {
          participant_record = ["-4"];
          period_record.push(`"${j - 4}":"${record}"`);
          UserCnt--;
        } else if (record === "DNS") {
          participant_record = ["-5"];
          period_record.push(`"${j - 4}":"${record}"`);
          UserCnt--;
        }
        if (participant_record.length <= 3) {
          if (UserCnt <= 8) {
            if (
              participant_record[0] === "0" &&
              participant_record[1] === "0" &&
              participant_record[2] === "0"
            ) {
              participant_record = [`1.${i}`];
              period_record.push(`"${j - 3}":"${record}"`);
            } else if (
              three_record[0] === "0" &&
              three_record[1] === "0" &&
              three_record[2] === "0"
            ) {
              three_record = [`1.${i}`];
            }
          } else {
            if (
              participant_record[0] === "0" &&
              participant_record[1] === "0" &&
              participant_record[2] === "0"
            ) {
              participant_record = ["-3"];
              period_record.push(`"${j - 4}":"${record}"`);
            } else if (
              three_record[0] === "0" &&
              three_record[1] === "0" &&
              three_record[2] === "0"
            ) {
              three_record = ["-3"];
            }
          }
        } else {
          if (record === "DQ") {
            participant_record = ["-2"];
            period_record.push(`"${j - 4}":"${record}"`);
          } else if (record === "DNF") {
            participant_record = ["-4"];
            period_record.push(`"${j - 4}":"${record}"`);
          }
        }
      } else {
        participant_information["sportName"] = "h";
        if (j == 8 || j == 9 || j == 10) {
          continue;
        }
        if (
          record !== "" &&
          record !== "X" &&
          record != "-" &&
          record != "DNS" &&
          record != "DNF" &&
          record != "DQ"
        ) {
          participant_record.push(record);
          if (j == 5 || j == 6 || j == 7) {
            period_record.push(`"${j - 4}":"${record}"`);
          }
        } else if (record === "X" || record === "-") {
          participant_record.push("0");
          if (j == 5 || j == 6 || j == 7) {
            period_record.push(`"${j - 4}":"${record}"`);
          }
        }
        if (record === "DQ") {
          participant_record = ["-2"];
          period_record.push(`"${j - 4}":"${record}"`);
        } else if (
          participant_record[0] === "0" &&
          participant_record[1] === "0" &&
          participant_record[2] === "0"
        ) {
          participant_record = ["-3"];
          period_record.push(`"${j - 4}":"${record}"`);
        } else if (record === "DNF") {
          participant_record = ["-4"];
          period_record.push(`"${j - 4}":"${record}"`);
        } else if (record === "DNS") {
          participant_record = ["-5"];
          period_record.push(`"${j - 4}":"${record}"`);
        }
      }
    }
    participant_information["period"] = period_record;
    participant_information["record"] = participant_record.sort(function (
      record1,
      record2
    ) {
      if (record1 > record2) return -1;
      else if (record1 < record2) return 1;
      else return 0;
    });
    threeRank_item["threeRank"] = three_record.sort(function (
      record1,
      record2
    ) {
      if (record1 > record2) return -1;
      else if (record1 < record2) return 1;
      else return 0;
    });
    participant_information["same"] = [];
    threeRank_item["three_same"] = [];
    participant_information["hit"] = "";
    threeRank_item["three_hit"] = "";
    participants_information.push(participant_information);
    threeRank_List.push(threeRank_item);
  }
  return participants_information;
}
function Send_Throw_Data(url) {
  const jsonData = convertParticipantsToJSON(rankcal());
  AjaxData(jsonData, url);
}

function Send_horizontal_Data(url) {
  const jsonData = convertParticipantsToJSON(rankcal4());
  AjaxData(jsonData, url);
}
/*----------------------  동순위 관련 로직  ------------------------- */
/**
 * 참가자들의 순위를 동일한 기록을 가진 참가자들에 대해 처리하는 함수
 *
 * @param {Array} participant - 참가자들의 정보가 담긴 배열 (participants_data)
 * @param {string} value - 참가자의 최고 점수를 나타내는 속성 이름 ("highest")
 *
 * 이 함수는 참가자들의 정보가 담긴 배열(participant)을 순회하면서 각 참가자의 최고 점수(value)를 기준으로 동일한 점수를 가진 참가자들을 찾습니다.
 * 동일한 점수를 가진 참가자들이 발견되면, 해당 참가자들의 기록을 분석하여 추가적인 순위를 결정합니다.
 * 추가적인 순위는 참가자들의 기록을 문자열로 변환하고, 이 문자열을 기준으로 정렬하여 결정합니다.
 * 만약 동일한 점수와 동일한 기록을 가진 참가자들이 발견되면, 이들 참가자들은 동일한 순위를 공유하게 됩니다.
 * 이 함수는 참가자 배열을 직접 수정하여 순위를 업데이트합니다.
 */
function participant_same_rank(participant, value, record) {
  for (let i = 0; i < participant.length; i) {
    let duplicate_record_count = 1;
    for (let j = i + 1; j < participant.length; j++) {
      if (participant[i][value] == participant[j][value])
        duplicate_record_count += 1;
    }
    if (duplicate_record_count !== 1) {
      const duplicate_record = participant.splice(i, duplicate_record_count);
      for (let j = 0; j < duplicate_record.length; j++) {
        for (let k = 0; k < duplicate_record[j][record].length; k++) {
          let sum_string_record = "";
          sum_string_record = duplicate_record[j][record][k].replace(".", "");
          if (sum_string_record.length !== 4)
            sum_string_record += "0".repeat(4 - sum_string_record.length);
          duplicate_record[j].hit += sum_string_record;
        }
      }
      duplicate_record.sort(function (participants1, participants2) {
        if (participants1.hit < participants2.hit) return 1;
        else if (participants1.hit > participants2.hit) return -1;
        return 0;
      });
      for (let j = 0; j < duplicate_record.length; j) {
        let duplicate_hit = 1;
        for (let k = j + 1; k < duplicate_record.length; k++) {
          if (duplicate_record[j].hit === duplicate_record[k].hit)
            duplicate_hit += 1;
        }
        if (duplicate_hit !== 1) {
          const same_hit = duplicate_record.splice(j, duplicate_hit);
          for (let k = 0; k < same_hit.length; k++) {
            same_hit[k].same = same_hit;
          }
          duplicate_record.splice(j, 0, ...same_hit);
        }
        j += duplicate_hit;
      }
      participant.splice(i, 0, ...duplicate_record);
    }
    i += duplicate_record_count;
  }
}

/*----------------------  등수 숫자 관련 단순 반복문  ------------------------- */
function field_Lane(element, lane, highest) {
  for (let i = 0; i < element.length && lane <= 8; i++) {
    if (element[i][highest] > 0) {
      lane += 1;
    }
  }
  return lane;
}
/*----------------------  입력 변환 로직  ------------------------- */
/**
 * 숫자를 특정 형식의 문자열로 변환하는 함수
 *
 * @param {number|string} str - 변환할 숫자 또는 숫자 형식의 문자열
 *
 * 이 함수는 입력받은 숫자를 특정 형식의 문자열로 변환합니다.
 * 숫자의 길이가 4 이하인 경우, 뒤에서부터 두 자리마다 점(.)을 삽입합니다.
 * 예를 들어, '1234'는 '12.34'로 변환됩니다.
 *
 * 숫자의 길이가 4 초과인 경우, 뒤에서부터 두 번째와 세 번째 자리에 콜론(:)을 삽입하고, 그 이후 두 자리마다 점(.)을 삽입합니다.
 * 예를 들어, '123456'는 '12:34.56'로 변환됩니다.
 *
 * 이 함수는 시간이나 점수를 표시하는 데 사용될 수 있습니다.
 */
function comma(str) {
  str = String(str);
  if (str.length <= 4) {
    return str.replace(/(\B)(?=(?:\d{2})+(?!\d))/g, "$1.");
  } else {
    return str.replace(/(\d+)(\d{2})(\d{2})/g, "$1:$2.$3");
  }
}

/**
 * 문자열에서 숫자가 아닌 문자를 제거하는 함수
 *
 * @param {string} str - 숫자가 아닌 문자를 제거할 문자열
 *
 * 이 함수는 입력받은 문자열에서 숫자가 아닌 모든 문자를 제거합니다.
 * 예를 들어, '12:34.56'은 '123456'으로 변환됩니다.
 *
 * 이 함수는 특정 형식으로 표시된 시간이나 점수를 숫자로 변환하는 데 사용될 수 있습니다.
 */
function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, "");
}

function field_comma(str) {
  str = String(str);
  if (str.length <= 4) {
    return str.replace(/(\B)(?=(?:\d{2})+(?!\d))/g, "$1.");
  } else {
    return str.replace(/(\d+)(\d{2})(\d{2})/g, "$1$2.$3");
  }
}
function field_uncomma(str) {
  str = String(str);
  str = str.toUpperCase();
  return str.replace(/[^\dDNSFQX-]+/g, "");
}

function Wind_comma(str) {
  str = String(str);
  if (str.length <= 3) {
    return str.replace(/(\B)(?=(?:\d{1})+(?!\d))/g, "$1.");
  } else {
    return str.replace(/(\B)(?=(?:\d{2})+(?!\d))/g, "$1.");
  }
}
/**
 * 높이뛰기에서 OX를 제외한 나머지 문자를 삭제하는 함수
 *
 * @param {string} str - OX를 제외한 문자를 삭제할 문자열
 *
 * 이 함수는 입력받은 문자열에서 높이뛰기의 결과를 나타내는 'O', 'X'를 제외한 모든 문자를 제거합니다.
 * 또한, 첫 번째 'O' 또는 '-' 이후의 문자들도 제거합니다.
 * 이렇게 하면, 높이뛰기의 결과를 간결하게 표현할 수 있습니다.
 *
 * 예를 들어, 'OXOX-OXOX'는 'OXO-'로 변환됩니다.
 */
function tftf(str) {
  str = String(str);
  str = str.toUpperCase();
  if (str.indexOf("-") >= 0) {
    if (str.indexOf("-") > str.indexOf("O") && str.indexOf("O") >= 0) {
      str = str.substring(0, str.indexOf("O") + 1);
    } else {
      str = str.substring(0, str.indexOf("-") + 3);
    }
  }
  if (str.indexOf("O") >= 0) {
    str = str.substring(0, str.indexOf("O") + 1);
  }
  return str.replace(/[^-OXDNSFQ]+/g, "");
}
/*----------------------  해당 종목 선수의 이름 및 랭크에 대한 정보를 담고 있는 로직  ------------------------- */
/**
 * 참가자의 이름을 기준으로 특정 등수 필드를 검색하는 함수
 *
 * @param {Array} participants - 참가자들의 정보가 담긴 배열
 * @param {string} name - 검색할 참가자의 이름
 * @param {string} rank - 찾고자 하는 참가자의 등수 필드의 ID
 *
 * 이 함수는 참가자들의 정보가 담긴 배열, 참가자의 이름, 그리고 등수 필드의 ID를 입력으로 받아,
 * 해당 참가자의 등수 필드를 반환합니다.
 * 만약 해당 참가자를 찾지 못하면, undefined를 반환합니다.
 *
 * 이 함수는 HTML 문서에서 querySelectorAll 메서드를 사용하여 등수 필드와 이름 필드를 선택하고,
 * 참가자 배열을 순회하면서 입력으로 받은 이름과 일치하는 참가자를 찾습니다.
 * 일치하는 참가자를 찾으면, 해당 참가자의 등수 필드를 반환합니다.
 */
function getParticipantRankByName(participants, name, rank) {
  const rank_field = document.querySelectorAll(`#${rank}`);
  const name_field = document.querySelectorAll("#bib");
  for (let i = 0; i < participants.length; i++) {
    if (name_field[i].value == name) {
      return rank_field[i];
    }
  }
  return undefined;
}

/*----------------------  멀리뛰기,삼단뛰기 기록 입력 변환 함수  ------------------------- */

//멀리뛰기 세단뛰기
function rankcal4() {
  const participants_data =
    get_horizontal_field_include_wind_game_information();
  print_horizontal_field_game_rank(participants_data);
  return participants_data;
}

// 멀리뛰기,삼단뛰기 기록 입력 변환 함수
function fieldFinal2(obj) {
  // `top`과 `wind` 변수를 초기화합니다. 이들은 각각 최고 점수와 그 점수를 얻은 때의 풍속을 나타냅니다.
  let top = "0";
  let wind = "0";
  // `obj`는 이벤트가 발생한 HTML 요소입니다. 이 요소의 부모 요소를 통해 사용자의 입력을 담고 있는 상위 요소를 찾습니다.
  let UserInput = obj.parentElement.parentElement;
  // `updateBestScoreAndWind` 함수를 호출합니다. 이 함수는 사용자의 입력을 처리하고, 최고 점수와 그 때의 풍속을 계산하여 `top`과 `wind` 변수를 업데이트합니다.
  updateBestScoreAndWind(UserInput, top, wind);
}

/**
 * updateBestScoreAndWind 함수는 사용자의 입력을 처리하고, 최고 점수와 그 때의 풍속을 계산합니다.
 *
 * @param {Object} UserInput - 사용자의 입력이 담긴 객체
 * @param {string} top - 현재까지의 최고 점수
 * @param {string} wind - 최고 점수를 기록할 때의 풍속
 *
 * 이 함수는 사용자의 입력(UserInput)을 순회하며 각 항목의 점수를 확인합니다.
 * 특정 항목은 처리에서 제외되며, 특정 조건에 따라 최고 점수와 풍속이 설정됩니다.
 * 만약 현재 항목의 점수가 최고 점수보다 높다면, 최고 점수와 풍속을 업데이트합니다.
 * 계산된 최고 점수와 풍속은 사용자 입력의 해당 항목에 기록됩니다.
 */
function updateBestScoreAndWind(UserInput, top, wind) {
  // 사용자 입력의 각 항목에 대해 반복합니다.
  let endIndex = UserInput.children.length - 5;

  for (let i = 5; i < endIndex; i++) {
    // 현재 항목의 값을 가져옵니다.
    let childValue = UserInput.children[i].firstElementChild.value;
    // 입력 테이블의 길이를 확인합니다. 14보다 크면 true, 아니면 false입니다.
    let TableLength = UserInput.children.length > 14;
    // 현재 항목의 값을 숫자로 변환합니다.
    const parsedChildValue = parseFloat(childValue);
    // 최고 점수를 숫자로 변환합니다.
    const parsedTop = parseFloat(top);
    // NM_Score 함수를 호출하여 NM 처리를 확인합니다.
    const isNMScore = NM_Score(UserInput);
    // 특정 항목은 처리에서 제외합니다.
    if (TableLength) {
      if (i === 8 || i === 9 || i === 14) {
        continue;
      }
    } else {
      if (i === 8 || i === 9 || i === 10) {
        continue;
      }
    }

    // 특정 조건에 따라 최고 점수와 풍속을 설정합니다.
    if (childValue === "DNS" || childValue === "DNF" || childValue === "DQ") {
      top = childValue;
      wind = "-";
    }
    // 현재 항목의 점수가 최고 점수보다 높으면, 최고 점수와 풍속을 업데이트합니다.
    if (parsedTop < parsedChildValue) {
      top = childValue;
      if (TableLength) {
        if (i < 8) {
          wind =
            UserInput.nextElementSibling.children[i - 4].firstElementChild
              .value;
        } else {
          wind =
            UserInput.nextElementSibling.children[i - 6].firstElementChild
              .value;
        }
      } else {
        wind =
          UserInput.nextElementSibling.children[i - 4].firstElementChild.value;
      }
    }
    // 최고 점수와 풍속을 해당 항목에 기록합니다.
    if (TableLength) {
      if (i < 8) {
        if (isNMScore) {
          UserInput.children[
            UserInput.children.length - 11
          ].firstElementChild.value = "NM";
        } else {
          UserInput.children[
            UserInput.children.length - 11
          ].firstElementChild.value = top;
        }
        UserInput.nextElementSibling.children[
          UserInput.children.length - 16
        ].firstElementChild.value = wind;
      } else {
        if (isNMScore && four_Score(UserInput)) {
          UserInput.children[
            UserInput.children.length - 5
          ].firstElementChild.value = "NM";
        } else {
          UserInput.children[
            UserInput.children.length - 5
          ].firstElementChild.value = top;
        }
        UserInput.nextElementSibling.children[
          UserInput.children.length - 12
        ].firstElementChild.value = wind;
      }
    } else {
      if (document.querySelector("#Qq") !== null) {
        UserInput.children[
          UserInput.children.length - 5
        ].firstElementChild.value = top;
        UserInput.nextElementSibling.children[
          UserInput.children.length - 10
        ].firstElementChild.value = wind;
        if (isNMScore) {
          UserInput.children[
            UserInput.children.length - 6
          ].firstElementChild.value = "NM";
        }
      } else {
        UserInput.children[
          UserInput.children.length - 5
        ].firstElementChild.value = top;
        UserInput.nextElementSibling.children[
          UserInput.children.length - 10
        ].firstElementChild.value = wind;
        if (isNMScore) {
          UserInput.children[
            UserInput.children.length - 5
          ].firstElementChild.value = "NM";
        }
      }
    }
  }
}
/**
 * 던지기 종목(창, 투포환, 원반, 해머)의 점수를 계산하는 함수입니다.
 * 입력된 값이 "X", "-", "-"인 경우에만 true를 반환합니다.
 *
 * @param {Object} input - 사용자의 입력이 담긴 객체
 * @returns {boolean} 입력된 값이 "X", "-", "-"인 경우에만 true
 */
function NM_Score(input) {
  const values = [4, 5, 6].map(
    (i) => input.children[i].firstElementChild.value
  );
  return (
    ["X", "-", "-"].includes(values[0]) &&
    ["X", "-"].includes(values[1]) &&
    ["X", "-"].includes(values[2])
  );
}

/**
 * 입력된 값이 비어있는지 확인하는 함수입니다.
 * 입력된 값이 비어있으면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 *
 * @param {Object} input - 사용자의 입력이 담긴 객체
 * @returns {boolean} 입력된 값이 비어있으면 true, 그렇지 않으면 false
 */
function four_Score(input) {
  return input.children[11].firstElementChild.value === "" ? true : false;
}

/**
 * 멀리뛰기 삼단뛰기 종목 관련 포맷
 */
function field2Format(obj) {
  obj.value = field_comma(field_uncomma(obj.value));
  fieldFinal2(obj);
  rankcal4();
}

/**
 * 멀리뛰기 삼단뛰기 종목 풍속 넣는 포맷
 */
function windFormat(obj) {
  obj.value = Wind_comma(obj.value);
  fieldFinal3(obj);
  rankcal4();
}
function fieldFinal3(obj) {
  let top = "0";
  let wind = "0";
  let a = obj.parentElement.parentElement.previousElementSibling;
  updateBestScoreAndWind(a, top, wind);
}

// (멀리뛰기) 모든 참가자를 배열로 만들어 등수를 매기는 부분
function get_horizontal_field_include_wind_game_information() {
  const participants_data = document.getElementsByTagName("tbody")[1].children;
  threeRank_List = [];
  const participants_information = [];
  for (let i = 0; i < participants_data.length; i += 2) {
    const participant_information = {};
    const threeRank_item = {};
    const participant = participants_data[i];
    const participant_wind = participants_data[i + 1];
    const Reference = participant.querySelector("#RR").checked;
    let lastwindData = "";
    if (participant.children.length > 15) {
      lastwindData = participant_wind.children[7].children[0].value;
    } else {
      lastwindData = participant_wind.children[3].children[0].value;
    }
    if (Reference) {
      participant_information["RR"] = "Y";
    } else {
      participant_information["RR"] = "N";
    }
    let participant_record = [];
    let period_record = [];
    let three_record = [];
    let wind_record = [];
    if (
      document.querySelector("#State").value === "Start List" ||
      document.querySelector("#State").value === "Live Result" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      participant_information["State"] = "l";
    }
    let shouldRunInputTime = false;
    if (document.querySelector("#State").value === "Start List") {
      shouldRunInputTime = true;
      input_time(shouldRunInputTime);
    } else if (
      document.querySelector("#State").value === "Live Result" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      input_time(shouldRunInputTime);
    }
    participant_information["Group"] = document.querySelector("#group").value;
    participant_information["Title"] = document.querySelector("#title").value;
    participant_information["Sport"] = document.querySelector("#Sport").value;
    participant_information["Gender"] = document.querySelector("#Gender").value;
    participant_information["Round"] = document.querySelector("#Round").value;
    participant_information["Time"] = document.querySelector("#Time").value;
    participant_information["rank"] = participant.querySelector("#rank").value;
    if (document.querySelector("#Qq") !== null) {
      participant_information["Qq"] = participant.querySelector("#Qq").value;
    }
    participant_information["Newrecord"] =
      participant.querySelector("#Newrecord").value;
    if (participant.querySelector("#Medal")) {
      participant_information["Medal"] =
        participant.querySelector("#Medal").value;
    }
    participant_information["Bigo"] = participant.querySelector("#Bigo").value;
    participant_information["name"] = participant.children[2].children[0].value;
    participant_information["PlayerName"] =
      participant.children[3].children[0].value;
    threeRank_item["name"] = participant.children[2].children[0].value;
    let endIndex = participant.children.length - 4;
    if (document.querySelector("#Qq") !== null) {
      endIndex = participant.children.length - 5;
    }
    for (let j = 5; j < endIndex; j++) {
      const record = participant.children[j].children[0].value;
      if (participant.children.length > 15) {
        participant_information["sportName"] = "s";
        let UserCnt = document.querySelectorAll("#bib").length;
        for (let i = 0; i < participants_data.length; i++) {
          if (participants_data[i].children[4].children[0].value === "DNS") {
            UserCnt--;
          }
        }
        if (j == 8 || j == 9 || j == 10 || j == 14 || j == 15) {
          continue;
        }
        if (
          record !== "" &&
          record !== "X" &&
          record != "-" &&
          record != "DNS" &&
          record != "DNF" &&
          record != "DQ"
        ) {
          participant_record.push(record);
          if (j < 8) {
            period_record.push(`"${j - 4}":"${record}"`);
          } else {
            period_record.push(`"${j - 7}":"${record}"`);
          }
          if (j == 5 || j == 6 || j == 7) {
            wind_record.push(
              `"${j - 4}":"${
                participant_wind.children[j - 5].children[0].value
              }"`
            );
          } else if (j == 11 || j == 12 || j == 13) {
            wind_record.push(
              `"${j - 7}":"${
                participant_wind.children[j - 7].children[0].value
              }"`
            );
          }
        } else if (record === "X" || record === "-") {
          participant_record.push("0");
          if (j < 8) {
            period_record.push(`"${j - 4}":"${record}"`);
          } else {
            period_record.push(`"${j - 7}":"${record}"`);
          }

          if (j == 5 || j == 6 || j == 7) {
            wind_record.push(
              `"${j - 4}":"${
                participant_wind.children[j - 5].children[0].value
              }"`
            );
          } else if (j == 11 || j == 12 || j == 13) {
            wind_record.push(
              `"${j - 7}":"${
                participant_wind.children[j - 7].children[0].value
              }"`
            );
          }
        }
        // 3    쒓린
        if (j <= 7) {
          if (
            record !== "" &&
            record !== "X" &&
            record != "-" &&
            record != "DNS" &&
            record != "DNF" &&
            record != "DQ"
          ) {
            three_record.push(record);
          } else if (record === "X" || record === "-") {
            three_record.push("0");
          }
        }
        if (record === "DQ") {
          participant_record = ["-2"];
          period_record.push(`"${j - 4}":"${record}"`);
          wind_record.push(`"${j - 4}":""`);
          UserCnt--;
        } else if (record === "DNF") {
          participant_record = ["-4"];
          wind_record.push(`"${j - 4}":""`);
          period_record.push(`"${j - 4}":"${record}"`);
          UserCnt--;
        } else if (record === "DNS") {
          participant_record = ["-5"];
          wind_record.push(`"${j - 4}":""`);
          period_record.push(`"${j - 4}":"${record}"`);
          UserCnt--;
        }
        // 3    쒓린
        if (participant_record.length <= 3) {
          if (UserCnt <= 8) {
            if (
              participant_record[0] === "0" &&
              participant_record[1] === "0" &&
              participant_record[2] === "0"
            ) {
              participant_record = [`1.${i}`];
              period_record.push(`"${j - 4}":"${record}"`);
              wind_record.push(`"${j - 4}":""`);
            } else if (
              three_record[0] === "0" &&
              three_record[1] === "0" &&
              three_record[2] === "0"
            ) {
              three_record = [`1.${i}`];
            }
          } else {
            if (
              participant_record[0] === "0" &&
              participant_record[1] === "0" &&
              participant_record[2] === "0"
            ) {
              participant_record = ["-2"];
              // period_record = ["-3"];
            } else if (
              three_record[0] === "0" &&
              three_record[1] === "0" &&
              three_record[2] === "0"
            ) {
              three_record = ["-2"];
            }
          }
        } else {
          if (record === "DQ") {
            participant_record = ["-3"];
            period_record = ["-3"];
          } else if (record === "DNF") {
            participant_record = ["-4"];
            period_record = ["-4"];
          }
        }
      } else {
        participant_information["sportName"] = "h";
        if (j == 8 || j == 9 || j == 10) {
          continue;
        }

        if (
          record !== "" &&
          record !== "X" &&
          record != "-" &&
          record != "DNS" &&
          record != "DNF" &&
          record != "DQ"
        ) {
          participant_record.push(record);
          if (j == 5 || j == 6 || j == 7) {
            period_record.push(`"${j - 4}":"${record}"`);
          }
          if (j == 5 || j == 6 || j == 7) {
            wind_record.push(
              `"${j - 4}":"${
                participant_wind.children[j - 5].children[0].value
              }"`
            );
          }
        } else if (record === "X" || record === "-") {
          participant_record.push("0");
          if (j == 5 || j == 6 || j == 7) {
            period_record.push(`"${j - 4}":"${record}"`);
          }
          if (j == 5 || j == 6 || j == 7) {
            wind_record.push(
              `"${j - 4}":"${
                participant_wind.children[j - 5].children[0].value
              }"`
            );
          }
        }
        if (record === "DQ") {
          participant_record = ["-2"];
          period_record.push(`"${j - 4}":"${record}"`);
          wind_record.push(`"${j - 4}":""`);
        } else if (
          participant_record[0] === "0" &&
          participant_record[1] === "0" &&
          participant_record[2] === "0"
        ) {
          participant_record = ["-3"];
          period_record.push(`"${j - 4}":"${record}"`);
          wind_record.push(`"${j - 4}":""`);
        } else if (record === "DNF") {
          participant_record = ["-4"];
          period_record.push(`"${j - 4}":"${record}"`);
          wind_record.push(`"${j - 4}":""`);
        } else if (record === "DNS") {
          participant_record = ["-5"];
          period_record.push(`"${j - 4}":"${record}"`);
          wind_record.push(`"${j - 4}":""`);
        }
      }
    }
    participant_information["period"] = period_record;
    participant_information["wind"] = wind_record;
    participant_information["lastwind"] = lastwindData;
    participant_information["record"] = participant_record.sort(function (
      record1,
      record2
    ) {
      if (record1 > record2) return -1;
      else if (record1 < record2) return 1;
      else return 0;
    });
    threeRank_item["threeRank"] = three_record.sort(function (
      record1,
      record2
    ) {
      if (record1 > record2) return -1;
      else if (record1 < record2) return 1;
      else return 0;
    });

    participant_information["same"] = [];
    threeRank_item["three_same"] = [];
    participant_information["hit"] = "";
    threeRank_item["three_hit"] = "";
    participants_information.push(participant_information);
    threeRank_List.push(threeRank_item);
  }
  return participants_information;
} // 배열을 비교하여 등수를 매기는 부분
function print_horizontal_field_game_rank(participants_data) {
  for (let i = 0; i < participants_data.length; i++) {
    // 종합경기 일 때 사용되는 로직
    if (participants_data[i].sportName === "h") {
      participant_RecordValue(participants_data, "record", "highest");
      participantList(participants_data, "highest");
      participant_same_rank(participants_data, "highest", "record");
      participant_Rank(participants_data);
      // 일반 필드 경기일떄
    } else {
      participant_RecordValue(participants_data, "record", "highest");
      participantList(participants_data, "highest");
      participant_same_rank(participants_data, "highest", "record");

      let rank = 0;
      let rain = 1;
      let count = 0;

      rain = field_Lane(participants_data, rain, "highest");
      for (let i = 0; i < participants_data.length; i) {
        rank += 1;
        if (participants_data[i].same.length === 0) {
          const rank_field = getParticipantRankByName(
            participants_data,
            participants_data[i].name,
            "rank"
          );
          const middle_rank_field = getParticipantRankByName(
            participants_data,
            participants_data[i].name,
            "middlerank"
          );
          const middle_rain_field = getParticipantRankByName(
            participants_data,
            participants_data[i].name,
            "middleRane"
          );
          rank_field.value = rank;
          if (
            participants_data[i].record.length <= 3 &&
            count === 0 &&
            threeRank_List[i].threeRank.length <= 3 &&
            threeRank_List[i].threehighest < 1
          ) {
            if (rank <= 8) {
              middle_rank_field.value = rank;
              middle_rain_field.value = rain - rank;
            } else {
              middle_rank_field.value = "-";
              middle_rain_field.value = "-";
            }
            if (participants_data[i].highest < 1) {
              middle_rank_field.value = "-";
              middle_rain_field.value = "-";
            }
          } else {
            count++;
            participant_RecordValue(
              threeRank_List,
              "threeRank",
              "threehighest"
            );
            participantList(threeRank_List, "threehighest");
            participant_same_rank(threeRank_List, "threehighest", "threeRank");
            let rank = 0;
            let rain = 1;
            rain = field_Lane(threeRank_List, rain, "threehighest");
            for (let i = 0; i < threeRank_List.length; i) {
              rank += 1;
              if (threeRank_List[i].three_same.length === 0) {
                const middle_rank_field = getParticipantRankByName(
                  threeRank_List,
                  threeRank_List[i].name,
                  "middlerank"
                );
                const middle_rain_field = getParticipantRankByName(
                  threeRank_List,
                  threeRank_List[i].name,
                  "middleRane"
                );
                if (threeRank_List[i].threeRank.length <= 3) {
                  if (rank <= 8) {
                    middle_rank_field.value = rank;
                    middle_rain_field.value = rain - rank;
                  } else {
                    middle_rank_field.value = "-";
                    middle_rain_field.value = "-";
                  }
                  if (
                    threeRank_List[i].threeRank < 1 &&
                    threeRank_List[i].threeRank.length <= 3
                  ) {
                    middle_rank_field.value = "-";
                    middle_rain_field.value = "-";
                  }
                }
              } else {
                threeRank_List[i].three_same.forEach(function (
                  same_participant_data
                ) {
                  const middle_rank_field = getParticipantRankByName(
                    threeRank_List,
                    same_participant_data.name,
                    "middlerank"
                  );
                  const middle_rain_field = getParticipantRankByName(
                    threeRank_List,
                    same_participant_data.name,
                    "middleRane"
                  );
                  if (threeRank_List[i].threeRank.length <= 3) {
                    if (rank <= 8) {
                      middle_rank_field.value = rank;
                      middle_rain_field.value = rain - rank;
                    } else {
                      middle_rank_field.value = "-";
                      middle_rain_field.value = "-";
                    }
                    if (threeRank_List[i].threehighest < 1) {
                      middle_rank_field.value = "-";
                      middle_rain_field.value = "-";
                    }
                  }
                });
                rank += threeRank_List[i].three_same.length - 1;
              }
              i = rank;
            }
          }
        } else {
          participants_data[i].same.forEach(function (same_participant_data) {
            const rank_field = getParticipantRankByName(
              participants_data,
              same_participant_data.name,
              "rank"
            );
            const middle_rank_field = getParticipantRankByName(
              participants_data,
              same_participant_data.name,
              "middlerank"
            );
            const middle_rain_field = getParticipantRankByName(
              participants_data,
              same_participant_data.name,
              "middleRane"
            );
            rank_field.value = rank;
            if (
              participants_data[i].record.length <= 3 &&
              count === 0 &&
              threeRank_List[i].threeRank.length <= 3 &&
              participants_data[i].highest < 1
            ) {
              if (rank <= 8) {
                middle_rank_field.value = rank;
                middle_rain_field.value = rain - rank;
              } else {
                middle_rank_field.value = "-";
                middle_rain_field.value = "-";
              }
              if (participants_data[i].highest < 1) {
                middle_rank_field.value = "-";
                middle_rain_field.value = "-";
              }
            } else {
              count++;
              participant_RecordValue(
                threeRank_List,
                "threeRank",
                "threehighest"
              );
              participantList(threeRank_List, "threehighest");
              participant_same_rank(
                threeRank_List,
                "threehighest",
                "threeRank"
              );
              let rank = 0;
              let rain = 1;
              for (let i = 0; i < threeRank_List.length && rain <= 8; i++) {
                if (threeRank_List[i].threehighest > 0) {
                  rain += 1;
                }
              }

              for (let i = 0; i < threeRank_List.length; i) {
                rank += 1;
                if (threeRank_List[i].three_same.length === 0) {
                  const middle_rank_field = getParticipantRankByName(
                    participants_data,
                    threeRank_List[i].name,
                    "middlerank"
                  );
                  const middle_rain_field = getParticipantRankByName(
                    participants_data,
                    threeRank_List[i].name,
                    "middleRane"
                  );
                  if (threeRank_List[i].threeRank.length <= 3) {
                    if (rank <= 8) {
                      middle_rank_field.value = rank;
                      middle_rain_field.value = rain - rank;
                    } else {
                      middle_rank_field.value = "-";
                      middle_rain_field.value = "-";
                    }
                    if (
                      threeRank_List[i].threeRank < 1 &&
                      threeRank_List[i].threeRank.length <= 3
                    ) {
                      middle_rank_field.value = "-";
                      middle_rain_field.value = "-";
                    }
                  }
                } else {
                  threeRank_List[i].three_same.forEach(function (
                    same_participant_data
                  ) {
                    const middle_rank_field = getParticipantRankByName(
                      participants_data,
                      same_participant_data.name,
                      "middlerank"
                    );
                    const middle_rain_field = getParticipantRankByName(
                      participants_data,
                      same_participant_data.name,
                      "middleRane"
                    );
                    if (threeRank_List[i].threeRank.length <= 3) {
                      if (rank <= 8) {
                        middle_rank_field.value = rank;
                        middle_rain_field.value = rain - rank;
                      } else {
                        middle_rank_field.value = "-";
                        middle_rain_field.value = "-";
                      }
                      if (threeRank_List[i].threehighest < 1) {
                        middle_rank_field.value = "-";
                        middle_rain_field.value = "-";
                      }
                    }
                  });
                  rank += threeRank_List[i].three_same.length - 1;
                }
                i = rank;
              }
            }
          });
          rank += participants_data[i].same.length - 1;
        }
        i = rank;
      }
    }
  }
  let SendParticipants = participants_data;
  return SendParticipants;
}

/*----------------------  던지기 기록 입력 변환 함수  ------------------------- */
/**
 * 사용자의 입력을 처리하고, 최고 점수를 계산하는 함수입니다.
 *
 * @param {Object} UserInput - 사용자의 입력이 담긴 객체
 * @param {string} top - 현재까지의 최고 점수
 */
function updateBestScore(UserInput, top) {
  // 사용자 입력의 각 항목에 대해 반복합니다.
  let endIndex = UserInput.children.length - 5;
  for (let i = 5; i < endIndex; i++) {
    // 현재 항목의 값을 가져옵니다.
    let childValue = UserInput.children[i].firstElementChild.value;
    // 입력 테이블의 길이를 확인합니다. 15보다 크면 true, 아니면 false입니다.
    let TableLength = UserInput.children.length > 14;
    // 현재 항목의 값을 숫자로 변환합니다.
    const parsedChildValue = parseFloat(childValue);

    // 최고 점수를 숫자로 변환합니다.
    const parsedTop = parseFloat(top);

    // NM 처리를 위한 로직
    const isNMScore = NM_Score(UserInput);
    // 특정 항목은 처리에서 제외합니다.
    if (TableLength) {
      if (i === 8 || i === 9 || i === 10 || i === 14 || i === 15) {
        continue;
      }
    } else {
      if (i === 8 || i === 9 || i === 10) {
        continue;
      }
    }

    // 특정 조건에 따라 최고 점수를 설정합니다.
    if (childValue === "DNS" || childValue === "DNF" || childValue === "DQ") {
      top = childValue;
      wind = "-";
    }

    // 현재 항목의 점수가 최고 점수보다 높으면, 최고 점수를 업데이트합니다.
    if (parsedTop < parsedChildValue) {
      top = childValue;
    }

    // 최고 점수를 해당 항목에 기록합니다.
    if (TableLength) {
      if (i < 8) {
        if (isNMScore) {
          UserInput.children[
            UserInput.children.length - 11
          ].firstElementChild.value = "NM";
        } else {
          UserInput.children[
            UserInput.children.length - 11
          ].firstElementChild.value = top;
        }
      } else {
        if (isNMScore && four_Score(UserInput)) {
          UserInput.children[
            UserInput.children.length - 5
          ].firstElementChild.value = "NM";
        } else {
          UserInput.children[
            UserInput.children.length - 5
          ].firstElementChild.value = top;
        }
      }
      // 7종 경기 10 종 경기
    } else {
      if (document.querySelector("#Qq") !== null) {
        UserInput.children[
          UserInput.children.length - 6
        ].firstElementChild.value = top;
        if (isNMScore) {
          UserInput.children[
            UserInput.children.length - 6
          ].firstElementChild.value = "NM";
        }
      } else {
        UserInput.children[
          UserInput.children.length - 5
        ].firstElementChild.value = top;
        if (isNMScore) {
          UserInput.children[
            UserInput.children.length - 5
          ].firstElementChild.value = "NM";
        }
      }
    }
  }
}
function fieldFinal(obj) {
  // `top`변수를 초기화합니다. 이들은 각각 최고 점수를 나타냅니다.

  let top = "0";
  // `obj`는 이벤트가 발생한 HTML 요소입니다.
  let UserInput = obj.parentElement.parentElement;
  // `updateBestScore` 함수를 호출합니다. 이 함수는 사용자의 입력을 처리하고, 최고 점수를 계산하여 `top` 변수를 업데이트합니다.

  updateBestScore(UserInput, top);
}

/*----------------------  트랙 경기 관련 랭크 및 변환 함수  ------------------------- */

/**
 * 트랙 경기 결과를 입력하고, 자동으로 양식을 적용하는 함수입니다.
 * 입력된 값에서 숫자, 대문자 알파벳, 콜론(:), 점(.)을 제외한 모든 문자를 제거합니다.
 * 그리고 등수를 다시 계산합니다.
 *
 * @param {Object} obj - 경기 결과 값을 담고 있는 HTML 요소
 */
function trackFinal(obj) {
  const regExp = /[^0-9A-Z.:]/g;
  obj.value = obj.value.replace(regExp, "");
  rankcal1();
}
/*
 ** 트랙 경기의 등수를 계산하고 업데이트하는 함수입니다.
 */

function rankcal1() {
  let re = document.querySelectorAll("#result"); //결과 요소 가져옴
  let ran = document.querySelectorAll("#rank"); //둥수 요소가져옴
  let arr1 = {};
  // 객체에 결과 저장
  for (i = 0; i < re.length; i++) {
    let k = i;
    arr1[k] = re[i].value;
  }

  let keysSorted = Object.keys(arr1).sort(function (a, b) {
    if (arr1[a].includes(":")) {
      let time_a = arr1[a].split(":");
      if (time_a.length <= 2) {
        arr1[a] = time_a[0] * 60 + time_a[1];
      } else if (time_a.length === 3) {
        arr1[a] = time_a[0] * 3600 + time_a[1] * 60 + time_a[2];
      }
    }
    if (arr1[b].includes(":")) {
      let time_b = arr1[b].split(":");
      if (time_b.length <= 2) {
        arr1[b] = time_b[0] * 60 + time_b[1];
      } else if (time_b.length === 3) {
        arr1[b] = time_b[0] * 3600 + time_b[1] * 60 + time_b[2];
      }
    }

    if (isNaN(arr1[a]) && isNaN(arr1[b])) {
      // DQ, DNF, DNS 정렬
      let rank_a = arr1[a] === "DQ" ? 1 : arr1[a] === "DNF" ? 2 : 3;
      let rank_b = arr1[b] === "DQ" ? 1 : arr1[b] === "DNF" ? 2 : 3;

      if (rank_a !== rank_b) {
        return rank_a - rank_b;
      }
    } else if (isNaN(arr1[a])) {
      return 1;
    } else if (isNaN(arr1[b])) {
      return -1;
    } else {
      let num_a = parseFloat(arr1[a]);
      let num_b = parseFloat(arr1[b]);
      if (num_a == num_b) {
        return 0; // 두 값이 같으면 0 반환
      }
      return num_a - num_b;
    }
  });

  // 등수대로 기입
  let currentRank = 1;
  for (i = 0; i < ran.length; i++) {
    ran[keysSorted[i]].value = currentRank;
    if (i < ran.length - 1) {
      let currentValue = parseFloat(arr1[keysSorted[i]]);
      let nextValue = parseFloat(arr1[keysSorted[i + 1]]);
      if (currentValue !== nextValue) {
        currentRank = i + 2;
      }
    }
  }
}
function SendTrackData(url) {
  const participants_data = document.getElementsByTagName("tbody")[1].children;
  const participants_information = [];
  for (let j = 0; j < participants_data.length; j++) {
    const participant_information = {};
    let participant_record = [];
    const participant = participants_data[j];
    const Reference = participant.querySelector("#RR").checked;
    participant_information["Bib"] = participant.children[2].children[0].value;
    participant_information["Order"] =
      participant.children[1].children[0].value;
    participant_information["Newrecord"] =
      participant.querySelector("#Newrecord").value;
    if (participant.querySelector("#Qq")) {
      participant_information["Qq"] = participant.querySelector("#Qq").value;
    }
    participant_information["Round"] = document.querySelector("#Round").value;
    participant_information["Gender"] = document.querySelector("#Gender").value;
    participant_information["Country"] =
      participant.querySelector("#Country").value;
    participant_information["rank"] = participant.querySelector("#rank").value;
    if (document.querySelector("#wind")) {
      participant_information["Wind"] = document.querySelector("#wind").value;
    }
    participant_information["Group"] = document.querySelector("#group").value;
    participant_information["Title"] = document.querySelector("#title").value;
    participant_information["Time"] = document.querySelector("#Time").value;
    if (participant.querySelector("#Medal")) {
      participant_information["Medal"] =
        participant.querySelector("#Medal").value;
    }
    if (Reference) {
      participant_information["RR"] = "Y";
    } else {
      participant_information["RR"] = "N";
    }
    participant_information["Sport"] = document.querySelector("#Sport").value;

    if (
      document.querySelector("#State").value === "Start List" ||
      document.querySelector("#State").value === "Live Result" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      participant_information["State"] = "l";
    }
    let shouldRunInputTime = false;
    if (document.querySelector("#State").value === "Start List") {
      shouldRunInputTime = true;
      input_time(shouldRunInputTime);
    } else if (
      document.querySelector("#State").value === "Live Reuslt" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      shouldRunInputTime = false;
      input_time(shouldRunInputTime);
    }
    participant_information["Bigo"] = participant.querySelector("#Bigo").value;

    if (participant.querySelector("#reactiontime")) {
      participant_information["Reaction"] =
        participant.querySelector("#reactiontime").value;
    }
    participant_information["name"] = participant.children[2].children[0].value;
    participant_information["PlayerName"] =
      participant.children[3].children[0].value;
    let endIndex = participant.children.length - 5;
    if (participant.querySelector("#Qq")) {
      endIndex = participant.children.length - 6;
    }
    if (participant.querySelector("#Medal") === null) {
      endIndex = participant.children.length - 5;
    }
    if (
      participant.querySelector("#reactiontime") == null &&
      document.querySelector("#wind") === null
    ) {
      endIndex = participant.children.length - 4;
    }
    if (
      participant.querySelector("#reactiontime") == null &&
      document.querySelector("#wind") === null &&
      participant.querySelector("#Medal") === null
    ) {
      endIndex = participant.children.length - 3;
    }
    for (let j = 5; j < endIndex; j++) {
      let record = participant.children[j].children[0].value;
      if (record != "DNS" && record != "DNF" && record != "DQ") {
        participant_record.push(record);
      }
      if (record === "DQ") {
        participant_record = ["-2"];
      } else if (record === "DNF") {
        participant_record = ["-4"];
      } else if (record === "DNS") {
        participant_record = ["-5"];
      }
      participant_information["highest"] = record;
      participant_information["record"] = record;
      participants_information.push(participant_information);
    }
  }
  const jsonData = TrackJson(participants_information);
  AjaxData(jsonData, url);
}

function SendRelayData(url) {
  const participants_data = document.getElementsByTagName("tbody")[1].children;
  const participants_information = [];

  for (let j = 0; j < participants_data.length; j++) {
    const participant_information = {};
    let participant_record = [];
    const participant = participants_data[j];
    let RrValue = "";
    const Reference = participant.querySelector("#RR").checked;
    if (Reference) {
      RrValue = "y";
    } else {
      RrValue = "";
    }

    if (
      document.querySelector("#State").value === "Start List" ||
      document.querySelector("#State").value === "Live Result" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      StateValue = "l";
    }
    let shouldRunInputTime = false;
    if (document.querySelector("#State").value === "Start List") {
      shouldRunInputTime = true;
      input_time(shouldRunInputTime);
    } else if (
      document.querySelector("#State").value === "Live Result" ||
      document.querySelector("#State").value === "Official Result"
    ) {
      input_time(shouldRunInputTime);
    }

    const bibInputFields = participant.children[2].querySelectorAll(
      'input[name="playerbib[]"]'
    );
    const inputFields = participant.children[3].querySelectorAll(
      'input[name="playername[]"]'
    );

    let endIndex = participant.children.length - 6;
    if (participant.querySelector("#Qq")) {
      endIndex = participant.children.length - 6;
    }
    if (participant.querySelector("#Medal") === null) {
      endIndex = participant.children.length - 6;
    }
    let test = 0;
    for (let j = 5; j < endIndex; j++) {
      const record = participant.children[j].children[0].value;
      if (record !== "DNS" && record !== "DNF" && record !== "DQ") {
        participant_record.push(record);
      }
      if (record === "DQ") {
        participant_record = ["-2"];
      } else if (record === "DNF") {
        participant_record = ["-4"];
      } else if (record === "DNS") {
        participant_record = ["-5"];
      }
      test = record;
    }
    // 배열을 만드는 과정
    const playerInformationArray = [];

    // Bib 정보만 따로 추출하여 저장
    const bibArray = [];

    bibInputFields.forEach((bibInput, index) => {
      const playerInformation = {};
      playerInformation["Group"] = document.querySelector("#group").value;
      playerInformation["Title"] = document.querySelector("#title").value;
      playerInformation["Sport"] = document.querySelector("#Sport").value;
      playerInformation["Gender"] = document.querySelector("#Gender").value;
      playerInformation["Time"] = document.querySelector("#Time").value;
      playerInformation["Country"] =
        participant.querySelector("#Country").value;
      playerInformation["Round"] = document.querySelector("#Round").value;
      playerInformation["wind"] = document.querySelector("#wind").value;
      playerInformation["rank"] = participant.querySelector("#rank").value;
      playerInformation["Reaction"] =
        participant.querySelector("#reactiontime").value;
      playerInformation["Order"] = participant.children[1].children[0].value;
      playerInformation["RR"] = RrValue;
      playerInformation["State"] = StateValue;
      playerInformation["Bib"] = bibInput.value; // 이 값을 따로 저장
      playerInformation["PlayerName"] = inputFields[index].value;
      playerInformation["Bigo"] = participant.querySelector("#Bigo").value;
      playerInformation["highest"] = test;
      playerInformation["record"] = test;
      if (participant.querySelector("#Medal")) {
        playerInformation["Medal"] = participant.querySelector("#Medal").value;
      }
      if (participant.querySelector("#Qq")) {
        playerInformation["Qq"] = participant.querySelector("#Qq").value;
      }
      playerInformation["Newrecord"] =
        participant.querySelector("#Newrecord").value;
      bibArray.push(bibInput.value); // Bib 값을 별도의 배열에 저장
      playerInformationArray.push(playerInformation);
    });

    participant_information["Players"] = playerInformationArray;
    for (let i = 0; i < playerInformationArray.length; i++) {
      participants_information.push(playerInformationArray[i]);
    }
  }
  const jsonData = RelayJSON(participants_information);
  AjaxData(jsonData, url);
}

/**
 * 트랙 Reaction Time 포맷을 처리하는 함수입니다.
 * 입력된 값을 정규화하고, 등수를 다시 계산합니다.
 *
 * @param {Object} obj - Reaction Time 값을 담고 있는 HTML 요소
 */
function trackReactionTimeForm(obj) {
  // 입력된 값을 정규화합니다.
  obj.value = regTrackTime(uncomma(obj.value));

  // 등수를 다시 계산합니다.
  rankcal1();
}
/**
 * 트랙 Reaction Time 값을 정규화하는 함수입니다.
 * 입력된 문자열을 "0.xxx" 형태로 변환합니다.
 *
 * @param {string} str - 변환할 문자열
 * @returns {string} 변환된 문자열
 */
function regTrackTime(str) {
  str = String(str);
  return str.replace(/^0*(\d{1,6})$/, "0.$1");
}

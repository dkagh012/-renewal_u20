const awardCeremony = document.querySelector(".awardCeremony");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const bannerContainer = document.querySelector(".banner-container");

const defaultBannerContainer = "banner-container";
const defaultAwardCeremony = "awardCeremony";

const defaultFirst = "flag-container first";
const defaultSecond = "flag-container second";
const defaultThird = "flag-container third";

const fadeIn = "animate__animated animate__fadeIn animate__slow";
const fadeOut = "animate__animated animate__fadeOut animate__slow";
const slideInDown =
  "animate__animated animate__fadeInDown animate__delay-01s animate__slower";
const slideOutDown =
  "animate__animated animate__fadeOutDown animate__delay-01s animate__slow";

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyQ") {
    bannerContainer.className = defaultBannerContainer + " " + fadeIn;
    bannerContainer.style.opacity = 1;
  } else if (e.code === "KeyW") {
    bannerContainer.className = defaultBannerContainer + " " + fadeOut;
    setTimeout(() => {
      bannerContainer.style.opacity = 0;
    }, 1000);
  } else if (e.code === "KeyA") {
    first.className = defaultFirst + " " + slideInDown;
    second.className = defaultSecond + " " + slideInDown;
    third.className = defaultThird + " " + slideInDown;
    first.style.opacity = 1;
    second.style.opacity = 1;
    third.style.opacity = 1;
  } else if (e.code === "KeyS") {
    first.className = defaultFirst + " " + slideOutDown;
    second.className = defaultSecond + " " + slideOutDown;
    third.className = defaultThird + " " + slideOutDown;
    setTimeout(() => {
      first.style.opacity = 0;
      second.style.opacity = 0;
      third.style.opacity = 0;
    }, 1000);
  } else if (e.code === "KeyD") {
    first.className = defaultFirst;
    second.className = defaultSecond;
    third.className = defaultThird;
    first.style.opacity = 1;
    second.style.opacity = 1;
    third.style.opacity = 1;
  } else if (e.code === "KeyF") {
    first.className = defaultFirst;
    second.className = defaultSecond;
    third.className = defaultThird;
    first.style.opacity = 0;
    second.style.opacity = 0;
    third.style.opacity = 0;
  } else if (e.code === "KeyZ") {
    bannerContainer.className = defaultBannerContainer + " " + fadeIn;
    bannerContainer.style.opacity = 1;
    first.className = defaultFirst + " " + slideInDown;
    second.className = defaultSecond + " " + slideInDown;
    third.className = defaultThird + " " + slideInDown;
    first.style.opacity = 1;
    second.style.opacity = 1;
    third.style.opacity = 1;
  } else if (e.code === "KeyX") {
    bannerContainer.className = defaultBannerContainer + " " + fadeOut;
    first.className = defaultFirst + " " + slideOutDown;
    second.className = defaultSecond + " " + slideOutDown;
    third.className = defaultThird + " " + slideOutDown;
    setTimeout(() => {
      bannerContainer.style.opacity = 0;
      first.style.opacity = 0;
      second.style.opacity = 0;
      third.style.opacity = 0;
    }, 1000);
  }
});

h.onload = function () {
  var flag = document.getElementById("flag1");
  var amp = 30;
  flag.width = h.width;
  flag.height = h.height + amp * 2;
  flag.getContext("2d").drawImage(h, 0, amp, h.width, h.height);
  var timer = waveFlag(flag, 30, 10, 150, 200, -0.1);
};

h2.onload = function () {
  var flag = document.getElementById("flag2");
  var amp = 30;
  flag.width = h.width;
  flag.height = h.height + amp * 3;
  flag.getContext("2d").drawImage(h2, 0, amp, h2.width, h2.height);
  var timer = waveFlag(flag, 30, 10, 150, 200, -0.1);
};

h3.onload = function () {
  var flag = document.getElementById("flag3");
  var amp = 30;
  flag.width = h.width;
  flag.height = h.height + amp * 2;
  flag.getContext("2d").drawImage(h3, 0, amp, h3.width, h3.height);
  var timer = waveFlag(flag, 30, 10, 150, 200, -0.1);
};

function waveFlag(canvas, wavelength, amplitude, period, shading, squeeze) {
  if (!squeeze) squeeze = 0;
  if (!shading) shading = 100;
  if (!period) period = 200;
  if (!amplitude) amplitude = 10;
  if (!wavelength) wavelength = canvas.width / 10;

  var fps = 30;
  var ctx = canvas.getContext("2d");
  var w = canvas.width,
    h = canvas.height;
  var od = ctx.getImageData(0, 0, w, h).data;
  // var ct = 0, st=new Date;
  return setInterval(function () {
    var id = ctx.getImageData(0, 0, w, h);
    var d = id.data;
    var now = new Date() / period;
    for (var y = 0; y < h; ++y) {
      var lastO = 0,
        shade = 0;
      var sq = (y - h / 2) * squeeze;
      for (var x = 0; x < w; ++x) {
        var px = (y * w + x) * 4;
        var pct = x / w;
        var o = Math.sin(x / wavelength - now) * amplitude * pct;
        var y2 = (y + (o + sq * pct)) << 0;
        var opx = (y2 * w + x) * 4;
        shade = (o - lastO) * shading;
        d[px] = od[opx] + shade;
        d[px + 1] = od[opx + 1] + shade;
        d[px + 2] = od[opx + 2] + shade;
        d[px + 3] = od[opx + 3];
        lastO = o;
      }
    }
    ctx.putImageData(id, 0, 0);
  }, 3500 / fps);
}

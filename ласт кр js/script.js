const mainTexst = document.querySelector(".main-Texst-box");
const boldT = document.querySelector("#bold");
const italicsT = document.querySelector("#italics");
const damnT = document.querySelector("#damn");
const strikeoutT = document.querySelector("#strikeout");
const blockquoteLeft = document.querySelector("#blockquote-left");
const textCenter = document.querySelector("#text-center");
const blockquoteRight = document.querySelector("#blockquote-right");
const fontFT = document.querySelector("#fontF");
const fontST = document.querySelector("#fontS");
const boxFontFamile = document.querySelector(".boxFontFamile");
const openAdminlog = document.querySelector("#openAdminlog");
const bt = document.querySelector(".bt");
const fontColor = document.querySelector(".fontColor");
const dark = document.querySelector(".dark");
const boxColortext = document.querySelector(".boxColortext");
const time = document.querySelector(".time");
const bottonBoxColor = document.querySelector(".bottonBoxColor");
const btAdmin = document.querySelector(".btAdmin");
const login = document.querySelector(".login");
const pass = document.querySelector(".pass");
const boxAdmin = document.querySelector(".boxAdmin");
const mainHeader = document.querySelector(".mainHeader");
const texstar = document.querySelector(".texstar");
const save = document.querySelector(".save");
const mainHeader2 = document.querySelector(".mainHeader2");
const helpHide = document.querySelector(".helpHide");
const table = document.querySelector(".table");
const ex = document.querySelector(".ex");
const boxhelp2 = document.querySelector(".boxhelp2");
const ol = document.querySelector(".ol");
const hide2 = document.querySelector(".hide2");
const time2 = document.querySelector(".time2");
const hlp1 = document.querySelector(".hlp1");
const fontb = document.querySelector("#fontb");
let fontbtrue = true;
let fontStrue = true;
let fontFtrue = true;
let blockquoteRighttrue = true;
let textCentertrue = true;
let blockquoteLefttrue = true;
let damntrue = true;
let strikeouttrue = true;
let boldtrue = true;
let italicstrue = true;

let form = document.forms["formCreateTable"];
let countTr = form.countTr.value;
let countTd = form.countTd.value;
let widthTD = form.widthTD.value;
let HeightTD = form.HeightTD.value;
let Wightofborde = form.Wightofborde.value;
let tpBorder = form.tpBorder.value;
let colorBorder = form.colorBorder.value;

function bold() {
  if (boldtrue) {
    mainTexst.style.fontWeight = "bold";
    boldtrue = false;
    boldT.classList.add("activ");
  } else {
    mainTexst.style.fontWeight = "normal";
    boldtrue = true;
    boldT.classList.remove("activ");
  }
}
function italics() {
  if (italicstrue) {
    mainTexst.style.fontStyle = "italic";
    italicstrue = false;
    italicsT.classList.add("activ");
  } else {
    mainTexst.style.fontStyle = "normal";
    italicstrue = true;
    italicsT.classList.remove("activ");
  }
}
function damn() {
  if (damntrue) {
    mainTexst.style.textDecoration = "underline";
    damntrue = false;
    damnT.classList.add("activ");
  } else {
    mainTexst.style.textDecoration = "none";
    damntrue = true;
    damnT.classList.remove("activ");
  }
}
function strikeout() {
  if (strikeouttrue) {
    mainTexst.style.textDecoration = "line-through";
    strikeouttrue = false;
    strikeoutT.classList.add("activ");
  } else {
    mainTexst.style.textDecoration = "none";
    strikeouttrue = true;
    strikeoutT.classList.remove("activ");
  }
}

function fontbb() {
if(fontbtrue){
    hlp1.classList.remove("hide");
    fontbtrue = false
}
else{
  fontbtrue = true
  hlp1.classList.add("hide");
}
}

function bgimg(event) {
  // console.log(event);
  document.body.classList.add(event); 
}

// 1
function blockquote_left() {
  if (blockquoteLefttrue) {
    mainTexst.style.textAlign = "left";
    textCentertrue = true;
    blockquoteLefttrue = false;
    blockquoteRighttrue = true;
    blockquoteLeft.classList.add("activ");
    textCenter.classList.remove("activ");
    blockquoteRight.classList.remove("activ");
  } else {
    blockquoteLefttrue = true;
    blockquoteLeft.classList.remove("activ");
  }
}
// 2
function text_center() {
  if (textCentertrue) {
    mainTexst.style.textAlign = "center";
    textCentertrue = false;
    blockquoteLefttrue = true;
    blockquoteRighttrue = true;
    blockquoteLeft.classList.remove("activ");
    textCenter.classList.add("activ");
    blockquoteRight.classList.remove("activ");
  } else {
    textCentertrue = true;
    textCenter.classList.remove("activ");
    mainTexst.style.textAlign = "left";
  }
}
// 3
function blockquote_right() {
  if (blockquoteRighttrue) {
    mainTexst.style.textAlign = "right";
    blockquoteRighttrue = false;
    textCentertrue = true;
    blockquoteLefttrue = true;
    blockquoteLeft.classList.remove("activ");
    textCenter.classList.remove("activ");
    blockquoteRight.classList.add("activ");
  } else {
    blockquoteRighttrue = true;
    blockquoteRight.classList.remove("activ");
    mainTexst.style.textAlign = "left";
  }
}
function fontF() {
  if (fontFtrue) {
    boxFontFamile.classList.remove("hide");
    fontFtrue = false;
    fontFT.classList.add("activ");
  } else {
    boxFontFamile.classList.add("hide");
    fontFtrue = true;
    fontFT.classList.remove("activ");
  }
}

// 1----

const Arial = document.querySelector(".Arial");
let Arialtrue = true;
Arial.onmousedown = function () {
  Arial.style.background = "rgb(121, 121, 216)";
  Arial.style.color = "white ";
  Arial.onmouseup = function () {
    Arial.style.background = "white ";
    Arial.style.color = "black ";
    if (Arialtrue) {
      mainTexst.style.fontFamily = "arial";
      Arialtrue = false;
      Verdanatrue = true;
      Georgiatrue = true;
      Impacttrue = true;
      Tahomatrue = true;
      TimesNewRomantrue = true;
      boxFontFamile.classList.add("hide");
      fontFtrue = true;
      fontFT.classList.remove("activ");
    } else {
      mainTexst.style.fontFamily = "normal";
      Arialtrue = true;
    }
  };
};

const Georgia = document.querySelector(".Georgia");
let Georgiatrue = true;
Georgia.onmousedown = function () {
  Georgia.style.background = "rgb(121, 121, 216)";
  Georgia.style.color = "white ";
  Georgia.onmouseup = function () {
    Georgia.style.background = "white ";
    Georgia.style.color = "black ";
    if (Georgiatrue) {
      mainTexst.style.fontFamily = "Georgia";
      Georgiatrue = false;
      Verdanatrue = true;
      Arialtrue = true;
      Impacttrue = true;
      Tahomatrue = true;
      TimesNewRomantrue = true;
      boxFontFamile.classList.add("hide");
      fontFtrue = true;
      fontFT.classList.remove("activ");
    } else {
      mainTexst.style.fontFamily = "normal";
      Georgiatrue = true;
    }
  };
};

const Impact = document.querySelector(".Impact");
let Impacttrue = true;
Impact.onmousedown = function () {
  Impact.style.background = "rgb(121, 121, 216)";
  Impact.style.color = "white ";
  Impact.onmouseup = function () {
    Impact.style.background = "white ";
    Impact.style.color = "black ";
    if (Impacttrue) {
      mainTexst.style.fontFamily = "Impact";
      Impacttrue = false;
      Verdanatrue = true;
      Arialtrue = true;
      Georgiatrue = true;
      Tahomatrue = true;
      TimesNewRomantrue = true;
      boxFontFamile.classList.add("hide");
      fontFtrue = true;
      fontFT.classList.remove("activ");
    } else {
      mainTexst.style.fontFamily = "normal";
      Impacttrue = true;
    }
  };
};

const Tahoma = document.querySelector(".Tahoma");
let Tahomatrue = true;
Tahoma.onmousedown = function () {
  Tahoma.style.background = "rgb(121, 121, 216)";
  Tahoma.style.color = "white ";
  Tahoma.onmouseup = function () {
    Tahoma.style.background = "white ";
    Tahoma.style.color = "black ";
    if (Tahomatrue) {
      mainTexst.style.fontFamily = "Tahoma";
      Tahomatrue = false;
      Verdanatrue = true;
      Arialtrue = true;
      Georgiatrue = true;
      Impacttrue = true;
      TimesNewRomantrue = true;
      boxFontFamile.classList.add("hide");
      fontFtrue = true;
      fontFT.classList.remove("activ");
    } else {
      mainTexst.style.fontFamily = "normal";
      Tahomatrue = true;
    }
  };
};

const TimesNewRoman = document.querySelector(".TimesNewRoman");
let TimesNewRomantrue = true;
TimesNewRoman.onmousedown = function () {
  TimesNewRoman.style.background = "rgb(121, 121, 216)";
  TimesNewRoman.style.color = "white ";
  TimesNewRoman.onmouseup = function () {
    TimesNewRoman.style.background = "white ";
    TimesNewRoman.style.color = "black ";
    if (TimesNewRomantrue) {
      mainTexst.style.fontFamily = "Tahoma";
      TimesNewRomantrue = false;
      Verdanatrue = true;
      Arialtrue = true;
      Georgiatrue = true;
      Impacttrue = true;
      Tahomatrue = true;
      boxFontFamile.classList.add("hide");
      fontFtrue = true;
      fontFT.classList.remove("activ");
    } else {
      mainTexst.style.fontFamily = "normal";
      TimesNewRomantrue = true;
    }
  };
};

const Verdana = document.querySelector(".Verdana");
let Verdanatrue = true;
Verdana.onmousedown = function () {
  Verdana.style.background = "rgb(121, 121, 216)";
  Verdana.style.color = "white ";
  Verdana.onmouseup = function () {
    Verdana.style.background = "white ";
    Verdana.style.color = "black ";
    if (Verdanatrue) {
      mainTexst.style.fontFamily = "Tahoma";
      Verdanatrue = false;
      Arialtrue = true;
      Georgiatrue = true;
      Impacttrue = true;
      Tahomatrue = true;
      TimesNewRomantrue = false;
      boxFontFamile.classList.add("hide");
      fontFtrue = true;
      fontFT.classList.remove("activ");
    } else {
      mainTexst.style.fontFamily = "normal";
      Verdanatrue = true;
    }
  };
};

const boxFontSize = document.querySelector(".boxFontSize");
fontST.onclick = function () {
  if (fontStrue) {
    fontST.classList.add("activ");
    boxFontSize.classList.remove("hide");
    fontStrue = false;
  } else {
    fontStrue = true;
    fontST.classList.remove("activ");
    boxFontSize.classList.add("hide");
  }
};

const tw = document.querySelector(".tw");
tw.onmousedown = function () {
  tw.style.background = "rgb(121, 121, 216)";
  tw.style.color = "white ";
  tw.onmouseup = function () {
    tw.style.background = "white ";
    tw.style.color = "black ";
    mainTexst.style.fontSize = "12px";
    boxFontSize.classList.add("hide");
    fontStrue = true;
    fontST.classList.remove("activ");
  };
};

const fot = document.querySelector(".fot");
fot.onmousedown = function () {
  fot.style.background = "rgb(121, 121, 216)";
  fot.style.color = "white ";
  fot.onmouseup = function () {
    fot.style.background = "white ";
    fot.style.color = "black ";
    mainTexst.style.fontSize = "14px";
    boxFontSize.classList.add("hide");
    fontStrue = true;
    fontST.classList.remove("activ");
  };
};

const sixt = document.querySelector(".sixt");
sixt.onmousedown = function () {
  sixt.style.background = "rgb(121, 121, 216)";
  sixt.style.color = "white ";
  sixt.onmouseup = function () {
    sixt.style.background = "white ";
    sixt.style.color = "black ";
    mainTexst.style.fontSize = "16px";
    boxFontSize.classList.add("hide");
    fontStrue = true;
    fontST.classList.remove("activ");
  };
};

const elft = document.querySelector(".elft");
elft.onmousedown = function () {
  elft.style.background = "rgb(121, 121, 216)";
  elft.style.color = "white ";
  elft.onmouseup = function () {
    elft.style.background = "white ";
    elft.style.color = "black ";
    mainTexst.style.fontSize = "18px";
    boxFontSize.classList.add("hide");
    fontStrue = true;
    fontST.classList.remove("activ");
  };
};

const twlt = document.querySelector(".twlt");
twlt.onmousedown = function () {
  twlt.style.background = "rgb(121, 121, 216)";
  twlt.style.color = "white ";
  twlt.onmouseup = function () {
    twlt.style.background = "white ";
    twlt.style.color = "black ";
    mainTexst.style.fontSize = "20px";
    boxFontSize.classList.add("hide");
    fontStrue = true;
    fontST.classList.remove("activ");
  };
};

const tf = document.querySelector(".tf");
tf.onmousedown = function () {
  tf.style.background = "rgb(121, 121, 216)";
  tf.style.color = "white ";
  tf.onmouseup = function () {
    tf.style.background = "white ";
    tf.style.color = "black ";
    mainTexst.style.fontSize = "25px";
    boxFontSize.classList.add("hide");
    fontStrue = true;
    fontST.classList.remove("activ");
  };
};

const tht = document.querySelector(".tht");
tht.onmousedown = function () {
  tht.style.background = "rgb(121, 121, 216)";
  tht.style.color = "white ";
  tht.onmouseup = function () {
    tht.style.background = "white ";
    tht.style.color = "black ";
    mainTexst.style.fontSize = "30px";
    boxFontSize.classList.add("hide");
    fontStrue = true;
    fontST.classList.remove("activ");
  };
};

fontColor.onclick = function () {
  dark.classList.remove("hide");
  boxColortext.classList.remove("hide");
};
time.onclick = function () {
  dark.classList.add("hide");
  boxColortext.classList.add("hide");
};

function color(event) {
  console.log(event);
  mainTexst.style.color = event;
}
// --------------------------------------------------------------------------

let in1 = /^a|Admin$/;
let in2 = /^a|Admin$/;
let btAdmintrue = true;
bt.onclick = function () {
  if (btAdmintrue) {
    boxAdmin.classList.remove("hide");
  } else {
    boxhelp2.classList.remove("hide");
    dark.classList.remove("hide");
  }
};

btAdmin.onclick = function () {
  if (in1.test(login.value) === true && in2.test(pass.value) === true) {
    boxAdmin.classList.add("hide");
    openAdminlog.disabled = false;
    openAdminlog.classList.remove("notactiv");
    btAdmintrue = false;
    bt.style.backgroundImage = "url(img/unlock-fill.svg)";
  }
};

openAdminlog.onclick = function () {
  texstar.value = mainTexst.innerHTML;
  mainHeader2.classList.remove("hide");
  texstar.classList.remove("hide");
  mainTexst.classList.add("hide");
  mainHeader.classList.add("hide");
};
save.onclick = function () {
  mainTexst.innerHTML = texstar.value;
  mainTexst.classList.remove("hide");
  mainHeader.classList.remove("hide");
  mainHeader2.classList.add("hide");
  texstar.classList.add("hide");
};
table.onclick = function () {
  helpHide.classList.remove("hide");
  dark.classList.remove("hide");
};
ex.onclick = function () {
  helpHide.classList.add("hide");
  dark.classList.add("hide");
};
function createTable() {
  form = document.forms["formCreateTable"];
  countTr = form.countTr.value;
  countTd = form.countTd.value;
  widthTD = form.widthTD.value;
  HeightTD = form.HeightTD.value;
  Wightofborde = form.Wightofborde.value;
  tpBorder = form.tpBorder.value;
  colorBorder = form.colorBorder.value;

  texstar.value += `<table border="1">`;
  for (let i = 1; i <= countTr; i++) {
    texstar.value += `<tr>`;
    for (let j = 1; j <= countTd; j++) {
      let bd = ` border:${Wightofborde}px ${tpBorder} ${colorBorder}`;
      let wid = `style= " width: ${widthTD}px;height: ${HeightTD}px;${bd}"`;
      texstar.value += `<td ${wid}  >TD</td>`;
    }
    texstar.value += `</tr>`;
  }
  texstar.value += `</table>`;
  helpHide.classList.add("hide");
  dark.classList.add("hide");
}
function Cancel() {
  boxhelp2.classList.add("hide");
  dark.classList.add("hide");
}

function SingOut() {
  boxhelp2.classList.add("hide");
  dark.classList.add("hide");
  bt.style.backgroundImage = "url(img/lock-fill.svg)";
  btAdmintrue = true;
  openAdminlog.disabled = true;
  openAdminlog.classList.add("notactiv");
}
function rem() {
  form = document.forms["formCreateTable"];
  form.countTr.value = "  ";
  form.countTd.value = "  ";
  form.widthTD.value = "  ";
  form.HeightTD.value = "  ";
  Wightofborde = form.Wightofborde.value = "  ";
}
ol.onclick = function () {
  hide2.classList.remove("hide");
  dark.classList.remove("hide");
};
time2.onclick = function () {
  hide2.classList.add("hide");
  dark.classList.add("hide");
};

let form2 = document.forms["formCreateList"];
let cli = form.countLi.value;
let tup = form.typeofmarks.value;
function createList() {
  form2 = document.forms["formCreateList"];
  cli = form2.countLi.value;
  tup = form2.typeofmarks.value;

  texstar.value += `<ol>`;
  for (let i = 1; i <= cli; i++) {
    texstar.value += `<li style= "list-style:${tup}">`;

    texstar.value += `items`;

    texstar.value += `</li>`;
  }
  texstar.value += `</ol>`;
  hide2.classList.add("hide");
  dark.classList.add("hide");
}
function reset2() {
  // alert('dd')
  form2.countLi.value = "  ";
}

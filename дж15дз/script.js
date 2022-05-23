let text = document.querySelector(".text");
let cont = document.querySelector(".boxsTe");
let block = document.querySelector(".f1");

function clock() {
  for (i = block.length + 1; (i = 15); i++) {
    let inp = `<input type="checkbox" class="check"  'onclick'=cl(${i}) >`;
  }

  let val = text.value;
  text.value = null;
  let cont = document.createElement("div");
  cont.classList.add("boxsTe");
  if (!val == false) {
    if (block.length <= 14) {
      block.appendChild(cont);

      cont.insertAdjacentHTML("beforeend", `${inp + val}`);
    } else {
      alert("Список переповнений");
    }
  } else {
    alert("Пусте поле не можна добавити");
  }
}

function cl() {
  if (block.length === 1) {
    alert = "Останній таск зі списку Ви не можете видалити";
  } else {
    document.querySelector(".boxsTe").remove();
  }
}

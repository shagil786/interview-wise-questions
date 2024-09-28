let listEl = document.querySelector("#list");
let buttonEl = document.querySelector("#add");
let inputEl = document.querySelector("#input");
const arr = [];

function deleteFun(id) {
  let index = arr.findIndex((each) => each?.id === id);
  arr.splice(index, 1);
  render();
}

function editFun(id) {
  let index = arr.findIndex((each) => each?.id === id);
  arr[index].isEditing = true;
  inputEl.value = arr[index]?.text;
  arr.splice(index, 1, arr[index]);
  buttonEl.textContent = "save";
  render();
}

function saveEdit(newText) {
  let index = arr.findIndex((each) => each?.isEditing);
  arr[index].text = newText;
  arr[index].isEditing = false;
  arr.splice(index, 1, arr[index]);
  buttonEl.textContent = "Add Todo";
  render();
}

function render() {
  listEl.innerHTML = "";
  arr.forEach((each, index) => {
    let item = document.createElement("div");
    item.className = "cover";
    item.style.display = "flex";
    item.style.alignContent = "center";

    let text = document.createElement("p");
    text.textContent = each.text;
    text.id = each?.id;

    let del = document.createElement("button");
    del.textContent = "delete";
    del.addEventListener("click", () => deleteFun(each?.id));

    let edit = document.createElement("button");
    edit.textContent = "edit";
    edit.addEventListener("click", () => editFun(each?.id));

    let buttonEl = document.createElement("div");
    buttonEl.append(edit, del);
    buttonEl.style.margin = "auto";

    item.append(text, buttonEl);

    listEl.appendChild(item);
  });
}

buttonEl.addEventListener("click", () => {
  let input = inputEl.value.trim();
  if (input != "") {
    if (buttonEl.textContent === "save") {
      saveEdit(input);
    } else {
      arr.push({
        id: arr.length ?? 0,
        text: input,
        isEditing: false,
      });
    }
  }
  inputEl.value = "";
  render();
});

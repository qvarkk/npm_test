import "./style.css";

const TaskFactory = (title, description, dueDate, status) => {
  return { title, description, dueDate, status };
};

const addTaskBtn = document.querySelector("#newProjectBtn");
const overlay = document.querySelector("#popupOverlay");
const overlayBg = document.querySelector("#overlayBg");

addTaskBtn.addEventListener("click", () => {
  overlay.classList.remove("inactive");
});

overlayBg.addEventListener("click", () => {
  overlay.classList.add("inactive");
});

const submitTaskBtn = document.querySelector("#addTaskBtn");
const addTitleInput = document.querySelector("#addTitle");
const addDescriptionInput = document.querySelector("#addDescription");
const addDueToInput = document.querySelector("#addDueTo");
const addStatusInput = document.querySelector("#addStatus");

submitTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(
    `${addTitleInput.value} is title,${addDescriptionInput.value} is Description, ${addDueToInput.value} is date due to, ${addStatusInput.value} is status`
  );
  addTitleInput.value = "";
  addDueToInput.value = "";
  addDescriptionInput.value = "";
  addStatusInput.checked = false;
  overlay.classList.add("inactive");
});

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
  console.log("asdadasda");
  overlay.classList.add("inactive");
});

const submitTaskBtn = document.querySelector("#addTaskBtn");
const addDescriptionInput = document.querySelector("#addDescription");
const addDueToInput = document.querySelector("#addDueTo");
const addStatus = document.querySelector("#addStatus");
const addTitleInput = document.querySelector("#addTitle");

submitTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submited");
  overlay.classList.add("inactive");
});

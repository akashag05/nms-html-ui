const toggleButton = document.getElementById("toggleButton");
const gridView = document.querySelector(".grid-view");
const tableView = document.querySelector(".table-view");

toggleButton.addEventListener("click", () => {
  if (gridView.style.display === "none") {
    gridView.style.display = "block";
    tableView.style.display = "none";
  } else {
    gridView.style.display = "none";
    tableView.style.display = "block";
  }
});

const openModalBtn = document.getElementById("openModalBtn");
const myModal = document.getElementById("myModal");
const saveBtn = document.getElementById("saveBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeCrossBtn = document.getElementById("closeCrossBtn");

openModalBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default link behavior
  myModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  myModal.style.display = "none";
});

closeCrossBtn.addEventListener("click", () => {
  myModal.style.display = "none";
});

saveBtn.addEventListener("click", () => {
  // Perform any actions you want to do when the Save button is clicked
  myModal.style.display = "none"; // Close the modal after saving
});

function getSelectedInterests() {
  const selectedInterests = [];
  const checkboxes = document.querySelectorAll(
    '.dropdown-item input[type="checkbox"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    selectedInterests.push(checkbox.value);
  });
  console.log("Selected Interests:", selectedInterests);
  // You can perform any further actions with the selected interests here
}

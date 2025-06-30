document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guest-form");
  const guestInput = document.getElementById("guest-name");
  const guestCategory = document.getElementById("guest-category");
  const guestList = document.getElementById("guest-list");

  let guestCount = 0;
  const MAX_GUESTS = 10;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = guestInput.value.trim();
    const category = guestCategory.value;

    if (!name || !category) {
      alert("Please enter a name and select a category.");
      return;
    }

    if (guestCount >= MAX_GUESTS) {
      alert("Guest limit reached (10 guests max).");
      return;
    }

    addGuest(name, category);
    guestInput.value = "";
    guestCategory.value = "";
  });

  function addGuest(name, category) {
    const li = document.createElement("li");

    const nameSection = document.createElement("div");
    nameSection.classList.add("name-section");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;

    const categoryTag = document.createElement("span");
    categoryTag.textContent = category;
    categoryTag.classList.add("category-tag", category.toLowerCase());

    nameSection.appendChild(nameSpan);
    nameSection.appendChild(categoryTag);

    const actions = document.createElement("div");

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "RSVP";
    rsvpBtn.addEventListener("click", () => {
      nameSpan.classList.toggle("attending");
      rsvpBtn.textContent = nameSpan.classList.contains("attending") ? "Attending" : "RSVP";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.style.backgroundColor = "#dc3545";
    deleteBtn.addEventListener("click", () => {
      guestList.removeChild(li);
      guestCount--;
    });

    actions.appendChild(rsvpBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(nameSection);
    li.appendChild(actions);

    guestList.appendChild(li);
    guestCount++;
  }
});


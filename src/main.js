import "./style.css";

// Minimal demo "characters"
const characters = [
  { id: "amber",  name: "Amber",  school: "Fire"   },
  { id: "blaze",  name: "Blaze",  school: "Storm"  },
  { id: "cedric", name: "Cedric", school: "Ice"    },
  { id: "daria",  name: "Daria",  school: "Life"   },
];

const board = document.getElementById("board");
renderBoard(characters);

function renderBoard(list) {
  board.innerHTML = "";
  list.forEach((c) => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <div class="shot">${c.name[0]}</div>
      <div class="name"><strong>${c.name}</strong></div>
      <div class="meta">${c.school}</div>
    `;
    // Toggle gray on click
    el.addEventListener("click", () => el.classList.toggle("down"));
    // Keyboard accessible (Enter/Space)
    el.tabIndex = 0;
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.click();
      }
    });
    board.appendChild(el);
  });
}
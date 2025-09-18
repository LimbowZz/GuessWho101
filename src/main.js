import "./style.css";

// Temp chars
const characters = [
  { id: "falmea",  name: "Falmea",  school: "Fire"   },
  { id: "Halston",  name: "Halston",  school: "Storm"  },
  { id: "lydia", name: "Lydia", school: "Ice"    },
  { id: "moolinda",  name: "Moolinda",  school: "Life"   },
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
const container = document.querySelector("#container");
const newGridBtn = document.querySelector("button");
const containerSize = 400;

const divs = [];
    for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    divs.push(div);
  }
  divs.forEach(div => {
    container.appendChild(div);
  });

newGridBtn.addEventListener('click', () => {
  const userInput = parseInt(prompt("Enter number: "));
  if (!isNaN(userInput) && userInput > 0) {
    createGrid(userInput);
  } else {
    alert("Please enter a valid positive number.");
  }
});

function createGrid(userInput){
  container.innerHTML = "";
  const boxSize = containerSize / userInput;
    for (let i = 0; i < (userInput * userInput); i++) {
    const div = document.createElement("div");
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    container.appendChild(div);
  };
}
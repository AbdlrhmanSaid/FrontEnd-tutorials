let gen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let color = [];

for (let i = 0; i < 6; i++) {
  color.push(gen[Math.floor(Math.random() * gen.length)]);
}
let final = `#${color.join("")}`;

document.body.style.backgroundColor = final;

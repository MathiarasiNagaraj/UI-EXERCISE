triangle = document.querySelector("#Triangle");
square = document.querySelector("#Square");
circle = document.querySelector("#Circle");
next_button = document.querySelector(".next-button");
calculate_button = document.querySelector(".calculate-button");
tick = document.querySelector(".tick");
shapeContainer = document.querySelector(".shape-container");
inputContainer = document.querySelector(".input-container");
resultContainer = document.querySelector(".answer-section-div");

circleInput = document.getElementById("circle-input");
squareInput = document.getElementById("square-input");
triangleInput = document.getElementById("triangle-input");

inputbox = document.querySelector("#input-value");
class Circle {
  constructor(side) {
    this.side = side;
    this.aresFormula = "4πr2";
    this.perimeterFormula = "2πr";
  }
  calculateArea() {
    return (Math.PI * Math.pow(this.side, 2)).toFixed();
  }
  calculatePerimeter() {
    return (2 * Math.PI * this.side).toFixed();
  }
}
class Triangle {
  constructor(side) {
    this.side = side;
    this.aresFormula = "0.433*s*s";
    this.perimeterFormula = "3*s";
  }
  calculateArea() {
    return (0.433 * this.side * this.side).toFixed();
  }
  calculatePerimeter() {
    return (3 * this.side).toFixed();
  }
}
class Square {
  constructor(side) {
    this.side = side;
    this.aresFormula = "s*s";
    this.perimeterFormula = "4*s";
  }
  calculateArea() {
    return (this.side * this.side).toFixed();
  }
  calculatePerimeter() {
    return (4 * this.side).toFixed();
  }
}
let shapeobject = {
  "Equilateral Triangle": Triangle,
  Square: Square,
  Circle: Circle,
};

triangle.addEventListener("click", (event) => {
  tick.style.opacity = 0;
  event.target.style.opacity = 1;
  localStorage.setItem("shape", "Equilateral Triangle");
  next_button.style.opacity = 1;
});
square.addEventListener("click", (event) => {
  tick.style.opacity = 0;
  event.target.style.opacity = 1;
  localStorage.setItem("shape", "Square");
  next_button.style.opacity = 1;
});
circle.addEventListener("click", (event) => {
  tick.style.opacity = 0;
  event.target.style.opacity = 1;
  localStorage.setItem("shape", "Circle");
  console.log(localStorage.getItem("shape"));
  next_button.style.opacity = 1;
});

next_button.addEventListener("click", () => {
  shapeContainer.style.display = "none";
  resultContainer.style.display = "none";
  inputContainer.style.display = "block";
  let shapevar = localStorage.getItem("shape");
  console.log(shapevar);
  if (shapevar == "Equilateral Triangle") {
    triangleInput.style.display = "block";
    squareInput.style.display = "none";
    circleInput.style.display = "none";
  } else if (shapevar == "Circle") {
    circleInput.style.display = "block";
    squareInput.style.display = "none";
    triangleInput.style.display = "none";
  } else if (shapevar == "Square") {
    squareInput.style.display = "block";
    circleInput.style.display = "none";
    triangleInput.style.display = "none";
  }
});
calculate_button.addEventListener("click", () => {
  let storedObj = localStorage.getItem("shape");

  let obj = new shapeobject[storedObj](inputbox.value);
  let words = storedObj.split(" ");
  let id = words[words.length - 1];
  console.log(storedObj.split(" "));
  console.log(id);
  console.log(obj);
  let answertable =
    "<div class=" +
    storedObj +
    ">" +
    " <div id=" +
    id +
    ' class="shape answer"  name=' +
    storedObj +
    "></div>" +
    "<h1>" +
    storedObj +
    "</h1>" +
    '<table cellpadding="0" cellspacing="0">' +
    " <tr><td>SIDE</td><td>s</td><td>" +
    obj.side +
    " cm</td>  </tr>" +
    "<tr> <td>AREA</td> <td>" +
    obj.aresFormula +
    "</td><td>" +
    obj.calculateArea() +
    " sq cm</td>  </tr>" +
    "<tr><td>PERIMETER</td><td>" +
    obj.perimeterFormula +
    "</td> <td>" +
    obj.calculatePerimeter() +
    " cm</td> </tr>" +
    '</table> </div> <button class="start-again" onclick=startAgain()>Start Again</button>';

  resultContainer.innerHTML = answertable;
  shapeContainer.style.display = "none";
  inputContainer.style.display = "none";
  resultContainer.style.display = "flex";

  console.log(resultContainer.innerHTML);
});
startAgain_button = document.querySelector(".start-again");
startAgain = () => {
  shapeContainer.style.display = "block";
  inputContainer.style.display = "none";
  resultContainer.style.display = "none";
  tick.style.opacity = 0;
  next_button.style.opacity = 0;
  localStorage.clear();
};

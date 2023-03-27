// selecting all shapes
triangle = document.querySelector("#Triangle");
square = document.querySelector("#Square");
circle = document.querySelector("#Circle");
//selecting buttons
next_button = document.querySelector(".next-button");
calculate_button = document.querySelector(".calculate-button");
//selecting tickmarks
circletick = document.querySelector(".circle_tick");
squaretick = document.querySelector(".square_tick");
triangletick = document.querySelector(".triangle_tick");
//selecting shape container
shapeContainer = document.querySelector(".shape-container");
inputContainer = document.querySelector(".input-container");
resultContainer = document.querySelector(".answer-section-div");
//selecting each input header for each shape
circleInput = document.getElementById("circle-input");
squareInput = document.getElementById("square-input");
triangleInput = document.getElementById("triangle-input");
//selecting input box
inputbox = document.querySelector("#input-value");
// circle class
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
//triangle class
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
//square class
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
//shape object for selecting each object based on local storage and class name
let shapeobject = {
  "Equilateral Triangle": Triangle,
  "Square": Square,
  "Circle": Circle,
};
//adding click event to shape
//storing the selected shape in local storage
triangle.addEventListener("click", (event) => {
  circletick.style.opacity = 0;
  squaretick.style.opacity = 0;
  triangletick.style.opacity = 1;
  localStorage.setItem("shape", "Equilateral Triangle");
  next_button.style.opacity = 1;
});
square.addEventListener("click", (event) => {
  circletick.style.opacity = 0;
  squaretick.style.opacity = 1;
  triangletick.style.opacity = 0;
  localStorage.setItem("shape", "Square");
  next_button.style.opacity = 1;
});
circle.addEventListener("click", (event) => {
  circletick.style.opacity = 1;
  squaretick.style.opacity = 0;
  triangletick.style.opacity = 0;
  localStorage.setItem("shape", "Circle");
  console.log(localStorage.getItem("shape"));
  next_button.style.opacity = 1;
});
//adding event to next button 
//onclick the heading only should change
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
//creating table and changing only the formula
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
//on start again the first section should display
startAgain_button = document.querySelector(".start-again");
startAgain = () => {
  shapeContainer.style.display = "block";
  inputContainer.style.display = "none";
  resultContainer.style.display = "none";
  tick.style.opacity = 0;
  next_button.style.opacity = 0;
  localStorage.clear();
};

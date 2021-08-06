// Set up a React App(vanilla JS or your favorite framework works too)
// Display a random color palette when a user visits the webpage
// Create a button for the user to generate a new color palette
// Allow the user to click on the selected color to copy its HEX code
// Display a notification when the selected color's HEX code has been copied
// For an extra challenge

// Allow the user to change the color palette by pressing the 'spacebar'
// Allow the user to copy the HEX code of the entire color palette by pressing 'C'

const colorArr = ["A", "B", "C", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const colorHashCode = document.querySelector(".colorHashCode");
const ctaBtn = document.querySelector(".cta-btn");
const Box1 = document.querySelector("#color--1");
const Box2 = document.querySelector("#color--2");
const Box3 = document.querySelector("#color--3");
const Box4 = document.querySelector("#color--4");
const Box1Text = document.querySelector("#color-code--1");
const Box2Text = document.querySelector("#color-code--2");
const Box3Text = document.querySelector("#color-code--3");
const Box4Text = document.querySelector("#color-code--4");
const ClipBoardCopyMessage = document.querySelector("#MessageBox");
const IconBtn = document.querySelectorAll(".card");

// Random Color Generator //
const RandomColorGenerator = function (arr) {
  let color = ["#"];
  let ExpentionalColor = ["#"];
  let ExpentionalColor2 = ["#"];
  for (let i = 0; i < 6; i++) {
    const RandomChar = arr[Math.trunc(Math.random() * arr.length) + 1];
    color.push(RandomChar);
  }

  let newColor = color.join("");

  if (newColor.length === 6) {
    newColor = "";
    for (let i = 0; i < 6; i++) {
      let newCol = arr[Math.trunc(Math.random() * arr.length) + 1];
      ExpentionalColor.push(newCol);
    }
    newColor = ExpentionalColor.join("");

    // Rechecking Again
    if (newColor.length !== 6) {
      return newColor;
    } else {
      newColor = "";
      for (let i = 0; i < 6; i++) {
        let newCol2 = arr[Math.trunc(Math.random() * arr.length) + 1];
        ExpentionalColor2.push(newCol2);
      }
      newColor = ExpentionalColor2.join("");
      return newColor;
    }
  }

  return newColor;
};

// Color Box Manipulation Function //
const MakeColor = function (colorArr) {
  const Color1 = RandomColorGenerator(colorArr);
  const Color2 = RandomColorGenerator(colorArr);
  const Color3 = RandomColorGenerator(colorArr);
  const Color4 = RandomColorGenerator(colorArr);

  Box1.style.backgroundColor = `${Color1}`;
  Box1Text.textContent = `${Color1}`;

  Box2.style.backgroundColor = `${Color2}`;
  Box2Text.textContent = `${Color2}`;

  Box3.style.backgroundColor = `${Color3}`;
  Box3Text.textContent = `${Color3}`;

  Box4.style.backgroundColor = `${Color4}`;
  Box4Text.textContent = `${Color4}`;
};

MakeColor(colorArr);

// Copy Color Code //
const CopyColorCode = function (text) {};

// Btn Click Event //
ctaBtn.addEventListener("click", () => {
  MakeColor(colorArr);
});

// Copy Text //
function CopyMe(TextToCopy) {
  let TempText = document.createElement("input");
  TempText.value = TextToCopy;
  document.body.appendChild(TempText);
  TempText.select();

  document.execCommand("copy");
  document.body.removeChild(TempText);
}

// Icon Copy Event Message //
IconBtn.forEach((Icon) => {
  Icon.addEventListener("click", function (e) {
    const IconEL = e.target.closest(".color--card");
    const IconBgColor = IconEL.style.backgroundColor;
    setTimeout(() => {
      colorHashCode.style.display = "block";
      colorHashCode.style.backgroundColor = `${IconBgColor}`;
    }, 100);
    setTimeout(() => {
      colorHashCode.style.display = "none";
    }, 1000);

    // For Copying The Text //
    CopyMe(IconBgColor);
  });
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    MakeColor(colorArr);
  } else if (e.code === "KeyC") {
    CopyMe(IconBgColor);
  } else {
    return;
  }
});

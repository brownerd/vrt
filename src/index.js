module.exports = () => {
  // Make a box to display the vrt grid
  const vrtBox = document.createElement("div");
  vrtBox.classList.add("vrt__box");

  // Used for the hotkeys
  let keys = [];
  let active = false;

  // Get styles set on the root
  function getRootLineHeight() {
    let style = getComputedStyle(document.documentElement);
    let { lineHeight } = style;

    // console.log({ lineHeight });
    return lineHeight;
  }

  // Make vrtGrid
  function makeVrtGrid() {
    // Make rows - Let's build a fragment to append
    let addRows = document.createDocumentFragment();
    let baselineUnit = stringToFloat(getRootLineHeight());
    // Let's calculate how many rows at the given line-height can fit into our vrtBox
    let totalbaselineUnitRows = Math.floor(documentHeight() / baselineUnit);

    for (let i = 0, row = totalbaselineUnitRows; i < row; i++) {
      let newDiv = document.createElement("div");
      newDiv.className = `vrt__row`;
      newDiv.style.height = baselineUnit + "px";
      addRows.appendChild(newDiv);
    }

    // Append Frament to element
    vrtBox.appendChild(addRows);
  }

  document.addEventListener("keydown", toggleVrtGrid);

  function toggleVrtGrid(e) {
    const vrtGridAbove = "188,188"; // "38,38"; // up arrow, up arrow  //"188,188"; //  ,,
    const vrtGridBelow = "190,190"; // "40,40"; // down arrow, down arrow
    const vrtGridOff = "191"; // "88"; // x   // "190"; //  .
    // const vrtGridOff = "190"; //  .

    keys.push(e.keyCode);

    // Check to see if the user wants the grid to be placed on a layer above the web page
    if (keys.toString().includes(vrtGridAbove) && active === false) {
      aboveGrid();
    } else if (keys.toString().includes(vrtGridBelow) && active === false) {
      belowGrid();
    } else if (keys.toString().includes(vrtGridOff) && active === true) {
      closeGrid();
    } else {
      //console.log("ignore");
      return;
    }
  }

  function aboveGrid() {
    // We need to run this function everytime the grid is activated
    // because we need to recalculate the window height if the user has changed the browser width
    // console.log(keys.toString());
    makeVrtGrid();
    // Now we can append the grid to the body
    document.body.appendChild(vrtBox);
    // Here we give it a z-index of 1000, hopefully this is high enough above everything
    vrtBox.style.zIndex = 1000;
    // We are also going to give it an additional class of "above" that we can use for styling
    vrtBox.classList.add("above");
    // Reset the keys variable to an empty array
    keys = [];
    // Set the active variable to true
    active = true;
    //console.log(`ON - above ${active}`);
  }

  function belowGrid() {
    // We need to run this function everytime the grid is activated
    // because we need to recalculate the window height if the user has changed the browser width
    // console.log(keys.toString());
    makeVrtGrid();
    // Now we can append the grid to the body
    document.body.appendChild(vrtBox);
    // Here we give it a z-index of 1000, hopefully this is high enough above everything
    vrtBox.style.zIndex = -1000;
    // We are also going to give it an additional class of "above" that we can use for styling
    vrtBox.classList.add("below");
    // Reset the keys variable to an empty array
    keys = [];
    // Set the active variable to true
    active = true;
    //console.log(`ON - above ${active}`);
  }

  function closeGrid() {
    //console.log("x pressed", keys.toString());

    while (vrtBox.firstChild) {
      vrtBox.removeChild(vrtBox.firstChild);
    }

    vrtBox.classList.remove("above");
    document.body.removeChild(vrtBox);
    keys = [];
    active = false;
    //console.log(`OFF ${active}`);
  }

  // console.log(lh);

  // Helper functions
  // Get height of the document
  function documentHeight() {
    let documentHeight = document.documentElement.scrollHeight;
    return documentHeight;
  }

  // Helper function to turn Strings into Floats
  function stringToFloat(str) {
    let float = parseInt(str, 10);
    return float;
  }

  // Styling
  // Let's inject styles into the head so we don't need to
  // include a stylesheet file
  const styleVertGrid = `
    .vrt__box {
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
    }

    .vrt__row {
      box-shadow: inset 0px -1px 0px hsla(300deg,100%,50%, 1);
    }
    
    .vrt__box.above .vrt__row {
      box-shadow: inset 0px -1px 0px hsla(200deg,100%,50%, 1);
    }
  `;

  // Create a style element
  const styleElem = document.createElement("style");
  // Put the style into the a textNode
  const styleNode = document.createTextNode(styleVertGrid);
  // Append that textNode to the styleElement
  styleElem.appendChild(styleNode);
  // Append the styleElement to the head tag
  document.head.appendChild(styleElem);

  return { aboveGrid, belowGrid, closeGrid };
};

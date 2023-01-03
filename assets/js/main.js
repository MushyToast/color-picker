function getRGBValues() {
    // Get the RGB values from the input boxes
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;
  
    // Set the body background color to the RGB values
    if (red && green && blue) {
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
      document.body.style.backgroundColor = "white";
    }
  }
  
  setInterval(getRGBValues, 2); // Get RGB values every 2 seconds
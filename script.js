import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { number } from "./const.js";

// Create SVG container
const width = 999;
const height = 999;
const svg = d3
  .create("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", `0 0 ${width} ${height}`);

// Function to display and update circles
function display(i, x, y, prevX, prevY) {
  // Ensure the coordinates fit within the canvas range
  if (x < width && y < height) {
    // Draw a line from (prevX, prevY) to (x, y)
    svg
      .append("line")
      .attr("x1", prevX)
      .attr("y1", prevY)
      .attr("x2", x)
      .attr("y2", y)
      .attr("stroke", "#001b421a") // Line color
      .attr("stroke-width", 1); // Line width
    svg
      .append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 1)
      .attr("fill", "#001b421a");
  }
}

// Start the interval to update the circles every 100ms
let i = 6;
let prevX = parseInt(number[0] + number[1] + number[2]);
let prevY = parseInt(number[3] + number[4] + number[5]);

const interval = setInterval(() => {
  const x = parseInt(number[i] + number[i + 1] + number[i + 2]); // First 3 digits for x-coordinate
  const y = parseInt(number[i + 3] + number[i + 4] + number[i + 5]); // Next 3 digits for y-coordinate

  display(i, x, y, prevX, prevY);
  i += 6;
  if (i >= number.length) clearInterval(interval);

  prevX = x;
  prevY = y;
}, 10);

// Append the SVG element.
container.append(svg.node());

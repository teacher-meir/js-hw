function drawTriangleInput() {
    const size = +prompt('enter triangle size!');
    drawTriangle(size);
}
function drawTriangle(size) {
    document.body.innerHTML += `<div class="triangle" style="border-width: ${size}px;"></div>`;
}

function drawSquareInput() { }
function drawSquare(size) { }

function randomImage() { }

function calcBMIInput() { }
function calcBMI(height, weight) { }

function testYourself() { }
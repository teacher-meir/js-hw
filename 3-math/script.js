function drawTriangleInput() {
    const size = +prompt('enter triangle size!');

    if (isNaN(size) || size <= 0) {
        alert('גודל צלע לא תקין')
    } else {
        drawTriangle(size);
    }
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
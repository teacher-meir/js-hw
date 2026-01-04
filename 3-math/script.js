function drawTriangleInput() {
    const size = +prompt('enter triangle size!');

    if (isNaN(size) || size <= 0) {
        alert('גודל צלע לא תקין')
    } else {
        drawTriangle(size);
    }
}
function drawTriangle(size) {
    const yeter = Math.sqrt(size ** 2 + size ** 2);
    const perimeter = 2 * size + yeter;

    document.body.innerHTML += `
    <div class="triangle"
        style="border-width: ${size}px;"
        onclick="alert('היקף המשולש הוא ${perimeter}')"></div>
    `;
}

function drawSquareInput() { }
function drawSquare(size) { }

function randomImage() { }

function calcBMIInput() { }
function calcBMI(height, weight) { }

function testYourself() { }
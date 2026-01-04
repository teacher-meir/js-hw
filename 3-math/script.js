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

function drawSquareInput() {
    const size = +prompt('enter square size!');

    if (isNaN(size) || size <= 0) {
        alert('גודל צלע לא תקין')
    } else {
        drawSquare(size);
    }
}
function drawSquare(size) {
    const area = size ** 2;

    document.body.innerHTML += `
    <div class="square"
        style="height: ${size}px; width: ${size}px;"
        onclick="alert('שטח הריבוע הוא ${area}')"></div>
    `;
}

function drawRandomImage(maxImg) {
    const imgIndex = Math.ceil(Math.random() * maxImg);
    document.body.innerHTML += `
    <img src="images/dice/dice${imgIndex}.jpg" alt="קוביה עם ערך ${imgIndex}" />
    `;
}

function calcBMIInput() { }
function calcBMI(height, weight) { }

function testYourself() { }
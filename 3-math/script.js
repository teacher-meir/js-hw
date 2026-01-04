function drawTriangleInput() {
    const size = +prompt('enter triangle size!');
    const color = prompt('enter triangle color!');

    if (isNaN(size) || size <= 0) {
        alert('גודל צלע לא תקין')
    } else {
        drawTriangle(size, color);
    }
}
function drawTriangle(size, color) {
    const yeter = Math.sqrt(size ** 2 + size ** 2);
    const perimeter = 2 * size + yeter;

    document.body.innerHTML += `
    <div class="triangle"
        style="border-width: ${size}px; border-color: transparent transparent ${color} ${color};"
        onclick="alert('היקף המשולש הוא ${perimeter}')"></div>
    `;
}

function drawSquareInput(color) {
    const size = +prompt('enter square size!');

    if (isNaN(size) || size <= 0) {
        alert('גודל צלע לא תקין')
    } else {
        drawSquare(size, color);
    }
}
function drawSquare(size, color) {
    const area = size ** 2;

    document.body.innerHTML += `
    <div class="square"
        style="height: ${size}px; width: ${size}px; background: ${color};"
        onclick="alert('שטח הריבוע הוא ${area}')"></div>
    `;
}

function drawRandomImage(name, maxImg) {
    const imgIndex = Math.ceil(Math.random() * maxImg);

    document.body.innerHTML += `
    <img src="images/${name}/${name}${imgIndex}.png" alt="${name} no ${imgIndex}" />
    `;
}

function calcBMIInput() {
    const height = +prompt('enter your height (meters)!');
    const weight = +prompt('enter your weight (kilos)!');

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        alert('גובה/משקל לא תקין')
    } else {
        calcBMI(height, weight);
    }
}
function calcBMI(height, weight) {
    let bmi = weight / height ** 2;
    bmi = Math.round(bmi * 100) / 100;

    document.body.innerHTML += `
    <p class="bmi" style="color: ${bmi >= 18 && bmi <= 25 ? 'darkgreen' : 'darkred'}">ה-BMI שלך הוא ${bmi}</p>
    `;
}

function testYourself() {
    const isExample = confirm('האם אתה רוצה תרגיל דוגמא (אישור) או מבחן שלם (ביטול)?');
    const numExercises = isExample ? 1 : 5;

    for (let i = 0; i < numExercises; i++) {
        randomExercise();
    }
}

function randomExercise() {
    const num1 = randomRange(1, 10);
    const num2 = randomRange(1, 10);
    const operator = randomOperator();
    let exercise = `${num1} ${operator} ${num2}`, answer;

    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
        case '^':
            answer = num1 ** num2;
            break;
        case '√':
            exercise = `${operator} ${num1}`;
            answer = Math.sqrt(num1);
            break;
    }

    answer = Math.trunc(answer);

    document.body.innerHTML += `
    <p class="exercise" onclick="alert(${answer} === +prompt('הקש תשובה'))">${exercise}</p>
    `;
}

function randomOperator() {
    const op = randomRange(0, 5);
    switch (op) {
        case 0:
            return `+`;
        case 1:
            return `-`;
        case 2:
            return `*`;
        case 3:
            return `/`;
        case 4:
            return `^`;
        case 5:
            return `√`;
    }
}

function randomRange(from, to) {
    return Math.floor(Math.random() * (to - from + 1));
}
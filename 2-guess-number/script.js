function randomBetween(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from; // מספר אקראי בטווח
}

function startGame(from, to) {
    let randomNumber = randomBetween(from, to); // מספר אקראי בטווח

    let attempts = 0;
    let guess;
    let guessesList = '<ol>';

    while (guess !== randomNumber && attempts < 10) {
        guess = parseInt(prompt(`נחשו מספר בין ${from} ל-${to}:`));
        attempts++;
        console.log(guess);
        
        if (guess < randomNumber) {
            guessesList += `<li style="color: red;">${guess}</li>`;
            alert("המספר נמוך מדי!");
        } else if (guess > randomNumber) {
            guessesList += `<li style="color: blue;">${guess}</li>`;
            alert("המספר גבוה מדי!");
        } else {
            guessesList += `<li>${guess}</li>`;
            alert(`ניחשת נכון! המספר היה ${randomNumber}. מספר הניסיונות היה ${attempts}.`);
            document.body.innerHTML += `<h2>ניחשת נכון! המספר היה ${randomNumber}. מספר הניסיונות היה ${attempts}.</h2>`;
        }
    }
    guessesList += '</ol>';
    document.body.innerHTML += `<h3>הניחושים שלך היו:</h3>${guessesList}`;
}

let playAgain;
let from = parseInt(prompt("הקש את תחילת הטווח:", 1));
let to = parseInt(prompt("הקש את סוף הטווח:", 100));

do {
    startGame(from, to);
    playAgain = confirm("האם תרצה לשחק שוב?");
} while (playAgain);